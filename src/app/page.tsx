import { ProjectNav } from "@/components/main/ProjectNav";

export default function Home() {
  return (
    <section className="flex flex-col items-center pt-20">
      <article>
        <div className="text-7xl flex flex-col gap-2 items-center">
          <h1>문제 해결의 길을 걷는</h1>
          <h1>
            <span className="text-title font-bold">FrontEnd 개발자</span>입니다
          </h1>
        </div>
        <div className="mt-10 text-center">
          <p className="text-xl font-light">
            자세한 저의 <span className="font-bold text-title">프로젝트</span> 확인이 가능합니다.
          </p>
        </div>
      </article>
      <article>
        <ProjectNav />
      </article>
    </section>
  );
}
