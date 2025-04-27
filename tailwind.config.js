// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{js,ts,jsx,tsx}", // 프로젝트의 모든 JS/TS 파일 포함
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // app 디렉토리 추가
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["text-deactivate", "hover:text-title", "text-title", "bg-white", "bg-background", "text-primary"],
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
