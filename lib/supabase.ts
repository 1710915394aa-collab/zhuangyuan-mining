import { createClient } from "@supabase/supabase-js";

export type InquiryInsert = {
  kind: "quote" | "hosting" | "contact";
  name: string;
  country?: string;
  whatsapp?: string;
  email?: string;
  product?: string;
  machine_type?: string;
  quantity?: string;
  message?: string;
  locale?: string;
  source?: string;
  page_url?: string;
  user_agent?: string;
  referrer?: string;
};

export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    return null;
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}
