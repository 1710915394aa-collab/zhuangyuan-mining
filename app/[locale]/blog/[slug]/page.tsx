import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { blogArticles, dict } from "@/lib/content";
import { isLocale, locales, localizedPath, type Locale } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) => blogArticles.map((article) => ({ locale, slug: article.slug })));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const article = blogArticles.find((item) => item.slug === slug);

  if (!article) {
    return {};
  }

  return createMetadata({
    locale,
    path: `/blog/${article.slug}`,
    title: article.title[locale],
    description: article.excerpt[locale],
    keywords: article.keywords
  });
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const article = blogArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  const t = dict[locale];

  return (
    <article className="bg-ink-950">
      <section className="border-b border-gold-500/15 bg-black py-16">
        <div className="section-shell max-w-4xl">
          <Link href={localizedPath(locale, "/blog")} className="inline-flex items-center gap-2 text-sm font-semibold text-gold-100">
            <ArrowLeft className="size-4" aria-hidden="true" />
            {t.nav.blog}
          </Link>
          <p className="mt-8 text-sm text-gold-500">
            {new Date(article.publishedAt).toLocaleDateString("en-US")} · {article.readingTime[locale]}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-6xl">{article.title[locale]}</h1>
          <p className="mt-5 text-lg leading-7 text-stone-300">{article.excerpt[locale]}</p>
        </div>
      </section>

      <section className="section-shell max-w-4xl py-14">
        <div className="surface-panel rounded-lg p-6 md:p-8">
          <div className="space-y-6 text-base leading-8 text-stone-300">
            {article.content[locale].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {article.keywords.map((keyword) => (
              <span key={keyword} className="rounded-full border border-gold-500/20 bg-gold-500/10 px-3 py-1 text-xs text-gold-100">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
