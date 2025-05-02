"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { useAboutMeStore } from "@/store/aboutMeStore";

export const AboutMeText = () => {
  const aboutMe = useAboutMeStore((state) => state.aboutMe);

  return (
    <section>
      <div className="py-4 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={aboutMe} direction="left" speed="slow" />
      </div>
    </section>
  );
};
