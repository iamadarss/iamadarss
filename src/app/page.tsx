"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCard } from "@/components/SkillCard";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { services } from "@/data/services";
import { profile } from "@/data/profile";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Layers,
  Copy,
  Check,
} from "lucide-react";

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState("ALL");

  const copyEmail = () => {
    navigator.clipboard.writeText("adarshpatel8738@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const featuredProjects = projects.filter((p) => {
    if (activeProjectFilter === "ALL") return true;
    return p.category === activeProjectFilter || p.categories.includes(activeProjectFilter);
  });

  const featuredSkills = skills.filter((s) => s.featured).slice(0, 8);

  return (
    <div className="w-full flex flex-col space-y-20 sm:space-y-28">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. EDITORIAL ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-black/10 dark:border-white/10 relative overflow-hidden bg-white/50 dark:bg-zinc-900/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F4512A] font-bold block">
                ABOUT • ADARSH PATEL
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#151515] dark:text-white uppercase leading-tight">
                ENGINEERING WITH <br />
                <span className="text-[#F4512A]">SECURITY & PRECISION</span>
              </h2>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                {profile.location}
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-200 leading-relaxed font-normal">
                {profile.extendedBio}
              </p>

              {/* Exploration Chips */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-zinc-400 font-semibold block">
                  Currently Exploring
                </span>
                <div className="flex flex-wrap gap-2">
                  {profile.currentlyExploring.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/5 dark:bg-white/10 text-zinc-800 dark:text-zinc-200 border border-black/5 dark:border-white/5"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F4512A] hover:text-[#e0441e] transition-colors"
                >
                  <span>Read Full Developer Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 w-full space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#F4512A] font-bold block mb-1">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#151515] dark:text-white uppercase leading-none">
              FEATURED <span className="text-[#F4512A]">WORKS</span>
            </h2>
          </div>

          {/* Quick Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
            {["ALL", "FULL STACK", "WEB", "CYBERSECURITY", "DATA"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveProjectFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeProjectFilter === cat
                    ? "bg-[#F4512A] text-white shadow-sm shadow-[#F4512A]/20"
                    : "bg-white/60 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-black/10 dark:border-white/10 hover:border-[#F4512A]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.slice(0, 6).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#151515] dark:bg-white text-white dark:text-[#151515] hover:bg-[#F4512A] dark:hover:bg-[#F4512A] dark:hover:text-white shadow-md hover:shadow-lg transition-all"
          >
            <span>Explore All Projects ({projects.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. SKILLS ECOSYSTEM PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 w-full space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#F4512A] font-bold block mb-1">
              TECHNICAL PROFICIENCY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#151515] dark:text-white uppercase leading-none">
              SKILL <span className="text-[#F4512A]">ECOSYSTEM</span>
            </h2>
          </div>

          <Link
            href="/skills"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F4512A] hover:underline"
          >
            <span>View Full Matrix ({skills.length} Skills)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredSkills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </section>

      {/* 5. SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 w-full space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#F4512A] font-bold block">
            HOW I CAN HELP
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#151515] dark:text-white uppercase leading-none">
            SPECIALIZED <span className="text-[#F4512A]">SERVICES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 4).map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-3xl p-6 border border-black/10 dark:border-white/10 hover:border-[#F4512A]/60 flex flex-col justify-between group transition-all duration-300 hover:shadow-xl bg-white/50 dark:bg-zinc-900/50"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-[#F4512A]/10 text-[#F4512A] flex items-center justify-center group-hover:bg-[#F4512A] group-hover:text-white transition-colors">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#151515] dark:text-white">
                  {service.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-black/5 dark:border-white/5">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#F4512A]"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. INTERACTIVE LAB TEASER */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
        <div className="relative glass-card rounded-3xl p-8 sm:p-12 border border-[#F4512A]/30 overflow-hidden bg-gradient-to-br from-[#F4512A]/10 via-white/50 to-transparent dark:from-[#F4512A]/15 dark:via-zinc-900/50 dark:to-transparent">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#F4512A] text-white">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIGITAL LABORATORY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#151515] dark:text-white uppercase leading-tight">
              INTERACTIVE CODE & SECURITY EXPERIMENTS
            </h2>

            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
              Explore live cryptographic ciphers, network packet simulation, real-time data distribution models, and procedural 3D math shaders inside the browser.
            </p>

            <div className="pt-2">
              <Link
                href="/lab"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#151515] dark:bg-white text-white dark:text-[#151515] hover:bg-[#F4512A] dark:hover:bg-[#F4512A] dark:hover:text-white shadow-lg transition-all"
              >
                <span>Launch Interactive Lab</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT ACTION STRIP */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 w-full">
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-black/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 bg-white/60 dark:bg-zinc-900/60">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-[#151515] dark:text-white uppercase">
              Have an idea? Let's build something useful.
            </h3>
            <p className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
              Direct Inquiries: adarshpatel8738@gmail.com
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider border border-black/15 dark:border-white/20 bg-white dark:bg-zinc-800 hover:border-[#F4512A] text-zinc-800 dark:text-zinc-200 transition-all shadow-sm"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500">EMAIL COPIED ✓</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#F4512A]" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4512A] text-white hover:bg-[#e0441e] shadow-md shadow-[#F4512A]/25 transition-all"
            >
              <span>Contact Page</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
