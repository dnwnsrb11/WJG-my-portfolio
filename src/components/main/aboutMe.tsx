export const AboutMe = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white relative">
          About Me
          <span className="absolute left-0 -bottom-2 w-16 h-1 bg-blue-500 rounded-full"></span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* 학력 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <p className="text-sm text-blue-500 dark:text-blue-400 font-semibold mb-2">
              학력
            </p>
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              대구가톨릭대학교 디지털디자인 졸업
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              (2016.03 ~ 2022.03)
            </p>
          </div>

          {/* SSAFY */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <p className="text-sm text-blue-500 dark:text-blue-400 font-semibold mb-2">
              교육
            </p>
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              삼성 청년 SW 아카데미
              <a
                href="#"
                className="ml-2 text-blue-500 hover:text-blue-600 transition-colors underline"
              >
                🔗
              </a>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              (24.07 ~ 25.06)
            </p>
          </div>

          {/* 이메일 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <p className="text-sm text-blue-500 dark:text-blue-400 font-semibold mb-2">
              이메일
            </p>
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              dnwnsrb11@naver.com
            </p>
          </div>

          {/* 전화번호 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <p className="text-sm text-blue-500 dark:text-blue-400 font-semibold mb-2">
              전화번호
            </p>
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              010-2386-6916
            </p>
          </div>

          {/* 깃허브 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <p className="text-sm text-blue-500 dark:text-blue-400 font-semibold mb-2">
              깃허브
            </p>
            <a
              href="https://github.com/dnwnsrb11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline"
            >
              github.com/dnwnsrb11
            </a>
          </div>

          {/* 블로그 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <p className="text-sm text-blue-500 dark:text-blue-400 font-semibold mb-2">
              블로그
            </p>
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              JUN.log
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
