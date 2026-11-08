import { NextResponse } from "next/server";
import recordings from "@/data/class_recordings.json";
import supabaseAdmin from "@/lib/supabaseAdmin";

export async function POST(request) {
  try {
    const { email } = await request.json();
    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

    const normalised = email.trim().toLowerCase();

    const { data, error } = await supabaseAdmin()
      .from("enrolled_students")
      .select("email, university_access, sop_access")
      .eq("email", normalised)
      .maybeSingle();

    if (error || !data) {
      return NextResponse.json({ error: "Not enrolled" }, { status: 403 });
    }

    // Filter by accessKey — each course type checked independently
    const courses = recordings.courses
      .filter((course) => {
        if (course.accessKey === "university") return data.university_access === true;
        if (course.accessKey === "sop") return data.sop_access === true;
        return false;
      })
      .map((course) => ({
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
