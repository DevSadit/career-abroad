import {
  GeminiRateLimitError,
  hasGeminiConfig,
  selectFaqReplyWithGemini,
} from "@/lib/geminiMentorbot";
import { findFaqAnswer, retrieveFaqCandidates } from "@/lib/faqSearch";

export async function POST(request) {
  try {
    const body = await request.json();
    const message = body?.message?.trim();
    const country = body?.country ?? "all";
    const history = Array.isArray(body?.history) ? body.history.slice(-6) : [];

    if (!message) {
      return Response.json(
        { error: "A question is required." },
        { status: 400 },
      );
    }

    const candidateSearch = retrieveFaqCandidates(message, { country, history });

    if (!candidateSearch.validQuery) {
      return Response.json({
        found: false,
        activeCountry: candidateSearch.activeCountry,
        reply: candidateSearch.reply,
        suggestions: candidateSearch.suggestions,
      });
    }

    let result = null;

    try {
      const geminiResult = await selectFaqReplyWithGemini({
        userQuestion: message,
        activeCountry: candidateSearch.activeCountry,
        history,
        candidates: candidateSearch.candidates,
      });

      if (geminiResult?.found) {
        result = {
          found: true,
          activeCountry: candidateSearch.activeCountry,
          reply: geminiResult.reply,
          country: geminiResult.candidate.country,
          matchedQuestion: geminiResult.candidate.question,
          sourceHref: geminiResult.candidate.href,
          sourceLabel: geminiResult.candidate.sourceLabel,
          aiRewritten: true,
        };
      } else if (geminiResult && !geminiResult.found) {
        result = {
          found: false,
          activeCountry: candidateSearch.activeCountry,
          reply:
            "Hmm, I couldn’t find a clear answer for that. Try rephrasing your question — or check the full FAQ below for more detail.",
          suggestions: candidateSearch.suggestions,
        };
      }
    } catch (error) {
      if (error instanceof GeminiRateLimitError) {
        result = {
          found: false,
          activeCountry: candidateSearch.activeCountry,
          reply:
            "I’m a bit overwhelmed right now — too many questions at once! Give it a minute and try again, or browse the FAQ below.",
          suggestions: candidateSearch.suggestions,
          aiLimited: true,
        };
      } else {
        console.error("MentorBOT Gemini selection failed:", error);
      }
    }

    if (!result) {
      if (hasGeminiConfig()) {
        result = {
          found: false,
          activeCountry: candidateSearch.activeCountry,
          reply:
            "I’m not sure I have a good answer for that. Try asking in a different way, or check the full FAQ — it might be covered there.",
          suggestions: candidateSearch.suggestions,
        };
      } else {
        result = findFaqAnswer(message, { country, history });
      }
    }

    if (!result.found && candidateSearch.suggestions?.length) {
      result.suggestions = candidateSearch.suggestions;
    }

    return Response.json(result);
  } catch {
    return Response.json(
      {
        found: false,
        reply:
          "Something went wrong on my end. Please try again in a moment.",
        suggestions: [],
      },
      { status: 500 },
    );
  }
}
