"use client";

import { MessageCircle, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { dict, products, whatsappNumber } from "@/lib/content";

type InquiryKind = "quote" | "hosting" | "contact";

type InquiryFormProps = {
  locale: Locale;
  kind: InquiryKind;
  defaultProduct?: string;
};

type FormState = "idle" | "submitting" | "success" | "error";

export function InquiryForm({ locale, kind, defaultProduct = "" }: InquiryFormProps) {
  const t = dict[locale];
  const [status, setStatus] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          kind,
          locale,
          source: "website",
          page_url: typeof window !== "undefined" ? window.location.href : ""
        })
      });
      const result = (await response.json().catch(() => null)) as { ok?: boolean } | null;

      if (!response.ok || !result?.ok) {
        throw new Error("request failed");
      }

      setStatus("success");
      setMessage(t.common.sent);
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage(t.common.failed);
    }
  }

  const intro =
    kind === "hosting" ? t.forms.hostingMessage : kind === "quote" ? t.forms.quoteMessage : t.forms.contactMessage;

  return (
    <form onSubmit={handleSubmit} className="surface-panel rounded-lg p-5">
      <p className="mb-5 text-sm leading-6 text-stone-400">{intro}</p>
      <input type="text" name="company_url" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t.common.name} name="name" required />
        <Field label={t.common.country} name="country" />
        {kind === "hosting" ? (
          <Field label={t.common.machineType} name="machine_type" />
        ) : (
          <label className="grid gap-2">
            <span className="text-sm font-medium text-stone-300">{t.common.product}</span>
            <select
              name="product"
              defaultValue={defaultProduct}
              className="min-h-12 rounded-lg border border-white/10 bg-black/50 px-3 text-sm text-white outline-none focus:border-gold-500/60"
            >
              <option value="">{locale === "zh" ? "请选择产品" : "Select product"}</option>
              {products.map((product) => (
                <option key={product.id} value={product.model}>
                  {product.model}
                </option>
              ))}
            </select>
          </label>
        )}
        <Field label={t.common.quantity} name="quantity" />
        <Field label={t.common.whatsapp} name="whatsapp" required />
        <Field label={t.common.email} name="email" type="email" />
        <label className="grid gap-2 sm:col-span-2">
          <span className="text-sm font-medium text-stone-300">{t.common.message}</span>
          <textarea
            name="message"
            rows={5}
            className="rounded-lg border border-white/10 bg-black/50 px-3 py-3 text-sm text-white outline-none focus:border-gold-500/60"
          />
        </label>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gold-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-gold-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Send className="size-4" aria-hidden="true" />
          {status === "submitting" ? t.common.sending : t.common.sendInquiry}
        </button>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-gold-500/35 px-5 py-3 text-sm font-semibold text-gold-100 hover:bg-gold-500/10"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>

      {message ? (
        <p className={`mt-4 text-sm ${status === "success" ? "text-emerald-300" : "text-red-300"}`}>{message}</p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-stone-300">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="min-h-12 rounded-lg border border-white/10 bg-black/50 px-3 text-sm text-white outline-none focus:border-gold-500/60"
      />
    </label>
  );
}

