export const profile = {
  name: "Elton Sakyi",
  firstName: "Elton",
  lastName: "Sakyi",
  role: "Software Engineer",
  category: "Backend & Platform Engineering",
  location: "United States",
  availability: "Open to full-time roles",
  tagline: "I build secure, multi-role platforms. Not just features.",
  intro:
    "Computer Science graduate from Winthrop University. I design and ship production-grade backends and full-stack platforms: multi-role systems with RBAC, audit logging, financial-integrity guarantees, and hardened deployment pipelines.",
  email: "eltonpaasakyi@gmail.com",
  github: "https://github.com/", // TODO: replace with your real GitHub URL
  linkedin: "https://www.linkedin.com/", // TODO: replace with your real LinkedIn URL
  resumePath: "/Elton_Sakyi_Resume.pdf",
} as const;

export const mission = [
  {
    label: "What I build",
    body: "Production platforms with multiple user roles, real workflows, and auditable data, not toy demos. Camp operations, financial ledgers, structured data systems.",
  },
  {
    label: "How I build",
    body: "Backend-first. Normalized schemas, validated boundaries, RBAC by default, hardened deployments. The code should still be trustworthy at 2 a.m. on a Saturday.",
  },
  {
    label: "What I care about",
    body: "Software that respects users and the people behind the data: secure by design, honest about its limits, and operable in the long run.",
  },
] as const;

export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  status: "Shipped" | "In Progress" | "Concept" | "Academic";
  role: string;
  oneLiner: string;
  problem: string;
  whyItMatters: string;
  stack: string[];
  features: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "camp-burnt-gin",
    name: "Camp Burnt Gin Application System",
    category: "Healthcare Operations · Multi-Role Platform",
    year: "2026",
    status: "Shipped",
    role: "Full-Stack Developer & Systems Engineer",
    oneLiner:
      "A four-role camp operations platform handling digital and paper applications, medical records, and document compliance end-to-end.",
    problem:
      "A medically-attended summer camp needed one system to absorb every workflow (applicants, administrators, super admins, and medical providers) without dropping a single record, signature, or compliance check.",
    whyItMatters:
      "Real users, real medical data, real consequences. The system has to reconcile two intake channels (digital and paper), enforce document compliance, and stay accountable through audit logs and role-scoped permissions.",
    stack: [
      "Laravel 12",
      "React",
      "TypeScript",
      "MySQL",
      "AWS EC2",
      "Nginx",
      "PHP-FPM",
      "Vercel",
    ],
    features: [
      "Four distinct role workflows: Applicant, Admin, Super Admin, Medical Provider",
      "Digital + paper application intake unified into one camper record",
      "Medical records, document uploads, and compliance recognition",
      "Inbox messaging, notifications, dashboards, and reporting",
      "Role-based permissions, session management, and full audit logging",
      "Hardened against draft/submitted-state edge cases and deletion races",
    ],
  },
  {
    slug: "nexus",
    name: "Nexus",
    category: "PropTech · Financial Workflow Platform",
    year: "2026",
    status: "In Progress",
    role: "Backend Architect & Lead Developer",
    oneLiner:
      "A Ghana-focused property rental platform with full lease lifecycle management and ledger-grade financial tracking.",
    problem:
      "Property managers in emerging markets juggle leases, rent, fees, and disputes across spreadsheets and chat, losing money and trust to bookkeeping drift.",
    whyItMatters:
      "Financial systems can't 'mostly work.' Every charge, payment, and balance is reconciled with auditable, traceable transactions. The same posture a payments processor would demand.",
    stack: ["Laravel", "MySQL", "REST APIs", "RBAC", "Stripe-style ledgers"],
    features: [
      "Lease lifecycle: application → active lease → renewal / end",
      "Ledger-style tracking for rent charges, payments, balances, and fees",
      "Four-role RBAC for landlords, tenants, property managers, and admins",
      "Modular service boundaries: property, tenant, lease, payment, reporting",
      "Analytics-ready schema for collections, occupancy, and arrears",
      "Auditable transaction records modeled on Stripe-style payment flows",
    ],
  },
  {
    slug: "pathfinder-x",
    name: "Pathfinder-X",
    category: "Career & Education Data Platform",
    year: "2025",
    status: "In Progress",
    role: "Founder & Lead Developer",
    oneLiner:
      "A modular full-stack platform that organizes structured academic, occupational, and labor-market information through backend services and external public API integrations.",
    problem:
      "Career and education-related information lives across multiple disconnected public sources, without a clean, well-modeled surface to query, normalize, or build reliably on top of.",
    whyItMatters:
      "An exercise in disciplined backend architecture: normalized schema design, service-layer logic, validated API endpoints, and clean integration of external public data, built for maintainability and scale.",
    stack: [
      "Laravel",
      "MySQL",
      "REST APIs",
      "Public data integrations",
      "Postman",
      "GitHub",
    ],
    features: [
      "Modular backend services with clean domain boundaries",
      "Normalized database models built for scalable data retrieval",
      "Structured REST API endpoints with input validation",
      "Service-layer separation between data, logic, and presentation",
      "Disciplined integration of external public data sources",
      "Postman-tested API surface with clean internal documentation",
    ],
  },
  {
    slug: "time-loop-snake",
    name: "Time Loop Snake",
    category: "MERN · Original Game · Hardened API",
    year: "2026",
    status: "Shipped",
    role: "Full-Stack Developer",
    oneLiner:
      "A MERN platform built around a Canvas-based Snake game with a time-loop mechanic. Every 14 seconds, a ghost of your past self spawns and replays your exact moves.",
    problem:
      "Most full-stack demos skip the unglamorous parts: real auth, real CI/CD, real reverse-proxying. I wanted to build one that didn't.",
    whyItMatters:
      "Original gameplay concept layered over production-grade infrastructure: JWT, bcrypt, RBAC, helmet/CSP/HSTS, rate limiting, and a working GitHub Actions pipeline to EC2.",
    stack: [
      "React 18",
      "Node 20",
      "Express 4",
      "MongoDB Atlas",
      "Mongoose 8",
      "AWS EC2",
      "Nginx",
      "PM2",
      "GitHub Actions",
    ],
    features: [
      "Canvas-based Snake with a 14-second ghost-replay time-loop",
      "JWT authentication with bcrypt password hashing (12 rounds)",
      "Role-based access control with ownership checks",
      "Public leaderboard + admin user/score management panel",
      "Hardened API: helmet, CSP, HSTS, CORS allowlisting, rate limiting, mongo-sanitize, 10kb body limit",
      "AWS EC2 deployment behind Nginx with HTTPS, PM2 supervision, and CI/CD on push to main",
    ],
  },
  {
    slug: "future-you",
    name: "FutureYou",
    category: "Hackathon · Personal Finance Decision Engine",
    year: "2026",
    status: "Concept",
    role: "Builder & Presenter",
    oneLiner:
      "A decision engine for personal finance built around one loop: decision → consequence → action.",
    problem:
      "Most finance apps tell you where your money went. They rarely show you where a single decision would take you.",
    whyItMatters:
      "Product thinking applied to a hard UX problem: making the long-term consequences of small financial choices legible without dumbing them down.",
    stack: ["React / Vite", "Laravel / PHP", "AI-assisted workflows"],
    features: [
      "Frontend-first experience for testing financial choices in real time",
      "Projected effects on savings, debt, goals, and long-term outcomes",
      "Dual-layer insight model: rule-based math + AI-generated explanations",
      "Designed and presented under hackathon constraints",
    ],
  },
  {
    slug: "compiler",
    name: "Partial Compiler for a Pascal-like Language",
    category: "Systems Programming · Language Processing",
    year: "Coursework",
    status: "Academic",
    role: "Solo Builder",
    oneLiner:
      "A partial compiler that translates a Pascal-like high-level language into pseudo-assembly using Lex and YACC.",
    problem:
      "Web frameworks abstract a lot. To trust the abstractions, you have to know what's underneath: lexers, grammars, and code generation.",
    whyItMatters:
      "Systems-level CS rigor. Demonstrates understanding of context-free grammars, lexical analysis, and the layer beneath every framework you'll ever use.",
    stack: ["Lex", "YACC", "C", "Regular Expressions", "Context-Free Grammars"],
    features: [
      "Lexical analyzer tokenizing keywords, identifiers, numbers, and operators",
      "YACC grammar rules for assignments, arithmetic, while loops, if-then-else",
      "Syntax validation with line-number error reporting",
      "Translates source to pseudo-assembly target code",
    ],
  },
];

export const alsoBuilt = [
  {
    name: "Movie Theatre Ticket Sales System",
    stack: "PHP · MySQL · HTML · CSS · Apache",
    note: "User auth, seat purchasing, admin CRUD, hashed passwords, SQL-injection-safe queries.",
  },
  {
    name: "Secure File Sharing Platform",
    stack: "PHP · XAMPP · HTML · CSS",
    note: "File validation, session-based access control, directory-traversal protection.",
  },
  {
    name: "AWS & SQL Practical Work",
    stack: "AWS · RDS · IAM · MySQL Workbench",
    note: "Joins, grouping, subqueries, indexing, RDS configuration, IAM + MFA practices.",
  },
];

export const skills = [
  {
    category: "Languages",
    items: [
      "Java",
      "PHP",
      "TypeScript / JavaScript",
      "C++",
      "C#",
      "SQL",
      "MIPS Assembly",
      "HTML / CSS",
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      "Laravel",
      "Node / Express",
      "REST API design",
      "Authentication & JWT",
      "Authorization / RBAC",
      "Validation layers",
      "Service-layer architecture",
      "Migrations & seeders",
      "Postman / API testing",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Vite",
      "TypeScript",
      "HTML / CSS",
      "Component architecture",
    ],
  },
  {
    category: "Data",
    items: [
      "MySQL",
      "MongoDB",
      "Mongoose",
      "Normalized schema design",
      "Indexes & query tuning",
      "Joins, grouping, subqueries",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS EC2",
      "AWS RDS",
      "AWS IAM + MFA",
      "Nginx",
      "PHP-FPM",
      "PM2",
      "Vercel",
      "GitHub Actions CI/CD",
      "Environment configuration",
    ],
  },
  {
    category: "Security",
    items: [
      "JWT + bcrypt",
      "RBAC + ownership checks",
      "Helmet / CSP / HSTS",
      "CORS allowlisting",
      "Rate limiting",
      "Input sanitization",
      "SQL-injection prevention",
      "Session hardening",
    ],
  },
  {
    category: "Tooling",
    items: [
      "Git / GitHub",
      "Postman",
      "VS Code",
      "IntelliJ / Eclipse",
      "Visual Studio",
      "MySQL Workbench",
      "Composer",
      "pnpm / npm",
      "Wireshark",
    ],
  },
  {
    category: "Academic & Analysis",
    items: ["Mathematica", "LaTeX", "Excel", "Google Sheets"],
  },
];

export const experience = [
  {
    when: "2026",
    title: "Camp Burnt Gin Application System",
    subtitle: "Full-Stack Developer & Systems Engineer",
    detail:
      "Building and refining a four-role healthcare-style camp operations platform across Laravel 12, React + TypeScript, MySQL, and AWS.",
    tags: ["Laravel", "React", "TypeScript", "MySQL", "AWS"],
  },
  {
    when: "2026",
    title: "Nexus: Property Rental & Financial Workflow Platform",
    subtitle: "Backend Architect & Lead Developer",
    detail:
      "Architecting lease lifecycles, ledger-style payments, and four-role RBAC for a Ghana-focused property platform.",
    tags: ["Laravel", "MySQL", "RBAC", "Payments"],
  },
  {
    when: "2026",
    title: "Time Loop Snake",
    subtitle: "Full-Stack Developer",
    detail:
      "Designed and shipped a MERN game platform with hardened API, JWT auth, RBAC, and CI/CD to AWS EC2 behind Nginx.",
    tags: ["MERN", "AWS", "CI/CD", "Security"],
  },
  {
    when: "2026",
    title: "FutureYou (Hackathon)",
    subtitle: "Builder & Presenter",
    detail:
      "Designed and pitched a personal-finance decision engine modeling decision → consequence → action.",
    tags: ["React", "Laravel", "Product"],
  },
  {
    when: "2025",
    title: "Pathfinder-X",
    subtitle: "Founder & Lead Developer",
    detail:
      "Designing and building a modular full-stack platform that organizes structured career and education-related data through backend services, normalized schemas, and external public API integrations.",
    tags: ["Laravel", "Backend Architecture", "API Integration"],
  },
];

export const education = [
  {
    school: "Winthrop University",
    degree: "B.S. Computer Science · Minor in Chemistry",
    location: "",
    detail:
      "Relevant coursework: Algorithms & Data Structures, Software Engineering, Operating Systems, Computer Architecture, Database Processing, Cloud Computing, Network Processing, Discrete Math.",
  },
  {
    school: "University of South Carolina Lancaster",
    degree: "Associate in Science",
    location: "",
    detail: null,
  },
];

export const research = [
  {
    title:
      "Digital Dependency: Cognitive and Neurological Consequences of Technology Use",
    course: "CSCI 327 · Winthrop University",
    date: "Feb 2025",
    summary:
      "Analyzed the cognitive, neurological, and societal effects of prolonged digital technology use: attention, memory, and long-term brain-health implications.",
  },
  {
    title:
      "Ethical Responsibilities of Technology Corporations in the Digital Age",
    course: "CSCI 327 · Winthrop University",
    date: "Apr 2025",
    summary:
      "Examined persuasive design, data collection, addictive features, user autonomy, digital well-being, and the governance responsibilities of technology corporations.",
  },
];

export const languages = [
  { name: "English", level: "Native / Bilingual" },
  { name: "Akan", level: "Native / Bilingual" },
  { name: "German", level: "Working proficiency" },
];
