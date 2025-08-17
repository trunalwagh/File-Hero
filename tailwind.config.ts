

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          "100": "#56B8FF",
          DEFAULT: "#2563EB", // brand blue
        },
        red: "#FF7474",
        error: "#b80000",
        green: "#3DD9B3",
        blue: "#2563EB", // main blue
        pink: "#EEA8FD",
        orange: "#F9AB72",
        light: {
          "100": "#333F4E",
          "200": "#A3B2C7",
          "300": "#F2F5F9",
          "400": "#F2F4F8",
        },
        dark: {
          "100": "#04050C",
          "200": "#131524",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "#2563EB", // blue
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#38BDF8", // light blue
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#E0F2FE",
          foreground: "#0369A1",
        },
        accent: {
          DEFAULT: "#1D4ED8", // dark blue
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "#2563EB",
          "2": "#38BDF8",
          "3": "#0EA5E9",
          "4": "#1D4ED8",
          "5": "#075985",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      boxShadow: {
        "drop-1": "0px 10px 30px 0px rgba(37, 99, 235, 0.1)",
        "drop-2": "0 8px 30px 0 rgba(37, 99, 235, 0.3)",
        "drop-3": "0 8px 30px 0 rgba(37, 99, 235, 0.15)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
