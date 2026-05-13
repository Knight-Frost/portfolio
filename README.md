# Elton Sakyi — Portfolio

A personal portfolio for **Elton Sakyi** — backend and platform engineer.
Built as a single-page Next.js site styled like a quiet "career command center."

**Live preview:** _(set after deploying)_

---

## Stack

- **Next.js 14.2** (App Router)
- **React 18** + **TypeScript 5**
- **Tailwind CSS 3.4**
- **Framer Motion** for tasteful, reduced-motion-aware reveals
- **Lucide React** for icons
- **`next/font`** (Inter, Instrument Serif, JetBrains Mono) — zero layout shift

Deployment target: **Vercel** (zero-config).

---

## Run it locally

```bash
pnpm install        # or: npm install / yarn install
pnpm dev            # → http://localhost:3000
```

Production build:

```bash
pnpm build
pnpm start
```

---

## Deploy to Vercel

The site is fully static + edge-compatible. Two ways to ship it:

### Option 1 — Vercel CLI

```bash
npm i -g vercel
vercel               # follow the prompts, accept defaults
vercel --prod        # promote to production
```

### Option 2 — Vercel Dashboard

1. Push this folder to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset will auto-detect **Next.js**.
4. Click **Deploy**. No env variables are required.

The OG image (`app/opengraph-image.tsx`) and favicon (`app/icon.tsx`) are generated at the edge.

---

## Project layout

```
portfolio/
├── app/
│   ├── layout.tsx              # metadata, fonts, theme
│   ├── page.tsx                # single-page composition
│   ├── globals.css             # tailwind + theme tokens
│   ├── icon.tsx                # generated favicon
│   ├── opengraph-image.tsx     # generated OG image (edge)
│   ├── robots.ts               # robots.txt
│   └── sitemap.ts              # sitemap.xml
├── components/
│   ├── status-bar.tsx          # thin "career.os" top bar
│   ├── nav.tsx                 # sticky nav + mobile menu
│   ├── hero.tsx                # name, tagline, CTAs, meta strip
│   ├── mission.tsx             # 3-column "about" panel
│   ├── projects.tsx            # selected work list
│   ├── project-card.tsx        # case-style project row
│   ├── skills.tsx              # 8-category skills matrix
│   ├── experience.tsx          # timeline + education
│   ├── research.tsx            # papers + spoken languages
│   ├── contact.tsx             # email, phone, github, linkedin
│   ├── copy-email.tsx          # copy-to-clipboard button
│   ├── reveal.tsx              # fade-up scroll reveal (motion-aware)
│   ├── section-heading.tsx     # shared section header
│   └── footer.tsx
├── lib/
│   └── data.ts                 # all content as structured data
├── public/
│   ├── Elton_Sakyi_Resume.pdf
│   └── favicon.svg
└── tailwind.config.ts
```

All site content lives in `lib/data.ts` — edit it there and the page updates.

---

## Things to update before going live

These are placeholders flagged in `lib/data.ts`:

- `profile.github` — set to your real GitHub URL
- `profile.linkedin` — set to your real LinkedIn URL
- (Optional) `siteUrl` in `app/layout.tsx` — set to your real domain
- (Optional) `app/sitemap.ts` and `app/robots.ts` — same

---

## Notes on design choices

- **Dark, warm near-black** background (`#0a0a0c`) — premium, not the cold "dev portfolio blue."
- **Amber/copper accent** (`#e8a96b`) — distinctive among portfolios that default to indigo / teal / green.
- **Instrument Serif** for the name only — adds editorial weight without going full editorial.
- **No parallax, no scroll-jacking, no mouse-trailing** — motion is restrained: fade-up reveals, subtle stagger, hover lifts.
- **`prefers-reduced-motion`** is respected (`useReducedMotion` from Framer Motion).
- **Content over chrome** — every section earns its space by saying something specific.
