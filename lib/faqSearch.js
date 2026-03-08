import { getFaqEntries } from "@/lib/faqRegistry";

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "about",
  "for",
  "from",
  "how",
  "i",
  "in",
  "is",
  "me",
  "of",
  "on",
  "or",
  "please",
  "tell",
  "the",
  "to",
  "what",
  "when",
  "where",
  "which",
  "with",
  "you",
  "\u0986\u09ae\u09bf",
  "\u098f\u0995\u099f\u09c1",
  "\u098f\u099f\u09be",
  "\u098f\u0987",
  "\u0993\u0987",
  "\u0995\u09bf",
  "\u0995\u09c0",
  "\u0995\u09bf\u09ad\u09be\u09ac\u09c7",
  "\u0995\u09cb\u09a8",
  "\u099c\u09a8\u09cd\u09af",
  "\u09a8\u09bf\u09df\u09c7",
  "\u09ac\u09b2\u09c1\u09a8",
  "\u09ac\u09b2\u09c7\u09a8",
  "\u09b8\u09ae\u09cd\u09aa\u09b0\u09cd\u0995\u09c7",
]);

const COUNTRY_ALIASES = {
  france: "france",
  french: "france",
  italy: "italy",
  italian: "italy",
  belgium: "belgium",
  belgian: "belgium",
  hungary: "hungary",
  hungarian: "hungary",
  estonia: "estonia",
  estonian: "estonia",
};

function normalizeText(text) {
  return (text ?? "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text) {
  return normalizeText(text)
    .split(" ")
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
}

function countOverlap(queryTokens, targetTokens) {
  if (!queryTokens.length || !targetTokens.length) return 0;

  const targetSet = new Set(targetTokens);

  return queryTokens.filter((token) => targetSet.has(token)).length;
}

function normalizeCountryScope(country) {
  if (!country || country === "all") return "all";

  const normalized = normalizeText(country);

  if (COUNTRY_ALIASES[normalized]) {
    return COUNTRY_ALIASES[normalized];
  }

  return Object.values(COUNTRY_ALIASES).includes(normalized)
    ? normalized
    : "all";
}

function extractCountryScope(text) {
  const normalized = normalizeText(text);

  for (const [alias, country] of Object.entries(COUNTRY_ALIASES)) {
    if (normalized.includes(alias)) {
      return country;
    }
  }

  return null;
}

function isLikelyFollowUp(query) {
  const normalized = normalizeText(query);
  const tokens = tokenize(query);

  if (!tokens.length) return false;

  if (tokens.length <= 4) return true;

  return [
    "what about",
    "how about",
    "and ",
    "then ",
    "there ",
    "that ",
    "this ",
    "visa",
    "fee",
    "cost",
    "tuition",
    "document",
    "documents",
    "scholarship",
    "application",
    "\u0986\u09b0",
    "\u09a4\u09be\u09b9\u09b2\u09c7",
    "\u09ad\u09bf\u09b8\u09be",
    "\u09b8\u09cd\u0995\u09b2\u09be\u09b0\u09b6\u09bf\u09aa",
    "\u09a1\u0995\u09c1\u09ae\u09c7\u09a8\u09cd\u099f",
  ].some((pattern) => normalized.includes(pattern));
}

function buildHistoryContext(query, history) {
  if (!Array.isArray(history) || history.length === 0) {
    return { memoryContext: "", memoryCountry: "all" };
  }

  const recentHistory = [...history].slice(-6).reverse();
  const recentAssistant = recentHistory.find(
    (item) => item.role === "assistant" && (item.sourceQuestion || item.text),
  );
  const recentUser = recentHistory.find(
    (item) => item.role === "user" && item.text,
  );
  const recentCountry =
    recentHistory
      .map((item) => {
        const sourceCountry = item.sourceCountry
          ? normalizeCountryScope(item.sourceCountry)
          : null;

        if (sourceCountry && sourceCountry !== "all") {
          return sourceCountry;
        }

        return (
          extractCountryScope(item.text) || extractCountryScope(item.sourceQuestion)
        );
      })
      .find((country) => country && country !== "all") ?? "all";

  if (!isLikelyFollowUp(query)) {
    return { memoryContext: "", memoryCountry: recentCountry };
  }

  const contextParts = [];

  if (recentAssistant?.sourceCountry) {
    contextParts.push(recentAssistant.sourceCountry);
  }

  if (recentAssistant?.sourceQuestion) {
    contextParts.push(recentAssistant.sourceQuestion);
  }

  if (recentUser?.text) {
    contextParts.push(recentUser.text);
  }

  return {
    memoryContext: contextParts.join(" "),
    memoryCountry: recentCountry,
  };
}

function resolveSearchCountry(query, requestedCountry, history) {
  const explicitCountry = extractCountryScope(query);

  if (explicitCountry) return explicitCountry;

  const normalizedRequested = normalizeCountryScope(requestedCountry);

  if (normalizedRequested !== "all") {
    return normalizedRequested;
  }

  const { memoryCountry } = buildHistoryContext(query, history);

  return memoryCountry;
}

function scoreEntry(query, entry, memoryContext = "") {
  const queryText = normalizeText(query);
  const questionText = normalizeText(entry.question);
  const answerText = normalizeText(entry.answer);
  const queryTokens = tokenize(query);
  const questionTokens = tokenize(entry.question);
  const answerTokens = tokenize(entry.answer);
  const memoryTokens = tokenize(memoryContext);

  const exactQuestionMatch =
    queryText.length >= 4 && questionText.includes(queryText);
  const exactAnswerMatch = queryText.length >= 4 && answerText.includes(queryText);
  const questionOverlap = countOverlap(queryTokens, questionTokens);
  const answerOverlap = countOverlap(queryTokens, answerTokens);
  const memoryQuestionOverlap = countOverlap(memoryTokens, questionTokens);
  const memoryAnswerOverlap = countOverlap(memoryTokens, answerTokens);

  const score =
    (exactQuestionMatch ? 30 : 0) +
    (exactAnswerMatch ? 18 : 0) +
    questionOverlap * 8 +
    answerOverlap * 3 +
    memoryQuestionOverlap * 2 +
    memoryAnswerOverlap;

  return {
    score,
    exactQuestionMatch,
    exactAnswerMatch,
    questionOverlap,
    answerOverlap,
  };
}

export function findFaqAnswer(query, options = {}) {
  const cleanedQuery = query?.trim();
  const requestedCountry = options.country ?? "all";
  const history = Array.isArray(options.history) ? options.history : [];

  if (!cleanedQuery || cleanedQuery.length < 3) {
    return {
      found: false,
      activeCountry: normalizeCountryScope(requestedCountry),
      reply:
        "Please ask a more specific question. You can ask about applications, scholarships, SOP, visas, or documents.",
      suggestions: [],
    };
  }

  const activeCountry = resolveSearchCountry(cleanedQuery, requestedCountry, history);
  const { memoryContext } = buildHistoryContext(cleanedQuery, history);
  const entries = getFaqEntries(activeCountry);

  const rankedEntries = entries
    .map((entry) => ({
      entry,
      match: scoreEntry(cleanedQuery, entry, memoryContext),
    }))
    .sort((left, right) => right.match.score - left.match.score);

  const bestMatch = rankedEntries[0];

  const isConfident =
    bestMatch &&
    (bestMatch.match.exactQuestionMatch ||
      bestMatch.match.exactAnswerMatch ||
      bestMatch.match.score >= 20 ||
      (bestMatch.match.questionOverlap >= 2 && bestMatch.match.score >= 12));

  if (!isConfident) {
    return {
      found: false,
      activeCountry,
      reply:
        "I could not find a confident answer from the FAQ. Try rephrasing the question or selecting a specific country. If the answer is not in the FAQ, please contact us directly.",
      suggestions: rankedEntries
        .filter(({ match }) => match.score > 0)
        .slice(0, 3)
        .map(({ entry }) => ({
          question: entry.question,
          country: entry.countryName,
          href: entry.href,
        })),
    };
  }

  return {
    found: true,
    activeCountry,
    reply: bestMatch.entry.answer,
    country: bestMatch.entry.countryName,
    matchedQuestion: bestMatch.entry.question,
    sourceHref: bestMatch.entry.href,
    sourceLabel: `${bestMatch.entry.countryName} FAQ`,
  };
}
