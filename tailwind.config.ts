import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 18px 80px rgba(237, 138, 80, 0.28)",
        panel: "0 28px 60px rgba(40, 16, 36, 0.18)",
        soft: "0 20px 60px rgba(38, 18, 32, 0.08)",
      },
      colors: {
        velvet: "#1a1020",
        copper: "#f09a63",
        blush: "#f7e7df",
        cream: "#fff9f5",
        wine: "#4d213b",
      },
      backgroundImage: {
        "hero-v3": "radial-gradient(circle at 14% 18%, rgba(255,174,100,0.32), transparent 22%), radial-gradient(circle at 78% 14%, rgba(247,139,97,0.35), transparent 24%), radial-gradient(circle at 74% 74%, rgba(166,74,128,0.26), transparent 28%), linear-gradient(140deg, #160d1b 0%, #261220 35%, #3a1831 68%, #4d213b 100%)",
        "panel-v3": "linear-gradient(160deg, rgba(255,214,186,0.12), rgba(255,255,255,0.04))",
      },
      animation: {
        floaty: "floaty 8s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite",
        pulsewarm: "pulsewarm 5s ease-in-out infinite",
        shine: "shine 3.8s linear infinite",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) rotate(0deg)" },
          "50%": { transform: "translate3d(0,-14px,0) rotate(2deg)" },
        },
        pulsewarm: {
          "0%, 100%": { opacity: "0.72", boxShadow: "0 0 0 rgba(240,154,99,0.0)" },
          "50%": { opacity: "1", boxShadow: "0 0 42px rgba(240,154,99,0.24)" },
        },
        shine: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;