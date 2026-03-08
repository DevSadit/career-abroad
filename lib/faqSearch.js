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
  "আমাকে",
  "আমি",
  "একটু",
  "এটা",
  "এই",
  "ওই",
  "কি",
  "কী",
  "কিভাবে",
  "কোন",
  "কোথায়",
  "কোথায়",
  "জন্য",
  "নিয়ে",
  "নিয়ে",
  "বলুন",
  "বলেন",
  "সম্পর্কে",
]);

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

function scoreEntry(query, entry) {
  const queryText = normalizeText(query);
  const questionText = normalizeText(entry.question);
  const answerText = normalizeText(entry.answer);
  const queryTokens = tokenize(query);
  const questionTokens = tokenize(entry.question);
  const answerTokens = tokenize(entry.answer);

  const exactQuestionMatch =
    queryText.length >= 4 && questionText.includes(queryText);
  const exactAnswerMatch = queryText.length >= 4 && answerText.includes(queryText);
  const questionOverlap = countOverlap(queryTokens, questionTokens);
  const answerOverlap = countOverlap(queryTokens, answerTokens);

  const score =
    (exactQuestionMatch ? 30 : 0) +
    (exactAnswerMatch ? 18 : 0) +
    questionOverlap * 8 +
    answerOverlap * 3;

  return {
    score,
    exactQuestionMatch,
    exactAnswerMatch,
    questionOverlap,
    answerOverlap,
  };
}

export function findFaqAnswer(query, country = "all") {
  const cleanedQuery = query?.trim();

  if (!cleanedQuery || cleanedQuery.length < 3) {
    return {
      found: false,
      reply:
        "Please ask a more specific question. You can ask about applications, scholarships, SOP, visas, or documents.",
      suggestions: [],
    };
  }

  const entries = getFaqEntries(country);

  const rankedEntries = entries
    .map((entry) => ({
      entry,
      match: scoreEntry(cleanedQuery, entry),
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
    reply: bestMatch.entry.answer,
    country: bestMatch.entry.countryName,
    matchedQuestion: bestMatch.entry.question,
    sourceHref: bestMatch.entry.href,
    sourceLabel: `${bestMatch.entry.countryName} FAQ`,
  };
}
