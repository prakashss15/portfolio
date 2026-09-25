import { Code2, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="mb-3 font-mono text-sm tracking-wider text-accent-2 uppercase">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Let&apos;s Build Something Meaningful
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-fg-muted">
            Open to software engineering internships and roles. The fastest way to reach me
            is LinkedIn or GitHub.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:scale-105"
          >
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-5 py-2.5 text-sm font-medium text-fg transition-transform hover:scale-105"
          >
            <GithubIcon size={16} /> GitHub
          </a>
          <a
            href={profile.links.leetcode}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-5 py-2.5 text-sm font-medium text-fg transition-transform hover:scale-105"
          >
            <Code2 size={16} /> LeetCode
          </a>
          <a
            href={profile.links.resume}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-5 py-2.5 text-sm font-medium text-fg transition-transform hover:scale-105"
          >
            <Download size={16} /> Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}
