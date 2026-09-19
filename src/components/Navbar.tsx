"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  FolderGit2,
  Cpu,
  Briefcase,
  Mail,
  Menu,
  X,
  FileText,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: FolderGit2 },
  { name: "Skills", href: "/skills", icon: Cpu },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page navigation or Escape key
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <div className="flex items-center justify-between gap-3">
          {/* Top Left Brand Capsule */}
          <div className="pointer-events-auto flex items-center">
            <Link
              href="/"
              className={`group flex items-center gap-3 px-3.5 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#16161C]/85 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 hover:border-[#F4512A]/40 ${
                scrolled ? "py-1.5 shadow-md" : ""
              }`}
              aria-label="Adarsh Patel Portfolio Home"
            >
              {/* Geometric Monogram */}
              <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
                <div className="absolute inset-0 bg-[#F4512A] rounded-lg rotate-45 transform group-hover:rotate-90 transition-transform duration-500 shadow-sm shadow-[#F4512A]/30" />
                <span className="relative z-10 text-white font-black text-[11px] tracking-tighter font-mono">
                  AP
                </span>
              </div>
              <div className="flex flex-col pr-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#151515] dark:text-white transition-colors leading-none">
                    adarsh patel
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse hidden sm:inline-block" title="Open to opportunities" />
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#777777] dark:text-zinc-400 mt-0.5 leading-none hidden xs:inline-block">
                  software engineer
                </span>
              </div>
            </Link>
          </div>

          {/* Floating Center Pill Navigation (Desktop) */}
          <nav
            aria-label="Main Navigation"
            className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#16161C]/85 backdrop-blur-md shadow-sm pointer-events-auto transition-all duration-300 ${
              scrolled ? "shadow-lg scale-95" : ""
            }`}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#F4512A] text-white shadow-md shadow-[#F4512A]/30 scale-100"
                      : "text-[#151515] dark:text-zinc-300 hover:text-[#F4512A] dark:hover:text-[#F4512A] hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "opacity-70"}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Top Right Utilities & CTA */}
          <div className="pointer-events-auto flex items-center gap-2">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Resume Button */}
            <Link
              href="/resume"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#16161C]/85 hover:bg-white dark:hover:bg-zinc-800 text-[#151515] dark:text-zinc-200 backdrop-blur-md transition-all shadow-sm hover:border-[#F4512A]/40 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#F4512A]" />
              <span>Resume</span>
            </Link>

            {/* Contact CTA Button */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full bg-[#151515] dark:bg-white text-white dark:text-[#151515] hover:bg-[#F4512A] dark:hover:bg-[#F4512A] dark:hover:text-white transition-all shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#16161C]/85 text-[#151515] dark:text-white backdrop-blur-md shadow-sm active:scale-95 cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#F4512A]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-50 bg-black/40 dark:bg-black/70 backdrop-blur-md md:hidden pointer-events-auto flex flex-col p-4 sm:p-6 overflow-y-auto">
          <div className="w-full max-w-sm mx-auto rounded-3xl p-6 flex flex-col gap-4 border border-black/10 dark:border-white/10 bg-white/95 dark:bg-[#16161C]/95 backdrop-blur-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest font-mono text-[#F4512A] font-bold">
                Navigation
              </span>
              <span className="text-[10px] font-mono uppercase text-zinc-500 dark:text-zinc-400">
                Menu
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-[#F4512A] text-white shadow-md shadow-[#F4512A]/25"
                        : "text-[#151515] dark:text-zinc-200 hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </div>
                    {isActive && <span className="w-2 h-2 rounded-full bg-white" />}
                  </Link>
                );
              })}
            </div>

            <div className="h-px bg-black/10 dark:bg-white/10 my-1" />

            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-semibold border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-zinc-800 dark:text-zinc-200 hover:border-[#F4512A]"
              >
                <FileText className="w-4 h-4 text-[#F4512A]" />
                <span>Resume</span>
              </Link>
              <Link
                href="/lab"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-semibold border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-zinc-800 dark:text-zinc-200 hover:border-[#F4512A]"
              >
                <Sparkles className="w-4 h-4 text-[#F4512A]" />
                <span>Lab</span>
              </Link>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-2xl text-center text-xs uppercase font-bold tracking-wider bg-[#F4512A] text-white hover:bg-[#e0441e] transition-colors shadow-lg shadow-[#F4512A]/30 flex items-center justify-center gap-1.5"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
