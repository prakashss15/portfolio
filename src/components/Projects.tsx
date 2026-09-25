"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { featuredProjects, moreRepos, type Project } from "@/data/projects";
import { profile } from "@/data/profile";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          description="Pulled directly from my GitHub — real repositories, real READMEs."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} onOpen={setActive} />
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14">
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-fg">More on GitHub</h3>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-accent-2 transition-colors hover:text-fg"
            >
              View all projects <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {moreRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.github}
                target="_blank"
                rel="noreferrer"
                className="group rounded-xl border border-border bg-bg-elevated p-4 transition-colors hover:border-fg-subtle/40"
              >
                <div className="flex items-center justify-between">
                  <span className="truncate text-sm font-medium text-fg">{repo.name}</span>
                  <GithubIcon size={14} className="shrink-0 text-fg-subtle transition-colors group-hover:text-fg" />
                </div>
                <p className="mt-2 line-clamp-2 text-xs text-fg-muted">{repo.description}</p>
                <span className="mt-3 inline-block font-mono text-[11px] text-fg-subtle">
                  {repo.language}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
