import { projects, alsoBuilt } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { ProjectCard } from "./project-card";
import { Reveal } from "./reveal";

export function Projects() {
  return (
    <section
      id="work"
      aria-label="Selected work"
      className="border-b border-border-subtle py-24 sm:py-32"
    >
      <div className="container-page">
        <SectionHeading
          index="03"
          eyebrow="Selected Work"
          title="Six systems. Multi-role permissions, ledger-grade payments, public-data APIs, hardened deploys."
          description="Each project is presented as a case, not a screenshot. What problem it solved, how I built it, and why it matters."
        />

        <div>
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.04}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 border-t border-border-subtle pt-10">
          <span className="section-label">Also built</span>
          <ul className="mt-5 grid gap-4 sm:grid-cols-3">
            {alsoBuilt.map((a) => (
              <li
                key={a.name}
                className="card-surface flex flex-col gap-2 p-5 transition-colors hover:border-border-strong"
              >
                <span className="text-sm font-medium text-fg">{a.name}</span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.15em] text-fg-subtle">
                  {a.stack}
                </span>
                <span className="text-[13.5px] leading-relaxed text-fg-muted">
                  {a.note}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
