import { notFound } from "next/navigation";
import { SeoLandingPageView } from "@/components/seo-landing-page";
import { siteUrl } from "@/lib/content";
import { getSeoLandingPage } from "@/lib/seo-pages";

const slug = "antminer-s21-200t";
const page = getSeoLandingPage(slug);

export const metadata = page
  ? {
      title: page.title,
      description: page.description,
      keywords: page.keywords,
      alternates: { canonical: `${siteUrl}/${slug}` }
    }
  : {};

export default function AntminerS21Page() {
  if (!page) notFound();
  return <SeoLandingPageView page={page} />;
}
