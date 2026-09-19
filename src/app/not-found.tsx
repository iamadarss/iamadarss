"use client";

import React from "react";
import Link from "next/link";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center space-y-8 select-none">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#F4512A]/10 text-[#F4512A] border border-[#F4512A]/20">
          <Compass className="w-3.5 h-3.5 animate-spin duration-1000" />
          <span>STATUS: 404 ERROR</span>
        </div>

        <h1 className="text-7xl sm:text-9xl font-black text-[#151515] dark:text-white tracking-tighter">
          4<span className="text-[#F4512A]">0</span>4
        </h1>

        <h2 className="text-xl sm:text-2xl font-black text-[#151515] dark:text-white uppercase">
          Looks like this page went off-grid.
        </h2>

        <p className="text-xs sm:text-sm font-mono text-zinc-500 max-w-md mx-auto">
          The requested route does not exist or has been relocated to another coordinate in cyberspace.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4512A] text-white hover:bg-[#e0441e] shadow-lg shadow-[#F4512A]/25 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider border border-black/15 dark:border-white/20 bg-white/60 dark:bg-zinc-800/60 text-zinc-800 dark:text-zinc-200"
        >
          <span>View Projects</span>
        </Link>
      </div>
    </div>
  );
}
