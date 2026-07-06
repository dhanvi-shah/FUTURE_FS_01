"use client";

import { Users, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { leadershipRoles } from "@/data/linkedin";

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="relative z-10 section-padding"
      aria-label="Leadership and involvement section"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Leadership & Involvement"
          subtitle="Campus leadership, student council, and community roles from LinkedIn"
        />

        <div className="space-y-6">
          {leadershipRoles.map((role, index) => (
            <GlassCard key={role.id} delay={index * 0.08}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  {role.organization.includes("BITS") ? (
                    <GraduationCap className="h-6 w-6" />
                  ) : (
                    <Users className="h-6 w-6" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="text-xs text-emerald-400">{role.period}</span>
                    <span className="text-xs text-white/30">•</span>
                    <span className="text-xs text-white/40">{role.location}</span>
                  </div>
                  <h3 className="text-lg font-bold">{role.title}</h3>
                  <p className="mb-3 text-sm text-cyan-400">{role.organization}</p>
                  <ul className="space-y-1.5">
                    {role.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-white/55"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
