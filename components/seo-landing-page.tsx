import Image from "next/image";
import { ArrowRight, CheckCircle2, MessageCircle, PackageCheck, ShieldCheck, Video, Zap } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { MotionReveal } from "@/components/motion-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteUrl, whatsappNumber } from "@/lib/content";
import type { SeoLandingPage } from "@/lib/seo-pages";

export function SeoLandingPageView({ page }: { page: SeoLandingPage }) {
  const productJsonLd =
    page.type === "product"
      ? {
          "@context": "https://schema.org",
          "@type": "Product",
          name: page.badge,
          brand: "Zhongyuan Technology",
          description: page.description,
          url: `${siteUrl}/${page.slug}`,
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            description: "Quote-based daily ASIC miner price"
          }
        }
      : {
          "@context": "https://schema.org",
          "@type": "Service",
          name: page.badge,
          provider: {
            "@type": "Organization",
            name: "Zhongyuan Technology"
          },
          areaServed: "Worldwide",
          description: page.description,
          url: `${siteUrl}/${page.slug}`
        };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SiteHeader locale="en" />
      <main className="bg-ink-950">
        <section className="relative overflow-hidden bg-black">
          <Image src="/images/mining-farm-hero.png" alt={page.h1} fill priority sizes="100vw" className="object-cover opacity-50" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#0B0B0B_0%,rgba(11,11,11,0.9)_46%,rgba(11,11,11,0.42)_100%)]" />
          <div className="section-shell relative grid min-h-[74vh] items-center gap-8 py-16 lg:grid-cols-[1fr_0.8fr]">
            <MotionReveal>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-500">{page.badge}</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-white md:text-7xl">{page.h1}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">{page.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={`/en/contact?product=${encodeURIComponent(page.badge)}`} icon={ArrowRight}>
                  {page.primaryCta}
                </ButtonLink>
                <ButtonLink href={`https://wa.me/${whatsappNumber}`} target="_blank" icon={MessageCircle} variant="secondary">
                  {page.secondaryCta}
                </ButtonLink>
              </div>
            </MotionReveal>
            <MotionReveal delay={0.1} className="surface-panel rounded-lg p-5">
              <p className="text-sm font-semibold uppercase text-gold-500">Buyer assurance</p>
              <div className="mt-5 grid gap-3">
                {["Daily updated quote", "Video inspection before shipment", "Global shipping support", "Hosting available"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-3">
                    <CheckCircle2 className="size-5 text-gold-500" aria-hidden="true" />
                    <span className="text-sm font-semibold text-stone-100">{item}</span>
                  </div>
                ))}
              </div>
            </MotionReveal>
          </div>
        </section>

        <section className="section-shell grid gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-500">Details</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">Why buyers request a quote</h2>
            <div className="mt-7 grid gap-4">
              {page.benefits.map((benefit) => (
                <div key={benefit} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-gold-500" aria-hidden="true" />
                  <p className="text-sm leading-6 text-stone-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="surface-panel rounded-lg p-5">
            <h2 className="text-2xl font-semibold text-white">{page.type === "product" ? "Model specs" : "Hosting features"}</h2>
            <div className="mt-5 grid gap-3">
              {(page.specs || [
                ["Electricity cost", "From $0.04/kWh"],
                ["Uptime", "High uptime support"],
                ["Monitoring", "24/7 monitoring"],
                ["Remote management", "Available"]
              ]).map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0">
                  <span className="text-stone-400">{label}</span>
                  <span className="text-right font-semibold text-white">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["Testing", Video],
                ["Shipping", PackageCheck],
                ["Hosting", Zap]
              ].map(([label, Icon]) => (
                <div key={label as string} className="rounded-lg border border-gold-500/18 bg-gold-500/10 p-3">
                  <Icon className="size-5 text-gold-500" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold text-gold-100">{label as string}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-gold-500/12 bg-black py-16">
          <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-500">FAQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">Before you order</h2>
            </div>
            <div className="grid gap-4">
              {page.faq.map(([question, answer]) => (
                <details key={question} className="rounded-lg border border-white/10 bg-white/[0.035] p-5" open>
                  <summary className="cursor-pointer text-lg font-semibold text-white">{question}</summary>
                  <p className="mt-3 text-sm leading-6 text-stone-400">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell py-16">
          <div className="rounded-lg border border-gold-500/20 bg-gold-500/10 p-6 md:p-8">
            <h2 className="text-3xl font-semibold text-white">Request latest price and availability</h2>
            <p className="mt-3 max-w-2xl text-stone-300">
              Send your model, quantity, destination country and hosting requirements. Zhongyuan Technology will reply with stock, price and delivery plan.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`/en/contact?product=${encodeURIComponent(page.badge)}`} icon={ArrowRight}>
                Request Quote
              </ButtonLink>
              <ButtonLink href="/" icon={ArrowRight} variant="secondary">
                Back To Home
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale="en" />
    </>
  );
}
