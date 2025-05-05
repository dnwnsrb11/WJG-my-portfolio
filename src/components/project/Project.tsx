import React from "react";
import Image from "next/image";
import BDLimg from "@/assets/img/BDL.gif";
import GrimTalkImg from "@/assets/img/GrimTalk.gif";
import MoodFlex from "@/assets/img/MoodFlex.gif";
import { StaticImageData } from "next/image";

interface ProjectData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  notionLink: string;
  thumbnail: StaticImageData;
  position: string;
}

interface ProjectCardProps {
  project: ProjectData;
}

export const Project = () => {
  const projects: ProjectData[] = [
    {
      id: 1,
      title: "BDL",
      description: "주린이를 위한 주식 입문 서비스 ",
      tags: ["React", "Tailwind CSS", "EChart", "React Query", "TypeScript"],
      notionLink: "https://www.notion.so/your-project-link-1",
      thumbnail: BDLimg,
      position: "FrontEnd",
    },
    {   
      id: 2,
      title: "Grim Talk",
      description: "강사,수강생 실시간 소통 기반 그림 학습 플랫폼",
      tags: ["React", "Tailwind CSS", "React Query", "Excalidraw"],
      notionLink: "https://www.notion.so/your-project-link-2",
      thumbnail: GrimTalkImg,
      position: "FrontEnd",
    },
    {
      id: 3,
      title: "MOODFLEX",
      description: "사용자 감정 기반 영화 추천 서비스",
      tags: ["Vue.js", "CSS", "OpenAi-API"],
      notionLink: "https://www.notion.so/your-project-link-3",
      thumbnail: MoodFlex,
      position: "FrontEnd",
    },
  ];

  const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
      <div className="group border-gray-700 border rounded-xl  overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-title">
        <a href={project.notionLink} target="_blank" rel="noopener noreferrer" className="block">
          <div className="relative w-full h-48 overflow-hidden">
            <Image src={project.thumbnail} alt={project.title} fill style={{ objectFit: "cover" }} priority={project.id === 1} className="transition-transform duration-500 group-hover:scale-105" />
          </div>

          <div className="p-5">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-white group-hover:text-title">{project.title}</h3>
              <div className="bg-gray-800 px-2 rounded-full">
                <p>{project.position}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 mt-2 line-clamp-2">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 text-xs font-medium rounded-full border text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      </div>
    );
  };

  return (
    <section className="w-full py-16 mt-20 mb-[100px] px-6 border-t border-gray-700">
      {/* 프로젝트 섹션 제목 */}
      <div className="mb-10">
        <h2 className="text-5xl font-bold text-title mb-2">Project</h2>
        <p className="text-gray-400">제가 진행한 프로젝트를 소개합니다.</p>
        <p className="text-gray-400">자세한 내용을 클릭하여 노션 페이지에서 확인이 가능합니다.</p>
      </div>

      {/* 프로젝트 카드 그리드 */}
      <div className="grid grid-cols-1 custom:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
