"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

const fadeUp = (delay = 0) => ({
  initial: false as const,
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
});

const typingTexts = [
  "intelligent software",
  "AI-powered solutions",
  "scalable products",
  "real-world impact",
];

function TypingAnimation() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typingTexts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.slice(0, displayText.length + 1));
          if (displayText.length === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(current.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % typingTexts.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <span className="gradient-text">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-emerald-400"
      />
    </span>
  );
}

function DeveloperWorkspace() {
  const codeLines = [
    { indent: 0, content: 'const build = async () => {', color: "text-cyan-400" },
    { indent: 1, content: 'const ai = new Intelligence();', color: "text-emerald-400" },
    { indent: 1, content: 'await ai.learn(patterns);', color: "text-white/70" },
    { indent: 1, content: 'return ai.solve(problems);', color: "text-emerald-300" },
    { indent: 0, content: '};', color: "text-cyan-400" },
  ];

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 blur-2xl" />
      <div className="relative glass glow-emerald overflow-hidden rounded-2xl border border-white/10">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-white/40">dhanvi.sh — workspace</span>
        </div>
        <div className="p-6 font-mono text-sm">
          {codeLines.map((line, i) => (
            <div
              key={i}
              className="leading-7"
              style={{ paddingLeft: `${line.indent * 1.5}rem` }}
            >
              <span className={line.color}>{line.content}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 p-4">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-emerald-500/50">
              <Image
                src="/profile.png"
                alt="Dhanvi Shah"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div>
              <p className="text-sm font-medium">Dhanvi Shah</p>
              <p className="text-xs text-white/50">Building the future...</p>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="ml-auto"
            >
              <Sparkles className="h-5 w-5 text-emerald-400" />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 -top-4 glass rounded-xl px-4 py-2 text-xs text-emerald-400"
      >
        AI Powered
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-2 text-xs text-cyan-400"
      >
        Full Stack
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center section-padding pt-32"
      aria-label="Hero section"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.p
            {...fadeUp(0.1)}
            className="mb-4 text-sm font-medium tracking-widest text-emerald-400 uppercase"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            {...fadeUp(0.15)}
            className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{siteConfig.name}</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mb-6 text-sm text-white/60 sm:text-base"
          >
            {siteConfig.roles.join(" • ")}
          </motion.p>

          <motion.p
            {...fadeUp(0.25)}
            className="mb-4 max-w-xl text-lg text-white/70 sm:text-xl"
          >
            I build <TypingAnimation /> that solves real-world problems using
            AI, scalable backend systems, and modern web technologies.
          </motion.p>

          <motion.div
            {...fadeUp(0.3)}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-black transition-all hover:shadow-lg hover:shadow-emerald-500/25"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-full glass glass-hover px-7 py-3.5 text-sm font-semibold text-white transition-all"
            >
              Contact Me
            </button>
          </motion.div>
        </div>

        <DeveloperWorkspace />
      </div>
    </section>
  );
}
