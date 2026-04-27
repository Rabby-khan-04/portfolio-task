"use client";

import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Cursor() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={40}
      innerScale={1}
      outerScale={1.25}
      outerAlpha={0}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
      showSystemCursor={true}
      innerStyle={{
        backgroundColor: "#3bc2fe",
      }}
      outerStyle={{
        border: "3px solid #3bc2fe",
      }}
    />
  );
}
