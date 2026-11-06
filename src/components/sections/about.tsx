import { Braces, Code, Cpu, Database, Network, Pen, Plug, Smartphone, type LucideIcon } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";
import { Portrait } from "@/components/ui/portrait";
import { Reveal, SectionHeading } from "@/components/ui/section-heading";
import { about, skills } from "@/content";

const icons: Record<(typeof skills)[number]["icon"], LucideIcon> = {
  code: Code,
  braces: Braces,
  smartphone: Smartphone,
  plug: Plug,
  database: Database,
  pen: Pen,
  cpu: Cpu,
  network: Network,
};

function SkillChip({ name, icon }: (typeof skills)[number]) {
  const Icon = icons[icon];
  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-border bg-card px-5 py-3 text-sm font-medium">
      <Icon size={16} className="text-primary" aria-hidden="true" />
      {name}
    </span>
  );
}

export function About() {
  const half = Math.ceil(skills.length / 2);

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading index="03" label="About" title={about.heading} />
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal>
            <Portrait />
          </Reveal>

          <div className="space-y-8">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-6 font-mono text-sm">
              <div className="mb-4 flex gap-1.5" aria-hidden="true">
                <span className="h-3 w-3 rounded-full bg-border" />
                <span className="h-3 w-3 rounded-full bg-border" />
                <span className="h-3 w-3 rounded-full bg-primary" />
              </div>
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> whoami --stack
              </p>
              <ul className="mt-3 space-y-1.5">
                <li><span className="text-muted-foreground">front-end</span> → HTML, CSS, JavaScript, Figma</li>
                <li><span className="text-muted-foreground">back-end</span> → REST APIs, databases</li>
                <li><span className="text-muted-foreground">systems</span> → hardware, OS, networking</li>
              </ul>
            </div>
          </Reveal>
          </div>
        </div>
      </div>

      <h3 className="sr-only">Skills</h3>
      <ul className="sr-only">
        {skills.map((s) => (
          <li key={s.name}>{s.name}</li>
        ))}
      </ul>
      <div className="mt-16 space-y-4" aria-hidden="true">
        <Marquee duration="35s">
          {skills.slice(0, half).concat(skills.slice(0, half)).map((s, i) => (
            <SkillChip key={i} {...s} />
          ))}
        </Marquee>
        <Marquee duration="40s" reverse>
          {skills.slice(half).concat(skills.slice(half)).map((s, i) => (
            <SkillChip key={i} {...s} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
