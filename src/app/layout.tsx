import "../../styles/globals.css";
import Link from "next/link";

// 메타데이터 API 사용
export const metadata = {
  title: "WJG",
  description: "문제 해결의 길을 걷는 FrontEnd 개발자입니다.",
  metadataBase: new URL("https://wjg-my-portfolio.vercel.app/"),
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://wjg-my-portfolio.vercel.app/",
    siteName: "WJG FrontEnd Developer",
    title: "WJG - 문제 해결의 길을 걷는 FrontEnd 개발자입니다",
    description: "문제 해결의 길을 걷는 FrontEnd 개발자입니다",
    images: [
      {
        url: "https://wjg-my-portfolio.vercel.app/img/metaImg.png",
        width: 1200,
        height: 630,
        alt: "WJG FrontEnd Developer",
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
          <nav className="bg-white border border-white">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
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
