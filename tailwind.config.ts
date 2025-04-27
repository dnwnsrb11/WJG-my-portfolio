// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // 경로 확인 필요
  ],
  theme: {
    extend: {
      fontFamily: {
        // Tailwind의 기본 sans-serif 폰트를 Pretendard로 재정의
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "sans-serif",
        ],
      },
      colors: {
        background: "#232323",
        primary: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
