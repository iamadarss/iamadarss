"use client";

import React, { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest("a, button, input, select, textarea, [role='button']")
      );
      setIsHovered(isInteractive);

      const isProj = Boolean(target.closest("article, .project-card-interactive"));
      setIsProjectHovered(isProj);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    let animationFrameId: number;
    const lerpTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(lerpTrailing);
    };

    animationFrameId = requestAnimationFrame(lerpTrailing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Central Sharp Dot */}
      <div
        className="fixed pointer-events-none z-50 w-2 h-2 rounded-full bg-[#F4512A] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 0.5 : 1})`,
        }}
      />

      {/* Trailing Outer Ring / Badge */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out border ${
          isProjectHovered
            ? "w-16 h-16 bg-[#F4512A] text-white border-[#F4512A] shadow-lg shadow-[#F4512A]/30 text-[10px] font-black uppercase tracking-wider"
            : isHovered
            ? "w-10 h-10 bg-[#F4512A]/10 border-[#F4512A] scale-110"
            : "w-7 h-7 border-black/20 dark:border-white/30 bg-transparent"
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
        }}
      >
        {isProjectHovered && <span>VIEW</span>}
      </div>
    </>
  );
}
