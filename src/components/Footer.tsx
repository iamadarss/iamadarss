"use client";

import React from "react";
import Link from "next/link";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-black/10 dark:border-white/10 pt-16 pb-12 overflow-hidden bg-white/40 dark:bg-zinc-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-12">
        {/* Massive Editorial Headline */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-8 border-b border-black/10 dark:border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#F4512A] font-bold block mb-2">
              NEXT STEP • COLLABORATION
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#151515] dark:text-white uppercase leading-none">
              LET'S BUILD <br />
              <span className="text-[#F4512A]">SOMETHING GREAT.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end space-y-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4512A] text-white hover:bg-[#e0441e] shadow-lg shadow-[#F4512A]/25 transition-all"
            >
              <span>Start A Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
              Open to worldwide engineering opportunities
            </span>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-[#F4512A] flex items-center justify-center text-white font-black text-[10px]">
                AP
              </div>
              <span className="font-extrabold text-base tracking-tight text-[#151515] dark:text-white">
                Adarsh Patel
              </span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {profile.tagline}
            </p>
            <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
              Full Stack • Cybersecurity • Data Intelligence
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs font-medium">
              <li>
                <Link href="/" className="hover:text-[#F4512A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F4512A] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#F4512A] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-[#F4512A] transition-colors">
                  Skills Matrix
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-[#F4512A] transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F4512A] transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Extras */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
              Deep Dives
            </h4>
            <ul className="space-y-1.5 text-xs font-medium">
              <li>
                <Link href="/resume" className="hover:text-[#F4512A] transition-colors">
                  Resume (PDF & Online)
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#F4512A] transition-colors">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/lab" className="hover:text-[#F4512A] transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#F4512A]" />
                  <span>Interactive Lab</span>
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-[#F4512A] transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/uses" className="hover:text-[#F4512A] transition-colors">
                  Workstation Setup (/uses)
                </Link>
              </li>
              <li>
                <Link href="/now" className="hover:text-[#F4512A] transition-colors">
                  Current Status (/now)
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
              Connect
            </h4>
            <ul className="space-y-1.5 text-xs font-medium">
              {socialLinks.map((link) => (
                <li key={link.platform}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#F4512A] transition-colors"
                  >
                    <span>{link.platform}</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <div>
            © {new Date().getFullYear()} Adarsh Patel. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 text-zinc-800 dark:text-zinc-200">⌘K</kbd> for Command Palette</span>
            <button
              onClick={scrollToTop}
              className="hover:text-[#F4512A] transition-colors flex items-center gap-1"
            >
              <span>Back to Top ↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
