import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <ol className="relative space-y-8 border-l border-border pl-8">
          {education.map((entry, i) => (
            <li key={entry.institution} className="relative">
              <Reveal delay={i * 0.08} y={16}>
                <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg-elevated text-accent-2">
                  <GraduationCap size={15} />
                </span>
                <div className="rounded-2xl border border-border bg-bg-elevated p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-fg">{entry.institution}</h3>
                    <span className="font-mono text-xs text-fg-subtle">{entry.duration}</span>
                  </div>
                  <p className="mt-1 text-sm text-fg-muted">{entry.degree}</p>
                  {entry.details && (
                    <p className="mt-2 text-sm text-fg-subtle">{entry.details}</p>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
