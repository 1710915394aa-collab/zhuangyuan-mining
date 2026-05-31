import { ArrowRight, Gauge, PlugZap } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { dict, type Product } from "@/lib/content";
import { ButtonLink } from "./button-link";
import { StatusBadge } from "./status-badge";

type ProductCardProps = {
  product: Product;
  locale: Locale;
  compact?: boolean;
};

export function ProductCard({ product, locale, compact = false }: ProductCardProps) {
  const t = dict[locale];
  const contactHref = `${localizedPath(locale, "/contact")}?product=${encodeURIComponent(product.model)}`;

  const specs = [
    [t.common.hashRate, product.hashRate],
    [t.common.power, product.power],
    [t.common.efficiency, product.efficiency],
    [t.common.weight, product.weight],
    [t.common.moq, product.moq],
    [t.common.hostingAvailable, product.hostingAvailable ? t.common.yes : t.common.no]
  ];

  return (
    <article className="surface-panel flex h-full flex-col rounded-lg p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase text-gold-500">{product.category}</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{product.model}</h3>
        </div>
        <StatusBadge status={product.availability} />
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
          <Gauge className="mb-2 size-4 text-gold-500" aria-hidden="true" />
          <p className="text-xs text-stone-400">{t.common.hashRate}</p>
          <p className="mt-1 font-semibold text-white">{product.hashRate}</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
          <PlugZap className="mb-2 size-4 text-gold-500" aria-hidden="true" />
          <p className="text-xs text-stone-400">{t.common.efficiency}</p>
          <p className="mt-1 font-semibold text-white">{product.efficiency}</p>
        </div>
      </div>

      <dl className="mt-5 grid gap-3 text-sm">
        {specs.slice(compact ? 0 : 0, compact ? 5 : specs.length).map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4 border-b border-white/10 pb-2 last:border-b-0">
            <dt className="text-stone-400">{label}</dt>
            <dd className="text-right font-medium text-stone-100">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-auto pt-5">
        <ButtonLink href={contactHref} icon={ArrowRight} className="w-full">
          {t.common.requestQuote}
        </ButtonLink>
      </div>
    </article>
  );
}
