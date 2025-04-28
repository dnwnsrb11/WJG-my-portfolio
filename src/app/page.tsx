export default function Home() {
  const Velog = "/img/velog.jpg";
  const Git = "/img/github.svg";
  const Notion = "/img/notion.svg";
  return (
    <section className="flex flex-col items-center pt-20">
      <article>
        <div className="text-7xl flex flex-col gap-2 items-center">
          <h1>문제 해결의 길을 걷는</h1>
          <h1>
            <span className="text-title font-bold">FrontEnd 개발자</span>입니다
          </h1>
        </div>
        <div className="mt-10 text-center">
          <p className="text-xl font-light">
            자세한 저의 <span className="font-bold text-title">프로젝트</span> 확인이 가능합니다.
          </p>
        </div>
      </article>
      <article className="bg-background py-5 px-14 rounded-2xl mt-4 flex gap-40">
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
      </article>
    </section>
  );
}
