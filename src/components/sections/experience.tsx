import { Reveal, SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/content";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-4 py-24 sm:py-32">
      <SectionHeading index="04" label="Experience" title="Experience & credentials" />

      <ol className="relative border-l border-border">
        {experience.map((item, i) => (
          <li key={item.title} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
            <span
              aria-hidden="true"
              className={cn(
                "absolute top-1.5 -left-[7px] h-3.5 w-3.5 rounded-full border-2",
                item.current
                  ? "border-primary bg-primary shadow-[0_0_16px] shadow-primary/70"
                  : "border-muted-foreground bg-background",
              )}
            />
            <Reveal delay={i * 0.06}>
              <p className="font-mono text-xs uppercase tracking-wider text-primary">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">{item.title}</h3>
              <p className="mt-1 text-muted-foreground">{item.org}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
