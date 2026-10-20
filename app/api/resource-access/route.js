import { NextResponse } from "next/server";
import config from "@/data/resource_access.json";

export async function POST(req) {
  const { email } = await req.json();

  const allowed = config.enrolled_emails.map((e) => e.trim().toLowerCase());

  if (!email || !allowed.includes(email.trim().toLowerCase())) {
    return NextResponse.json({ error: "Not enrolled" }, { status: 403 });
  }

  return NextResponse.json({ url: config.drive_url });
}
