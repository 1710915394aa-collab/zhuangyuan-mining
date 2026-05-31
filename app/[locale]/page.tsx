import Image from "next/image";
import { ArrowRight, CheckCircle2, MessageCircle, PackageCheck, ShieldCheck, Ship, Zap } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { MiningCalculator } from "@/components/mining-calculator";
import { MotionReveal } from "@/components/motion-reveal";
import { ProductCard } from "@/components/product-card";
import { StatusBadge } from "@/components/status-badge";
import { benefitIcons, dict, featuredProductIds, hostingIcons, products, shippingIcons, whatsappDisplay, whatsappNumber } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const t = dict[locale];

  return createMetadata({
    locale,
    title: `${t.brand} | ${t.tagline}`,
    description:
      locale === "zh"
        ? "中源科技提供 S19、S21、Whatsminer 矿机供应、矿机托管、全球发货和海外矿场部署服务。"
        : "Zhongyuan Technology supplies S19, S21 and Whatsminer ASIC miners with mining hosting, global shipping and stable supply chain support.",
    keywords: ["asic miner supplier", "mining hosting", "S21 miner", "S19k Pro", "bitcoin mining"]
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const t = dict[locale];
  const featured = products.filter((product) => featuredProductIds.includes(product.id));

  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden bg-black">
        <Image
          src="/images/mining-farm-hero.png"
          alt="Zhongyuan Technology ASIC mining farm"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-72"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0B0B0B_0%,rgba(11,11,11,0.88)_35%,rgba(11,11,11,0.32)_72%,rgba(11,11,11,0.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-950 to-transparent" />
        <div className="section-shell relative flex min-h-[88vh] items-center py-16">
          <MotionReveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-gold-500">{t.hero.eyebrow}</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-tight text-white md:text-7xl">
              {locale === "zh" ? t.hero.cnTitle : t.hero.title}
            </h1>
            <p className="mt-5 text-lg font-semibold text-gold-100 md:text-xl">{t.hero.subtitle}</p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300 md:text-lg">{t.hero.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={localizedPath(locale, "/contact")} icon={ArrowRight}>
                {t.common.getQuote}
              </ButtonLink>
              <ButtonLink href={`https://wa.me/${whatsappNumber}`} target="_blank" icon={MessageCircle} variant="secondary">
                {t.common.whatsappContact}: {whatsappDisplay}
              </ButtonLink>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {t.hero.stats.map(([value, label]) => (
                <div key={label} className="rounded-lg border border-gold-500/18 bg-black/45 p-4 backdrop-blur">
                  <p className="text-2xl font-semibold text-gold-500">{value}</p>
                  <p className="mt-1 text-xs text-stone-400">{label}</p>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-ink-950 py-16">
        <div className="section-shell">
          <SectionHeading title={t.sections.featured} subtitle={t.sections.featuredSub} />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((product, index) => (
              <MotionReveal key={product.id} delay={index * 0.05}>
                <ProductCard product={product} locale={locale} compact />
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gold-500/12 bg-black bg-industrial-grid bg-[length:44px_44px] py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <MotionReveal>
            <p className="text-sm font-semibold uppercase text-gold-500">Global Shipping</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">{t.sections.shipping}</h2>
            <p className="mt-4 text-lg text-stone-300">{t.sections.shippingSub}</p>
          </MotionReveal>
          <div className="grid gap-4 md:grid-cols-3">
            {t.shippingPoints.map((point, index) => {
              const Icon = shippingIcons[index] || Ship;
              return (
                <MotionReveal key={point} delay={index * 0.06}>
                  <div className="surface-panel rounded-lg p-5">
                    <Icon className="size-6 text-gold-500" aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-semibold text-white">{point}</h3>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <MotionReveal className="surface-panel rounded-lg p-6">
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-lg bg-gold-500/10 text-gold-500">
                <Zap className="size-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase text-gold-500">Electricity Price</p>
                <h2 className="text-3xl font-semibold text-white">$0.04/kWh</h2>
              </div>
            </div>
            <p className="mt-5 text-stone-300">{t.sections.hostingSub}</p>
            <div className="mt-6">
              <ButtonLink href={localizedPath(locale, "/hosting")} icon={ArrowRight}>
                {t.common.startHosting}
              </ButtonLink>
            </div>
          </MotionReveal>
          <div>
            <SectionHeading title={t.sections.hosting} subtitle={t.sections.hostingSub} compact />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {t.hostingPoints.map((point, index) => {
                const Icon = hostingIcons[index] || ShieldCheck;
                return (
                  <div key={point} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    <Icon className="size-5 text-gold-500" aria-hidden="true" />
                    <p className="mt-3 font-semibold text-white">{point}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16">
        <div className="section-shell">
          <SectionHeading title={t.sections.stock} subtitle="Available / Limited / Pre-order" />
          <div className="mt-8 overflow-hidden rounded-lg border border-white/10">
            <div className="hidden grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr] gap-4 border-b border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-stone-300 md:grid">
              <span>{t.common.model}</span>
              <span>{t.common.hashRate}</span>
              <span>{t.common.efficiency}</span>
              <span>{t.common.availability}</span>
            </div>
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="grid gap-3 border-b border-white/10 px-5 py-4 last:border-b-0 md:grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr] md:items-center"
              >
                <p className="font-semibold text-white">{product.model}</p>
                <p className="text-sm text-stone-300">{product.hashRate}</p>
                <p className="text-sm text-stone-300">{product.efficiency}</p>
                <StatusBadge status={product.availability} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-16">
        <div className="section-shell">
          <SectionHeading title={t.sections.calculator} subtitle={t.pages.calculatorSub} />
          <div className="mt-8">
            <MiningCalculator locale={locale} />
          </div>
        </div>
      </section>

      <section className="bg-black py-16">
        <div className="section-shell">
          <SectionHeading title={t.sections.why} subtitle={t.tagline} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.whyPoints.map((point, index) => {
              const Icon = benefitIcons[index] || CheckCircle2;
              return (
                <MotionReveal key={point} delay={index * 0.04}>
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                    <Icon className="size-6 text-gold-500" aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-semibold text-white">{point}</h3>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-16">
        <div className="section-shell">
          <SectionHeading title={t.sections.gallery} subtitle="Mining farm / warehouse / container / maintenance" />
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {t.gallery.map((item, index) => (
              <div key={item} className="group relative aspect-[4/5] overflow-hidden rounded-lg border border-gold-500/16 bg-black">
                <Image
                  src="/images/mining-farm-hero.png"
                  alt={item}
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="object-cover opacity-80 transition duration-500 group-hover:scale-105"
                  style={{ objectPosition: `${25 + index * 18}% center` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gold-500/15 bg-black py-16">
        <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">{t.sections.cta}</h2>
            <p className="mt-3 max-w-2xl text-stone-300">{t.sections.ctaSub}</p>
          </div>
          <ButtonLink href={`https://wa.me/${whatsappNumber}`} target="_blank" icon={MessageCircle}>
            WhatsApp: {whatsappDisplay}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}

function SectionHeading({ title, subtitle, compact = false }: { title: string; subtitle: string; compact?: boolean }) {
  return (
    <div className={compact ? "" : "max-w-3xl"}>
      <div className="mb-4 h-px w-24 gold-line" />
      <h2 className={`${compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"} font-semibold text-white`}>
        {title}
      </h2>
      <p className="mt-3 text-base leading-7 text-stone-400">{subtitle}</p>
    </div>
  );
}
