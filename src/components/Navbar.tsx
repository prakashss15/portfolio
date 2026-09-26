"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GithubIcon } from "./icons";
import { profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "coding", label: "Coding" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl border px-4 transition-all duration-300 ${
            scrolled
              ? "glass-nav border-border py-2 shadow-lg shadow-elevated"
              : "border-transparent py-3"
          }`}
        >
          <button
            onClick={() => handleNavClick("home")}
            className="font-mono text-sm font-semibold tracking-tight text-fg"
            aria-label="Go to home section"
          >
            PS<span className="text-accent-2">.</span>
          </button>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                    active === link.id
                      ? "text-fg"
                      : "text-fg-muted hover:text-fg"
                  }`}
                >
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-nav-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-fg-muted transition-colors hover:text-fg"
            >
              <GithubIcon size={18} />
            </a>
            <ThemeToggle />
            <button
              onClick={() => handleNavClick("contact")}
              className="rounded-full bg-fg px-4 py-1.5 text-sm font-medium text-bg transition-transform hover:scale-105"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              className="text-fg"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-nav mt-2 rounded-2xl border border-border p-3 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`block w-full rounded-lg px-3 py-2 text-left text-sm ${
                      active === link.id
                        ? "bg-nav-pill text-fg"
                        : "text-fg-muted"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
}
