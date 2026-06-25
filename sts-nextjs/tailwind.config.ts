import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "tx-blue": "#002868",
        "tx-red": "#BF0A30",
        "tx-red-h": "#a00827",
        "off-white": "#F6F8FA",
        "tan": "#F2EAD8",
        "gold": "#C9973A",
        "gold-lt": "#F5C518",
        "navy-text": "#001A4A",
        "stb-gray": "#4A5568",
        "gray-lt": "#E8ECF2",
        "border-c": "#D6DCE8",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica Neue", "sans-serif"],
      },
      borderRadius: {
        r: "8px",
        "r-lg": "14px",
      },
    },
  },
  plugins: [],
};
export default config;
