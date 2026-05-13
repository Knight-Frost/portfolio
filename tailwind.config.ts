import type { Config } from "tailwindcss";

/**
 * Colors are driven by CSS variables defined in app/globals.css.
 * Each variable holds an "R G B" triplet so Tailwind's `/<alpha-value>`
 * syntax keeps working (e.g. `bg-accent/40`).
 */
const tokens = {
  bg: {
    DEFAULT: "rgb(var(--bg) / <alpha-value>)",
    elevated: "rgb(var(--bg-elevated) / <alpha-value>)",
    subtle: "rgb(var(--bg-subtle) / <alpha-value>)",
  },
  border: {
    subtle: "rgb(var(--border-subtle) / <alpha-value>)",
    DEFAULT: "rgb(var(--border) / <alpha-value>)",
    strong: "rgb(var(--border-strong) / <alpha-value>)",
  },
  fg: {
    DEFAULT: "rgb(var(--fg) / <alpha-value>)",
    muted: "rgb(var(--fg-muted) / <alpha-value>)",
    subtle: "rgb(var(--fg-subtle) / <alpha-value>)",
    dim: "rgb(var(--fg-dim) / <alpha-value>)",
  },
  accent: {
    DEFAULT: "rgb(var(--accent) / <alpha-value>)",
    bright: "rgb(var(--accent-bright) / <alpha-value>)",
    deep: "rgb(var(--accent-deep) / <alpha-value>)",
  },
  signal: {
    green: "rgb(var(--signal-green) / <alpha-value>)",
  },
};

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: tokens,
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        blink: "blink 1.2s steps(2, start) infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        blink: {
          to: { visibility: "hidden" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
