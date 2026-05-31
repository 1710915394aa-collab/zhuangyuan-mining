import { Activity, Bolt, Clock3, ShieldCheck, Wrench } from "lucide-react";
import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/inquiry-form";
import { MotionReveal } from "@/components/motion-reveal";
import { dict } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const t = dict[locale];

  return createMetadata({
    locale,
    path: "/hosting",
    title: t.pages.hostingTitle,
    description: t.pages.hostingSub,
    keywords: ["mining hosting", "bitcoin mining hosting", "low cost electricity", "ASIC hosting"]
  });
}

export default async function HostingPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const t = dict[locale];
  const advantages = [
    [locale === "zh" ? "低成本电力" : "Low Cost Electricity", Bolt],
    [locale === "zh" ? "稳定运行" : "Stable Operation", Activity],
    [locale === "zh" ? "高在线率" : "High Uptime", Clock3],
    [locale === "zh" ? "24/7 运维" : "24/7 Maintenance", Wrench],
    [locale === "zh" ? "安全监控" : "Security Monitoring", ShieldCheck]
  ] as const;

  return (
    <div className="bg-ink-950">
      <section className="border-b border-gold-500/15 bg-black py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-gold-500">Mining Hosting</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-white md:text-6xl">{t.pages.hostingTitle}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-7 text-stone-300">{t.pages.hostingSub}</p>
          </div>
          <div className="surface-panel rounded-lg p-6">
            <p className="text-sm font-semibold uppercase text-gold-500">Electricity Price</p>
            <p className="mt-3 text-5xl font-semibold text-white">From $0.04/kWh</p>
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-8 py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-semibold text-white">{locale === "zh" ? "托管优势" : "Hosting Advantages"}</h2>
          <div className="mt-6 grid gap-4">
            {advantages.map(([label, Icon], index) => (
              <MotionReveal key={label} delay={index * 0.04}>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                  <Icon className="size-5 text-gold-500" aria-hidden="true" />
                  <p className="mt-3 font-semibold text-white">{label}</p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-3xl font-semibold text-white">{locale === "zh" ? "提交托管需求" : "Hosting Inquiry"}</h2>
          <InquiryForm locale={locale} kind="hosting" />
        </div>
      </section>
    </div>
  );
}
