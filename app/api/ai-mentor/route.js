import { findFaqAnswer } from "@/lib/faqSearch";

export async function POST(request) {
  try {
    const body = await request.json();
    const message = body?.message?.trim();
    const country = body?.country ?? "all";

    if (!message) {
      return Response.json(
        { error: "A question is required." },
        { status: 400 },
      );
    }

    const result = findFaqAnswer(message, country);

    return Response.json(result);
  } catch {
    return Response.json(
      {
        found: false,
        reply:
          "AI Mentor is temporarily unavailable. Please try again in a moment.",
        suggestions: [],
      },
      { status: 500 },
    );
  }
}
