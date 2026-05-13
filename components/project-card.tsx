"use client";

import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

const statusStyles: Record<Project["status"], string> = {
  Shipped: "text-signal-green border-signal-green/40 bg-signal-green/[0.08]",
  "In Progress": "text-accent border-accent/40 bg-accent/[0.08]",
  Concept: "text-fg-muted border-border bg-bg-subtle/60",
  Academic: "text-fg-muted border-border bg-bg-subtle/60",
};

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className="group relative grid grid-cols-1 gap-8 border-t border-border-subtle py-12 transition-colors first:border-t-0 sm:py-16 lg:grid-cols-[1fr_1.4fr] lg:gap-14"
    >
      {/* left column: meta */}
      <div className="flex flex-col gap-5">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
            {project.year}
          </span>
        </div>

        <div>
          <div
            className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.15em] ${
              statusStyles[project.status]
            }`}
          >
            <span className="mr-1.5 inline-block h-1 w-1 rounded-full bg-current opacity-80" />
            {project.status}
          </div>
        </div>

        <h3 className="heading-sans text-2xl font-medium text-fg transition-colors group-hover:text-accent-bright sm:text-3xl">
          {project.name}
        </h3>

        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-muted">
          {project.category}
        </p>

        <p className="text-sm text-fg-subtle">{project.role}</p>

        {project.links && project.links.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-bg-elevated px-3 py-1.5 text-xs text-fg-muted transition-all hover:border-accent/50 hover:text-fg"
              >
                {l.label}
                <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* right column: content */}
      <div className="flex flex-col gap-6">
        <p className="text-balance text-xl leading-snug text-fg sm:text-[1.55rem] sm:leading-[1.25]">
          {project.oneLiner}
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <span className="section-label">Problem</span>
            <p className="text-[14.5px] leading-relaxed text-fg-muted">
              {project.problem}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="section-label">Why it matters</span>
            <p className="text-[14.5px] leading-relaxed text-fg-muted">
              {project.whyItMatters}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="section-label">Key features</span>
          <ul className="grid gap-2 sm:grid-cols-2">
            {project.features.map((f) => (
              <li
                key={f}
                className="flex gap-2.5 text-[14px] leading-relaxed text-fg"
              >
                <span
                  aria-hidden
                  className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-accent"
                />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <span className="section-label">Stack</span>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
