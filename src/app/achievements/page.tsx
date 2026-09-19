"use client";

import React from "react";
import { achievements } from "@/data/achievements";
import { Trophy, ExternalLink, Calendar, Star } from "lucide-react";

export default function AchievementsPage() {
  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-6 sm:px-10 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-[#F4512A] font-bold block">
          HONORS & COMPETITIONS
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#151515] dark:text-white uppercase leading-none">
          ACHIEVEMENTS & <span className="text-[#F4512A]">RECOGNITION</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
          Notable hackathon awards, open-source creations, and technical milestones achieved throughout Adarsh Patel's engineering journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((ach) => (
          <div
            key={ach.id}
            className="glass-card rounded-3xl p-8 border border-black/10 dark:border-white/10 hover:border-[#F4512A]/60 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-xl bg-white/60 dark:bg-zinc-900/60"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#F4512A]/10 text-[#F4512A] flex items-center justify-center">
                  <Trophy className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#F4512A]" />
                  {ach.date}
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#F4512A] font-bold">
                  {ach.category} • {ach.organization}
                </span>
                <h2 className="text-xl font-black text-[#151515] dark:text-white">
                  {ach.title}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {ach.description}
              </p>
            </div>

            <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
              {ach.highlight && (
                <div className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-amber-600 dark:text-amber-400">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  <span>{ach.highlight}</span>
                </div>
              )}
              {ach.link && (
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#F4512A] hover:underline ml-auto"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
