"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, ExternalLink, Sparkles, Heart, Trophy } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { linkedInPosts, type LinkedInPost } from "@/data/linkedin";
import { cn } from "@/lib/utils";

const filters = ["All", "achievement", "community", "shared"] as const;
type Filter = (typeof filters)[number];

const filterLabels: Record<Filter, string> = {
  All: "All Posts",
  achievement: "Achievements",
  community: "Community",
  shared: "Insights",
};

const typeIcons = {
  achievement: Trophy,
  community: Heart,
  shared: Sparkles,
};

function PostCard({ post, index }: { post: LinkedInPost; index: number }) {
  const Icon = typeIcons[post.type];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="glass glass-hover group flex h-full flex-col rounded-2xl p-6"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A66C2]/15 text-[#0A66C2]">
          <Linkedin className="h-5 w-5" />
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs text-white/45">
          <Icon className="h-3 w-3" />
          {filterLabels[post.type as Filter] ?? post.type}
        </span>
      </div>

      <h3 className="mb-3 text-lg font-bold leading-snug transition-colors group-hover:text-emerald-400">
        {post.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-white/60">{post.excerpt}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
        aria-label={`Read full post on LinkedIn: ${post.title}`}
      >
        Read on LinkedIn
        <ExternalLink className="h-4 w-4" />
      </a>
    </motion.article>
  );
}

export default function BlogPosts() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filtered =
    activeFilter === "All"
      ? linkedInPosts
      : linkedInPosts.filter((p) => p.type === activeFilter);

  return (
    <section
      id="blog"
      className="relative z-10 section-padding"
      aria-label="Blog and LinkedIn posts section"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Blog & Posts"
          subtitle="Thoughts, milestones, and stories from my LinkedIn"
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
              {filterLabels[filter]}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((post, index) => (
              <PostCard key={post.id} post={post} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
