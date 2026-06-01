import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zhongyuan-tech.shop"),
  title: {
    default: "Zhongyuan Technology | ASIC Miner Supplier & Hosting Service",
    template: "%s | Zhongyuan Technology"
  },
  description:
    "Professional ASIC miner supplier and mining hosting service for Antminer, Whatsminer, global shipping and quote-based procurement.",
  applicationName: "Zhongyuan Technology",
  authors: [{ name: "Zhongyuan Technology" }],
  creator: "Zhongyuan Technology",
  publisher: "Zhongyuan Technology",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: "Zhongyuan Technology | ASIC Miner Supplier & Hosting Service",
    description:
      "Professional ASIC miner supplier and mining hosting service for Antminer, Whatsminer, global shipping and quote-based procurement.",
    url: "https://www.zhongyuan-tech.shop",
    siteName: "Zhongyuan Technology",
    type: "website",
    images: [
      {
        url: "/images/mining-farm-hero.png",
        width: 1680,
        height: 945,
        alt: "Zhongyuan Technology ASIC mining website"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zhongyuan Technology | ASIC Miner Supplier & Hosting Service",
    description:
      "Professional ASIC miner supplier and mining hosting service for Antminer, Whatsminer, global shipping and quote-based procurement.",
    images: ["/images/mining-farm-hero.png"]
  }
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
