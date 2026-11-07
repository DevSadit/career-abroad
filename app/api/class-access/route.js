import { NextResponse } from "next/server";
import recordings from "@/data/class_recordings.json";

export async function POST(request) {
  try {
    const { email } = await request.json();
    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

    const normalised = email.trim().toLowerCase();
    const enrolled = recordings.enrolled_emails.map((e) => e.toLowerCase());

    if (!enrolled.includes(normalised)) {
      return NextResponse.json({ error: "Not enrolled" }, { status: 403 });
    }

    // Strip storagePath from every resource before sending to client
    const courses = recordings.courses.map((course) => ({
      id: course.id,
      title: course.title,
      flag: course.flag,
      color: course.color,
      classes: course.classes.map((cls) => ({
        number: cls.number,
        title: cls.title,
        youtubeId: cls.youtubeId,
        resources: cls.resources.map(({ id, label, type }) => ({ id, label, type })),
      })),
    }));

    return NextResponse.json({ courses });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
