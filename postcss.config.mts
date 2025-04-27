// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#232323",
        primary: "#FFFFFF",
      },
      // 기존 fontFamily 설정 등도 유지
    },
  },
  plugins: [],
};

export default config;
