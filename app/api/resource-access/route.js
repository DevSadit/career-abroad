import { NextResponse } from "next/server";
import { drive_url } from "@/data/resource_access.json";
import supabaseAdmin from "@/lib/supabaseAdmin";

export async function POST(req) {
  try {
    const { email } = await req.json();
    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

    const normalised = email.trim().toLowerCase();

    const { data, error } = await supabaseAdmin()
      .from("enrolled_students")
      .select("email, resource_access")
      .eq("email", normalised)
      .maybeSingle();

    if (error || !data || !data.resource_access) {
      return NextResponse.json({ error: "Not enrolled" }, { status: 403 });
    }

    return NextResponse.json({ url: drive_url });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
