import { Filter, PackageSearch } from "lucide-react";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { dict, products } from "@/lib/content";
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
    path: "/products",
    title: t.pages.productsTitle,
    description: t.pages.productsSub,
    keywords: ["ASIC miner supplier", "Antminer", "Whatsminer", "S21 miner", "S19k Pro"]
  });
}

export default async function ProductsPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const t = dict[locale];
  const categories = ["Antminer", "Whatsminer"] as const;

  return (
    <div className="bg-ink-950">
      <section className="border-b border-gold-500/15 bg-black bg-industrial-grid bg-[length:44px_44px] py-16">
        <div className="section-shell">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase text-gold-500">
            <PackageSearch className="size-4" aria-hidden="true" />
            Products
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-white md:text-6xl">{t.pages.productsTitle}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-stone-300">{t.pages.productsSub}</p>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-stone-300">
            <Filter className="size-4 text-gold-500" aria-hidden="true" />
            {t.common.category}
          </span>
          {categories.map((category) => (
            <span key={category} className="rounded-lg border border-gold-500/25 bg-gold-500/10 px-4 py-2 text-sm font-semibold text-gold-100">
              {category}
            </span>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>
      </section>
    </div>
  );
}
