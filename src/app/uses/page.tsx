"use client";

import React, { useState } from "react";
import { usesTools, usesCategories } from "@/data/uses";

export default function UsesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filtered = usesTools.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-6 sm:px-10 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-[#F4512A] font-bold block">
          HARDWARE & WORKFLOW
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#151515] dark:text-white uppercase leading-none">
          WHAT I <span className="text-[#F4512A]">USE</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
          The physical hardware, developer tools, editor setup, terminals, and software systems powering Adarsh Patel's daily workflow.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
            selectedCategory === "All"
              ? "bg-[#F4512A] text-white shadow-sm"
              : "bg-white/60 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-black/10 dark:border-white/10"
          }`}
        >
          All Tools
        </button>
        {usesCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
              selectedCategory === cat
                ? "bg-[#F4512A] text-white shadow-sm"
                : "bg-white/60 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-black/10 dark:border-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <div
            key={item.name}
            className="glass-card rounded-3xl p-6 sm:p-8 border border-black/10 dark:border-white/10 hover:border-[#F4512A]/60 flex flex-col justify-between space-y-4 transition-all duration-300 hover:shadow-xl bg-white/60 dark:bg-zinc-900/60"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#F4512A] font-bold">
                  {item.category}
                </span>
                {item.badge && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#F4512A]/10 text-[#F4512A] font-semibold border border-[#F4512A]/20">
                    {item.badge}
                  </span>
                )}
              </div>

              <h2 className="text-xl font-bold text-[#151515] dark:text-white">
                {item.name}
              </h2>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
