"use client";

import React, { useEffect, useState } from "react";

export function FloatingCyberElements() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = (e.clientX - w / 2) / (w / 2);
      const y = (e.clientY - h / 2) / (h / 2);
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Top Left Floating Diamond telemetry node */}
      <div
        style={{
          transform: `translate3d(${mousePos.x * 25}px, ${mousePos.y * 25}px, 0)`,
        }}
        className="absolute top-28 left-8 sm:left-16 flex items-center gap-2 opacity-30 dark:opacity-40 transition-transform duration-300 ease-out"
      >
        <div className="w-2 h-2 rotate-45 border border-[#F4512A] animate-pulse" />
        <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase">
          SYS.LOC // 26.4499° N, 80.3319° E
        </span>
      </div>

      {/* Top Right Floating Crosshair */}
      <div
        style={{
          transform: `translate3d(${mousePos.x * -35}px, ${mousePos.y * -35}px, 0)`,
        }}
        className="absolute top-36 right-8 sm:right-20 flex flex-col items-end opacity-25 dark:opacity-35 transition-transform duration-300 ease-out"
      >
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="absolute w-full h-[1px] bg-[#F4512A]" />
          <div className="absolute h-full w-[1px] bg-[#F4512A]" />
          <div className="w-4 h-4 rounded-full border border-[#F4512A]/60 animate-spin" />
        </div>
        <span className="font-mono text-[8px] tracking-widest text-[#F4512A] mt-1">
          ORBITAL // ACTIVE
        </span>
      </div>

      {/* Bottom Left Telemetry Grid Indicator */}
      <div
        style={{
          transform: `translate3d(${mousePos.x * 18}px, ${mousePos.y * 18}px, 0)`,
        }}
        className="absolute bottom-24 left-6 sm:left-14 flex items-center gap-3 opacity-20 dark:opacity-30 transition-transform duration-300 ease-out"
      >
        <div className="grid grid-cols-2 gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-[#F4512A]" />
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#F4512A]" />
        </div>
        <span className="font-mono text-[9px] text-zinc-500 dark:text-zinc-400">
          NODE // DEV_V4
        </span>
      </div>

      {/* Bottom Right Floating Coordinates */}
      <div
        style={{
          transform: `translate3d(${mousePos.x * -22}px, ${mousePos.y * -22}px, 0)`,
        }}
        className="absolute bottom-16 right-8 sm:right-16 opacity-25 dark:opacity-35 transition-transform duration-300 ease-out"
      >
        <div className="font-mono text-[9px] text-zinc-500 tracking-wider flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>PORT // 3000 • ONLINE</span>
        </div>
      </div>
    </div>
  );
}
