import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        plum: "#3A1437",
        burgundy: "#47143F",
        pink: "#F45D88",
        blush: "#F8DDE4",
        cream: "#FFF9F5",
        paper: "#FFFCF9",
        ink: "#201721",
        muted: "#6E636B",
        gold: "#D3A55F"
      },
      boxShadow: {
        soft: "0 18px 48px rgba(58, 20, 55, .12)"
      },
      maxWidth: {
        site: "1400px"
      }
    },
  },
  plugins: [],
} satisfies Config;
