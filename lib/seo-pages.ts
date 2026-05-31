export type SeoLandingPage = {
  slug: string;
  type: "product" | "hosting";
  title: string;
  h1: string;
  description: string;
  keywords: string[];
  badge: string;
  primaryCta: string;
  secondaryCta: string;
  specs?: Array<[string, string]>;
  benefits: string[];
  faq: Array<[string, string]>;
};

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: "antminer-s21-200t",
    type: "product",
    title: "Antminer S21 200T Supplier | Daily ASIC Miner Price",
    h1: "Antminer S21 200T Supplier With Video Inspection",
    description:
      "Request today's Antminer S21 200T price from Zhongyuan Technology. Global shipping, warehouse proof, hashrate testing video and hosting options available.",
    keywords: ["Antminer S21 200T", "S21 miner", "ASIC miner supplier", "bitcoin miner price"],
    badge: "Antminer S21 200T",
    primaryCta: "Get S21 Today Price",
    secondaryCta: "Ask Hosting Option",
    specs: [
      ["Hashrate", "200 TH/s"],
      ["Power consumption", "3500 W"],
      ["Efficiency", "17.5 J/T"],
      ["Hosting", "Available"]
    ],
    benefits: [
      "Daily updated S21 spot price",
      "Video test before delivery",
      "Global shipping and packaging proof",
      "Hosting deployment available"
    ],
    faq: [
      ["Can you test the S21 before shipment?", "Yes. We can provide startup and hashrate testing video before delivery."],
      ["Do you support bulk S21 orders?", "Yes. We support single unit, batch orders and project allocations."]
    ]
  },
  {
    slug: "s19k-pro-120t",
    type: "product",
    title: "S19k Pro 120T Supplier | New & Used ASIC Miners",
    h1: "S19k Pro 120T ASIC Miner For Global Buyers",
    description:
      "Buy S19k Pro 120T miners with daily price quote, video inspection, global shipping and optional mining hosting from Zhongyuan Technology.",
    keywords: ["S19k Pro 120T", "Antminer S19k Pro", "used ASIC miner", "ASIC miner supplier"],
    badge: "S19k Pro 120T",
    primaryCta: "Get S19k Pro Price",
    secondaryCta: "WhatsApp Sales",
    specs: [
      ["Hashrate", "120 TH/s"],
      ["Power consumption", "2760 W"],
      ["Efficiency", "23 J/T"],
      ["Hosting", "Available"]
    ],
    benefits: [
      "Competitive price for batch buyers",
      "Used and new condition options",
      "Warehouse photo and video verification",
      "Suitable for low electricity hosting"
    ],
    faq: [
      ["Is S19k Pro still profitable?", "Profitability depends on BTC price, difficulty and electricity cost. Hosting can help control power cost."],
      ["Can you ship S19k Pro globally?", "Yes. We support global shipping with secure packaging."]
    ]
  },
  {
    slug: "whatsminer-m60s",
    type: "product",
    title: "Whatsminer M60S Supplier | Global ASIC Miner Shipping",
    h1: "Whatsminer M60S Supplier With Global Shipping",
    description:
      "Request a Whatsminer M60S quote with video testing, packaging proof, global logistics and mining hosting support.",
    keywords: ["Whatsminer M60S", "Whatsminer supplier", "ASIC miner global shipping", "bitcoin mining machine"],
    badge: "Whatsminer M60S",
    primaryCta: "Get Whatsminer Price",
    secondaryCta: "Check Stock",
    specs: [
      ["Hashrate", "186 TH/s"],
      ["Power consumption", "3441 W"],
      ["Efficiency", "18.5 J/T"],
      ["Hosting", "Available"]
    ],
    benefits: [
      "Whatsminer series procurement support",
      "Video inspection and warehouse proof",
      "Air and sea freight support",
      "Hosting deployment planning"
    ],
    faq: [
      ["Do you provide Whatsminer testing video?", "Yes. We can provide hashrate and machine status video before shipment."],
      ["Can Whatsminer units be hosted?", "Yes. Hosting is available depending on batch quantity and facility capacity."]
    ]
  },
  {
    slug: "asic-miner-hosting",
    type: "hosting",
    title: "ASIC Miner Hosting Service | From $0.04/kWh",
    h1: "ASIC Miner Hosting Service For Overseas Customers",
    description:
      "Deploy ASIC miners with Zhongyuan Technology hosting support. Electricity from $0.04/kWh, uptime monitoring, repair support and remote management.",
    keywords: ["ASIC miner hosting", "mining hosting", "bitcoin mining hosting", "low electricity mining"],
    badge: "ASIC Miner Hosting",
    primaryCta: "Start Hosting",
    secondaryCta: "Ask Hosting Cost",
    benefits: [
      "Electricity cost from $0.04/kWh",
      "24/7 monitoring and uptime support",
      "Installation and repair coordination",
      "Remote management for overseas miners"
    ],
    faq: [
      ["Can you host miners purchased from you?", "Yes. We can combine miner supply and hosting deployment."],
      ["Do you support remote management?", "Yes. Remote status updates and operation communication are available."]
    ]
  },
  {
    slug: "bitcoin-mining-hosting",
    type: "hosting",
    title: "Bitcoin Mining Hosting | Global Miner Deployment",
    h1: "Bitcoin Mining Hosting Partner For Global Buyers",
    description:
      "Bitcoin mining hosting service with low electricity cost, installation support, monitoring, maintenance and remote operation communication.",
    keywords: ["bitcoin mining hosting", "BTC mining hosting", "ASIC hosting service", "miner hosting cost"],
    badge: "Bitcoin Mining Hosting",
    primaryCta: "Get Hosting Plan",
    secondaryCta: "WhatsApp Hosting Team",
    benefits: [
      "Hosting plan for S21, S19 and Whatsminer",
      "Stable operation and maintenance support",
      "Deployment process from inquiry to online mining",
      "Suitable for overseas mining investors"
    ],
    faq: [
      ["What is the hosting process?", "Inquiry, shipment, installation and online mining."],
      ["Can you calculate hosting cost?", "Yes. Send machine model, quantity and preferred timeline for a quote."]
    ]
  }
];

export function getSeoLandingPage(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug);
}
