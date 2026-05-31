import { Calculator } from "lucide-react";
import { notFound } from "next/navigation";
import { MiningCalculator } from "@/components/mining-calculator";
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
    path: "/mining-calculator",
    title: t.pages.calculatorTitle,
    description: t.pages.calculatorSub,
    keywords: ["bitcoin mining profit", "mining calculator", "ASIC profitability", "ROI days"]
  });
}

export default async function CalculatorPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const t = dict[locale];

  return (
    <div className="bg-ink-950">
      <section className="border-b border-gold-500/15 bg-black py-16">
        <div className="section-shell">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase text-gold-500">
            <Calculator className="size-4" aria-hidden="true" />
            Mining Calculator
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-white md:text-6xl">{t.pages.calculatorTitle}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-stone-300">{t.pages.calculatorSub}</p>
        </div>
      </section>
      <section className="section-shell py-14">
        <MiningCalculator locale={locale} />
      </section>
    </div>
  );
}
