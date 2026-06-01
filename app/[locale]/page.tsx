import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  Clock3,
  Globe2,
  Headphones,
  MessageCircle,
  MonitorCheck,
  ShieldCheck,
  Ship,
  TestTube2,
  Video,
  Wrench,
  Zap
} from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { MotionReveal } from "@/components/motion-reveal";
import { products, siteUrl, whatsappDisplay, whatsappNumber } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: string }>;
};

const hotMinerIds = ["s21-200t", "s19k-pro-120t", "whatsminer-m60s", "s21-xp"];
const trustIcons = [Boxes, TestTube2, Clock3, Globe2, Zap, Headphones];
const hostingIcons = [Zap, ShieldCheck, MonitorCheck, Wrench, Globe2];
const realSiteImages = [
  "/images/stock/warehouse-pallets.jpg",
  "/images/stock/warehouse-aisle.jpg",
  "/images/stock/logistics-boxes.jpg"
];
const verificationVideos = [
  "/videos/stock/data-center-racks.mp4",
  "/videos/stock/network-switches.mp4",
  "/videos/stock/server-operation.mp4",
  "/videos/stock/server-room-walkthrough.mp4"
];

const homeCopy = {
  en: {
    metaTitle: "Reliable ASIC Miner Supplier & Hosting Partner | Zhongyuan Technology",
    metaDescription:
      "Zhongyuan Technology supplies new and used ASIC miners with daily updated prices, global shipping, mining hosting and video inspection before shipment.",
    brandEyebrow: "Zhongyuan Technology",
    headline: "Reliable ASIC Miner Supplier & Hosting Partner",
    subheadline: "New & Used ASIC Miners - Global Shipping - Mining Hosting - Video Inspection Before Shipment",
    getPrice: "Get Today Price",
    whatsapp: "WhatsApp Us",
    startHosting: "Start Hosting",
    viewAllMiners: "View All Miners",
    latestPrice: "Get Latest Price",
    quote: "Quote",
    yes: "Yes",
    no: "No",
    mediaLabel: "Facility media",
    heroBadges: ["Daily Updated Price", "Global Shipping", "Hosting Available", "Video Test Before Delivery"],
    heroStats: [
      ["Today quote", "S21 / S19 / M60"],
      ["Inspection", "Video before shipping"],
      ["Delivery", "Global logistics"],
      ["Hosting", "From $0.04/kWh"]
    ],
    verificationTitle: "Buyer-ready verification workflow",
    verificationText: "Quote confirmation, real machine video, packaging proof and logistics tracking before delivery.",
    trust: {
      eyebrow: "Trust",
      title: "Why Choose Zhongyuan",
      subtitle:
        "A conversion-focused supply process built for overseas buyers who need real stock, proof, logistics and responsive communication.",
      items: [
        ["Real warehouse in China", "Stock handling, packaging and shipment coordination from China-based operations."],
        ["Professional ASIC testing team", "Startup checks, hashrate verification and video evidence before delivery."],
        ["Daily updated miner pricing", "Quote-based pricing for S21, S19k Pro, Whatsminer and bulk allocations."],
        ["Global logistics support", "Air, sea and project shipment support for Asia, Europe, Middle East and Africa."],
        ["Hosting deployment service", "Rack deployment, monitoring and remote operation support for hosted miners."],
        ["After-sales technical support", "Technical communication for setup, firmware, troubleshooting and spare parts."]
      ]
    },
    proofPhotos: [
      ["Warehouse photos", "Ready stock, batch sorting and inventory confirmation"],
      ["Shipment photos", "Secure packaging, pallet loading and export preparation"],
      ["Team photos", "Sales, testing and logistics coordination team"],
      ["Miner testing photos", "Power-on testing, hashrate screen and video verification"]
    ],
    miners: {
      eyebrow: "Hot ASIC Miners",
      title: "Daily Price For In-Demand Models",
      subtitle: "Modern ASIC miner cards designed for fast B2B inquiry flow. Request the latest price before stock changes.",
      hashrate: "Hashrate",
      power: "Power consumption",
      hosting: "Hosting available"
    },
    hosting: {
      eyebrow: "Mining Hosting",
      title: "Professional ASIC Miner Hosting",
      subtitle:
        "Deploy machines into managed mining facilities with low electricity cost, monitoring, maintenance and remote management support.",
      features: [
        ["Electricity cost", "From $0.04/kWh"],
        ["Uptime", "High uptime operation"],
        ["Monitoring", "24/7 status tracking"],
        ["Repair support", "On-site maintenance support"],
        ["Remote management", "Remote access and reporting"]
      ],
      processTitle: "Deployment process",
      flow: [
        ["Inquiry", "Confirm machine model, quantity, hosting country and target start date."],
        ["Shipment", "Arrange shipment to the hosting facility with tracking and documentation."],
        ["Installation", "Install, connect, configure and test machines before full operation."],
        ["Online Mining", "Monitor online hashrate, uptime and maintenance requirements remotely."]
      ]
    },
    shipments: {
      eyebrow: "Recent Shipments",
      title: "Shipment Proof For Real Buyers",
      subtitle:
        "Professional delivery and logistics examples for overseas mining customers, with order-specific inspection proof available during quotation.",
      items: [
        ["40x S21", "Kazakhstan", "Air shipment with pre-delivery testing"],
        ["120x S19k Pro", "Ethiopia", "Bulk packing and hosting deployment support"],
        ["60x Whatsminer", "UAE", "Warehouse video inspection and export logistics"]
      ]
    },
    videos: {
      eyebrow: "Facility Video",
      title: "Professional Mining & Hosting Environment",
      subtitle: "Clean facility visuals for overseas buyers. Real machine inspection and shipment videos can be provided during the quotation process.",
      items: [
        ["Data center environment", "High-density rack operation and controlled facility visuals"],
        ["Network infrastructure", "Switching, monitoring and connectivity environment"],
        ["Hosting operation", "Continuous server operation for managed mining deployment"],
        ["Facility walkthrough", "Professional infrastructure view for hosting customers"]
      ]
    },
    faq: {
      eyebrow: "FAQ",
      title: "Buyer Questions",
      subtitle: "Clear answers for ASIC miner buyers and hosting customers before they request a quote.",
      items: [
        ["Are miners tested before shipment?", "Yes, all miners are tested and video verified."],
        ["Can you provide hosting?", "Yes."],
        ["Which payment methods do you support?", "USDT / Bank Transfer."],
        ["Do you support global shipping?", "Yes."]
      ]
    },
    finalCta: {
      eyebrow: "Fast Quote",
      title: "Ready to buy miners or start hosting?",
      text: "Send model, quantity, destination country and hosting needs. We will reply with today price, stock status and delivery plan."
    }
  },
  zh: {
    metaTitle: "可靠的 ASIC 矿机供应与托管服务商 | 中源科技",
    metaDescription: "中源科技供应全新与二手 ASIC 矿机，提供每日更新报价、全球发货、矿机托管和发货前视频验机服务。",
    brandEyebrow: "中源科技",
    headline: "可靠的 ASIC 矿机供应与托管合作伙伴",
    subheadline: "全新与二手 ASIC 矿机 - 全球发货 - 矿机托管 - 发货前视频验机",
    getPrice: "获取今日报价",
    whatsapp: "WhatsApp 联系",
    startHosting: "开始托管",
    viewAllMiners: "查看全部矿机",
    latestPrice: "获取最新价格",
    quote: "询价",
    yes: "是",
    no: "否",
    mediaLabel: "实景素材",
    heroBadges: ["每日更新价格", "全球发货", "支持托管", "发货前视频测试"],
    heroStats: [
      ["今日报价", "S21 / S19 / M60"],
      ["验机", "发货前视频确认"],
      ["交付", "全球物流支持"],
      ["托管", "低至 $0.04/kWh"]
    ],
    verificationTitle: "面向买家的验机确认流程",
    verificationText: "报价确认、真实机器视频、包装证明和物流跟踪，降低海外客户采购风险。",
    trust: {
      eyebrow: "信任背书",
      title: "为什么选择中源科技",
      subtitle: "为海外买家建立的高转化供应流程，重点解决真实库存、验机证明、物流交付和及时沟通问题。",
      items: [
        ["中国真实仓库", "基于中国仓储进行库存处理、包装和发货协调。"],
        ["专业 ASIC 测试团队", "发货前提供开机检查、算力验证和视频证明。"],
        ["每日更新矿机价格", "根据 S21、S19k Pro、Whatsminer 和批量采购需求实时报价。"],
        ["全球物流支持", "支持亚洲、欧洲、中东、非洲等市场的空运、海运和项目物流。"],
        ["矿机托管部署", "支持上架部署、运行监控和远程运维沟通。"],
        ["售后技术支持", "提供安装、固件、故障排查和备件相关技术沟通。"]
      ]
    },
    proofPhotos: [
      ["仓库照片", "现货库存、批次分拣和库存确认"],
      ["发货照片", "安全包装、托盘装载和出口准备"],
      ["团队照片", "销售、测试和物流协同团队"],
      ["矿机测试照片", "开机测试、算力界面和视频验机"]
    ],
    miners: {
      eyebrow: "热门 ASIC 矿机",
      title: "热门型号每日更新报价",
      subtitle: "为 B2B 询盘设计的矿机产品卡。库存和价格变化较快，建议先获取最新报价。",
      hashrate: "算力",
      power: "功耗",
      hosting: "支持托管"
    },
    hosting: {
      eyebrow: "矿机托管",
      title: "专业 ASIC 矿机托管服务",
      subtitle: "将矿机部署到托管矿场，提供低电价、运行监控、维护支持和远程管理沟通。",
      features: [
        ["电费成本", "低至 $0.04/kWh"],
        ["在线率", "高在线率运行支持"],
        ["监控", "24/7 状态跟踪"],
        ["维修支持", "现场维护支持"],
        ["远程管理", "远程访问与报告"]
      ],
      processTitle: "托管部署流程",
      flow: [
        ["询盘", "确认矿机型号、数量、托管国家和预计上线时间。"],
        ["运输", "安排矿机运输到托管场地，并提供物流跟踪和资料。"],
        ["安装", "完成上架、接线、配置和测试，确认正式运行。"],
        ["上线挖矿", "远程跟踪算力、在线率和维护需求。"]
      ]
    },
    shipments: {
      eyebrow: "近期发货",
      title: "给真实买家的发货证明",
      subtitle: "面向海外矿机客户的专业交付与物流展示。具体订单的验机和发货证明可在询价沟通时提供。",
      items: [
        ["40 台 S21", "哈萨克斯坦", "空运发货，发货前完成测试"],
        ["120 台 S19k Pro", "埃塞俄比亚", "批量包装，并支持托管部署"],
        ["60 台 Whatsminer", "阿联酋", "仓库视频验机和出口物流支持"]
      ]
    },
    videos: {
      eyebrow: "矿场视频",
      title: "专业矿场与托管环境",
      subtitle: "面向海外买家的高质感矿场视觉展示。真实验机和发货视频可在询价沟通时单独提供。",
      items: [
        ["数据中心环境", "高密度机柜运行与稳定机房环境展示"],
        ["网络基础设施", "交换设备、监控系统和联网环境展示"],
        ["托管运行环境", "面向矿机托管的连续运行基础设施"],
        ["矿场环境走访", "为托管客户展示更专业的基础设施形象"]
      ]
    },
    faq: {
      eyebrow: "常见问题",
      title: "买家常见问题",
      subtitle: "在客户询价前，清晰回答矿机采购和托管客户最关心的问题。",
      items: [
        ["矿机发货前会测试吗？", "会，所有矿机都会测试，并可提供视频确认。"],
        ["你们可以提供矿机托管吗？", "可以。"],
        ["支持哪些付款方式？", "支持 USDT / 银行转账。"],
        ["支持全球发货吗？", "支持。"]
      ]
    },
    finalCta: {
      eyebrow: "快速报价",
      title: "准备采购矿机或开始托管？",
      text: "发送型号、数量、目的地国家和托管需求，我们会回复今日价格、库存状态和交付方案。"
    }
  }
} as const;

export async function generateMetadata({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const copy = homeCopy[locale];

  return createMetadata({
    locale,
    title: copy.metaTitle,
    description: copy.metaDescription,
    keywords: [
      "ASIC miner supplier",
      "Antminer S21 200T",
      "S19k Pro 120T",
      "Whatsminer M60S",
      "mining hosting",
      "bitcoin mining hosting"
    ]
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const copy = homeCopy[locale];
  const hotMiners = hotMinerIds
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean)
    .map((product) => product!);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zhongyuan Technology",
    url: siteUrl,
    description: copy.metaDescription,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: whatsappDisplay,
      contactType: "sales",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Chinese"]
    },
    sameAs: [`https://wa.me/${whatsappNumber}`]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zhongyuan Technology",
    url: siteUrl,
    inLanguage: locale === "zh" ? "zh-CN" : "en-US",
    publisher: {
      "@type": "Organization",
      name: "Zhongyuan Technology"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.items.map(([question, answer]) => ({
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="relative isolate overflow-hidden bg-black">
        <Image
          src="/images/mining-farm-hero.png"
          alt="Zhongyuan Technology ASIC miner warehouse and mining facility"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-58"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#0B0B0B_0%,rgba(11,11,11,0.94)_38%,rgba(11,11,11,0.58)_72%,rgba(11,11,11,0.35)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-ink-950 to-transparent" />
        <div className="section-shell grid min-h-[88vh] items-center gap-10 py-16 lg:grid-cols-[1.04fr_0.96fr]">
          <MotionReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-500">{copy.brandEyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-white md:text-7xl">{copy.headline}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300 md:text-xl">{copy.subheadline}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={localizedPath(locale, "/contact")} icon={ArrowRight}>
                {copy.getPrice}
              </ButtonLink>
              <ButtonLink href={`https://wa.me/${whatsappNumber}`} target="_blank" icon={MessageCircle} variant="secondary">
                {copy.whatsapp}
              </ButtonLink>
              <ButtonLink href={localizedPath(locale, "/hosting")} icon={Zap} variant="secondary">
                {copy.startHosting}
              </ButtonLink>
            </div>
            <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {copy.heroBadges.map((badge) => (
                <div key={badge} className="flex min-h-16 items-center gap-3 rounded-lg border border-gold-500/25 bg-black/55 p-3 backdrop-blur">
                  <CheckCircle2 className="size-5 shrink-0 text-gold-500" aria-hidden="true" />
                  <span className="text-sm font-semibold text-stone-100">{badge}</span>
                </div>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12} className="hidden lg:block">
            <div className="surface-panel rounded-lg p-5">
              <div className="grid grid-cols-2 gap-3">
                {copy.heroStats.map(([title, value]) => (
                  <div key={title} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                    <p className="text-xs uppercase text-stone-500">{title}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg border border-gold-500/25 bg-gold-500/10 p-4">
                <p className="text-sm font-semibold text-gold-100">{copy.verificationTitle}</p>
                <p className="mt-2 text-sm leading-6 text-stone-300">{copy.verificationText}</p>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-ink-950 py-16">
        <div className="section-shell">
          <SectionHeading eyebrow={copy.trust.eyebrow} title={copy.trust.title} subtitle={copy.trust.subtitle} />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {copy.trust.items.map(([title, text], index) => {
              const Icon = trustIcons[index] || ShieldCheck;
              return (
                <MotionReveal key={title} delay={index * 0.04}>
                  <div className="h-full rounded-lg border border-white/10 bg-white/[0.035] p-5">
                    <Icon className="size-6 text-gold-500" aria-hidden="true" />
                    <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-stone-400">{text}</p>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {copy.proofPhotos.map(([title, caption], index) => (
              <PhotoProof
                key={title}
                title={title}
                caption={caption}
                position={20 + index * 20}
                mediaLabel={copy.mediaLabel}
                src={realSiteImages[index % realSiteImages.length]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gold-500/12 bg-black bg-industrial-grid bg-[length:44px_44px] py-16">
        <div className="section-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow={copy.miners.eyebrow} title={copy.miners.title} subtitle={copy.miners.subtitle} />
            <ButtonLink href={localizedPath(locale, "/products")} icon={ArrowRight} variant="secondary">
              {copy.viewAllMiners}
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {hotMiners.map((product, index) => (
              <MotionReveal key={product.id} delay={index * 0.05}>
                <article className="surface-panel flex h-full flex-col rounded-lg p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase text-gold-500">{product.category}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{product.model}</h3>
                    </div>
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                      {copy.quote}
                    </span>
                  </div>
                  <dl className="mt-6 grid gap-3 text-sm">
                    <Spec label={copy.miners.hashrate} value={product.hashRate} />
                    <Spec label={copy.miners.power} value={product.power} />
                    <Spec label={copy.miners.hosting} value={product.hostingAvailable ? copy.yes : copy.no} />
                  </dl>
                  <div className="mt-auto pt-6">
                    <ButtonLink href={`${localizedPath(locale, "/contact")}?product=${encodeURIComponent(product.model)}`} icon={ArrowRight} className="w-full">
                      {copy.latestPrice}
                    </ButtonLink>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <MotionReveal>
            <SectionHeading eyebrow={copy.hosting.eyebrow} title={copy.hosting.title} subtitle={copy.hosting.subtitle} />
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {copy.hosting.features.map(([title, value], index) => {
                const Icon = hostingIcons[index] || ShieldCheck;
                return (
                  <div key={title} className="rounded-lg border border-white/10 bg-black/35 p-4">
                    <Icon className="size-5 text-gold-500" aria-hidden="true" />
                    <p className="mt-3 text-sm text-stone-400">{title}</p>
                    <p className="mt-1 font-semibold text-white">{value}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-7">
              <ButtonLink href={localizedPath(locale, "/hosting")} icon={Zap}>
                {copy.startHosting}
              </ButtonLink>
            </div>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <div className="surface-panel rounded-lg p-5">
              <p className="text-sm font-semibold uppercase text-gold-500">{copy.hosting.processTitle}</p>
              <div className="mt-6 grid gap-4">
                {copy.hosting.flow.map(([step, text], index) => (
                  <div key={step} className="grid grid-cols-[44px_1fr] gap-4">
                    <div className="grid size-11 place-items-center rounded-lg border border-gold-500/35 bg-gold-500/10 text-sm font-semibold text-gold-100">
                      {index + 1}
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                      <h3 className="font-semibold text-white">{step}</h3>
                      <p className="mt-1 text-sm text-stone-400">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      <section className="bg-black py-16">
        <div className="section-shell">
          <SectionHeading eyebrow={copy.shipments.eyebrow} title={copy.shipments.title} subtitle={copy.shipments.subtitle} />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {copy.shipments.items.map(([batch, country, text], index) => (
              <MotionReveal key={batch} delay={index * 0.05}>
                <article className="surface-panel overflow-hidden rounded-lg">
                  <div className="relative aspect-[16/10]">
                    <Image src={realSiteImages[index % realSiteImages.length]} alt={`${batch} shipment to ${country}`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" style={{ objectPosition: `${30 + index * 20}% center` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <Ship className="absolute bottom-4 left-4 size-6 text-gold-500" aria-hidden="true" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-white">
                      {batch} <span aria-hidden="true">-&gt;</span> {country}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-stone-400">{text}</p>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gold-500/12 bg-ink-950 py-16">
        <div className="section-shell">
          <SectionHeading eyebrow={copy.videos.eyebrow} title={copy.videos.title} subtitle={copy.videos.subtitle} />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {copy.videos.items.map(([title, text], index) => (
              <div key={title} className="rounded-lg border border-white/10 bg-black/40 p-4">
                <div className="relative aspect-video overflow-hidden rounded-lg border border-gold-500/18 bg-black">
                  <video
                    className="h-full w-full object-cover"
                    src={verificationVideos[index]}
                    aria-label={title}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
                </div>
                <h3 className="mt-4 font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow={copy.faq.eyebrow} title={copy.faq.title} subtitle={copy.faq.subtitle} />
          <div className="grid gap-4">
            {copy.faq.items.map(([question, answer]) => (
              <details key={question} className="rounded-lg border border-white/10 bg-white/[0.035] p-5" open>
                <summary className="cursor-pointer text-lg font-semibold text-white">{question}</summary>
                <p className="mt-3 text-sm leading-6 text-stone-400">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-16">
        <div className="section-shell rounded-lg border border-gold-500/20 bg-[linear-gradient(135deg,rgba(212,175,55,0.14),rgba(255,255,255,0.03))] p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-gold-500">{copy.finalCta.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">{copy.finalCta.title}</h2>
              <p className="mt-4 max-w-2xl text-stone-300">{copy.finalCta.text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <ButtonLink href={localizedPath(locale, "/contact")} icon={ArrowRight}>
                {copy.getPrice}
              </ButtonLink>
              <ButtonLink href={`https://wa.me/${whatsappNumber}`} target="_blank" icon={MessageCircle} variant="secondary">
                {copy.whatsapp}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-500">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-stone-400">{subtitle}</p>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0">
      <dt className="text-stone-400">{label}</dt>
      <dd className="text-right font-semibold text-stone-100">{value}</dd>
    </div>
  );
}

function PhotoProof({
  title,
  caption,
  position,
  mediaLabel,
  src
}: {
  title: string;
  caption: string;
  position: number;
  mediaLabel: string;
  src: string;
}) {
  return (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-lg border border-gold-500/16 bg-black">
      <Image
        src={src}
        alt={title}
        fill
        sizes="(min-width: 768px) 25vw, 100vw"
        className="object-cover opacity-76 transition duration-500 group-hover:scale-105"
        style={{ objectPosition: `${position}% center` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-black/70 px-3 py-1 text-xs font-semibold text-gold-100">
          <Video className="size-3" aria-hidden="true" />
          {mediaLabel}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-xs leading-5 text-stone-300">{caption}</p>
      </div>
    </div>
  );
}
