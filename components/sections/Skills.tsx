"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Server, Cloud } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { skillCategories } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconMap = {
  Code2,
  Layout,
  Server,
  Cloud,
};

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 section-padding" aria-label="Skills section">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools and technologies I use to bring ideas to life"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            const isEmerald = category.color === "emerald";

            return (
              <GlassCard key={category.title} delay={index * 0.1}>
                <div
                  className={cn(
                    "mb-4 flex h-12 w-12 items-center justify-center rounded-xl",
                    isEmerald
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-cyan-500/10 text-cyan-400"
                  )}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-lg font-semibold">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={false}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className={cn(
                        "rounded-lg px-3 py-1.5 text-xs font-medium",
                        isEmerald
                          ? "bg-emerald-500/10 text-emerald-300"
                          : "bg-cyan-500/10 text-cyan-300"
                      )}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
