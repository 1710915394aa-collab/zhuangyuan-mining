import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fff8db",
          100: "#f8e6a0",
          300: "#e3c561",
          500: "#D4AF37",
          700: "#9a7519"
        },
        ink: {
          950: "#0B0B0B",
          900: "#111111",
          800: "#171717",
          700: "#232323"
        },
        steel: {
          500: "#8B97A7",
          700: "#4A5565"
        }
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(212, 175, 55, 0.25), 0 18px 48px rgba(0, 0, 0, 0.38)"
      },
      backgroundImage: {
        "industrial-grid":
          "linear-gradient(rgba(212,175,55,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
