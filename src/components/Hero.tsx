"use client";

import { motion } from "framer-motion";
import { Code2, Download, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div
        className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-3 py-1 font-mono text-xs text-fg-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Open to Software Engineering roles &amp; internships
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl font-bold tracking-tight text-fg sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="gradient-text mt-4 text-xl font-medium sm:text-2xl"
          >
            {profile.headline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/10"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-5 py-2.5 text-sm font-medium text-fg transition-all hover:scale-105 hover:border-fg-subtle"
            >
              <GithubIcon size={16} /> GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-5 py-2.5 text-sm font-medium text-fg transition-all hover:scale-105 hover:border-fg-subtle"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-5 py-2.5 text-sm font-medium text-fg transition-all hover:scale-105 hover:border-fg-subtle"
            >
              <Code2 size={16} /> LeetCode
            </a>
            <a
              href={profile.links.resume}
              download
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-accent-2 underline decoration-accent-2/40 underline-offset-4 transition-colors hover:text-fg"
            >
              <Download size={16} /> Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="glass overflow-hidden rounded-2xl border border-border shadow-2xl shadow-elevated">
            <div className="flex items-center gap-1.5 border-b border-border bg-subtle px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 font-mono text-xs text-fg-subtle">profile.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
              <code>
                <span className="text-fg-subtle">{"// currently building"}</span>{"\n"}
                <span className="text-fuchsia-400">const</span>{" "}
                <span className="text-sky-300">engineer</span> = {"{"}
                {"\n"}  name:{" "}
                <span className="text-emerald-300">&quot;Prakash Satish Sankapal&quot;</span>,{"\n"}
                {"  "}stack:{" "}
                <span className="text-emerald-300">&quot;C++ / Python / Flask&quot;</span>,{"\n"}
                {"  "}focus: [{"\n"}
                {"    "}
                <span className="text-emerald-300">&quot;DSA&quot;</span>,{" "}
                <span className="text-emerald-300">&quot;Backend&quot;</span>,{"\n"}
                {"    "}
                <span className="text-emerald-300">&quot;AI/ML&quot;</span>
                {"\n  "}],{"\n"}
                {"  "}status:{" "}
                <span className="text-emerald-300">&quot;shipping&quot;</span>,{"\n"}
                {"};"}
              </code>
            </pre>
          </div>
          <motion.div
            className="glass absolute -bottom-6 -left-6 hidden rounded-xl border border-border px-4 py-3 font-mono text-xs text-fg-muted shadow-xl sm:block"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-emerald-400">✓</span> build passing
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
