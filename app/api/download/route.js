import { NextResponse } from "next/server";
import recordings from "@/data/class_recordings.json";
import supabaseAdmin from "@/lib/supabaseAdmin";

export async function POST(request) {
  try {
    const { email, resourceId } = await request.json();
    if (!email || !resourceId) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const normalised = email.trim().toLowerCase();

    const { data: student, error: dbError } = await supabaseAdmin()
      .from("enrolled_students")
      .select("email")
      .eq("email", normalised)
      .maybeSingle();

    if (dbError || !student) {
      return NextResponse.json({ error: "Not enrolled" }, { status: 403 });
    }

    // Find the resource storagePath by id
    let storagePath = null;
    for (const course of recordings.courses) {
      for (const cls of course.classes) {
        const resource = cls.resources.find((r) => r.id === resourceId);
        if (resource) { storagePath = resource.storagePath; break; }
      }
      if (storagePath) break;
    }

    if (!storagePath) {
      return NextResponse.json({ error: "Resource not found" }, { status: 404 });
    }

    const { data, error } = await supabaseAdmin().storage
      .from("course-resources")
      .createSignedUrl(storagePath, 60);

    if (error) {
      return NextResponse.json({ error: "Could not generate download link" }, { status: 500 });
    }

    return NextResponse.json({ url: data.signedUrl });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
