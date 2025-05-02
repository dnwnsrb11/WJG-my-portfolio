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
          <Button variant="outline2">전체 확인</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          {aboutMe.map((item, index) => (
            <AlertDialogHeader key={index}>
              <AlertDialogTitle>{item.title}</AlertDialogTitle>
              <AlertDialogDescription>
                <div className="break-keep mb-2">{item.quote}</div>
              </AlertDialogDescription>
              <div className="opacity-60 text-sm">{item.name}</div>
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
