export const ProjectNav = () => {
  const links = [
    {
      id: "velog",
      name: "Velog",
      icon: "/img/velog.jpg",
      url: "https://velog.io/@dnwnsrb11/posts",
      description: "기술 블로그 및 개발 일지",
    },
    {
      id: "github",
      name: "GitHub",
      icon: "/img/github.svg",
      url: "https://github.com/dnwnsrb11",
      description: "프로젝트 소스 코드",
    },
    {
      id: "notion",
      name: "Notion",
      icon: "/img/notion.svg",
      url: "https://indigo-sprite-bd5.notion.site/1b14ba04719a80378063ccf6b7f2f448?pvs=74",
      description: "프로젝트 문서 및 기록",
    },
  ];

  return (
    <section className="py-6">
      <div className="grid grid-cols-1 custom:grid-cols-3 gap-4">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#FF6D38] group"
          >
            <div className="relative z-10 p-5 gap-5 flex justify-start items-center">
              <div className="w-16 h-16 rounded-lg overflow-hidden border-gray-700 group-hover:border-[#FF6D38] transition-all duration-300">
                <img
                  src={link.icon}
                  alt={`${link.name} 아이콘`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col items-start justify-center gap-1">
                <h4 className="text-xl font-medium text-white group-hover:text-[#FF6D38] transition-colors duration-300">
                  {link.name}
                </h4>
                <p className="text-sm text-gray-400 opacity-80">
                  {link.description}
                </p>
              </div>
              <div className="opacity-0 xl:group-hover:opacity-100 transform translate-x-3 group-hover:translate-x-0 transition-all duration-300">
                <span className="text-sm text-[#FF6D38] flex items-center justify-center">
                  방문하기
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
