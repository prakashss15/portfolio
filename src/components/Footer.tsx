import { Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-semibold text-fg">{profile.name}</p>
          <p className="text-sm text-fg-muted">
            Building, learning, and solving one problem at a time.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-fg-muted transition-colors hover:text-fg"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-fg-muted transition-colors hover:text-fg"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={profile.links.leetcode}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            className="text-fg-muted transition-colors hover:text-fg"
          >
            <Code2 size={18} />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center font-mono text-xs text-fg-subtle">
        © {year} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
