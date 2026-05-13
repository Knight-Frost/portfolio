import { mission, profile } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Mission() {
  return (
    <section
      id="about"
      aria-label="About"
      className="border-b border-border-subtle py-24 sm:py-32"
    >
      <div className="container-page">
        <SectionHeading
          index="02"
          eyebrow="About"
          title="Software is infrastructure for the things people depend on. I build it that way."
          description={profile.intro}
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border/60 sm:grid-cols-3">
          {mission.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 0.06}
              className="flex flex-col gap-3 bg-bg-elevated p-7"
            >
              <span className="section-label">{m.label}</span>
              <p className="text-[15.5px] leading-relaxed text-fg">{m.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
