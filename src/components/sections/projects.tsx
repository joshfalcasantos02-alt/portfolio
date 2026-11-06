"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { GithubIcon } from "@/components/ui/brand-icons";
import { Reveal, SectionHeading } from "@/components/ui/section-heading";
import { profile, projects, type Project } from "@/content";
import { cn } from "@/lib/utils";

/* Decorative product visuals: abstract shapes only, no invented data. */
function InventoryVisual({ stat }: { stat?: Project["stat"] }) {
  const bars = [38, 62, 48, 80, 56, 92, 70, 84, 64, 96];
  return (
    <motion.div
      aria-hidden="true"
      className="relative flex h-full items-end gap-1.5"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true }}
    >
      {stat && (
        <div className="absolute top-0 left-0 z-10 rounded-lg border border-border bg-background/80 px-3 py-2 backdrop-blur">
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{stat.label}</p>
          <p className="font-mono text-2xl font-semibold text-primary">{stat.value}</p>
        </div>
      )}
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/20 to-primary/70"
          variants={{ hidden: { scaleY: 0 }, shown: { scaleY: 1 } }}
          transition={{ duration: 0.5, delay: i * 0.04, ease: "easeOut" }}
          style={{ height: `${h}%`, originY: 1 }}
        />
      ))}
    </motion.div>
  );
}

function StatsVisual() {
  const rows = [72, 54, 88, 40, 64];
  return (
    // Trigger from the container: the bars start at scaleX(0), a zero-size box never counts as in view.
    <motion.div
      aria-hidden="true"
      className="flex h-full flex-col justify-center gap-2.5"
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true }}
    >
      {rows.map((w, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="h-6 w-6 shrink-0 rounded-full border border-border bg-muted" />
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400/60 to-primary/80"
              variants={{ hidden: { scaleX: 0 }, shown: { scaleX: 1 } }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: "easeOut" }}
              style={{ width: `${w}%`, originX: 0 }}
            />
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function ProjectCard({ project, className }: { project: Project; className?: string }) {
  const [open, setOpen] = useState(false);
  const detailsId = `${project.id}-details`;

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40 sm:p-8",
        className,
      )}
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="mb-8 h-40 rounded-2xl border border-border bg-background/60 p-5 bg-grid">
        {project.visual === "inventory" ? <InventoryVisual stat={project.stat} /> : <StatsVisual />}
      </div>

      <div className="mb-3 flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
        {[project.type, project.platform, project.year].map((t) => (
          <span key={t} className="rounded-full border border-border bg-muted px-2.5 py-1">
            {t}
          </span>
        ))}
      </div>

      <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-3 leading-relaxed text-muted-foreground">{project.summary}</p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={detailsId}
        className="mt-6 inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 font-mono text-sm text-foreground transition-colors hover:text-primary"
      >
        {open ? "Hide details" : "See details"}
        <Plus
          size={18}
          aria-hidden="true"
          className={cn("text-primary transition-transform duration-300", open && "rotate-45")}
        />
      </button>

      {/* grid-rows trick animates height without measuring */}
      <div
        id={detailsId}
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
        inert={!open}
      >
        <dl className="overflow-hidden">
          <div className="mt-4 grid gap-4 border-t border-border pt-5 sm:grid-cols-3">
            {[
              ["Client", project.client],
              ["What I built", project.built],
              ["What it does", project.does],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-primary">{k}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{v}</dd>
              </div>
            ))}
          </div>
        </dl>
      </div>
    </article>
  );
}

export function Projects() {
  const [first, second] = projects;

  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <SectionHeading index="01" label="Selected work" title="Projects" />

      <div className="grid gap-4 md:grid-cols-3">
        <Reveal className="md:col-span-2">
          <ProjectCard project={first} className="h-full" />
        </Reveal>

        <Reveal delay={0.08}>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group flex h-full min-h-56 flex-col justify-between rounded-3xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/40 sm:p-8"
          >
            <GithubIcon size={32} className="text-muted-foreground transition-colors group-hover:text-primary" />
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">More code</p>
              <p className="mt-2 flex items-center gap-2 text-xl font-semibold">
                Browse my GitHub
                <ArrowUpRight
                  size={20}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </p>
            </div>
          </a>
        </Reveal>

        <Reveal delay={0.08} className="order-last md:order-none">
          <a
            href="#contact"
            className="group flex h-full min-h-56 flex-col justify-between rounded-3xl border border-primary/30 bg-primary p-6 text-primary-foreground transition-transform duration-300 hover:-translate-y-1 sm:p-8"
          >
            <p className="font-mono text-xs uppercase tracking-wider opacity-70">Your project here</p>
            <p className="flex items-end justify-between gap-4 text-2xl font-semibold leading-tight">
              Have something that needs building?
              <ArrowUpRight size={28} aria-hidden="true" className="shrink-0" />
            </p>
          </a>
        </Reveal>

        <Reveal className="md:col-span-2">
          <ProjectCard project={second} className="h-full" />
        </Reveal>
      </div>
    </section>
  );
}
