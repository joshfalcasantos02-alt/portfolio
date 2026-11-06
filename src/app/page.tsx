import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <Hero />
        <Projects />
        <Process />
        <About />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
