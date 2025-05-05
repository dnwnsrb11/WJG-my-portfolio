import { NavBar } from "@/components/nav/navBac";
import "../../styles/globals.css";

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
      <body className="flex flex-col min-h-screen relative">
        {/* 그라데이션 기능 */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-0 -left-40 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
        <header className="fixed top-7 left-0 right-0 flex justify-center z-30">
          <NavBar />
        </header>
        <main className="pt-24 flex-grow max-w-[1920px] custom:mx-auto">{children}</main>
        <footer className="mt-auto border-t w-full border-stroke">
          <div className="text-center">
            <h1 className="text-[3vw] font-bold text-stroke">WJG - FRONTEND DEVELOPER</h1>
            <div className="opacity-30">
              <p>010-2386-6916</p>
              <p>dnwnsrb11@naver.com</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
