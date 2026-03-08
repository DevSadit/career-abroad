import { findFaqAnswer } from "@/lib/faqSearch";

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

    const result = findFaqAnswer(message, { country, history });

    return Response.json(result);
  } catch {
    return Response.json(
      {
        found: false,
        reply:
          "MentorBOT is temporarily unavailable. Please try again in a moment.",
        suggestions: [],
      },
      { status: 500 },
    );
  }
}
