import { MessageCircle, Send } from "lucide-react";
import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/inquiry-form";
import { ButtonLink } from "@/components/button-link";
import { dict, whatsappDisplay, whatsappNumber } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ product?: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const t = dict[locale];

  return createMetadata({
    locale,
    path: "/contact",
    title: t.pages.contactTitle,
    description: t.pages.contactSub,
    keywords: ["ASIC miner quote", "WhatsApp ASIC supplier", "mining hosting contact", "global shipping miner"]
  });
}

export default async function ContactPage({ params, searchParams }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const t = dict[locale];
  const query = searchParams ? await searchParams : {};

  return (
    <div className="bg-ink-950">
      <section className="border-b border-gold-500/15 bg-black py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase text-gold-500">
              <Send className="size-4" aria-hidden="true" />
              Contact
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-white md:text-6xl">{t.pages.contactTitle}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-7 text-stone-300">{t.pages.contactSub}</p>
          </div>
          <div className="surface-panel rounded-lg p-6">
            <p className="text-sm font-semibold uppercase text-gold-500">WhatsApp</p>
            <p className="mt-3 text-3xl font-semibold text-white">{whatsappDisplay}</p>
            <div className="mt-5">
              <ButtonLink href={`https://wa.me/${whatsappNumber}`} target="_blank" icon={MessageCircle}>
                {t.common.whatsappContact}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-14">
        <InquiryForm locale={locale} kind="contact" defaultProduct={query.product || ""} />
      </section>
    </div>
  );
}
