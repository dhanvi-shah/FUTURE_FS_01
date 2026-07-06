"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

const socialLinks = [
  { icon: Github, href: siteConfig.github, label: "GitHub" },
  { icon: Linkedin, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-white/50">
          Designed & Built by{" "}
          <span className="text-white/80">{siteConfig.name}</span>
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="flex h-10 w-10 items-center justify-center rounded-full glass glass-hover text-white/60 transition-colors hover:text-emerald-400"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
