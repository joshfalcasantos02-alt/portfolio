"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import avatar from "@/assets/joshua-avatar.webp";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon } from "@/components/ui/brand-icons";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { profile } from "@/content";

function RoleTyper() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2400);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <p className="flex flex-wrap items-center justify-center gap-x-2 font-mono text-sm text-muted-foreground sm:text-base">
      <span>Currently working as</span>
      <span className="relative inline-flex h-8 min-w-[13.5rem] items-center justify-start overflow-hidden leading-8 text-primary">
        <AnimatePresence mode="wait">
          <motion.span
            className="block"
            key={profile.roles[i]}
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {profile.roles[i]}
          </motion.span>
        </AnimatePresence>
        <span className="ml-0.5 animate-blink" aria-hidden="true">
          _
        </span>
      </span>
      {/* Screen readers get all roles at once instead of a ticking label */}
      <span className="sr-only">{profile.roles.join(", ")}</span>
    </p>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-24 pb-28 sm:pb-16"
    >
      <div className="bg-grid absolute inset-0 -z-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-1/3 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      <BackgroundBeams className="-z-10" />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-card/80 py-1 pr-4 pl-1 font-mono text-xs text-muted-foreground backdrop-blur"
        >
          {/* Avatar with an "online" dot: this is the status indicator */}
          <span className="relative shrink-0">
            <Image
              src={avatar}
              alt={profile.name}
              width={32}
              height={32}
              priority
              className="h-8 w-8 rounded-full object-cover ring-1 ring-border saturate-[0.85]"
            />
            <span className="absolute -right-0.5 -bottom-0.5 flex h-3 w-3" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-card bg-primary" />
            </span>
          </span>
          {profile.status}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-balance bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-5xl font-semibold tracking-tighter text-transparent sm:text-7xl md:text-8xl"
        >
          {profile.headline}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 space-y-6"
        >
          <RoleTyper />
          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.intro}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <a
            href="#work"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground shadow-[0_0_40px_-8px] shadow-primary/60 transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
          >
            View selected work <ArrowDown size={18} aria-hidden="true" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 font-semibold backdrop-blur transition-colors duration-200 hover:border-primary/60 hover:text-primary sm:w-auto"
          >
            <GithubIcon /> View my GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
