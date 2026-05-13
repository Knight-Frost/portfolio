import { research, languages } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Research() {
  return (
    <section
      id="research"
      aria-label="Research and languages"
      className="border-b border-border-subtle py-24 sm:py-32"
    >
      <div className="container-page">
        <SectionHeading
          index="06"
          eyebrow="Research & Beyond"
          title="The questions I think about when I'm not writing code."
          description="I care about what software does to the people who use it. Not just whether it ships."
        />

        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          {/* papers */}
          <div className="space-y-4">
            {research.map((r, i) => (
              <Reveal
                key={r.title}
                delay={i * 0.05}
                className="card-surface group flex flex-col gap-3 p-7 transition-colors hover:border-border-strong"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                    {r.date}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-fg-subtle">
                    {r.course}
                  </span>
                </div>
                <h3 className="heading-sans text-balance text-[19px] font-medium leading-snug text-fg transition-colors group-hover:text-accent-bright sm:text-[20px]">
                  {r.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-fg-muted">
                  {r.summary}
                </p>
              </Reveal>
            ))}
          </div>

          {/* languages */}
          <Reveal>
            <div className="card-surface flex flex-col gap-5 p-7">
              <span className="section-label">Spoken languages</span>
              <ul className="flex flex-col gap-3">
                {languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-baseline justify-between gap-3 border-b border-border-subtle pb-3 last:border-b-0 last:pb-0"
                  >
                    <span className="text-[15px] font-medium text-fg">
                      {l.name}
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
