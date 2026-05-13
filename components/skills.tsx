import { skills } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="border-b border-border-subtle py-24 sm:py-32"
    >
      <div className="container-page">
        <SectionHeading
          index="04"
          eyebrow="Skills Matrix"
          title="The toolkit: categorized, honest, and what I actually ship with."
          description="No bar charts. No percentages. Just the languages, frameworks, and infrastructure I use to build real systems."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => (
            <Reveal
              key={group.category}
              delay={i * 0.04}
              className="flex flex-col gap-4 bg-bg-elevated p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-fg">
                  {group.category}
                </h3>
                <span className="font-mono text-[10px] text-fg-subtle">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="flex flex-col gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[13.5px] leading-snug text-fg-muted transition-colors hover:text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
