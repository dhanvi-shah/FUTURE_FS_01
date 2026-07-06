"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative z-10 section-padding"
      aria-label="Certifications section"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Certifications"
          subtitle="Continuous learning from world-class institutions"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <GlassCard key={cert.name} delay={index * 0.08} className="group">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500/20">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold leading-snug">{cert.name}</h3>
                  <p className="text-sm text-white/50">{cert.issuer}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
