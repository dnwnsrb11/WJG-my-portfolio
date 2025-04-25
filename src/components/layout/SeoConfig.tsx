// src/components/layout/SeoConfig.tsx
"use client"; // 클라이언트 컴포넌트로 선언

import { DefaultSeo } from "next-seo";

export function SeoConfig() {
  return (
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
  );
}
