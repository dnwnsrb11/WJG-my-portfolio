import type { Metadata } from "next";
import "../../styles/globals.css";
import Link from "next/link";

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
      <header>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </header>
      <body>
        {children}
      </body>
    </html>
  );
}
