// app/not-found.tsx 또는 app/not-found.js 파일 생성
"use client";

export default function NotFound() {
  return (
    <section className="flex justify-center">
      <div
        className="flex flex-col items-center justify-center"
        style={{ height: "calc(100vh - 20vh)" }}
      >
        <h1 className="text-7xl text-title font-bold mb-5">404</h1>
        <h2 className="text-2xl font-bold">페이지를 찾을 수 없습니다</h2>
        <p className="text-deactivate text-xl">
          요청하신 페이지가 존재하지 않습니다.
        </p>
      </div>
    </section>
  );
}
