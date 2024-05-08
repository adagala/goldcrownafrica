const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        gold: {
          50: "#FCF7EE",
          100: "#F8EDD8",
          200: "#F2DEB6",
          300: "#EBCC8F",
          400: "#E4BC6C",
          500: "#DDAA45",
          600: "#C69024",
          700: "#936B1B",
          800: "#634812",
          900: "#2F2309",
          950: "#1A1305",
        },
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
