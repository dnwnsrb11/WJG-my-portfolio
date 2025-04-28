export const ProjectNav = () => {
  const Velog = "/img/velog.jpg";
  const Git = "/img/github.svg";
  const Notion = "/img/notion.svg";
  return (
    <section className="bg-background py-3 px-14 rounded-2xl mt-4 flex gap-28">
      <a href="https://velog.io/@dnwnsrb11/posts" target="_blank" rel="noopener noreferrer" className="flex gap-4 items-center hover:text-title hover:scale-110 transition-all duration-300">
        <div className="w-10 h-10 rounded-md overflow-hidden">
          <img src={Velog} alt="VelogImg" />
        </div>
        <p className="text-lg">Velog</p>
      </a>
      <a href="https://github.com/dnwnsrb11" target="_blank" rel="noopener noreferrer" className="flex gap-4 items-center hover:text-title hover:scale-110 transition-all duration-300">
        <div className="w-10 h-10 rounded-md overflow-hidden">
          <img src={Git} alt="VelogImg" />
        </div>
        <p className="text-lg">Git</p>
      </a>
      <a
        href="https://indigo-sprite-bd5.notion.site/1b14ba04719a80378063ccf6b7f2f448?pvs=74"
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-4 items-center hover:text-title hover:scale-110 transition-all duration-300"
      >
        <div className="w-10 h-10 rounded-md overflow-hidden">
          <img src={Notion} alt="VelogImg" />
        </div>
        <p className="text-lg">Notion</p>
      </a>
    </section>
  );
};
