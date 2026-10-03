/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  darkMode: "class", // tema dark estrito: <html class="dark">
  theme: {
    extend: {
      colors: {
        background: "#050A18",
        foreground: "#F5F7FF",
        surface: {
          DEFAULT: "#0A1226",
          raised: "#0F1A36",
        },
        border: "rgba(110,150,255,0.15)",
        muted: "#93A0BC",
        accent: {
          DEFAULT: "#2563EB", // azul cobalto
          soft: "rgba(37,99,235,0.15)",
          glow: "#3B82F6",
          light: "#7FA8FF",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        // tipografia gigante fluida para o Hero
        display: ["clamp(3.5rem, 12vw, 12rem)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        headline: ["clamp(2rem, 5vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
      },
      spacing: {
        section: "clamp(6rem, 14vw, 12rem)", // respiro vertical fluido entre seções
        gutter: "clamp(1.25rem, 4vw, 4rem)",
      },
      maxWidth: {
        content: "88rem",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "line-up": {
          "0%": { transform: "translateY(110%)" },
          "100%": { transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(2.6)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "line-up": "line-up 1.2s cubic-bezier(0.22, 1, 0.36, 1) both",
        marquee: "marquee 40s linear infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};
