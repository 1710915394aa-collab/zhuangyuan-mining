import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zhongyuan Technology",
    short_name: "Zhongyuan",
    description: "Professional ASIC miner supplier and mining hosting service.",
    start_url: "/en",
    display: "standalone",
    background_color: "#0B0B0B",
    theme_color: "#D4AF37",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "64x64",
        type: "image/svg+xml"
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  };
}
