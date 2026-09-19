"use client";

import React from "react";
import { Skill } from "@/data/skills";
import {
  Code,
  Globe,
  Database,
  Terminal,
  ShieldCheck,
  BarChart2,
  Cpu,
  Layers,
  FileCode,
  Palette,
  Server,
  Key,
  Lock,
  Filter,
  PieChart,
  Table,
  HardDrive,
  GitBranch,
  Box,
  Smartphone,
  Flame,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code,
  globe: Globe,
  database: Database,
  terminal: Terminal,
  "shield-check": ShieldCheck,
  "bar-chart-2": BarChart2,
  cpu: Cpu,
  layers: Layers,
  "file-code": FileCode,
  palette: Palette,
  server: Server,
  key: Key,
  lock: Lock,
  filter: Filter,
  "pie-chart": PieChart,
  table: Table,
  "hard-drive": HardDrive,
  "git-branch": GitBranch,
  box: Box,
  smartphone: Smartphone,
  flame: Flame,
};

import { TiltCard } from "./TiltCard";

export function SkillCard({ skill }: { skill: Skill }) {
  const IconComponent = iconMap[skill.icon] || Code;

  return (
    <TiltCard maxTilt={7} data-card-hover="true" data-cursor-text="SKILL" className="h-full rounded-2xl">
      <div className="group relative h-full glass-card p-5 sm:p-6 rounded-2xl border border-black/10 dark:border-white/10 hover:border-[#F4512A]/60 dark:hover:border-[#F4512A]/60 transition-all duration-300 hover:shadow-xl bg-white/70 dark:bg-[#16161C]/80 flex flex-col justify-between">
        <div>
          {/* Top Header with Icon & Experience */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#F4512A]/10 dark:bg-[#F4512A]/20 text-[#F4512A] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#F4512A] group-hover:text-white transition-all duration-300 shadow-sm">
              <IconComponent className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-zinc-600 dark:text-zinc-400 font-medium">
              {skill.experience}
            </span>
          </div>

          {/* Skill Title & Category */}
          <h4 className="text-base sm:text-lg font-bold text-[#151515] dark:text-white group-hover:text-[#F4512A] transition-colors">
            {skill.name}
          </h4>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#777777] dark:text-zinc-400 block mb-2">
            {skill.category}
          </span>

          {/* Skill Description */}
          <p className="text-xs text-zinc-600 dark:text-zinc-300 line-clamp-3 leading-relaxed mb-4">
            {skill.description}
          </p>
        </div>

        <div>
          {/* Proficiency Bar */}
          <div className="space-y-1.5 pt-2 border-t border-black/5 dark:border-white/5">
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span className="text-zinc-500 dark:text-zinc-400">Proficiency</span>
              <span className="font-bold text-[#151515] dark:text-white">{skill.level}%</span>
            </div>
            <div className="w-full h-1.5 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#F4512A] to-[#ff7b5c] rounded-full transition-all duration-700 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>

          {/* Related Projects */}
          {skill.relatedProjects.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              <span className="text-[9px] font-mono text-zinc-400 uppercase">Used in:</span>
              {skill.relatedProjects.map((proj) => (
                <span
                  key={proj}
                  className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 font-medium"
                >
                  {proj}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </TiltCard>
  );
}
