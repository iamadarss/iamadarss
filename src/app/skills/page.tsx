"use client";

import React from "react";
import { SkillGrid } from "@/components/SkillGrid";

export default function SkillsPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 sm:px-10 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-[#F4512A] font-bold block">
          TECHNICAL STACK & CAPABILITIES
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#151515] dark:text-white uppercase leading-none">
          SKILL <span className="text-[#F4512A]">ECOSYSTEM</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
          Comprehensive inventory of programming languages, web frameworks, cybersecurity tools, databases, and data science libraries mastered through continuous production and academic practice.
        </p>
      </div>

      {/* Interactive Grid with Real-time Search & Filter */}
      <div className="w-full">
        <SkillGrid />
      </div>
    </div>
  );
}
