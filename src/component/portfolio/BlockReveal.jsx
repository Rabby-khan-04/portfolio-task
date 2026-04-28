"use client";

import { motion } from "framer-motion";

const BlockReveal = ({ children, color = "#3bc2fe", base = "#0b011d" }) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "100%" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-50 pointer-events-none"
        style={{ backgroundColor: base }}
      />

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-60 pointer-events-none"
        style={{ backgroundColor: color }}
      />

      {/* 📄 CONTENT */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BlockReveal;
