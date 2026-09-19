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
  Search,
  FileText,
  Sparkles,
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

export function Navbar({ onOpenCommandPalette }: { onOpenCommandPalette?: () => void }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-10 py-4 pointer-events-none">
      {/* Top Left Brand / Logo */}
      <div className="flex items-center gap-3 pointer-events-auto">
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4512A] rounded-xl px-2 py-1"
          aria-label="Adarsh Patel Portfolio Home"
        >
          {/* Geometric Monogram / Star Icon */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#F4512A] rounded-lg rotate-45 transform group-hover:rotate-90 transition-transform duration-500 shadow-md shadow-[#F4512A]/20" />
            <span className="relative z-10 text-white font-black text-xs tracking-tighter">
              AP
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-[#151515] dark:text-white transition-colors">
              adarsh patel
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#777777] dark:text-zinc-400">
              engineering
            </span>
          </div>
        </Link>
      </div>

      {/* Floating Center Pill Navigation (Inspired by Reference Visual) */}
      <nav
        aria-label="Main Navigation"
        className={`hidden md:flex items-center gap-1.5 p-1.5 rounded-full glass-nav pointer-events-auto transition-all duration-300 ${
          scrolled ? "scale-95 shadow-xl" : "shadow-md"
        }`}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                isActive
                  ? "bg-[#F4512A] text-white shadow-md shadow-[#F4512A]/30 scale-100"
                  : "text-[#151515] dark:text-zinc-300 hover:text-[#F4512A] hover:bg-black/5 dark:hover:bg-white/5"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "opacity-75"}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Top Right Utilities & CTA */}
      <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto">
        {/* Command Palette Trigger */}
        <button
          onClick={onOpenCommandPalette}
          className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 hover:bg-white dark:hover:bg-zinc-700 backdrop-blur-sm transition-all shadow-sm group"
          title="Open Command Palette (Ctrl+K)"
          aria-label="Open Command Palette"
        >
          <Search className="w-3.5 h-3.5 text-[#F4512A] group-hover:scale-110 transition-transform" />
          <span className="hidden lg:inline text-[11px]">Command</span>
          <kbd className="px-1.5 py-0.5 text-[10px] bg-black/5 dark:bg-white/10 rounded font-sans text-zinc-600 dark:text-zinc-400">
            ⌘K
          </kbd>
        </button>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Resume Button */}
        <Link
          href="/resume"
          className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border border-black/10 dark:border-white/15 bg-white/60 dark:bg-zinc-800/60 hover:bg-white dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 backdrop-blur-sm transition-colors"
        >
          <FileText className="w-3.5 h-3.5 opacity-70" />
          <span>Resume</span>
        </Link>

        {/* Contact CTA Button (Pill with Arrow) */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-1 px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border border-black/15 dark:border-white/20 hover:border-[#F4512A] dark:hover:border-[#F4512A] bg-white/70 dark:bg-zinc-900/80 text-[#151515] dark:text-white hover:text-[#F4512A] transition-all hover:shadow-md"
        >
          <span>Get in touch</span>
          <span className="text-sm leading-none">↗</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-black/10 dark:border-white/15 bg-white/80 dark:bg-zinc-900/80 text-[#151515] dark:text-white backdrop-blur-md"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] z-40 bg-zinc-900/40 dark:bg-black/70 backdrop-blur-md md:hidden pointer-events-auto flex flex-col p-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="w-full max-w-sm mx-auto glass-card rounded-3xl p-6 flex flex-col gap-4 border border-white/20 dark:border-white/10 shadow-2xl">
            <div className="text-xs uppercase tracking-widest font-mono text-[#F4512A] font-semibold">
              Navigation
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
                        ? "bg-[#F4512A] text-white shadow-md shadow-[#F4512A]/20"
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
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold border border-black/10 dark:border-white/10 bg-white/50 dark:bg-zinc-800/50 text-zinc-800 dark:text-zinc-200"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </Link>
              <Link
                href="/lab"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold border border-black/10 dark:border-white/10 bg-white/50 dark:bg-zinc-800/50 text-zinc-800 dark:text-zinc-200"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F4512A]" />
                <span>Lab</span>
              </Link>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-2xl text-center text-xs uppercase font-bold tracking-wider bg-[#151515] dark:bg-white text-white dark:text-[#151515] hover:bg-[#F4512A] dark:hover:bg-[#F4512A] dark:hover:text-white transition-colors"
            >
              Get In Touch ↗
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
