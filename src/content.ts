// All site copy lives here. Edit this file to update the portfolio; no component changes needed.

export const profile = {
  name: "Joshua M. Falcasantos",
  shortName: "Joshua Falcasantos",
  initials: "JF",
  status: "Open to internships & junior roles",
  headline: "I build the web from pixel to server.",
  roles: ["Front-End Developer", "Back-End Developer", "UI/UX Designer"],
  intro:
    "I'm Joshua M. Falcasantos — a front-end and back-end developer with an eye for UI/UX. I can design it, code it, and keep the machine it runs on working.",
  email: "joshflcasantos02@gmail.com",
  github: "https://github.com/joshfalcasantos02-alt",
  linkedin: "https://www.linkedin.com/in/joshhwah/",
};

export type Project = {
  id: string;
  title: string;
  type: string;
  platform: string;
  year: string;
  summary: string;
  client: string;
  built: string;
  does: string;
  stat?: { label: string; value: string };
  visual: "inventory" | "stats";
};

export const projects: Project[] = [
  {
    id: "bakery",
    title: "Simon & Zyrus Bakery inventory",
    type: "Inventory system",
    platform: "Web app",
    year: "2026",
    summary:
      "An inventory system that tracks the bakery's goods and products and turns the data into statistics reports.",
    client: "Simon & Zyrus Bakery",
    built: "An inventory system that tracks goods and generates statistics reports",
    does: "Records every item and product coming in and going out",
    stat: { label: "Items in stock", value: "1,248" },
    visual: "inventory",
  },
  {
    id: "eos",
    title: "EOS WMSU player stats",
    type: "Records system",
    platform: "Web app",
    year: "2026",
    summary:
      "A system that tracks players and their statistics, with reports on new members per college and the games they play.",
    client: "E17 WMSU",
    built: "A system that tracks players and generates statistics reports",
    does: "Records new members per college, plus their games and stats",
    visual: "stats",
  },
];

export const process = [
  {
    title: "Understand",
    text: "Interviews, analytics and conversations to find the real problem behind the brief.",
  },
  {
    title: "Define",
    text: "Journey maps, flows and success metrics everyone agrees on before a single line of code.",
  },
  {
    title: "Build & test",
    text: "Clean front-end and solid back-end code, tested early with real users and refined until it feels obvious.",
  },
  {
    title: "Ship & maintain",
    text: "Deployment, QA and the hardware and systems know-how to keep it running after launch.",
  },
];

export const about = {
  heading: "Full-stack developer, hardware-ready.",
  paragraphs: [
    "Hi, I'm Joshua M. Falcasantos — a full-stack developer who likes owning a project from the first sketch to the server it runs on. On the front end I design and build clean, responsive interfaces that feel easy to use; on the back end I write the APIs and databases that keep them running.",
    "I also know my way around hardware, operating systems and networking, so when something breaks I can trace it from the UI all the way down to the machine.",
    "I'm always learning, I care about the details, and I'm open to freelance work and new opportunities.",
  ],
};

// `icon` keys map to lucide icons in components/sections/about.tsx
export const skills = [
  { name: "HTML / CSS", icon: "code" },
  { name: "JavaScript", icon: "braces" },
  { name: "Responsive UI", icon: "smartphone" },
  { name: "REST APIs", icon: "plug" },
  { name: "Databases", icon: "database" },
  { name: "Figma", icon: "pen" },
  { name: "PC assembly & repair", icon: "cpu" },
  { name: "Networking", icon: "network" },
] as const;

export const experience = [
  {
    title: "Full-Stack Developer",
    org: "Front-end & back-end · Student & self-taught",
    period: "Now",
    current: true,
  },
  {
    title: "BS Information Technology",
    org: "Western Mindanao State University",
    period: "3rd year",
    current: true,
  },
  {
    title: "Associate in Computing Technology, Major in Networking",
    org: "Western Mindanao State University",
    period: "Graduated · 2025 — 2026",
    current: false,
  },
];
