import {
  Mail,
  Phone,
  GraduationCap,
  BookOpen,
  Building2,
  Copy,
} from "lucide-react";

export const History = () => {
  const infoData = [
    {
      id: "training",
      icon: <BookOpen className="w-6 h-6" />,
      title: "교육",
      content: "삼성 청년 SW 아카데미",
      subContent: "(24.07 ~ 25.06)",
      link: "#",
      color: "from-emerald-500 to-teal-600",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    },
    {
      id: "education",
      icon: <GraduationCap className="w-6 h-6" />,
      title: "학력",
      content: "대구가톨릭대학교 디지털디자인 졸업",
      subContent: "(2016.03 ~ 2022.03)",
      color: "from-blue-500 to-indigo-600",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      id: "UX/UI",
      icon: <Building2 className="w-6 h-6" />,
      title: "웹디자이너",
      content: "소통파이브",
      subContent: "(21.12 ~ 24.01)",
      link: "#",
      color: "from-purple-500 to-indigo-600",
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      id: "email",
      icon: <Mail className="w-6 h-6" />,
      title: "이메일",
      content: "dnwnsrb11@naver.com",
      copyable: true,
      color: "from-red-500 to-orange-600",
      iconBg: "bg-red-100 dark:bg-red-900/30",
    },
    {
      id: "phone",
      icon: <Phone className="w-6 h-6" />,
      title: "전화번호",
      content: "010-2386-6916",
      copyable: true,
      color: "from-amber-500 to-yellow-600",
      iconBg: "bg-amber-100 dark:bg-amber-900/30",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {infoData.map((info, index) => (
        <div
          key={index}
          className="bg-white flex-1 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 p-6 
                group hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
          ></div>

          <div className="flex items-center mb-4">
            <div
              className={`p-3 rounded-xl ${info.iconBg} text-white 
                  group-hover:bg-gradient-to-br ${info.color} group-hover:text-white transition-all duration-300`}
            >
              {info.icon}
            </div>
            <p
              className={`ml-4 text-sm font-semibold uppercase tracking-wider text-gray-400
                  group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${info.color} transition-all duration-300`}
            >
              {info.title}
            </p>
          </div>

          <div className="flex flex-col items-start justify-center gap-1">
            <h4
              className="text-xl font-medium text-white 
                  group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r 
                  group-hover:from-red-400 group-hover:to-orange-600 transition-all duration-300"
            >
              {info.content}
            </h4>

            {info.subContent && (
              <p className="text-gray-400 text-sm">{info.subContent}</p>
            )}
          </div>
          <div
            className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full 
                rounded-b-xl bg-gradient-to-r ${info.color} transition-all duration-300`}
          ></div>
        </div>
      ))}
    </div>
  );
};
