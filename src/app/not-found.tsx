// app/not-found.tsx 또는 app/not-found.js 파일 생성
"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
const NotFoundAnimation = dynamic(
  () =>
    import("@/components/notfound/not-found-animation").then((mod) => ({
      default: mod.NotFoundAnimation,
    })),
  { ssr: false }
);

export default function NotFound() {
  return (
    <section
      className="flex flex-col justify-center items-center"
      style={{ height: "calc(100vh - 40vh)" }}
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <NotFoundAnimation width={300} height={300} />
        </div>
        <h2 className="text-2xl font-bold">페이지를 찾을 수 없습니다</h2>
        <p className="text-deactivate text-xl">
          요청하신 페이지가 존재하지 않습니다.
        </p>
      </div>
      <div className="p-2 border rounded-xl max-w-80 mt-4 cursor-pointer border-deactivate hover:border-title hover:text-title transition-all duration-300">
        <Link href={"/"}>홈으로 돌아가기</Link>
      </div>
    </section>
  );
}
