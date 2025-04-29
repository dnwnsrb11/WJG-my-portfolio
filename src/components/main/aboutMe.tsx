import { History } from "./history";

export const AboutMe = () => {
  return (
    <section className="pt-24 pb-16 w-full">
      <div>
        <section className="flex justify-between items-end mt-4">
          <div className="relative z-10 mb-2">
            <div className="mb-4">
              <p className="text-2xl md:text-3xl font-normal text-gray-400 dark:text-gray-300 opacity-80">
                안녕하세요 저는
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 dark:from-white dark:to-gray-400 text-transparent bg-clip-text">
              우준규
              <span className="text-2xl md:text-3xl font-normal ml-2 text-gray-400 dark:text-gray-300">
                입니다.
              </span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-orange-600 rounded-full mt-4"></div>
          </div>
          <h3 className="text-[12vw] leading-none text-gray-800/5 dark:text-white/5 font-extrabold bottom-2 -left-4 z-0 tracking-tighter">
            HELLO
          </h3>
        </section>

        <section>
          <History />
        </section>
      </div>
    </section>
  );
};
