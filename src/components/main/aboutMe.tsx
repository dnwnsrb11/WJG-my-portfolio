import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { History } from "./history";
import Skill from "./skill";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AboutMeText } from "@/components/main/aboutMeText";
import { AboutMeModdal } from "@/components/main/aboutMeModdal";

export const AboutMe = () => {
  return (
    <section className="w-full py-4 px-6 border-t border-gray-700 ">
      <div className="relative">
        {/* Header Section with Animation */}
        <section className="flex flex-col custom:flex-row items-center custom:items-end mt-4 gap-4 relative">
          <div className="relative z-10 flex flex-col items-center custom:items-start">
            <div className="mb-2 transition-all duration-300 hover:translate-y-1">
              <p className="text-2xl md:text-3xl font-normal text-gray-400 opacity-80 tracking-wide">안녕하세요</p>
            </div>
            <div className="flex items-end group">
              <TextGenerateEffect words="우준규 " className="text-5xl font-bold text-white transition-all duration-300 group-hover:text-primary" />
              <span className="text-2xl md:text-3xl font-normal ml-2 text-gray-400 transition-all duration-300">입니다.</span>
            </div>
          </div>
          <article>
            <AboutMeModdal />
          </article>
        </section>
        {/* 나에 대한 소개  */}
        <section>
          <AboutMeText />
        </section>

        {/* Divider with Animation */}
        <hr className="w-full border-gray-700 my-10 transition-all duration-300 hover:border-primary" />

        {/* Content Section */}
        <section className="flex flex-col space-y-6">
          <div className="transform transition-all duration-300 hover:translate-x-2">
            <p className="text-xl font-light text-gray-400">
              저는 이런 <span className="font-bold text-white">활동을</span> 하였습니다.
            </p>
          </div>

          {/* History Section with Animation */}
          <div className="w-full transition-all duration-500 hover:shadow-lg hover:shadow-gray-800/20 rounded-lg">
            <History />
          </div>

          {/* Skills Section with Animation */}
          <div className="w-full p-6 border border-gray-700 rounded-2xl mt-4 backdrop-blur-sm transition-all duration-300 hover:border-gray-500 hover:shadow-xl hover:shadow-gray-800/10">
            <Skill />
          </div>
        </section>
      </div>
    </section>
  );
};
