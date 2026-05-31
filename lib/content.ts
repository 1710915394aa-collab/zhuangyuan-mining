import {
  Award,
  Bolt,
  Boxes,
  Clock3,
  Globe2,
  Headphones,
  PackageCheck,
  ShieldCheck,
  Ship,
  Wrench
} from "lucide-react";
import type { Locale } from "./i18n";

export const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8613674067667";
export const whatsappDisplay = "+8613674067667";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.zhongyuan-tech.shop";

export type Availability = "Available" | "Limited" | "Pre-order";

export type Product = {
  id: string;
  category: "Antminer" | "Whatsminer";
  model: string;
  hashRate: string;
  power: string;
  efficiency: string;
  weight: string;
  noise: string;
  cooling: string;
  moq: string;
  availability: Availability;
  hostingAvailable: boolean;
  shipping: string;
  priceHint: string;
};

export const products: Product[] = [
  {
    id: "s19k-pro-120t",
    category: "Antminer",
    model: "S19k Pro 120T",
    hashRate: "120 TH/s",
    power: "2760 W",
    efficiency: "23 J/T",
    weight: "13.2 kg",
    noise: "75 dB",
    cooling: "Air cooling",
    moq: "1 unit / bulk",
    availability: "Available",
    hostingAvailable: true,
    shipping: "Global air and sea freight",
    priceHint: "Spot quote"
  },
  {
    id: "s21-200t",
    category: "Antminer",
    model: "S21 200T",
    hashRate: "200 TH/s",
    power: "3500 W",
    efficiency: "17.5 J/T",
    weight: "15.4 kg",
    noise: "76 dB",
    cooling: "Air cooling",
    moq: "1 unit / bulk",
    availability: "Available",
    hostingAvailable: true,
    shipping: "Global air and sea freight",
    priceHint: "Spot quote"
  },
  {
    id: "s21-xp",
    category: "Antminer",
    model: "S21 XP",
    hashRate: "270 TH/s",
    power: "3645 W",
    efficiency: "13.5 J/T",
    weight: "18.7 kg",
    noise: "76 dB",
    cooling: "Air cooling",
    moq: "Pre-order lot",
    availability: "Limited",
    hostingAvailable: true,
    shipping: "Priority international shipping",
    priceHint: "Allocation quote"
  },
  {
    id: "whatsminer-m60s",
    category: "Whatsminer",
    model: "Whatsminer M60S",
    hashRate: "186 TH/s",
    power: "3441 W",
    efficiency: "18.5 J/T",
    weight: "13.5 kg",
    noise: "75 dB",
    cooling: "Air cooling",
    moq: "1 unit / bulk",
    availability: "Available",
    hostingAvailable: true,
    shipping: "Global air and sea freight",
    priceHint: "Spot quote"
  },
  {
    id: "whatsminer-m66s",
    category: "Whatsminer",
    model: "Whatsminer M66S Hydro",
    hashRate: "298 TH/s",
    power: "5513 W",
    efficiency: "18.5 J/T",
    weight: "17.5 kg",
    noise: "50 dB",
    cooling: "Hydro cooling",
    moq: "Project-based",
    availability: "Pre-order",
    hostingAvailable: true,
    shipping: "Container and project logistics",
    priceHint: "Project quote"
  }
];

export const featuredProductIds = ["s19k-pro-120t", "s21-200t", "s21-xp", "whatsminer-m60s"];

export const navItems = [
  { key: "home", href: "" },
  { key: "products", href: "/products" },
  { key: "hosting", href: "/hosting" },
  { key: "calculator", href: "/mining-calculator" },
  { key: "about", href: "/about" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" }
] as const;

export const dict = {
  en: {
    brand: "Zhongyuan Technology",
    tagline: "Professional ASIC Miner Supplier & Mining Hosting Service",
    nav: {
      home: "Home",
      products: "Products",
      hosting: "Hosting",
      calculator: "Mining Calculator",
      about: "About Us",
      blog: "Blog",
      contact: "Contact"
    },
    common: {
      getQuote: "Get Quote",
      requestQuote: "Request Quote",
      whatsappContact: "WhatsApp Contact",
      startHosting: "Start Hosting",
      learnMore: "Learn More",
      viewProducts: "View Products",
      inStock: "In Stock",
      hostingAvailable: "Hosting Available",
      yes: "Yes",
      no: "No",
      availability: "Availability",
      shipping: "Shipping",
      moq: "MOQ",
      category: "Category",
      model: "Model",
      hashRate: "Hashrate",
      power: "Power Consumption",
      efficiency: "Efficiency",
      weight: "Weight",
      noise: "Noise",
      cooling: "Cooling",
      message: "Message",
      country: "Country",
      quantity: "Quantity",
      name: "Name",
      email: "Email",
      product: "Product",
      machineType: "Machine Type",
      whatsapp: "WhatsApp",
      sendInquiry: "Send Inquiry",
      sending: "Sending...",
      sent: "Inquiry sent. Our team will reply shortly.",
      failed: "Submission failed. Please contact us on WhatsApp."
    },
    hero: {
      eyebrow: "Global ASIC supply and hosting operations",
      title: "Professional ASIC Miner Supplier & Hosting Service",
      cnTitle: "专业矿机供应与矿机托管服务商",
      subtitle: "Global Shipping | Mining Hosting | Stable Supply Chain",
      description:
        "We supply S19, S21 and Whatsminer series equipment with quote-based procurement, hosting deployment and international logistics support for miners, farms and wholesale buyers.",
      stats: [
        ["$0.04/kWh", "Hosting electricity from"],
        ["24/7", "Maintenance and monitoring"],
        ["Global", "Shipping coverage"]
      ]
    },
    sections: {
      featured: "Popular ASIC Miners",
      featuredSub: "Quote-based equipment supply with hosting and global delivery options.",
      shipping: "Worldwide Shipping Support",
      shippingSub: "Asia / Europe / North America / Middle East / Africa",
      hosting: "Mining Hosting",
      hostingSub: "Electricity price from $0.04/kWh with stable operation and maintenance support.",
      stock: "Inventory Status",
      calculator: "Mining Calculator",
      why: "Why Choose Us",
      gallery: "Mining Farm Gallery",
      cta: "Ready To Start Mining?",
      ctaSub: "Send your target model, quantity and destination country. We will reply with a quote and deployment plan."
    },
    shippingPoints: ["Fast Delivery", "Secure Packaging", "Customs Support"],
    hostingPoints: ["Stable Operation", "24/7 Maintenance", "High Uptime", "Security Monitoring"],
    whyPoints: [
      "Global Shipping",
      "Competitive Pricing",
      "Stable Supply Chain",
      "Professional Hosting",
      "After-sales Support",
      "24/7 Service"
    ],
    gallery: ["Mining Farm", "Warehouse", "Container Deployment", "Equipment Maintenance"],
    forms: {
      quoteMessage: "Tell us your target model, quantity, destination country and hosting needs.",
      hostingMessage: "Tell us your machine type, quantity, country and preferred hosting timeline.",
      contactMessage: "Tell us what you need. We will reply with quote, stock and shipping details."
    },
    pages: {
      productsTitle: "ASIC Miner Products",
      productsSub: "Antminer and Whatsminer supply for retail, wholesale and hosted deployment.",
      hostingTitle: "Mining Hosting Service",
      hostingSub: "From $0.04/kWh electricity, engineered for stable long-term mining operation.",
      calculatorTitle: "Bitcoin Mining Profit Calculator",
      calculatorSub: "Estimate daily profit, monthly profit, electricity cost and ROI days.",
      aboutTitle: "About Zhongyuan Technology",
      aboutSub: "A professional ASIC miner supplier focused on procurement, hosting, logistics and after-sales support.",
      blogTitle: "Bitcoin Mining Insights",
      blogSub: "SEO articles for ASIC selection, hosting cost and mining profitability.",
      contactTitle: "Contact Zhongyuan Technology",
      contactSub: "Request a quote for miners, hosting, global shipping or bulk supply."
    }
  },
  zh: {
    brand: "中源科技",
    tagline: "专业 ASIC 矿机供应与矿机托管服务商",
    nav: {
      home: "首页",
      products: "产品",
      hosting: "矿机托管",
      calculator: "收益计算器",
      about: "关于我们",
      blog: "博客",
      contact: "联系我们"
    },
    common: {
      getQuote: "获取报价",
      requestQuote: "询价",
      whatsappContact: "WhatsApp 联系",
      startHosting: "开始托管",
      learnMore: "了解更多",
      viewProducts: "查看产品",
      inStock: "现货库存",
      hostingAvailable: "支持托管",
      yes: "是",
      no: "否",
      availability: "库存状态",
      shipping: "发货",
      moq: "起订量",
      category: "分类",
      model: "型号",
      hashRate: "算力",
      power: "功耗",
      efficiency: "能效",
      weight: "重量",
      noise: "噪音",
      cooling: "散热",
      message: "留言",
      country: "国家/地区",
      quantity: "数量",
      name: "姓名",
      email: "邮箱",
      product: "产品",
      machineType: "矿机类型",
      whatsapp: "WhatsApp",
      sendInquiry: "提交询盘",
      sending: "提交中...",
      sent: "询盘已提交，我们会尽快联系你。",
      failed: "提交失败，请直接通过 WhatsApp 联系我们。"
    },
    hero: {
      eyebrow: "全球矿机供应与托管部署",
      title: "Professional ASIC Miner Supplier & Hosting Service",
      cnTitle: "专业矿机供应与矿机托管服务商",
      subtitle: "Global Shipping | Mining Hosting | Stable Supply Chain",
      description:
        "中源科技供应 S19、S21 与 Whatsminer 系列矿机，面向海外矿工、矿场、批发客户和投资客户，提供设备采购、矿机托管与全球物流支持。",
      stats: [
        ["$0.04/kWh", "托管电价低至"],
        ["24/7", "运维与监控"],
        ["Global", "全球发货支持"]
      ]
    },
    sections: {
      featured: "热门矿机产品",
      featuredSub: "按实时库存与批发需求报价，支持托管部署与全球发货。",
      shipping: "全球发货支持",
      shippingSub: "亚洲 / 欧洲 / 北美 / 中东 / 非洲",
      hosting: "矿机托管",
      hostingSub: "电价低至 $0.04/kWh，提供稳定运行、维护和安全监控。",
      stock: "库存状态",
      calculator: "挖矿收益计算器",
      why: "为什么选择我们",
      gallery: "矿场图库",
      cta: "Ready To Start Mining?",
      ctaSub: "发送目标型号、采购数量和目的地国家，我们将提供报价、发货和托管方案。"
    },
    shippingPoints: ["快速交付", "安全包装", "清关支持"],
    hostingPoints: ["稳定运行", "24/7 运维", "高在线率", "安全监控"],
    whyPoints: ["全球发货", "有竞争力的价格", "稳定供应链", "专业托管", "售后支持", "24/7 服务"],
    gallery: ["矿场", "仓库", "集装箱部署", "设备维护"],
    forms: {
      quoteMessage: "请填写目标型号、数量、目的地国家以及是否需要托管。",
      hostingMessage: "请填写矿机类型、数量、所在国家和预计托管时间。",
      contactMessage: "请告诉我们你的采购或托管需求，我们会回复报价、库存和运输信息。"
    },
    pages: {
      productsTitle: "ASIC 矿机产品",
      productsSub: "供应 Antminer 与 Whatsminer 系列，支持零售、批发与托管部署。",
      hostingTitle: "矿机托管服务",
      hostingSub: "电价低至 $0.04/kWh，为长期稳定挖矿运行而设计。",
      calculatorTitle: "比特币挖矿收益计算器",
      calculatorSub: "估算每日收益、月收益、电费成本和回本周期。",
      aboutTitle: "关于中源科技",
      aboutSub: "专注 ASIC 矿机供应、托管、物流与售后支持的专业服务商。",
      blogTitle: "比特币挖矿资讯",
      blogSub: "围绕矿机选择、托管成本和挖矿收益的 SEO 内容。",
      contactTitle: "联系中源科技",
      contactSub: "咨询矿机、托管、全球发货或批量采购报价。"
    }
  }
} satisfies Record<Locale, Record<string, unknown>>;

export type BlogArticle = {
  slug: string;
  publishedAt: string;
  readingTime: Record<Locale, string>;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  keywords: string[];
  content: Record<Locale, string[]>;
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "best-bitcoin-miner-2026",
    publishedAt: "2026-02-18",
    readingTime: { en: "6 min read", zh: "6 分钟阅读" },
    title: { en: "Best Bitcoin Miner 2026", zh: "2026 年高效比特币矿机选择指南" },
    excerpt: {
      en: "How to compare S21, S19k Pro and Whatsminer models when buying ASIC miners in 2026.",
      zh: "从能效、库存、托管和物流角度比较 S21、S19k Pro 与 Whatsminer。"
    },
    keywords: ["bitcoin mining", "asic miner supplier", "S21 miner", "S19k Pro"],
    content: {
      en: [
        "The best Bitcoin miner in 2026 is not only the unit with the highest hashrate. Buyers should compare efficiency, available stock, warranty condition, hosting compatibility and delivery timeline.",
        "S21 series miners are preferred for lower joules per terahash, while S19k Pro can remain attractive when the acquisition price is lower and electricity cost is controlled.",
        "For large buyers, the right decision usually combines equipment quote, shipping plan, hosting electricity price and after-sales process."
      ],
      zh: [
        "2026 年选择比特币矿机，不能只看算力。买家需要同时评估能效、库存、质保情况、是否适合托管以及交付周期。",
        "S21 系列在能效方面更有优势，而 S19k Pro 如果采购价格合理，并且电价可控，仍然适合部分批量部署场景。",
        "对大客户来说，最优方案通常不是单台机器价格最低，而是设备报价、运输方案、托管电价和售后流程的组合最优。"
      ]
    }
  },
  {
    slug: "s21-vs-s19k-pro",
    publishedAt: "2026-03-06",
    readingTime: { en: "5 min read", zh: "5 分钟阅读" },
    title: { en: "S21 vs S19k Pro: Which Miner Fits Your Farm?", zh: "S21 与 S19k Pro 对比：哪款更适合你的矿场？" },
    excerpt: {
      en: "A practical comparison of hashrate, power consumption, efficiency and ROI for two popular Antminer models.",
      zh: "从算力、功耗、能效和回本周期角度对比两款热门 Antminer。"
    },
    keywords: ["S21 miner", "S19k Pro", "bitcoin mining profit"],
    content: {
      en: [
        "S21 is built for higher efficiency and stronger long-term competitiveness. It is often a better fit for buyers who plan to operate through multiple difficulty cycles.",
        "S19k Pro can be a strong choice when the price gap is significant or when a customer wants to scale capacity with lower upfront capital.",
        "Before purchasing, calculate daily power cost, hosting cost and estimated revenue under conservative BTC price assumptions."
      ],
      zh: [
        "S21 的核心优势是能效更高，更适合计划跨多个难度周期长期运行的客户。",
        "S19k Pro 的优势在于采购成本可能更低，当价差明显或客户希望降低前期投入时，仍然有部署价值。",
        "采购前建议用保守 BTC 价格假设计算每日电费、托管成本和预估收益。"
      ]
    }
  },
  {
    slug: "mining-hosting-cost-guide",
    publishedAt: "2026-03-22",
    readingTime: { en: "7 min read", zh: "7 分钟阅读" },
    title: { en: "Mining Hosting Cost Guide", zh: "矿机托管成本指南" },
    excerpt: {
      en: "Understand electricity price, maintenance, uptime and security before choosing a mining hosting service.",
      zh: "选择矿机托管前，需要理解电价、运维、在线率与安全监控。"
    },
    keywords: ["mining hosting", "mining hosting cost", "bitcoin mining"],
    content: {
      en: [
        "Hosting cost is usually driven by electricity price, facility reliability, maintenance scope and uptime. A low quote is only valuable when machines stay online safely.",
        "Professional hosting should include rack deployment, network setup, temperature control, 24/7 monitoring and clear incident response.",
        "For international miners, hosting also reduces the operational burden of finding land, power contracts, technicians and local logistics."
      ],
      zh: [
        "托管成本主要由电价、场地稳定性、运维范围和在线率决定。低价格只有在机器稳定在线时才真正有价值。",
        "专业托管应包含上架部署、网络配置、温控、24/7 监控以及清晰的故障响应机制。",
        "对海外矿工来说，托管可以减少自建场地、电力合同、技术人员和本地物流的运营压力。"
      ]
    }
  },
  {
    slug: "asic-profitability-guide",
    publishedAt: "2026-04-10",
    readingTime: { en: "6 min read", zh: "6 分钟阅读" },
    title: { en: "ASIC Profitability Guide", zh: "ASIC 矿机收益计算指南" },
    excerpt: {
      en: "A simple framework for estimating Bitcoin mining profit, electricity cost and ROI days.",
      zh: "用简单框架估算比特币挖矿收益、电费成本与回本周期。"
    },
    keywords: ["ASIC profitability", "bitcoin mining profit", "asic miner supplier"],
    content: {
      en: [
        "ASIC profitability changes with BTC price, network difficulty, block rewards, pool fees and electricity cost. Treat every calculator as an estimate, not a guarantee.",
        "A useful first pass is daily revenue minus daily power cost. Then compare the machine price with daily profit to estimate ROI days.",
        "The best purchase decision includes a buffer for difficulty growth, delivery time and possible downtime."
      ],
      zh: [
        "ASIC 收益会随 BTC 价格、全网难度、区块奖励、矿池费率和电价变化。任何计算器都应作为估算，而不是收益保证。",
        "初步估算可以用每日收入减去每日电费，再用机器价格除以每日利润估算回本天数。",
        "更稳健的采购决策需要考虑难度增长、运输时间和可能的停机时间。"
      ]
    }
  }
];

export const benefitIcons = [Globe2, Award, Boxes, Wrench, ShieldCheck, Headphones];
export const shippingIcons = [Ship, PackageCheck, ShieldCheck];
export const hostingIcons = [Bolt, Wrench, Clock3, ShieldCheck];
