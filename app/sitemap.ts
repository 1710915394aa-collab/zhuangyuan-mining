import type { MetadataRoute } from "next";
import { blogArticles, siteUrl } from "@/lib/content";
import { locales } from "@/lib/i18n";
import { seoLandingPages } from "@/lib/seo-pages";

const staticPages = ["", "/products", "/hosting", "/mining-calculator", "/about", "/blog", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = locales.flatMap((locale) =>
    staticPages.map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: now,
      changeFrequency: path === "/blog" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.8
    }))
  );

  const posts = locales.flatMap((locale) =>
    blogArticles.map((article) => ({
      url: `${siteUrl}/${locale}/blog/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  );

  const landingPages = seoLandingPages.map((page) => ({
    url: `${siteUrl}/${page.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: page.type === "product" ? 0.85 : 0.9
  }));

  return [...pages, ...posts, ...landingPages];
}
