"use client";

import { Globe } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { languages, additionalCertifications } from "@/data/linkedin";

export default function Languages() {
  return (
    <section
      id="languages"
      className="relative z-10 section-padding"
      aria-label="Languages and additional credentials section"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Languages & More"
          subtitle="Multilingual skills and additional credentials from LinkedIn"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <GlassCard hover={false}>
            <div className="mb-5 flex items-center gap-3">
              <Globe className="h-6 w-6 text-emerald-400" />
              <h3 className="text-lg font-semibold">Languages</h3>
            </div>
            <div className="space-y-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
                >
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-xs text-white/45">{lang.level}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard hover={false}>
            <h3 className="mb-5 text-lg font-semibold">Additional Credentials</h3>
            <div className="space-y-4">
              {additionalCertifications.map((cert) => (
                <div
                  key={cert.name}
                  className="rounded-xl border border-white/5 bg-white/[0.03] p-4"
                >
                  <h4 className="mb-1 text-sm font-medium leading-snug">{cert.name}</h4>
                  <p className="text-xs text-white/45">
                    {cert.issuer} · {cert.year}
                  </p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-xs text-emerald-400 hover:text-emerald-300"
                    >
                      View credential →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
