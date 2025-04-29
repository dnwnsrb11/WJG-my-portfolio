import {
  Mail,
  Phone,
  Book,
  GraduationCap,
  BookOpen,
  Building2,
} from "lucide-react";
export const AboutMe = () => {
  const infoData = [
    {
      id: "education",
      icon: <GraduationCap className="w-5 h-5" />,
      title: "학력",
      content: "대구가톨릭대학교 디지털디자인 졸업",
      subContent: "(2016.03 ~ 2022.03)",
    },
    {
      id: "training",
      icon: <BookOpen className="w-5 h-5" />,
      title: "교육",
      content: "삼성 청년 SW 아카데미",
      subContent: "(24.07 ~ 25.06)",
      link: "#",
    },
    {
      id: "UX/UI",
      icon: <Building2 className="w-5 h-5" />,
      title: "웹디자이너",
      content: "소통파이브",
      subContent: "(21.12 ~ 24.01)",
      link: "#",
    },
    {
      id: "email",
      icon: <Mail className="w-5 h-5" />,
      title: "이메일",
      content: "dnwnsrb11@naver.com",
      copyable: true,
    },
    {
      id: "phone",
      icon: <Phone className="w-5 h-5" />,
      title: "전화번호",
      content: "010-2386-6916",
      copyable: true,
    },
  ];
  return (
    <section className="pt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white relative">
          About Me
          <span className="absolute left-0 -bottom-2 w-16 h-1 bg-title rounded-full"></span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {infoData.map((info, index) => {
            return (
              <div
                key={index}
                className={`bg-background rounded-xl border border-gray-700 shadow-md p-6 
                hover:shadow-lg transition-all duration-300 transform 
                `}
              >
                <div className="flex items-center mb-3">
                  <div
                    className={`p-2 rounded-lg transition-colors duration-300`}
                  >
                    {info.icon}
                  </div>
                  <p className="ml-3 text-sm text-title font-semibold">
                    {info.title}
                  </p>
                </div>
                <div className="flex flex-col items-start justify-center gap-1">
                  <h4 className="text-xl font-medium text-white group-hover:text-[#FF6D38] transition-colors duration-300">
                    {info.content}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
