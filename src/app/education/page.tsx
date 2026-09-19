"use client";

import React from "react";
import { educationList } from "@/data/education";
import { BookOpen, Award, MapPin, Calendar } from "lucide-react";

export default function EducationPage() {
  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-6 sm:px-10 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-[#F4512A] font-bold block">
          ACADEMIC QUALIFICATIONS
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#151515] dark:text-white uppercase leading-none">
          EDUCATION & <span className="text-[#F4512A]">STUDIES</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
          Foundational computer science, software engineering theory, network protocols, and mathematical sciences.
        </p>
      </div>

      <div className="space-y-8">
        {educationList.map((edu) => (
          <div
            key={edu.id}
            className="glass-card rounded-3xl p-6 sm:p-10 border border-black/10 dark:border-white/10 hover:border-[#F4512A]/60 bg-white/60 dark:bg-zinc-900/60 space-y-6 shadow-md transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/5 dark:border-white/5 pb-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#F4512A]/10 text-[#F4512A] mb-2">
                  {edu.grade || "Undergraduate"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#151515] dark:text-white">
                  {edu.degree}
                </h2>
                <p className="text-base font-bold text-[#F4512A] mt-0.5">
                  {edu.branch}
                </p>
                <p className="text-xs font-mono text-zinc-500 mt-1">
                  {edu.institution}
                </p>
              </div>

              <div className="flex sm:flex-col sm:items-end gap-3 sm:gap-1 text-xs font-mono text-zinc-500">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#F4512A]" />
                  <span>{edu.session}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#F4512A]" />
                <span>Relevant Coursework & Subjects</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {edu.relevantSubjects.map((sub) => (
                  <span
                    key={sub}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-black/5 dark:bg-white/10 text-zinc-800 dark:text-zinc-200 border border-black/5 dark:border-white/5"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            {/* Academic Honors & Achievements */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#F4512A]" />
                <span>Key Academic Achievements</span>
              </h3>
              <ul className="space-y-2">
                {edu.academicAchievements.map((ach, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F4512A] mt-2 shrink-0" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
