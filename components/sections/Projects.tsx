"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Leaf, Recycle, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, type ProjectCategory } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconMap = {
  Brain,
  Leaf,
  Recycle,
};

const filters: ProjectCategory[] = ["All", "AI", "Full Stack", "Enterprise"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative z-10 section-padding"
      aria-label="Projects section"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Featured Projects"
          subtitle="Building intelligent solutions that create measurable impact"
        />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                activeFilter === filter
                  ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-black"
                  : "glass glass-hover text-white/60"
              )}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const Icon = iconMap[project.icon as keyof typeof iconMap] ?? Brain;

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={cn(
                    "group glass glass-hover relative overflow-hidden rounded-2xl p-6",
                    `bg-gradient-to-br ${project.gradient}`
                  )}
                >
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/5 blur-2xl transition-all group-hover:bg-emerald-500/10" />

                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-emerald-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="mb-4 text-sm text-white/60">{project.description}</p>

                  <ul className="mb-4 space-y-1.5">
                    {project.features.slice(0, 5).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs text-white/50"
                      >
                        <span className="h-1 w-1 rounded-full bg-emerald-400" />
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 5 && (
                      <li className="text-xs text-white/30">
                        +{project.features.length - 5} more features
                      </li>
                    )}
                  </ul>

                  {project.impact && (
                    <div className="mb-4 flex items-start gap-2 rounded-lg bg-emerald-500/10 p-3">
                      <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <p className="text-xs text-emerald-300">{project.impact}</p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
