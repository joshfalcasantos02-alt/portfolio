"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Fades content up once when it scrolls into view. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  index,
  label,
  title,
  className,
}: {
  index: string;
  label: string;
  title: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("mb-12 max-w-3xl", className)}>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {index} <span className="text-muted-foreground">— {label}</span>
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
    </Reveal>
  );
}
