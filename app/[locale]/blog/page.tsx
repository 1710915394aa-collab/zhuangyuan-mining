import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { notFound } from "next/navigation";
import { blogArticles, dict } from "@/lib/content";
import { isLocale, localizedPath, type Locale } from "@/lib/i18n";
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
    path: "/blog",
    title: t.pages.blogTitle,
    description: t.pages.blogSub,
    keywords: ["bitcoin mining", "asic miner supplier", "mining hosting", "bitcoin mining profit"]
  });
}

export default async function BlogPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const t = dict[locale];

  return (
    <div className="bg-ink-950">
      <section className="border-b border-gold-500/15 bg-black py-16">
        <div className="section-shell">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase text-gold-500">
            <Newspaper className="size-4" aria-hidden="true" />
            Blog SEO
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-white md:text-6xl">{t.pages.blogTitle}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-stone-300">{t.pages.blogSub}</p>
        </div>
      </section>

      <section className="section-shell grid gap-5 py-14 md:grid-cols-2">
        {blogArticles.map((article) => (
          <article key={article.slug} className="surface-panel rounded-lg p-6">
            <p className="text-sm text-gold-500">{new Date(article.publishedAt).toLocaleDateString("en-US")}</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">{article.title[locale]}</h2>
            <p className="mt-3 text-sm leading-6 text-stone-400">{article.excerpt[locale]}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {article.keywords.slice(0, 3).map((keyword) => (
                <span key={keyword} className="rounded-full border border-white/10 px-3 py-1 text-xs text-stone-400">
                  {keyword}
                </span>
              ))}
            </div>
            <Link
              href={localizedPath(locale, `/blog/${article.slug}`)}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-100 hover:text-gold-500"
            >
              {t.common.learnMore}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
