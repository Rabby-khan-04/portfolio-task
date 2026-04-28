"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
      setVisible(true); // cursor is inside viewport
    };

    const handleLeave = () => {
      setVisible(false); // cursor left window
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseout", handleLeave);

    const targets = document.querySelectorAll(
      "a, button, input, textarea, select, .link",
    );

    targets.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        animate={{
          x: mouse.x - 20,
          y: mouse.y - 20,
          scale: hovered ? 1.4 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10 rounded-full border-2 border-[#3bc2fe]"
      />

      {/* Inner dot */}
      <motion.div
        animate={{
          x: mouse.x - 4,
          y: mouse.y - 4,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 900, damping: 40 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-[#3bc2fe]"
      />
    </>
  );
}
