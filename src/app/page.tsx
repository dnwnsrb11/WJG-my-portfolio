import { ProjectNav } from "@/components/main/projectNav";

export default function Home() {
  return (
    <section className="flex flex-col items-start">
      <section className="w-full flex gap-2 items-end">
        <article className="flex flex-col pt-20 w-full mx-4">
          <div className="text-5xl flex flex-col gap-2">
            <h1>문제 해결의 길을 걷는</h1>
            <h1>
              <span className="text-title text-7xl font-bold">
                FrontEnd 개발자
              </span>{" "}
              입니다.
            </h1>
          </div>
        </article>
        <div>lottie</div>
      </section>
      <hr className="w-full border-stroke mt-10 my-4" />
      <article className="mx-4">
        <div>
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
