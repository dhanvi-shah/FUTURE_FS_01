"use client";

import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      className="relative z-10 section-padding"
      aria-label="Education section"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Education"
          subtitle="Academic foundation in computer science and engineering"
        />

        <GlassCard>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
              <GraduationCap className="h-8 w-8 text-emerald-400" />
            </div>
            <div className="flex-1">
              <p className="mb-1 text-xs font-medium tracking-wider text-emerald-400 uppercase">
                {education.period}
              </p>
              <h3 className="mb-1 text-xl font-bold">{education.institution}</h3>
              <p className="text-white/70">
                {education.degree} in {education.field}
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
