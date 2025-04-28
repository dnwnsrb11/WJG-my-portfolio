"use client";

import Lottie from "lottie-react";
import walkAnimation from "@/assets/lottie/walkAnimation.json";

interface WalkAnimationProps {
  width: number;
  height: number;
}

export const WalkAnimation = ({ width, height }: WalkAnimationProps) => {
  return (
    <div style={{ width, height }}>
      <Lottie animationData={walkAnimation} loop={true} />
    </div>
  );
};
