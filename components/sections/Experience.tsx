"use client";

import { motion } from "framer-motion";
import { Briefcase, Leaf } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 section-padding"
      aria-label="Experience section"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Work Experience"
          subtitle="Professional journey and impactful contributions"
        />

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-cyan-500/30 to-transparent md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, index) => {
            const isLeftSide = index % 2 === 0;

            return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative mb-12 flex flex-col md:flex-row",
                isLeftSide ? "md:flex-row-reverse" : ""
              )}
            >
              <div className="hidden md:block md:w-1/2" />

              <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-emerald-500 bg-black md:left-1/2">
                {exp.highlight ? (
                  <Leaf className="h-3.5 w-3.5 text-emerald-400" />
                ) : (
                  <Briefcase className="h-3.5 w-3.5 text-cyan-400" />
                )}
              </div>

              <div
                className={cn(
                  "ml-12 md:ml-0 md:w-1/2",
                  isLeftSide ? "md:pr-12" : "md:pl-12"
                )}
              >
                <div
                  className={cn(
                    "glass glass-hover rounded-2xl p-6 text-left",
                    exp.highlight && "border-emerald-500/20 glow-emerald"
                  )}
                >
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="text-xs text-emerald-400">{exp.period}</span>
                    <span className="text-xs text-white/30">•</span>
                    <span className="text-xs text-white/40">{exp.location}</span>
                  </div>

                  <h3 className="text-lg font-bold">{exp.company}</h3>
                  <p className="mb-3 text-sm text-cyan-400">{exp.role}</p>
                  <p className="mb-4 text-sm text-white/60">{exp.description}</p>

                  <ul className="space-y-2.5">
                    {exp.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2.5 text-xs text-white/50"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
