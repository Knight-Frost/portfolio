"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/lib/data";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden border-b border-border-subtle"
    >
      {/* layered ambience */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-60 aurora"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] bg-noise"
      />

      {/* faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)",
        }}
      />

      <div className="container-page relative flex min-h-[88vh] flex-col justify-between pb-16 pt-20 sm:pb-24 sm:pt-28 lg:min-h-[92vh] lg:pt-32">
        {/* top meta */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-subtle"
        >
          <span className="flex items-center gap-1.5">
            <span className="h-px w-6 bg-accent" />
            01 / Introduction
          </span>
          <span className="hidden text-fg-dim sm:inline">/</span>
          <span className="text-fg-muted">{profile.category}</span>
        </motion.div>

        {/* core */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="heading-display text-[clamp(3.5rem,11vw,8.5rem)] text-fg"
          >
            <span className="block">Elton</span>
            <span className="block">
              Sakyi<span className="text-accent">.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl text-balance font-sans text-lg leading-relaxed text-fg-muted sm:text-xl"
          >
            <span className="text-fg">{profile.tagline}</span>{" "}
            <span className="text-fg-muted">
              Backend-leaning full-stack engineer working on RBAC, audit
              logging, ledger-grade payments, and hardened deployment
              pipelines.
            </span>
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-all hover:bg-accent-bright"
            >
              View selected work
              <ArrowDownRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-5 py-2.5 text-sm text-fg transition-all hover:border-accent/50 hover:bg-bg-subtle"
            >
              <Download size={14} />
              Download résumé
              <span className="font-mono text-[10px] text-fg-subtle">PDF</span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-2 py-2.5 text-sm text-fg-muted transition-colors hover:text-fg"
            >
              Get in touch
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>

        {/* bottom meta strip */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid gap-6 border-t border-border-subtle pt-6 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4"
        >
          <Meta label="Education" value="B.S. Computer Science · Winthrop University" />
          <Meta label="Stack" value="Laravel · React · TypeScript · AWS" />
          <Meta label="Focus" value="Backend · Platforms · Security" />
          <Meta label="Available" value={profile.availability} accent />
        </motion.div>
      </div>
    </section>
  );
}

function Meta({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="section-label">{label}</span>
      <span
        className={`text-sm leading-snug ${
          accent ? "text-accent" : "text-fg"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
