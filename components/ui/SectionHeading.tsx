"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={cn("mb-16 text-center", className)}
    >
      <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title.split(" ").map((word, i) =>
          i === title.split(" ").length - 1 ? (
            <span key={i} className="gradient-text">
              {word}
            </span>
          ) : (
            <span key={i}>{word} </span>
          )
        )}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-base text-white/50 sm:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
    </motion.div>
  );
}
