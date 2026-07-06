"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/portfolio";
import { additionalNavLinks } from "@/data/linkedin";
import { cn } from "@/lib/utils";

const allNavLinks = [...navLinks, ...additionalNavLinks];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = allNavLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "glass py-3" : "bg-transparent py-5"
        )}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-lg font-bold tracking-tight"
          >
            <span className="gradient-text">{siteConfig.name.split(" ")[0]}</span>
            <span className="text-white/80">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {allNavLinks.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "rounded-lg px-4 py-2 text-sm transition-colors",
                      activeSection === id
                        ? "text-emerald-400"
                        : "text-white/60 hover:text-white"
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
            <li>
              <button
                onClick={() => handleNavClick("#contact")}
                className="ml-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
              >
                Get in Touch
              </button>
            </li>
          </ul>

          <button
            className="rounded-lg p-2 text-white/80 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[60px] z-40 glass mx-4 rounded-2xl p-6 md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {allNavLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full rounded-lg px-4 py-3 text-left text-white/80 transition-colors hover:bg-white/5 hover:text-emerald-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="mt-2 w-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 py-3 text-sm font-medium text-black"
                >
                  Get in Touch
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
