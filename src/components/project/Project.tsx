import React from "react";

// 프로젝트 인터페이스 정의
interface ProjectData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  notionLink: string;
  thumbnail: string;
}

// 프로젝트 카드 Props 인터페이스 정의
interface ProjectCardProps {
  project: ProjectData;
}

export const Project: React.FC = () => {
  // 프로젝트 데이터 (이 부분은 실제 데이터로 교체하시면 됩니다)
  const projects: ProjectData[] = [
    {
      id: 1,
      title: "BDL",
      description: "주린이를 위한 주식 입문 서비스",
      tags: ["React", "Tailwind CSS", "cChart"],
      notionLink: "https://www.notion.so/your-project-link-1",
      thumbnail: "/api/placeholder/500/300",
    },
    {
      id: 2,
      title: "Grim Talk",
      description: "강사,수강생 실시간 소통 기반 그림 학습 플랫폼",
      tags: ["TypeScript", "Tailwind CSS", "MongoDB"],
      notionLink: "https://www.notion.so/your-project-link-2",
      thumbnail: "/api/placeholder/500/300",
    },
    {
      id: 3,
      title: "MOODFLEX",
      description: "사용자 감정 기반 영화 추천 서비스",
      tags: ["Vue.js", "Firebase", "SCSS"],
      notionLink: "https://www.notion.so/your-project-link-3",
      thumbnail: "/api/placeholder/500/300",
    },
  ];

  // 프로젝트 카드 컴포넌트
  const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
      <div className="rounded-lg border overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <a href={project.notionLink} target="_blank" rel="noopener noreferrer" className="block">
          <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover" />

          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-full">
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
    <section className="w-full py-16 px-6 border-t border-gray-700">
      {/* 프로젝트 섹션 제목 */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-title mb-2">Project</h2>
        <p className="text-gray-400">제가 진행한 프로젝트를 소개합니다.</p>
      </div>

      {/* 프로젝트 카드 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
