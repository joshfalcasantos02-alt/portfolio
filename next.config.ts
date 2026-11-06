import type { NextConfig } from "next";

// GitHub Pages serves the site from /portfolio, so the deploy workflow sets PAGES_BASE_PATH.
// Locally it's unset, so `npm run dev` keeps working at http://localhost:3000/.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export", // static HTML in out/
  basePath,
  trailingSlash: true, // out/index.html style paths, which Pages serves cleanly
  images: { unoptimized: true }, // no image server on Pages
};

export default nextConfig;
