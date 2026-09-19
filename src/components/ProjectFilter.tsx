"use client";

import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export function ProjectFilter({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}: ProjectFilterProps) {
  return (
    <div className="space-y-4 w-full">
      {/* Search & Sort Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search projects by name, tech, or problem..."
            className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs font-mono bg-white/70 dark:bg-zinc-800/70 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#F4512A] backdrop-blur-sm"
          />
        </div>

        {/* Sort Selector */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-400 hidden sm:inline" />
          <span className="text-xs font-mono text-zinc-500 hidden sm:inline">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-3 py-2 rounded-full text-xs font-mono bg-white/70 dark:bg-zinc-800/70 border border-black/10 dark:border-white/10 text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#F4512A] backdrop-blur-sm"
          >
            <option value="featured">Featured First</option>
            <option value="newest">Newest First</option>
            <option value="name">Alphabetical (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                isActive
                  ? "bg-[#F4512A] text-white shadow-md shadow-[#F4512A]/20 scale-100"
                  : "bg-white/60 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-black/10 dark:border-white/10 hover:border-[#F4512A]/50"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
