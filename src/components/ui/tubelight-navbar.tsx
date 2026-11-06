"use client";

// Adapted from 21st.dev "Tubelight Navbar" by ayushmxxn.
// Changes: scroll-spy keeps the active tab in sync while scrolling, accessible labels for the
// icon-only mobile view, aria-current, and 44px touch targets.
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItem {
  name: string;
  url: string; // "#section-id"
  icon: LucideIcon;
}

export function NavBar({ items, className }: { items: NavItem[]; className?: string }) {
  const [activeTab, setActiveTab] = useState(items[0].name);

  // Highlight whichever section is crossing the middle band of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const match = items.find((i) => i.url === `#${entry.target.id}`);
          if (match) setActiveTab(match.name);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    items.forEach((i) => {
      const el = document.querySelector(i.url);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "fixed bottom-0 left-1/2 z-50 mb-5 -translate-x-1/2 sm:top-0 sm:bottom-auto sm:mb-0 sm:pt-5",
        className,
      )}
    >
      <div className="flex items-center gap-1 rounded-full border border-border bg-background/70 p-1 shadow-lg shadow-black/40 backdrop-blur-lg sm:gap-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "relative flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full px-4 text-sm font-semibold transition-colors duration-200 md:px-6",
                "text-foreground/75 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} aria-hidden="true" />
                <span className="sr-only">{item.name}</span>
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 -z-10 w-full rounded-full bg-primary/5"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-primary">
                    <div className="absolute -top-2 -left-2 h-6 w-12 rounded-full bg-primary/20 blur-md" />
                    <div className="absolute -top-1 h-6 w-8 rounded-full bg-primary/20 blur-md" />
                    <div className="absolute top-0 left-2 h-4 w-4 rounded-full bg-primary/20 blur-sm" />
                  </div>
                </motion.div>
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
