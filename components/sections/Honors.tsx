"use client";

import { Trophy } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { honorsAndAwards } from "@/data/linkedin";

export default function Honors() {
  return (
    <section
      id="awards"
      className="relative z-10 section-padding"
      aria-label="Honors and awards section"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Honors & Awards"
          subtitle="National and international academic olympiad achievements"
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {honorsAndAwards.map((award, index) => (
            <GlassCard key={`${award.title}-${award.date}`} delay={index * 0.06}>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 text-emerald-400">
                  <Trophy className="h-5 w-5" />
                </div>
                <div>
                  <p className="mb-1 text-xs text-white/40">{award.date}</p>
                  <h3 className="mb-1 font-semibold leading-snug">{award.title}</h3>
                  <p className="mb-2 text-xs text-cyan-400">{award.issuer}</p>
                  <p className="text-sm text-white/55">{award.detail}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
