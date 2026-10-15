import { NextResponse } from "next/server";

export async function POST(req) {
  const { email } = await req.json();

  const allowed = (process.env.ENROLLED_EMAILS || "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);

  const driveUrl = process.env.RESOURCE_DRIVE_URL || "";

  if (!email || !allowed.includes(email.trim().toLowerCase())) {
    return NextResponse.json({ error: "Not enrolled" }, { status: 403 });
  }

  return NextResponse.json({ url: driveUrl });
}
