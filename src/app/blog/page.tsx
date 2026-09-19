"use client";

import React, { useState } from "react";
import Link from "next/link";
import { blogPosts, blogCategories } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-6 sm:px-10 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-[#F4512A] font-bold block">
          ENGINEERING WRITINGS & NOTES
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#151515] dark:text-white uppercase leading-none">
          DEV <span className="text-[#F4512A]">BLOG</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
          Technical deep dives into cybersecurity defense, web operating systems architecture, Next.js optimization, and automated data pipelines.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-5 rounded-3xl glass-card border border-black/10 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-[#F4512A] text-white shadow-sm"
                  : "bg-white/60 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-black/10 dark:border-white/10 hover:border-[#F4512A]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative min-w-[220px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles & tags..."
            className="w-full pl-9 pr-3 py-2 rounded-full text-xs font-mono bg-white/70 dark:bg-zinc-800/70 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#F4512A]"
          />
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="group glass-card rounded-3xl p-8 border border-black/10 dark:border-white/10 hover:border-[#F4512A]/60 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-xl bg-white/60 dark:bg-zinc-900/60"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                <span className="px-3 py-1 rounded-full bg-[#F4512A]/10 text-[#F4512A] font-semibold uppercase tracking-wider">
                  {post.category}
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#F4512A]" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#F4512A]" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl sm:text-2xl font-black text-[#151515] dark:text-white group-hover:text-[#F4512A] transition-colors leading-snug">
                  {post.title}
                </h2>
              </Link>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed line-clamp-3 font-normal">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 text-zinc-600 dark:text-zinc-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#F4512A] group-hover:translate-x-1 transition-transform"
              >
                <span>Read</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-16 glass-card rounded-3xl p-8 border border-black/10 dark:border-white/10">
          <p className="text-sm font-mono text-zinc-500">
            No articles found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
