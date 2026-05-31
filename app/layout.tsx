import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zhongyuan Technology | ASIC Miner Supplier & Hosting Service",
    template: "%s | Zhongyuan Technology"
  },
  description:
    "Professional ASIC miner supplier and mining hosting service for Antminer, Whatsminer, global shipping and quote-based procurement."
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
