"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProcessCard from "./ProcessCard";

const ProcessStackCard = ({ i, item, progress, range, targetScale }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transformOrigin: "top",
        }}
      >
        <ProcessCard {...item} />
      </motion.div>
    </div>
  );
};

export default ProcessStackCard;
