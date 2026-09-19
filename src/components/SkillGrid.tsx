"use client";

import React, { useState } from "react";
import { skills, skillCategories } from "@/data/skills";
import { SkillCard } from "./SkillCard";
import { Search } from "lucide-react";

export function SkillGrid({ limit }: { limit?: number }) {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory =
      activeCategory === "ALL" || skill.category === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displaySkills = limit ? filteredSkills.slice(0, limit) : filteredSkills;

  return (
    <div className="space-y-8 w-full">
      {/* Category Bar & Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
          <button
            onClick={() => setActiveCategory("ALL")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              activeCategory === "ALL"
                ? "bg-[#F4512A] text-white shadow-md shadow-[#F4512A]/20"
                : "bg-white/60 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-black/10 dark:border-white/10"
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-[#F4512A] text-white shadow-md shadow-[#F4512A]/20"
                  : "bg-white/60 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-black/10 dark:border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative min-w-[200px] max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter skills..."
            className="w-full pl-9 pr-3 py-1.5 rounded-full text-xs font-mono bg-white/70 dark:bg-zinc-800/70 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#F4512A]"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {displaySkills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>

      {displaySkills.length === 0 && (
        <div className="text-center py-12 glass-card rounded-2xl p-8">
          <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400">
            No technical skills found matching your filter criteria.
          </p>
        </div>
      )}
    </div>
  );
}
