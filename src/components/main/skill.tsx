import React from "react";
import { Code2, LayoutDashboard, Zap } from "lucide-react"; // 아이콘 예시

export const Skill = () => {
  const skills = [
    {
      title: "React",
      subtitle: "컴포넌트 기반 UI 라이브러리",
      description: "재사용 가능한 컴포넌트를 기반으로, 가상 DOM과 단방향 데이터 흐름을 활용해 효율적이고 동적인 사용자 인터페이스를 구현할 수 있습니다.",
      tags: ["JSX", "Hooks", "Context API", "React Router"],
    },
    {
      title: "Next.js",
      subtitle: "React 생태계 기반 프레임워크",
      description: "SSR, SSG, ISR 등 다양한 렌더링 방식 지원을 통해 성능 최적화와 SEO에 강점을 가지며, 효율적인 페이지 개발이 가능합니다.",
      tags: ["SSR", "SSG"],
    },

    {
      title: "JavaScript",
      subtitle: "웹 개발의 핵심 프로그래밍 언어",
      description: "ES6+ 문법을 활용한 모던 자바스크립트로, DOM 제어, 이벤트 처리, 비동기 로직 등을 통해 인터랙티브한 웹을 구현할 수 있습니다.",
      tags: ["ES6+", "Promise", "async/await", "이벤트 리스너"],
    },
    {
      title: "TypeScript",
      subtitle: "정적 타입을 지원하는 JavaScript 상위 집합",
      description: "정적 타입 검사와 인터페이스, 제네릭 등을 통해 코드의 안정성과 가독성을 높이고, 사전 오류 예방이 가능합니다.",
      tags: ["타입 추론", "인터페이스"],
    },
    {
      title: "Zustand",
      subtitle: "가볍고 직관적인 상태 관리 라이브러리",
      description: "불변성과 미들웨어 기능을 갖춘 훅 기반 API로, 간결하면서도 강력한 상태 관리를 구현할 수 있습니다.",
      tags: ["상태 관리", "불변성"],
    },
    {
      title: "Tailwind CSS",
      subtitle: "유틸리티 퍼스트 CSS 프레임워크",
      description: "미리 정의된 클래스 조합으로 빠르게 반응형 UI를 구축하며, 커스터마이징과 다크 모드 지원도 유연하게 처리할 수 있습니다.",
      tags: ["반응형 디자인", "다크 모드", "커스터마이징"],
    },
    {
      title: "Styled Components",
      subtitle: "컴포넌트 기반 CSS-in-JS 라이브러리",
      description: "템플릿 리터럴을 활용해 컴포넌트별 스타일을 정의하며, 동적 스타일링과 테마 설정을 통해 유지보수성과 재사용성을 높입니다.",
      tags: ["반응형 디자인", "다크 모드", "커스터마이징"],
    },
    {
      title: "React Query",
      subtitle: "서버 상태 관리 최적화 라이브러리",
      description: "API 통신의 데이터 캐싱, 동기화, 리페칭을 자동화하여 서버 상태 관리의 복잡성을 줄이고 사용자 경험을 개선할 수 있습니다.",
      tags: ["쿼리 캐싱", "자동 리페칭", "페이지네이션", "무한 스크롤"],
    },
  ];

  return (
    <article className="mt-6">
      <h2 className="text-3xl font-bold text-white mb-8">
        My <span className="text-title">Skill</span>
      </h2>
      <div className="grid grid-cols-1 custom:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className=" rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-xl hover:scale-[1.01] hover:border-title transition-all duration-300">
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              </div>

              <p className="text-sm text-title mb-2">{skill.subtitle}</p>

              {/* 설명 */}
              <p className="text-sm text-gray-300 mb-4 leading-relaxed flex-grow">{skill.description}</p>

              {/* 태그 */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {skill.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-title/20  text-xs font-medium px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Skill;
