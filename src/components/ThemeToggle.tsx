"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${resolvedTheme === "light" ? "dark" : "light"} mode`}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-200 border border-black/10 dark:border-white/15 bg-white/50 dark:bg-zinc-800/50 hover:bg-white/80 dark:hover:bg-zinc-700/80 text-zinc-800 dark:text-zinc-200 backdrop-blur-sm ${className}`}
      title={`Switch to ${resolvedTheme === "light" ? "dark" : "light"} mode`}
    >
      {resolvedTheme === "light" ? (
        <Moon className="w-4 h-4 text-[#151515] transition-transform duration-300 hover:rotate-12" />
      ) : (
        <Sun className="w-4 h-4 text-[#F4512A] transition-transform duration-300 hover:rotate-45" />
      )}
    </button>
  );
}
