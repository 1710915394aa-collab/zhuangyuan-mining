import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { dict, navItems, whatsappDisplay, whatsappNumber } from "@/lib/content";
import { Logo } from "./logo";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = dict[locale];

  return (
    <footer className="border-t border-gold-500/15 bg-black">
      <div className="section-shell grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <Logo locale={locale} />
          <p className="mt-5 max-w-md text-sm leading-6 text-stone-400">{t.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border border-gold-500/35 px-4 py-2 text-sm font-semibold text-gold-100 hover:bg-gold-500/10"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              {whatsappDisplay}
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase text-gold-500">Navigation</h2>
          <nav className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.key} href={localizedPath(locale, item.href)} className="text-sm text-stone-400 hover:text-gold-100">
                {t.nav[item.key]}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase text-gold-500">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-stone-400">
            <p className="flex items-center gap-2">
              <MapPin className="size-4 text-gold-500" aria-hidden="true" />
              Global ASIC supply, hosting and shipping
            </p>
            <p className="flex items-center gap-2">
              <Mail className="size-4 text-gold-500" aria-hidden="true" />
              Quote-based procurement
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="section-shell flex flex-col gap-2 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Zhongyuan Technology. All rights reserved.</p>
          <p>ASIC Miner Supplier & Mining Hosting Service</p>
        </div>
      </div>
    </footer>
  );
}
