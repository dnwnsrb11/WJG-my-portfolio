"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { useAboutMeStore } from "@/store/aboutMeStore";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
export const AboutMeText = () => {
  const aboutMe = useAboutMeStore((state) => state.aboutMe);

  return (
    <section>
      <article>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">전체 보기</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            {aboutMe.map((item, index) => (
              <AlertDialogHeader key={index}>
                <AlertDialogTitle>{item.title}</AlertDialogTitle>
                <AlertDialogDescription>{item.quote}</AlertDialogDescription>
              </AlertDialogHeader>
            ))}
            <AlertDialogFooter>
              <AlertDialogCancel>확인</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </article>
      <div className="py-4 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={aboutMe} direction="left" speed="slow" />
      </div>
    </section>
  );
};
