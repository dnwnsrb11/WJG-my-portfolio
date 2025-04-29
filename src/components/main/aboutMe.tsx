import { History } from "./history";

export const AboutMe = () => {
  return (
    <section className="mt-12 pb-16 w-full">
      <div>
        <section className="flex justify-between items-end mt-4">
          <div className="relative z-10 mb-2">
            <div className="mb-2">
              <p className="text-2xl md:text-3xl font-normal text-gray-400 dark:text-gray-300 opacity-80">
                안녕하세요 저는
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-title">
              우준규
              <span className="text-2xl md:text-3xl font-normal ml-2 text-gray-400 dark:text-gray-300">
                입니다.
              </span>
            </h1>
          </div>
          <h3 className="text-[12vw] leading-none text-gray-800/5 dark:text-white/5 font-extrabold bottom-2 -left-4 z-0 tracking-tighter">
            HELLO
          </h3>
        </section>
        <hr className="w-full border-stroke mb-10" />
        <section className="flex flex-col mx-6 items-center custom:items-start">
          <div className="mb-1">
            <p className="text-xl font-light text-text2">
              저는 이런 <span className="font-bold text-title">활동을</span>{" "}
              하였습니다.
            </p>
          </div>
          <div className="custom:w-full">
            <History />
          </div>
        </section>
      </div>
    </section>
  );
};
