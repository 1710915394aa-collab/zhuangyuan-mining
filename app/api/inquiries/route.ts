import { NextResponse } from "next/server";
import { getSupabaseAdmin, type InquiryInsert } from "@/lib/supabase";

const allowedKinds = new Set(["quote", "hosting", "contact"]);

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

    const payload: InquiryInsert = {
      kind,
      name: clean(body.name),
      country: clean(body.country),
      whatsapp: clean(body.whatsapp),
      email: clean(body.email),
      product: clean(body.product),
      machine_type: clean(body.machine_type),
      quantity: clean(body.quantity),
      message: clean(body.message),
      locale: clean(body.locale),
      source: clean(body.source) || "website"
    };

    if (!payload.name || (!payload.whatsapp && !payload.email)) {
      return NextResponse.json({ ok: false, error: "Name and contact are required" }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    if (!supabase) {
      return NextResponse.json({ ok: true, stored: false });
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
