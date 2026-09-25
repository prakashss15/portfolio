import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="Grounded in what I've actually used across coursework and shipped projects."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-border bg-bg-elevated p-6 transition-colors hover:border-fg-subtle/40">
                <h3 className="mb-4 text-sm font-semibold tracking-wide text-fg-subtle uppercase">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-white/[0.03] px-3 py-1 text-sm text-fg-muted transition-colors group-hover:text-fg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
