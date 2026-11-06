"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { process } from "@/content";
import { cn } from "@/lib/utils";

export function Process() {
  const [active, setActive] = useState(2);

  return (
    <section id="process" className="relative border-y border-border bg-card/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading index="02" label="How I work" title="A process built for clarity, not ceremony." />
        <p className="-mt-8 mb-10 font-mono text-sm text-muted-foreground">Click a step to focus it.</p>

        <div className="grid overflow-hidden rounded-3xl border border-border sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => {
            const on = i === active;
            return (
              <button
                key={step.title}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(i)}
                className={cn(
                  "flex cursor-pointer flex-col gap-5 border-border p-8 text-left transition-colors duration-300",
                  "border-b last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0",
                  on ? "bg-primary text-primary-foreground" : "bg-background hover:bg-muted",
                )}
              >
                <span
                  className={cn(
                    "font-mono text-5xl font-bold leading-none transition-colors",
                    on ? "text-primary-foreground/35" : "text-border",
                  )}
                >
                  0{i + 1}
                </span>
                <span className="text-xl font-semibold">{step.title}</span>
                <span className={cn("text-[15px] leading-relaxed", on ? "text-primary-foreground/80" : "text-muted-foreground")}>
                  {step.text}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
