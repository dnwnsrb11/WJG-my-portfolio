// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // app 디렉토리 추가
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        title: "#FF6D38",
        deactivate: "#5C5C5C",
        background: "#232323",
        primary: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
