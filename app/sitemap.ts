import type { MetadataRoute } from "next";
import { blogArticles, siteUrl } from "@/lib/content";
import { locales } from "@/lib/i18n";

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

  return [...pages, ...posts];
}
