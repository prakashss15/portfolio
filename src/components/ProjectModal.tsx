"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { GithubIcon } from "./icons";
import type { Project } from "@/data/projects";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} details`}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-bg-elevated p-6 sm:p-8"
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close project details"
              className="absolute top-5 right-5 text-fg-subtle transition-colors hover:text-fg"
            >
              <X size={20} />
            </button>

            <h3 className="pr-8 text-2xl font-semibold text-fg">{project.name}</h3>
            <p className="mt-1 text-fg-muted">{project.subtitle}</p>

            {project.note && (
              <p className="mt-3 rounded-lg border border-border bg-subtle px-3 py-2 text-xs text-fg-subtle">
                {project.note}
              </p>
            )}

            <div className="mt-6 space-y-5">
              <Field label="Problem" text={project.problem} />
              <Field label="Solution" text={project.solution} />
              {project.architecture && <Field label="Architecture" text={project.architecture} />}

              <div>
                <h4 className="mb-2 text-xs font-semibold tracking-wide text-fg-subtle uppercase">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-subtle px-2.5 py-0.5 font-mono text-[11px] text-fg-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-xs font-semibold tracking-wide text-fg-subtle uppercase">
                  Key Features
                </h4>
                <ul className="space-y-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-fg-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {project.challenges && <Field label="Challenges" text={project.challenges} />}
              {project.learned && <Field label="What I Learned" text={project.learned} />}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg transition-transform hover:scale-105"
              >
                <GithubIcon size={16} /> View Repository
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-fg transition-transform hover:scale-105"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <h4 className="mb-1.5 text-xs font-semibold tracking-wide text-fg-subtle uppercase">
        {label}
      </h4>
      <p className="text-sm leading-relaxed text-fg-muted">{text}</p>
    </div>
  );
}
