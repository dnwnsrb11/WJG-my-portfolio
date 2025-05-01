import { AboutMe } from "@/components/main/aboutMe";
import { ProjectNav } from "@/components/main/projectNav";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import dynamic from "next/dynamic";
const WalkAnimation = dynamic(
  () =>
    import("@/components/main/walkAnimation").then((mod) => ({
      default: mod.WalkAnimation,
    })),
  { ssr: false }
);

export default function Home() {
  return (
    <section className="flex flex-col items-start">
      <section className="w-full flex flex-col items-center gap-2 items-end relative">
        <article className="flex flex-col pt-20 w-full mx-4">
          <div className="custom:text-5xl text-3xl flex flex-col gap-2">
            <h1 className="font-thin">문제 해결의 길을 걷는</h1>
            <div className="break-keep flex items-start custom:flex-row flex-col custom:items-end">
              <TextGenerateEffect words="FrontEnd 개발자 " className="text-white text-5xl" /> <p>입니다.</p>
            </div>
          </div>
          <p className="text-gray-400 max-w-2xl mt-2 mb-6 text-lg font-medium leading-relaxed opacity-90 break-keep">
            창의적인 문제 해결과 직관적인 사용자 경험을 만드는 데 열정을 가진
            <span className="text-title"> 프론트엔드 개발자입니다.</span> UX/UI 전문가로서, 사용자 경험을 최우선으로 고려하며, 렌더링 최적화와 모션을 활용해 최적의 경험을 제공하는 개발을 즐깁니다.
          </p>
        </article>
        <div className={`right-0 -bottom-9 transition-all duration-1000 delay-300 transform lg:absolute static`}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-[#FF6D38 / 30] rounded-full opacity-20 blur-xl"></div>
            <WalkAnimation width={320} height={220} />
          </div>
        </div>
      </section>
      <hr className="w-full border-stroke mb-10" />
      <section className="custom:mx-6 w-full flex flex-col items-center custom:items-start custom:w-auto">
        <div className="mb-1">
          <p className="text-xl font-light text-text2">
            자세한 저의 <span className="font-bold text-title">프로젝트</span> 확인이 가능합니다.
          </p>
        </div>
        <article className="w-full">
          <ProjectNav />
        </article>
      </section>
      <section className="w-full">
        <AboutMe />
      </section>
    </section>
  );
}
