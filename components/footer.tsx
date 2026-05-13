import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-elevated/40">
      <div className="container-page flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-serif text-lg text-fg">
            Elton Sakyi<span className="text-accent">.</span>
          </span>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-fg-subtle">
            © {year}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted">
          <a
            href={`mailto:${profile.email}?subject=Hi%20Elton`}
            className="hover:text-fg"
          >
            email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg"
          >
            github
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg"
          >
            linkedin
          </a>
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg"
          >
            résumé
          </a>
        </div>
      </div>
    </footer>
  );
}
