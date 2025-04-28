import { ProjectNav } from "@/components/main/projectNav";

export default function Home() {
  return (
    <section className="flex flex-col items-start">
      <article className="flex flex-col pt-20 w-full">
        <div className="text-7xl flex flex-col gap-2">
          <h1>문제 해결의 길을 걷는</h1>
          <h1>
            <span className="text-title font-bold">FrontEnd 개발자</span>입니다
          </h1>
        </div>
      </article>
      <article>
        <div className="mt-10">
          <p className="text-xl font-light text-text2">
            자세한 저의 <span className="font-bold text-title">프로젝트</span>{" "}
            확인이 가능합니다.
          </p>
        </div>
        <ProjectNav />
      </article>
    </section>
  );
}
