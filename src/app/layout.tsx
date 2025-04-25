import type { Metadata } from "next";
import "../../styles/globals.css";

export const metadata: Metadata = {
  title: "WJG - Portfolio",
  description: "UX를 중시하는 프론트엔드 개발자 우준규입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
