"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { educationList } from "@/data/education";
import {
  ArrowRight,
  Shield,
  Code,
  CheckCircle2,
  FileDown,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 sm:px-10 space-y-16 sm:space-y-24">
      {/* Top Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-[#F4512A] font-bold block">
          DEVELOPER BIOGRAPHY & PHILOSOPHY
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#151515] dark:text-white uppercase leading-none">
          ABOUT <span className="text-[#F4512A]">ADARSH PATEL</span>
        </h1>
        <p className="text-base sm:text-xl text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
          {profile.extendedBio}
        </p>
      </div>

      {/* Main Feature Grid: Portrait + Working Philosophy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden glass-card border border-black/10 dark:border-white/15 shadow-2xl">
            <Image
              src="/images/adarsh_hero.jpg"
              alt="Adarsh Patel — Software Developer"
              fill
              priority
              className="object-cover object-top"
            />
          </div>
          <div className="mt-4 text-center">
            <span className="font-signature text-3xl text-[#151515] dark:text-white">
              Adarsh Patel
            </span>
            <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mt-1">
              Software • Web • Automation
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-[#151515] dark:text-white uppercase">
              Working Philosophy
            </h2>
            <div className="p-6 rounded-2xl glass-card border-l-4 border-l-[#F4512A] bg-white/40 dark:bg-zinc-900/40">
              <p className="text-sm sm:text-base italic text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                "{profile.quote}"
              </p>
            </div>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I view software development as a craft requiring equal parts rigorous architecture, defensive security, and aesthetic delight. Too often, security is treated as an afterthought or user interfaces are built with minimal attention to ergonomic delight. My mission is to build systems that excel on all fronts.
            </p>
          </div>

          {/* Currently Exploring Grid */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F4512A]">
              Currently Exploring
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Cybersecurity & Kernel Defense",
                "Data Analytics & Statistical Modeling",
                "Full Stack Next.js & Server Actions",
                "AI-Powered Automation Workflows",
                "Zero-Trust Cloud Deployments",
                "Interactive WebGL & Shaders",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl glass-card border border-black/5 dark:border-white/5 text-xs font-semibold text-[#151515] dark:text-zinc-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#F4512A] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#151515] dark:bg-white text-white dark:text-[#151515] hover:bg-[#F4512A] dark:hover:bg-[#F4512A] dark:hover:text-white transition-all shadow-md"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4512A] text-white hover:bg-[#e0441e] transition-all shadow-md shadow-[#F4512A]/20"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Career Journey & Timeline Snapshot */}
      <div className="space-y-8 pt-8 border-t border-black/10 dark:border-white/10">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-[#F4512A] font-bold">
            TIMELINE & MILESTONES
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#151515] dark:text-white uppercase">
            THE DEVELOPER JOURNEY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Engineering Experience */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#151515] dark:text-white flex items-center gap-2">
              <Code className="w-5 h-5 text-[#F4512A]" />
              <span>Engineering & Projects</span>
            </h3>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="glass-card p-6 rounded-2xl border border-black/10 dark:border-white/10 space-y-2 bg-white/40 dark:bg-zinc-900/40"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-[#151515] dark:text-white">
                        {exp.role}
                      </h4>
                      <p className="text-xs font-mono text-[#F4512A]">
                        {exp.organization}
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Background */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#151515] dark:text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#F4512A]" />
              <span>Academic Foundations</span>
            </h3>
            <div className="space-y-4">
              {educationList.map((edu) => (
                <div
                  key={edu.id}
                  className="glass-card p-6 rounded-2xl border border-black/10 dark:border-white/10 space-y-3 bg-white/40 dark:bg-zinc-900/40"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-[#151515] dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-xs font-mono text-[#F4512A]">{edu.branch}</p>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {edu.session}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-zinc-400">
                      Core Subjects:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {edu.relevantSubjects.slice(0, 5).map((sub) => (
                        <span
                          key={sub}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/5 dark:bg-white/10 text-zinc-700 dark:text-zinc-300"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
