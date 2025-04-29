// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        title: "#FF6D38",
        text2: "#A4A4A4",
        deactivate: "#5C5C5C",
        background: "#232323",
        primary: "#FFFFFF",
        stroke: "#393939",
      },
      screens: {
        custom: "900px", // <= 여기에 추가
      },
    },
  },
  plugins: [],
};
