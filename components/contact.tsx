import { profile } from "@/lib/data";
import { ArrowUpRight, Mail, Phone, Github, Linkedin, FileText } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { CopyEmail } from "./copy-email";

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-30 aurora"
      />

      <div className="container-page relative">
        <SectionHeading
          index="07"
          eyebrow="Contact"
          title="Hiring, collaborating, or just curious? The inbox is open."
          description="Best path: email. I read every message and reply within 24 hours."
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="card-surface relative flex flex-col gap-8 p-8 sm:p-10">
            <div className="flex flex-col gap-1">
              <span className="section-label">Primary</span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}?subject=Hi%20Elton`}
                  className="group inline-flex items-baseline gap-2 font-serif text-3xl text-fg transition-colors hover:text-accent sm:text-4xl"
                >
                  <Mail
                    size={20}
                    className="translate-y-1 text-fg-subtle transition-colors group-hover:text-accent"
                  />
                  {profile.email}
                </a>
                <CopyEmail email={profile.email} />
              </div>
            </div>

            <div className="grid gap-6 border-t border-border-subtle pt-6 sm:grid-cols-2">
              <ContactRow
                icon={<Phone size={14} />}
                label="Phone"
                value={profile.phone}
                href={`tel:${profile.phone.replace(/\D/g, "")}`}
              />
              <ContactRow
                icon={<FileText size={14} />}
                label="Résumé"
                value="Download PDF"
                href={profile.resumePath}
                external
              />
              <ContactRow
                icon={<Github size={14} />}
                label="GitHub"
                value="View repositories"
                href={profile.github}
                external
              />
              <ContactRow
                icon={<Linkedin size={14} />}
                label="LinkedIn"
                value="Connect with me"
                href={profile.linkedin}
                external
              />
            </div>
          </Reveal>

          <Reveal className="flex flex-col justify-between gap-6">
            <div className="card-surface flex flex-col gap-3 p-7">
              <span className="section-label">Currently</span>
              <p className="text-[15px] leading-relaxed text-fg">
                B.S. Computer Science graduate from Winthrop University.
                Actively building Nexus and Pathfinder-X.
              </p>
              <p className="text-[14px] leading-relaxed text-fg-muted">
                Based in the United States.
              </p>
            </div>

            <div className="card-surface flex flex-col gap-3 p-7">
              <span className="section-label">Open to</span>
              <ul className="flex flex-col gap-2.5 text-[14.5px] text-fg">
                {[
                  "Full-time software engineering roles",
                  "Backend, platform, or full-stack positions",
                  "Contract and freelance projects",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      aria-hidden
                      className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-accent"
                    />
                    {item}
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

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-start justify-between gap-3 border-b border-border-subtle pb-4 transition-colors hover:border-border-strong sm:border-b-0 sm:pb-0"
    >
      <div className="flex flex-col gap-1">
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-fg-subtle">
          {icon}
          {label}
        </span>
        <span className="text-[15px] text-fg transition-colors group-hover:text-accent">
          {value}
        </span>
      </div>
      <ArrowUpRight
        size={16}
        className="mt-1 text-fg-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
      />
    </a>
  );
}
