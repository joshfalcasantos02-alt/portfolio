import Image from "next/image";
import portrait from "@/assets/joshua-portrait.webp";
import { profile } from "@/content";

/**
 * Photo that dissolves into the page instead of sitting in a frame:
 * the edges are masked out, a lime glow sits behind, and the tech grid runs over the backdrop.
 */
export function Portrait() {
  return (
    <figure className="relative isolate mx-auto w-full max-w-sm lg:max-w-none">
      {/* glow behind the subject */}
      <div className="absolute inset-x-8 top-1/4 -z-10 h-2/3 rounded-full bg-primary/20 blur-[90px]" aria-hidden="true" />

      <div className="relative [mask-image:radial-gradient(ellipse_50%_52%_at_50%_44%,black_45%,transparent_100%)]">
        <Image
          src={portrait}
          alt={`Portrait of ${profile.name}`}
          placeholder="blur"
          sizes="(min-width: 1024px) 420px, 384px"
          className="h-auto w-full brightness-[0.92] contrast-[1.05] saturate-[0.8]"
        />
        {/* grid + bottom fade tie the studio backdrop into the page */}
        <div className="bg-grid absolute inset-0 opacity-60 mix-blend-overlay" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
      </div>

      <figcaption className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-background/70 px-3 py-1.5 font-mono text-[11px] text-muted-foreground backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
        BSIT · Western Mindanao State University
      </figcaption>
    </figure>
  );
}
