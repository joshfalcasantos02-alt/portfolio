"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, Check, Copy, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { Reveal } from "@/components/ui/section-heading";
import { profile } from "@/content";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); the mailto link still works.
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden border-t border-border px-4 py-24 sm:py-32">
      <div className="absolute bottom-0 left-1/2 -z-10 h-80 w-[40rem] max-w-full -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/20 blur-[140px]" />
      <div className="bg-grid absolute inset-0 -z-20 [mask-image:linear-gradient(to_top,black,transparent)]" />

      <Reveal className="mx-auto max-w-4xl text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
          05 <span className="text-muted-foreground">— Contact</span>
        </p>
        <h2 className="text-balance text-4xl font-semibold tracking-tighter sm:text-6xl">
          Have a project that needs building?
        </h2>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-12 max-w-full items-center gap-2 rounded-full bg-primary px-6 font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Mail size={18} aria-hidden="true" />
            <span className="truncate">{profile.email}</span>
          </a>
          <button
            type="button"
            onClick={copy}
            className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full border border-border bg-card px-6 font-semibold transition-colors duration-200 hover:border-primary/60 hover:text-primary"
          >
            {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
            <span aria-live="polite">{copied ? "Copied!" : "Copy email"}</span>
          </button>
        </div>
      </Reveal>

      <footer className="mx-auto mt-24 flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-border pt-8 pb-20 text-sm text-muted-foreground sm:flex-row sm:pb-0">
        <p>© 2026 {profile.name}. Designed &amp; built with care.</p>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-primary/60 hover:text-primary"
          >
            <GithubIcon />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-primary/60 hover:text-primary"
          >
            <LinkedinIcon />
          </a>
          <a
            href="#top"
            className="ml-2 inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 transition-colors hover:text-primary"
          >
            Back to top <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </section>
  );
}
