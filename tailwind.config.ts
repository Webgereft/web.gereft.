import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0F",
        card: "#12121A",
        primary: "#3B82F6",
        accent: "#60A5FA",
        border: "#1E293B",
        muted: "#94A3B8",
      },
      fontFamily: {
        sans: ["Vazirmatn", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
