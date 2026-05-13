import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider, themeInitScript } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const siteUrl = "https://eltonsakyi.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Elton Sakyi · Software Engineer · Backend & Platform Engineering",
    template: "%s · Elton Sakyi",
  },
  description:
    "Elton Sakyi. Computer Science graduate from Winthrop University. I design and ship production-grade backends and multi-role platforms with RBAC, audit logging, and hardened deployments.",
  keywords: [
    "Elton Sakyi",
    "Software Engineer",
    "Backend Developer",
    "Full Stack",
    "Laravel",
    "React",
    "TypeScript",
    "AWS",
    "Winthrop University",
    "Computer Science",
    "Portfolio",
  ],
  authors: [{ name: "Elton Sakyi" }],
  creator: "Elton Sakyi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Elton Sakyi · Software Engineer",
    description:
      "Backend & platform engineer. I build secure, multi-role systems. Not just features.",
    siteName: "Elton Sakyi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elton Sakyi · Software Engineer",
    description:
      "Backend & platform engineer. I build secure, multi-role systems. Not just features.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0c" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${serif.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/*
          FOUC-prevention: runs before React hydrates so first paint
          matches saved/system theme. themeInitScript is a static
          author-controlled string (no user input). Standard Next.js pattern.
        */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <noscript>
          <style>{`
            [style*="opacity:0"], [style*="opacity: 0"] {
              opacity: 1 !important;
              transform: none !important;
            }
          `}</style>
        </noscript>
      </head>
      <body className="min-h-screen bg-bg text-fg antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
