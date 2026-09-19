"use client";

import React, { useState } from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectFilter } from "@/components/ProjectFilter";

const categories = [
  "ALL",
  "FULL STACK",
  "WEB",
  "CYBERSECURITY",
  "DATA",
  "AI",
  "AUTOMATION",
  "MOBILE",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Filtering
  const filtered = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "ALL" ||
      project.category === activeCategory ||
      project.categories.includes(activeCategory);

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  // Sorting
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "featured") {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return parseInt(b.year) - parseInt(a.year);
    }
    if (sortBy === "newest") {
      return parseInt(b.year) - parseInt(a.year);
    }
    if (sortBy === "name") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 sm:px-10 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-[#F4512A] font-bold block">
          ENGINEERING SHOWCASE
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#151515] dark:text-white uppercase leading-none">
          PROJECTS & <span className="text-[#F4512A]">SYSTEMS</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
          Explore responsive web applications, Python automation tools, real-time telemetry systems, and full-stack software solutions built by Adarsh Patel.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-6 rounded-3xl glass-card border border-black/10 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50">
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {sorted.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {sorted.length === 0 && (
        <div className="text-center py-16 glass-card rounded-3xl p-8 border border-black/10 dark:border-white/10">
          <p className="text-base font-bold text-[#151515] dark:text-white">
            No projects found matching your search.
          </p>
          <p className="text-xs font-mono text-zinc-500 mt-1">
            Try adjusting your search query or selecting "ALL" categories.
          </p>
          <button
            onClick={() => {
              setActiveCategory("ALL");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4512A] text-white"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
