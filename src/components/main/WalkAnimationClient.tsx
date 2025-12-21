"use client";

import dynamic from "next/dynamic";

const WalkAnimation = dynamic(
  () =>
    import("./walkAnimation").then((mod) => ({
      default: mod.WalkAnimation,
    })),
  { ssr: false }
);

interface Props {
  width: number;
  height: number;
}

export default function WalkAnimationClient({ width, height }: Props) {
  return <WalkAnimation width={width} height={height} />;
}
