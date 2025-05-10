import notFoundAnimation from "@/assets/lottie/notFoundAnimation.json";
import Lottie from "lottie-react";

interface NotFoundAnimationProps {
  width: number;
  height: number;
}

export const NotFoundAnimation = ({
  width,
  height,
}: NotFoundAnimationProps) => {
  return (
    <div>
      <Lottie
        animationData={notFoundAnimation}
        loop={true}
        style={{ width, height }}
      />
    </div>
  );
};
