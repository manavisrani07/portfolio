import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070709",
        panel: "#0d0d12",
        line: "rgba(255,255,255,0.08)",
        accent: "#7dd3fc",
        accent2: "#c4b5fd",
        accent3: "#6ee7b7",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp .7s cubic-bezier(.21,.6,.35,1) both",
        blink: "blink 1.1s steps(2) infinite",
        drift: "drift 18s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(22px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: { "50%": { opacity: "0" } },
        drift: {
          from: { transform: "translate(-4%, -2%) scale(1)" },
          to: { transform: "translate(4%, 3%) scale(1.08)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
