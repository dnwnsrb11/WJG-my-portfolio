import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const About = () => {
  const ogImageUrl = "/img/testPortfolio.png"; // 루트 상대 경로 문자열 사용
  return (
    <section>
      <div>
        <h1>About me</h1>
        <div>
          <TextGenerateEffect words="hello" />
        </div>
        <h1>제 이름은 우준규</h1>
        <img src={ogImageUrl} alt="testImg" />
      </div>
    </section>
  );
};

export default About;
