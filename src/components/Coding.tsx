import { Code2, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { codingProfile } from "@/data/education";
import { profile } from "@/data/profile";

export default function Coding() {
  return (
    <section id="coding" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Coding" title="Problem Solving & Competitive Programming" />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-fg-muted">{codingProfile.summary}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {codingProfile.focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border bg-bg-elevated px-3 py-1.5 text-sm text-fg-muted"
                >
                  {area}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2} className="grid grid-cols-1 gap-4">
            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-border bg-bg-elevated p-6 transition-colors hover:border-fg-subtle/40"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-accent-2">
                  <Code2 size={20} />
                </span>
                <div>
                  <p className="font-medium text-fg">LeetCode</p>
                  <p className="text-sm text-fg-muted">@Prakashss15</p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-fg-subtle transition-colors group-hover:text-fg" />
            </a>

            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-border bg-bg-elevated p-6 transition-colors hover:border-fg-subtle/40"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-accent-2">
                  <GithubIcon size={20} />
                </span>
                <div>
                  <p className="font-medium text-fg">GitHub</p>
                  <p className="text-sm text-fg-muted">@prakashss15</p>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-fg-subtle transition-colors group-hover:text-fg" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
