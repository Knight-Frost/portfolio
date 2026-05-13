import { experience, education } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience and education"
      className="border-b border-border-subtle py-24 sm:py-32"
    >
      <div className="container-page">
        <SectionHeading
          index="05"
          eyebrow="Experience & Education"
          title="A timeline of what I've built and what I've studied."
        />

        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          {/* timeline */}
          <div className="relative">
            <span className="section-label">Engineering work</span>
            <ol className="relative mt-6 space-y-8 border-l border-border-subtle pl-6">
              {experience.map((e, i) => (
                <Reveal as="li" key={`${e.title}-${i}`} delay={i * 0.04}>
                  <span
                    aria-hidden
                    className="absolute -left-[5px] mt-2 inline-block h-2 w-2 rounded-full border border-accent bg-bg"
                  />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                      {e.when}
                    </span>
                    <h3 className="text-[16px] font-medium text-fg">
                      {e.title}
                    </h3>
                  </div>
                  <p className="mt-1 text-[13.5px] text-fg-muted">
                    {e.subtitle}
                  </p>
                  <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-fg-muted">
                    {e.detail}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {e.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          {/* education */}
          <div>
            <span className="section-label">Education</span>
            <div className="mt-6 flex flex-col gap-4">
              {education.map((edu, i) => (
                <Reveal
                  key={edu.school}
                  delay={i * 0.05}
                  className="card-surface p-6"
                >
                  <h3 className="text-[16px] font-medium text-fg">
                    {edu.school}
                  </h3>
                  <p className="mt-1 text-[13.5px] text-fg-muted">
                    {edu.degree}
                  </p>
                  {edu.location && (
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-fg-subtle">
                      {edu.location}
                    </p>
                  )}
                  {edu.detail && (
                    <p className="mt-4 border-t border-border-subtle pt-4 text-[13.5px] leading-relaxed text-fg-muted">
                      {edu.detail}
                    </p>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
