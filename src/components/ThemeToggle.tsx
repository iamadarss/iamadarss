"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Activate Day Mode" : "Activate Cyber Night Mode"}
      className={`relative group inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 border border-black/10 dark:border-white/15 bg-white/70 dark:bg-zinc-800/80 hover:bg-white dark:hover:bg-zinc-700/90 text-[#151515] dark:text-zinc-100 backdrop-blur-md shadow-sm hover:shadow-md hover:border-[#F4512A]/40 dark:hover:border-[#F4512A]/60 active:scale-95 cursor-pointer ${className}`}
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Subtle glowing halo on hover */}
      <div className="absolute inset-0 rounded-full bg-[#F4512A]/0 group-hover:bg-[#F4512A]/10 transition-colors duration-300" />

      {/* Sun Icon (shown in dark mode or rotating out) */}
      <Sun
        className={`w-4 h-4 text-[#F4512A] transition-all duration-300 absolute ${
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        }`}
      />

      {/* Moon Icon (shown in light mode or rotating out) */}
      <Moon
        className={`w-4 h-4 text-[#151515] dark:text-white transition-all duration-300 ${
          isDark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100 group-hover:rotate-12"
        }`}
      />
    </button>
  );
}
