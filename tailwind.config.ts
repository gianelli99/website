import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        platinatepurple: {
          50: "#8e3286",
          100: "#84287c",
          200: "#7a1e72",
          300: "#701468",
          400: "#660a5e",
          500: "#5c0054",
          600: "#52004a",
          700: "#480040",
          800: "#3e0036",
          900: "#34002c",
          DEFAULT: "#5c0054",
        },
        mellowapricot: {
          50: "#ffe79d",
          100: "#ffdd93",
          200: "#ffd389",
          300: "#ffc97f",
          400: "#ffbf75",
          500: "#ffb56b",
          600: "#f5ab61",
          700: "#eba157",
          800: "#e1974d",
          900: "#d78d43",
          DEFAULT: "#ffb56b",
        },
        maroon: {
          50: "#e56090",
          100: "#db5686",
          200: "#d14c7c",
          300: "#c74272",
          400: "#bd3868",
          500: "#b32e5e",
          600: "#a92454",
          700: "#9f1a4a",
          800: "#951040",
          900: "#8b0636",
          DEFAULT: "#b32e5e",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
