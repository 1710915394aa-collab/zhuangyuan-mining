"use client";

import Link from "next/link";
import { Cpu } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { dict } from "@/lib/content";

export function Logo({ locale }: { locale: Locale }) {
  const t = dict[locale];

  return (
    <Link href={localizedPath(locale)} className="flex items-center gap-3" aria-label={t.brand}>
      <span className="grid size-10 place-items-center rounded-lg border border-gold-500/35 bg-gold-500/10 text-gold-500">
        <Cpu className="size-5" aria-hidden="true" />
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-semibold uppercase text-gold-100">{t.brand}</span>
        <span className="hidden text-xs text-stone-400 sm:block">ASIC Supply & Hosting</span>
      </span>
    </Link>
  );
}
