import Link from "next/link";
import type { ComponentType, ReactNode } from "react";
import type { LucideProps } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  icon?: ComponentType<LucideProps>;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
};

export function ButtonLink({ href, children, icon: Icon, variant = "primary", className = "", target }: ButtonLinkProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-ink-950";
  const variants = {
    primary: "bg-gold-500 text-black hover:bg-gold-300",
    secondary: "border border-gold-500/45 bg-black/40 text-gold-100 hover:border-gold-500 hover:bg-gold-500/10",
    ghost: "text-gold-100 hover:bg-gold-500/10"
  };

  return (
    <Link href={href} target={target} className={`${base} ${variants[variant]} ${className}`}>
      {Icon ? <Icon className="size-4" aria-hidden="true" /> : null}
      {children}
    </Link>
  );
}
