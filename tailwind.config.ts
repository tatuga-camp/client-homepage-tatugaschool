import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Anuphan: ["Anuphan", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "#2C7CD1",
        "primary-color-hover": "#2d6fb5",
        "primary-color-focus": "#275d96",
        "icon-color": "#383767",
        "secondary-color": "#569DF8",
        "background-color": "#F7F8FA",
        "info-color": "#2E90FA",
        "success-color": "#27AE60",
        "warning-color": "#FFCD1B",
        "error-color": "#F04438",
      },
      keyframes: {
        // Paid-school badges in the homepage hero: one entrance, then a slow bob.
        "badge-in": {
          from: { opacity: "0", transform: "translateY(18px) scale(0.96)" },
          to: { opacity: "1", transform: "none" },
        },
        "badge-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        // Track holds two copies of the list; shifting by half loops seamlessly.
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        // Swapping the feature preview when a teacher picks another feature.
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "badge-in": "badge-in 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "badge-float": "badge-float 7s ease-in-out infinite",
        marquee: "marquee 60s linear infinite",
        "fade-in": "fade-in 300ms ease-out both",
      },
    },
  },
  plugins: [],
};
export default config;
