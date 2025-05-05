"use client";
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
export const AboutMeModdal = () => {
  const aboutMe = useAboutMeStore((state) => state.aboutMe);
  return (
    <article>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline2">저는 이런 사람 입니다.</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-h-[80vh] overflow-y-auto">
          {aboutMe.map((item, index) => (
            <AlertDialogHeader key={index}>
              <AlertDialogTitle>
                <div className="break-keep text-2xl">{item.title}</div>
                <div className="opacity-60 text-sm text-gray-400">{item.name}</div>
              </AlertDialogTitle>
              <AlertDialogDescription>
                <div className="break-keep mb-2 text-xl text-gray-200">{item.quote}</div>
              </AlertDialogDescription>
            </AlertDialogHeader>
          ))}
          <AlertDialogFooter>
            <AlertDialogCancel>확인</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </article>
  );
};
