import { Trophy } from "lucide-react";

const awards = [
  {
    type: "특화프로젝트",
    prize: "우수상",
    project: "BDL",
  },
  {
    type: "공통프로젝트",
    prize: "최우수상",
    project: "그림톡",
  },
  {
    type: "관통프로젝트",
    prize: "우수상",
    project: "MOODFLEX",
  },
];

export const Award = () => {
  return (
    <article className="mx-auto rounded-xl shadow-md p-6 border border-gray-700 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <Trophy className="text-yellow-500 w-6 h-6" />
        <h2 className="text-xl font-semibold text-white">수상 내역</h2>
      </div>

      <ul className="grid grid-cols-3 gap-2">
        {awards.map((award, index) => (
          <li
            key={index}
            className="border-l-4 pl-4 border-title  text-deactivate hover:bg-gray-800/50 rounded-sm transition-all duration-300"
          >
            <p className="font-medium">{award.type}</p>
            <p className="text-gray-600 ">
              <span className="font-semibold text-white text-xl">
                {award.prize}
              </span>{" "}
              - {award.project}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
};
