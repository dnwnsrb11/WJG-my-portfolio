import "../../styles/globals.css";
import Link from "next/link";

// 메타데이터 API 사용
export const metadata = {
  title: "WJG - 프론트엔드 개발자 포트폴리오",
  description: "UX를 중시하는 프론트엔드 개발자 우준규입니다.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://wjg-my-portfolio.vercel.app/",
    siteName: "WJG 포트폴리오",
    title: "WJG - 프론트엔드 개발자 포트폴리오",
    description: "UX를 중시하는 프론트엔드 개발자 우준규입니다.",
    images: [
      {
        url: "https://wjg-my-portfolio.vercel.app/img/testPortfolio.png",
        width: 1200,
        height: 630,
        alt: "WJG 포트폴리오",
      },
    ],
  },
  icons: {
    icon: "https://wjg-my-portfolio.vercel.app/img/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <header>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </header>
        <main>{children}</main>
        <footer>
          <div>
            <h1>WJG</h1>
          </div>
        </footer>
      </body>
    </html>
  );
}
