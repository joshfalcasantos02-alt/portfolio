"use client";

import { Briefcase, GraduationCap, House, Mail, User, Workflow } from "lucide-react";
import { NavBar, type NavItem } from "@/components/ui/tubelight-navbar";

const navItems: NavItem[] = [
  { name: "Home", url: "#top", icon: House },
  { name: "Work", url: "#work", icon: Briefcase },
  { name: "Process", url: "#process", icon: Workflow },
  { name: "About", url: "#about", icon: User },
  { name: "Experience", url: "#experience", icon: GraduationCap },
  { name: "Contact", url: "#contact", icon: Mail },
];

export function SiteNav() {
  return <NavBar items={navItems} />;
}
