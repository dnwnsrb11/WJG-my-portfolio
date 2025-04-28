export const ProjectNav = () => {
  const Velog = "/img/velog.jpg";
  const Git = "/img/github.svg";
  const Notion = "/img/notion.svg";
  return (
    <section className="bg-background py-5 px-14 rounded-2xl mt-4 flex gap-40">
      <button className="flex gap-4 items-center hover:text-title hover:scale-110 transition-all duration-300">
        <div className="w-10 h-10 rounded-md overflow-hidden">
          <img src={Velog} alt="VelogImg" />
        </div>
        <p className="text-lg">Velog</p>
      </button>
      <button className="flex gap-4 items-center hover:text-title hover:scale-110 transition-all duration-300">
        <div className="w-10 h-10 rounded-md overflow-hidden">
          <img src={Git} alt="VelogImg" />
        </div>
        <p className="text-lg">Git</p>
      </button>
      <button className="flex gap-4 items-center hover:text-title hover:scale-110 transition-all duration-300">
        <div className="w-10 h-10 rounded-md overflow-hidden">
          <img src={Notion} alt="VelogImg" />
        </div>
        <p className="text-lg">Notion</p>
      </button>
    </section>
  );
};
