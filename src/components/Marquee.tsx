"use client";

import React from "react";

const tickerItems = [
  "FULL STACK DEVELOPMENT",
  "CYBERSECURITY",
  "DATA ANALYTICS",
  "PYTHON",
  "JAVA",
  "C++",
  "WEB DEVELOPMENT",
  "AI TOOLS",
  "AUTOMATION",
  "SYSTEM ARCHITECTURE",
  "API SECURITY",
  "CREATIVE CODE",
];

export function Marquee({ angled = true }: { angled?: boolean }) {
  // Duplicate array multiple times for seamless infinite loop
  const repeatedItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div
      className={`relative w-full overflow-hidden select-none z-20 py-2.5 bg-[#F4512A] text-white shadow-xl ${
        angled
          ? "rotate-[-1.8deg] scale-[1.05] my-6 sm:my-10 border-y-2 border-white/20"
          : "my-4"
      }`}
      aria-label="Skill Highlights Ticker"
    >
      <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
        {repeatedItems.map((item, index) => (
          <div key={index} className="flex items-center gap-6">
            <span className="text-xs sm:text-sm md:text-base font-extrabold tracking-widest uppercase">
              {item}
            </span>
            <span className="text-white/80 text-xs sm:text-sm select-none" aria-hidden="true">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
