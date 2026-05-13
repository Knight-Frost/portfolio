import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Mission } from "@/components/mission";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Research } from "@/components/research";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg"
      >
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <Mission />
        <Projects />
        <Skills />
        <Experience />
        <Research />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
