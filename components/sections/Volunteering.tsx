"use client";

import { Heart } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { volunteerWork } from "@/data/linkedin";

export default function Volunteering() {
  return (
    <section
      id="volunteering"
      className="relative z-10 section-padding"
      aria-label="Volunteering section"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Volunteering"
          subtitle="Community service and social impact organizations"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {volunteerWork.map((item, index) => (
            <GlassCard key={item.organization} delay={index * 0.08}>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="mb-1 font-semibold">{item.organization}</h3>
              <p className="mb-2 text-xs text-emerald-400">
                {item.role} · Since {item.since}
              </p>
              <p className="text-sm text-white/55">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
