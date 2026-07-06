"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutText, aboutHighlights } from "@/data/portfolio";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative z-10 section-padding"
      aria-label="About section"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building technology that makes a difference"
        />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md lg:mx-0"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl glass glow-cyan">
              <div className="aspect-[4/5] relative">
                <Image
                  src="/profile.png"
                  alt="Dhanvi Shah - Software Engineer"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4">
                <p className="text-sm font-medium text-emerald-400">Based in Dubai, UAE</p>
                <p className="text-xs text-white/50">BITS Pilani Dubai • CS Engineering</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-8 text-lg leading-relaxed text-white/70">{aboutText}</p>

            <div className="flex flex-wrap gap-3">
              {aboutHighlights.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass glass-hover cursor-default rounded-full px-4 py-2 text-sm text-white/80"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
