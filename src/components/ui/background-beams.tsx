"use client";

// Adapted from 21st.dev "Background Beams" by Aceternity (manuarora700).
// Changes: recolored to the lime brand accent, deterministic timings (no Math.random in render),
// paths generated instead of hardcoded, and a static fallback for reduced motion.
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const BEAM_COUNT = 50;

// Each beam is the same curve shifted by 7px; mirrors the original hardcoded path list.
const beamPath = (i: number) => {
  const x = -380 + i * 7;
  const y = -189 - i * 8;
  return `M${x} ${y}C${x} ${y} ${x + 68} ${y + 405} ${x + 532} ${y + 532}C${x + 996} ${y + 659} ${x + 1064} ${y + 1064} ${x + 1064} ${y + 1064}`;
};

// Cheap deterministic pseudo-random so server and client render identically.
const seeded = (i: number, salt: number) => {
  const v = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return v - Math.floor(v);
};

const beams = Array.from({ length: BEAM_COUNT }, (_, i) => ({
  d: beamPath(i),
  duration: seeded(i, 1) * 10 + 10,
  delay: seeded(i, 2) * 10,
  y2: 93 + seeded(i, 3) * 8,
}));

export const BackgroundBeams = React.memo(({ className }: { className?: string }) => {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 flex h-full w-full items-center justify-center", className)}
    >
      <svg
        className="absolute z-0 h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={beams.map((b) => b.d).join("")}
          stroke="url(#beams-radial)"
          strokeOpacity="0.06"
          strokeWidth="0.5"
        />
        {beams.map((b, i) => (
          <path key={i} d={b.d} stroke={`url(#beam-${i})`} strokeOpacity="0.5" strokeWidth="0.5" />
        ))}
        <defs>
          {beams.map((b, i) => (
            <motion.linearGradient
              id={`beam-${i}`}
              key={i}
              initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
              animate={
                reduce
                  ? { x1: "40%", x2: "38%", y1: "40%", y2: "42%" }
                  : { x1: ["0%", "100%"], x2: ["0%", "95%"], y1: ["0%", "100%"], y2: ["0%", `${b.y2}%`] }
              }
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: b.duration, ease: "easeInOut", repeat: Infinity, delay: b.delay }
              }
            >
              <stop stopColor="#C6F45B" stopOpacity="0" />
              <stop stopColor="#C6F45B" />
              <stop offset="32.5%" stopColor="#5EEAD4" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
            </motion.linearGradient>
          ))}
          <radialGradient
            id="beams-radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
          >
            <stop offset="0.0666667" stopColor="#d4d4d8" />
            <stop offset="0.243243" stopColor="#d4d4d8" />
            <stop offset="0.43594" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
});

BackgroundBeams.displayName = "BackgroundBeams";
