"use client";

import React from "react";
import { nowData } from "@/data/now";
import {
  Clock,
  MapPin,
  Sparkles,
  BookOpen,
  Target,
  Hammer,
  CheckCircle2,
} from "lucide-react";

export default function NowPage() {
  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-6 sm:px-10 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#F4512A] text-white">
          <Clock className="w-3.5 h-3.5" />
          <span>WHAT I'M DOING NOW</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#151515] dark:text-white uppercase leading-none">
          CURRENT <span className="text-[#F4512A]">STATUS</span>
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#F4512A]" />
            Last Updated: {nowData.lastUpdated}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#F4512A]" />
            Location: {nowData.location}
          </span>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 font-medium">
          Inspired by Derek Sivers' /now page movement. This is a public declaration of my active priorities, engineering projects, and research goals.
        </p>
      </div>

      {/* Grid of Current Activities */}
      <div className="space-y-8">
        {/* Currently Building */}
        <div className="glass-card rounded-3xl p-8 border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 space-y-4 shadow-md">
          <h2 className="text-xl font-black text-[#151515] dark:text-white uppercase flex items-center gap-2">
            <Hammer className="w-5 h-5 text-[#F4512A]" />
            <span>Currently Building</span>
          </h2>
          <ul className="space-y-2.5">
            {nowData.building.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-[#F4512A] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Currently Learning */}
        <div className="glass-card rounded-3xl p-8 border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 space-y-4 shadow-md">
          <h2 className="text-xl font-black text-[#151515] dark:text-white uppercase flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#F4512A]" />
            <span>Currently Learning & Investigating</span>
          </h2>
          <ul className="space-y-2.5">
            {nowData.learning.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-[#F4512A] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Currently Reading */}
        <div className="glass-card rounded-3xl p-8 border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 space-y-4 shadow-md">
          <h2 className="text-xl font-black text-[#151515] dark:text-white uppercase flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#F4512A]" />
            <span>Currently Reading</span>
          </h2>
          <ul className="space-y-2.5">
            {nowData.reading.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-[#F4512A] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Current Goals */}
        <div className="glass-card rounded-3xl p-8 border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 space-y-4 shadow-md">
          <h2 className="text-xl font-black text-[#151515] dark:text-white uppercase flex items-center gap-2">
            <Target className="w-5 h-5 text-[#F4512A]" />
            <span>Active Goals</span>
          </h2>
          <ul className="space-y-2.5">
            {nowData.goals.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-[#F4512A] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
