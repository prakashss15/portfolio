"use client";

import { ExternalLink, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { GithubIcon } from "./icons";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex h-full flex-col rounded-2xl border border-border bg-bg-elevated p-6 transition-shadow hover:shadow-2xl hover:shadow-indigo-950/40"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--x,50%) var(--y,0%), rgba(99,102,241,0.12), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-fg">{project.name}</h3>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.name} on GitHub`}
          className="shrink-0 text-fg-subtle transition-colors hover:text-fg"
          onClick={(e) => e.stopPropagation()}
        >
          <GithubIcon size={18} />
        </a>
      </div>

      <p className="relative mt-2 text-sm text-fg-muted">{project.subtitle}</p>

      <p className="relative mt-4 line-clamp-3 text-sm leading-relaxed text-fg-muted">
        {project.solution}
      </p>

      <div className="relative mt-5 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-white/[0.03] px-2.5 py-0.5 font-mono text-[11px] text-fg-muted"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="rounded-full border border-border bg-white/[0.03] px-2.5 py-0.5 font-mono text-[11px] text-fg-subtle">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      <div className="relative mt-6 flex items-center gap-4 border-t border-border pt-4">
        <button
          onClick={() => onOpen(project)}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-2 transition-colors hover:text-fg"
        >
          View details <ArrowUpRight size={14} />
        </button>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
        >
          Code <ExternalLink size={13} />
        </a>
      </div>
    </motion.div>
  );
}
