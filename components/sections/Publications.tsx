"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { publications } from "@/data/portfolio";

export default function Publications() {
  return (
    <section
      id="publications"
      className="relative z-10 section-padding"
      aria-label="Publications section"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Research & Publications"
          subtitle="Exploring the intersection of AI and global challenges"
        />

        {publications.map((pub) => (
          <GlassCard key={pub.title} className="group">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5">
                <Image
                  src={pub.logo}
                  alt={`${pub.journal} logo`}
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-bold group-hover:text-emerald-400 transition-colors">
                    {pub.title}
                  </h3>
                  <span className="rounded-full bg-white/5 px-3 py-0.5 text-xs text-white/40">
                    {pub.year}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-white/60">{pub.description}</p>
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-400 transition-colors hover:text-emerald-300"
                    aria-label={`Read publication: ${pub.title}`}
                  >
                    Read Publication
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
