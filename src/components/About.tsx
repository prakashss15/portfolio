import { GraduationCap, Target, Code2, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="About" title="A bit about how I work" />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-fg-muted">{profile.about}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass rounded-2xl border border-border p-6">
              <h3 className="mb-5 font-mono text-sm text-fg-subtle">profile.json</h3>
              <dl className="space-y-4">
                <div className="flex items-start gap-3">
                  <GraduationCap size={18} className="mt-0.5 text-accent-2" />
                  <div>
                    <dt className="text-xs text-fg-subtle">Education</dt>
                    <dd className="text-sm text-fg">{profile.profileCard.education}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Target size={18} className="mt-0.5 text-accent-2" />
                  <div>
                    <dt className="text-xs text-fg-subtle">Focus</dt>
                    <dd className="text-sm text-fg">{profile.profileCard.focus}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code2 size={18} className="mt-0.5 text-accent-2" />
                  <div>
                    <dt className="text-xs text-fg-subtle">Primary Language</dt>
                    <dd className="text-sm text-fg">{profile.profileCard.language}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 text-accent-2" />
                  <div>
                    <dt className="text-xs text-fg-subtle">Status</dt>
                    <dd className="text-sm text-fg">{profile.profileCard.status}</dd>
                  </div>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
