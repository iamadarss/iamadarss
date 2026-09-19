"use client";

import React from "react";
import { experiences } from "@/data/experience";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-6 sm:px-10 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-[#F4512A] font-bold block">
          CAREER & PROJECT TIMELINE
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#151515] dark:text-white uppercase leading-none">
          PROFESSIONAL <span className="text-[#F4512A]">EXPERIENCE</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
          Chronological record of software engineering projects, automation tools, and open-source initiatives developed by Adarsh Patel.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-black/10 dark:border-white/10 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Bullet */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#F4512A] border-4 border-white dark:border-[#0D0D11] shadow-md group-hover:scale-125 transition-transform duration-200" />

            {/* Experience Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-black/10 dark:border-white/10 hover:border-[#F4512A]/60 bg-white/60 dark:bg-zinc-900/60 space-y-6 transition-all shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/5 dark:border-white/5 pb-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#F4512A]/10 text-[#F4512A] mb-1.5">
                    {exp.type}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#151515] dark:text-white">
                    {exp.role}
                  </h2>
                  <p className="text-sm font-mono font-bold text-zinc-700 dark:text-zinc-300">
                    {exp.organization}
                  </p>
                </div>

                <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-1 text-xs font-mono text-zinc-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#F4512A]" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold block">
                  Key Responsibilities & Deliverables
                </span>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#F4512A] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-black/5 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
