const DEFAULT_GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_API_BASE =
  "https://generativelanguage.googleapis.com/v1beta/models";
const CACHE_TTL_MS = 1000 * 60 * 15;
const responseCache = new Map();

const SYSTEM_INSTRUCTION = `
You are MentorBOT, a warm and knowledgeable study-abroad mentor helping Bangladeshi students apply to universities in France, Italy, Belgium, Hungary, and Estonia.

Your job in every response:
1. Pick the single best FAQ candidate that answers the visitor's question.
2. Write a short, friendly, natural reply based only on that candidate's facts.

Tone and style:
- Talk like a helpful senior who has been through the process — warm, direct, encouraging.
- Never say "according to the FAQ", "based on the provided answer", "as per the FAQ", or any phrase that sounds like you're reading a document.
- Do not repeat or paraphrase the FAQ question title as your opening line.
- Use "you" naturally (e.g. "You'll need to…", "The good news is…", "Keep in mind that…").
- If the user writes in Bangla, reply fully in Bangla with the same warm tone.
- Aim for 2–4 short sentences. Be concise — do not pad the answer.

Accuracy rules:
- Only use facts explicitly stated in the chosen candidate's answer.
- Never invent deadlines, tuition amounts, visa outcomes, or guarantees.
- If no candidate clearly answers the question, set selectedIndex to -1 and leave reply empty.
`.trim();

export class GeminiRateLimitError extends Error {
  constructor(message = "Gemini free-tier rate limit reached.") {
    super(message);
    this.name = "GeminiRateLimitError";
    this.status = 429;
  }
}

function getGeminiApiKey() {
  return (
    process.env.GOOGLE_API_KEY?.trim() ||
    process.env.GEMINI_API_KEY?.trim() ||
    ""
  );
}

export function hasGeminiConfig() {
  return Boolean(getGeminiApiKey());
}

function formatHistory(history) {
  if (!Array.isArray(history) || history.length === 0) {
    return "No recent conversation.";
  }

  return history
    .slice(-4)
    .map((item) => {
      const role = item.role === "assistant" ? "MentorBOT" : "Visitor";
      const text = item.text?.trim() || "";
      const sourceQuestion = item.sourceQuestion?.trim();

      if (!text) return null;

      return sourceQuestion
        ? `${role}: ${text} (FAQ topic: ${sourceQuestion})`
        : `${role}: ${text}`;
    })
    .filter(Boolean)
    .join("\n");
}

function normalizeText(text) {
  return (text ?? "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenSet(text) {
  return new Set(
    normalizeText(text)
      .split(" ")
      .filter((token) => token.length > 2),
  );
}

function getTokenOverlapRatio(leftText, rightText) {
  const leftTokens = tokenSet(leftText);
  const rightTokens = tokenSet(rightText);

  if (!leftTokens.size || !rightTokens.size) return 0;

  let overlap = 0;

  leftTokens.forEach((token) => {
    if (rightTokens.has(token)) {
      overlap += 1;
    }
  });

  return overlap / Math.min(leftTokens.size, rightTokens.size);
}

function extractGeminiText(payload) {
  return (
    payload?.candidates
      ?.flatMap((candidate) => candidate?.content?.parts ?? [])
      .map((part) => part?.text ?? "")
      .join(" ")
      .trim() || null
  );
}

function stripCodeFence(text) {
  return (text ?? "")
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
}

function parseJson(text) {
  const cleaned = stripCodeFence(text);

  try {
    return JSON.parse(cleaned);
  } catch {
    const objectMatch = cleaned.match(/\{[\s\S]*\}/);

    if (!objectMatch) return null;

    try {
      return JSON.parse(objectMatch[0]);
    } catch {
      return null;
    }
  }
}

function cleanConversationalReply(text) {
  return (text ?? "")
    .replace(
      /^(according to the faq|according to the provided faq answer|based on the faq|based on the provided answer|from the faq content|as per the faq|the faq (says|states|mentions))[,:-]?\s*/i,
      "",
    )
    .replace(
      /\b(the\s+)?faq\s+(says?|states?|mentions?|indicates?|explains?|notes?)\b[,:]?\s*/gi,
      "",
    )
    .replace(/\s{2,}/g, " ")
    .trim();
}

function shouldRejectReply(reply, faqAnswer) {
  const cleanedReply = cleanConversationalReply(reply);

  if (!cleanedReply) return true;

  if (
    /according to the faq|based on the faq|provided answer|faq content|as per the faq/i.test(
      cleanedReply,
    )
  ) {
    return true;
  }

  // Reject near-verbatim copies of the FAQ answer (lowered threshold for stricter check)
  return getTokenOverlapRatio(cleanedReply, faqAnswer) >= 0.92;
}

function getCacheKey({ userQuestion, activeCountry, candidates }) {
  return JSON.stringify({
    question: normalizeText(userQuestion),
    activeCountry,
    candidates: candidates.map((candidate) => ({
      country: candidate.country,
      question: normalizeText(candidate.question),
    })),
  });
}

function getCachedValue(cacheKey) {
  const cached = responseCache.get(cacheKey);

  if (!cached) return null;
  if (Date.now() - cached.savedAt > CACHE_TTL_MS) {
    responseCache.delete(cacheKey);
    return null;
  }

  return cached.value;
}

function setCachedValue(cacheKey, value) {
  responseCache.set(cacheKey, {
    savedAt: Date.now(),
    value,
  });
}

function buildPrompt({ userQuestion, activeCountry, history, candidates }) {
  const serializedCandidates = candidates
    .map(
      (candidate, index) => `
Candidate ${index}
Country: ${candidate.country}
Question: ${candidate.question}
Answer: ${candidate.answer}
`.trim(),
    )
    .join("\n\n");

  return `
Visitor question:
${userQuestion}

Active country context:
${activeCountry || "unknown"}

Recent conversation:
${formatHistory(history)}

FAQ candidates:
${serializedCandidates}

Return JSON only in this exact shape:
{
  "selectedIndex": 0,
  "reply": "short natural answer"
}

Use -1 for selectedIndex if no candidate clearly answers the question.
If selectedIndex is -1, return an empty string for reply.
`.trim();
}

export async function selectFaqReplyWithGemini({
  userQuestion,
  activeCountry,
  history,
  candidates,
}) {
  const apiKey = getGeminiApiKey();

  if (!apiKey || !Array.isArray(candidates) || candidates.length === 0) {
    return null;
  }

  const cacheKey = getCacheKey({
    userQuestion,
    activeCountry,
    candidates,
  });
  const cachedValue = getCachedValue(cacheKey);

  if (cachedValue) {
    return cachedValue;
  }

  const model = process.env.GEMINI_MODEL?.trim() || DEFAULT_GEMINI_MODEL;
  const endpoint = `${GEMINI_API_BASE}/${encodeURIComponent(
    model,
  )}:generateContent?key=${encodeURIComponent(apiKey)}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      system_instruction: {
        parts: [
          {
            text: SYSTEM_INSTRUCTION,
          },
        ],
      },
      contents: [
        {
          role: "user",
          parts: [
            {
              text: buildPrompt({
                userQuestion,
                activeCountry,
                history,
                candidates,
              }),
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.65,
        topP: 0.9,
        maxOutputTokens: 400,
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            selectedIndex: { type: "INTEGER" },
            reply: { type: "STRING" },
          },
          required: ["selectedIndex", "reply"],
        },
        thinkingConfig: {
          thinkingBudget: 0,
        },
      },
    }),
  });

  if (response.status === 429) {
    throw new GeminiRateLimitError();
  }

  if (!response.ok) {
    throw new Error(`Gemini selection failed with status ${response.status}`);
  }

  const payload = await response.json();
  const parsed = parseJson(extractGeminiText(payload));
  const selectedIndex = Number(parsed?.selectedIndex);

  if (!Number.isInteger(selectedIndex)) {
    return null;
  }

  if (selectedIndex < 0 || selectedIndex >= candidates.length) {
    const noResult = {
      found: false,
    };

    setCachedValue(cacheKey, noResult);
    return noResult;
  }

  const candidate = candidates[selectedIndex];
  const cleanedReply = cleanConversationalReply(parsed?.reply ?? "");

  if (shouldRejectReply(cleanedReply, candidate.answer)) {
    return {
      found: false,
    };
  }

  const result = {
    found: true,
    reply: cleanedReply,
    candidate,
  };

  setCachedValue(cacheKey, result);
  return result;
}
