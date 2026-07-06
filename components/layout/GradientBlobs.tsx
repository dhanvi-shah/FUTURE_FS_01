"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    className: "top-[-10%] left-[-5%] h-[500px] w-[500px] bg-emerald-500/10",
    animate: { x: [0, 50, 0], y: [0, 30, 0] },
    duration: 20,
  },
  {
    className: "top-[40%] right-[-10%] h-[600px] w-[600px] bg-cyan-500/8",
    animate: { x: [0, -40, 0], y: [0, 50, 0] },
    duration: 25,
  },
  {
    className: "bottom-[-5%] left-[30%] h-[400px] w-[400px] bg-emerald-500/6",
    animate: { x: [0, 30, 0], y: [0, -40, 0] },
    duration: 18,
  },
];

export default function GradientBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[120px] ${blob.className}`}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
