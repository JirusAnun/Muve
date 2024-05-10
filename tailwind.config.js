/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e4296",
      },
      fontFamily: {
        noto: ["Noto Sans Thai", "sans-serif"],
      },
    },
  },
  plugins: [],
};
