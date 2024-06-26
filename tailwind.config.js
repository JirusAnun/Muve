/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e4296",
      },
      fontFamily: {
        noto: ["Noto Sans Thai", "sans-serif"],
      },
      variants: {
        extend: {
          scale: ["active"],
        },
      },
    },
  },
  plugins: [],
});
