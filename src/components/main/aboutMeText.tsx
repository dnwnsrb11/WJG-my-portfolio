"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export const AboutMeText = () => {
  const testimonials = [
    {
      quote:
        "디자인을 통해 보이는 것을 만들다, 개발을 배우며 동작하는 세계에 매료되었습니다. 단순히 시각적 요소에 그치지 않고, 내가 만든 작업이 사람들의 일상에 적용되고 살아 움직이는 그 순간을 직접 만들어보고 싶었습니다. 이런 열망이 저를 프론트엔드 개발자로 이끌었습니다.",
      name: "디자이너에서 개발자로",
      title: "보이는 것에서 동작하는 것으로",
    },
    {
      quote:
        "화려함보다는 흐름, 눈에 띄는 것보다 사용자의 손길을 먼저 생각합니다. SSAFY 프로젝트에서 두 차례 삼성 임직원 테스트를 진행하며, 다양한 환경과 사용 패턴을 고려하는 중요성을 절감했습니다. 단순한 입력창 하나, 버튼 하나에도 수많은 경우의 수를 떠올리며, 언제나 안정적으로 동작하는 서비스를 만들기 위해 고민합니다.",
      name: "사용자를 배려하는 전문가",
      title: "섬세한 고민으로 더 나은 경험을 설계합니다",
    },
    {
      quote:
        "4년간의 학부 생활, 2년간의 디자이너 경험, 그리고 SSAFY에서의 1년. 다양한 팀과 함께하며 저는 ‘소통’이 가장 강력한 협업의 도구임을 배웠습니다. 각자의 생각과 고민을 공유하고, 이를 바탕으로 일정을 조율하고 역할을 분담하며 팀워크의 시너지를 끌어냅니다.",
      name: "어디서든 적응하는 팀원",
      title: "기획부터 개발까지, 함께하는 일에 강합니다",
    },
    {
      quote:
        "문제를 마주했을 때, 저에겐 두려움보다 호기심이 먼저 찾아옵니다. 새로움을 만들고, 그것이 사용자에게 어떤 경험을 주는지 지켜보는 것이 가장 큰 즐거움입니다. 언제나 새로운 기능과 기술에 도전하며, 그 여정을 끝낸 후 돌아보는 과정에서 진짜 성장과 보람을 느낍니다.",
      name: "문제 해결을 즐기는 사람",
      title: "도전 속에서 배우고, 해결하며 나아갑니다",
    },
  ];

  return (
    <section>
      <div className="py-4 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
      </div>
    </section>
  );
};
