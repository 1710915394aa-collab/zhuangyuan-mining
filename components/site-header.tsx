"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { dict, navItems, whatsappDisplay, whatsappNumber } from "@/lib/content";
import { localeLabels, localizedPath, switchLocalePath, type Locale } from "@/lib/i18n";
import { Logo } from "./logo";

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = dict[locale];
  const otherLocale: Locale = locale === "en" ? "zh" : "en";
  const whatsappHref = `https://wa.me/${whatsappNumber}`;

  return (
    <header className="sticky top-0 z-50 border-b border-gold-500/15 bg-ink-950/86 backdrop-blur-xl">
      <div className="section-shell flex min-h-16 items-center justify-between gap-4">
        <Logo locale={locale} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={localizedPath(locale, item.href)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-stone-300 transition hover:bg-white/5 hover:text-gold-100"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href={switchLocalePath(pathname, otherLocale)}
            className="rounded-lg border border-white/10 px-3 py-2 text-sm font-semibold text-stone-200 hover:border-gold-500/45 hover:text-gold-100"
          >
            {localeLabels[otherLocale]}
          </Link>
          <Link
            href={whatsappHref}
            target="_blank"
            className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-gold-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-gold-300"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            {whatsappDisplay}
          </Link>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg border border-white/10 text-stone-100 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-ink-950 lg:hidden">
          <nav className="section-shell grid gap-1 py-4" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={localizedPath(locale, item.href)}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-stone-200 hover:bg-white/5 hover:text-gold-100"
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Link
                href={switchLocalePath(pathname, otherLocale)}
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/10 px-3 py-3 text-center text-sm font-semibold text-stone-200"
              >
                {localeLabels[otherLocale]}
              </Link>
              <Link
                href={whatsappHref}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-3 py-3 text-sm font-semibold text-black"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
