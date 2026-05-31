import Image from "next/image";
import { Boxes, Handshake, PackageCheck, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
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
    path: "/about",
    title: t.pages.aboutTitle,
    description: t.pages.aboutSub,
    keywords: ["Zhongyuan Technology", "ASIC miner supplier", "mining hosting", "global shipping"]
  });
}

export default async function AboutPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const t = dict[locale];
  const blocks = [
    [locale === "zh" ? "仓储与库存" : "Warehouse", Boxes],
    [locale === "zh" ? "矿场托管" : "Mining Farm", ShieldCheck],
    [locale === "zh" ? "全球物流" : "Logistics", PackageCheck],
    [locale === "zh" ? "售后支持" : "After-sales", Handshake]
  ] as const;

  return (
    <div className="bg-ink-950">
      <section className="section-shell grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase text-gold-500">About Us</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-white md:text-6xl">{t.pages.aboutTitle}</h1>
          <p className="mt-5 text-lg leading-8 text-stone-300">
            {locale === "zh"
              ? "中源科技是一家专业 ASIC 矿机供应商，为海外矿工、矿场、批发客户和投资客户提供矿机采购、托管部署、全球发货和售后支持。"
              : "Zhongyuan Technology is a professional ASIC miner supplier serving overseas miners, mining farms, wholesale customers and investment clients with procurement, hosting deployment, global shipping and after-sales support."}
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-gold-500/18">
          <Image src="/images/mining-farm-hero.png" alt="ASIC mining facility" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
      </section>

      <section className="border-y border-gold-500/12 bg-black py-14">
        <div className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map(([label, Icon], index) => (
            <MotionReveal key={label} delay={index * 0.04}>
              <div className="surface-panel rounded-lg p-5">
                <Icon className="size-6 text-gold-500" aria-hidden="true" />
                <h2 className="mt-5 text-lg font-semibold text-white">{label}</h2>
                <p className="mt-3 text-sm leading-6 text-stone-400">
                  {locale === "zh"
                    ? "围绕设备供应、部署和持续运营建立标准化服务流程。"
                    : "Standardized service workflow across equipment supply, deployment and ongoing operation."}
                </p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
