import "../../styles/globals.css";
import Link from "next/link";
import { DefaultSeo } from "next-seo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <DefaultSeo
          titleTemplate="%s | WJG 포트폴리오"
          defaultTitle="WJG - 프론트엔드 개발자 포트폴리오"
          description="UX를 중시하는 프론트엔드 개발자 우준규입니다."
          canonical="https://wjg-my-portfolio.vercel.app/"
          openGraph={{
            type: "website",
            locale: "ko_KR",
            url: "https://wjg-my-portfolio.vercel.app/",
            siteName: "WJG 포트폴리오",
            title: "WJG - 프론트엔드 개발자 포트폴리오",
            description: "UX를 중시하는 프론트엔드 개발자 우준규입니다.",
            // images: [
            //   {
            //     url: "https://wjg-portfolio.vercel.app/og-image.jpg",
            //     width: 1200,
            //     height: 630,
            //     alt: "WJG 포트폴리오",
            //   },
            // ],
          }}
          additionalMetaTags={[
            {
              name: "keywords",
              content: "프론트엔드, 개발자, 포트폴리오, React, Next.js, UX",
            },
            {
              name: "author",
              content: "우준규",
            },
          ]}
        />
      </head>
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
