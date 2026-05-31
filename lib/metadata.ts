import type { Metadata } from "next";
import type { Locale } from "./i18n";
import { siteUrl } from "./content";

type MetadataInput = {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  keywords?: string[];
};

export function createMetadata({ locale, path = "", title, description, keywords = [] }: MetadataInput): Metadata {
  const normalizedPath = path ? `/${locale}${path}` : `/${locale}`;
  const url = `${siteUrl}${normalizedPath}`;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        en: `${siteUrl}/en${path}`,
        "zh-CN": `${siteUrl}/zh${path}`
      }
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Zhongyuan Technology",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
      images: [
        {
          url: "/images/mining-farm-hero.png",
          width: 1680,
          height: 945,
          alt: "Zhongyuan Technology ASIC mining farm"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/mining-farm-hero.png"]
    }
  };
}
