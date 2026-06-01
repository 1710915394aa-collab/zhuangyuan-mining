import { NextResponse } from "next/server";
import { getSupabaseAdmin, type InquiryInsert } from "@/lib/supabase";

const allowedKinds = new Set(["quote", "hosting", "contact"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 1200) : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const kind = clean(body.kind) as InquiryInsert["kind"];

    if (!allowedKinds.has(kind)) {
      return NextResponse.json({ ok: false, error: "Invalid inquiry type" }, { status: 400 });
    }

    if (clean(body.company_url)) {
      return NextResponse.json({ ok: true, stored: false });
    }

    const email = clean(body.email);
    const whatsapp = clean(body.whatsapp);

    if (email && !emailPattern.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email address" }, { status: 400 });
    }

    const payload: InquiryInsert = {
      kind,
      name: clean(body.name),
      country: clean(body.country),
      whatsapp,
      email,
      product: clean(body.product),
      machine_type: clean(body.machine_type),
      quantity: clean(body.quantity),
      message: clean(body.message),
      locale: clean(body.locale),
      source: clean(body.source) || "website",
      page_url: clean(body.page_url),
      user_agent: request.headers.get("user-agent")?.slice(0, 500) || "",
      referrer: request.headers.get("referer")?.slice(0, 500) || ""
    };

    if (!payload.name || (!payload.whatsapp && !payload.email)) {
      return NextResponse.json({ ok: false, error: "Name and contact are required" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    if (!supabase) {
      return NextResponse.json({ ok: false, error: "Inquiry storage is not configured", stored: false }, { status: 503 });
    }

    const { error } = await supabase.from("inquiries").insert(payload);

    if (error) {
      return NextResponse.json({ ok: false, error: "Database insert failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true, stored: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
