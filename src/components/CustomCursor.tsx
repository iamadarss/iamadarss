"use client";

import React, { useEffect, useState, useRef } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isProjectHovered, setIsProjectHovered] = useState(false);
  const [hoverText, setHoverText] = useState("VIEW");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const trailingRef = useRef({ x: -100, y: -100, vx: 0, vy: 0, angle: 0, scale: 1 });
  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparksRef = useRef<Spark[]>([]);
  const sparkIdCounter = useRef(0);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    let lastX = -100;
    let lastY = -100;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      setPosition({ x, y });
      setIsVisible(true);

      // Spawn dual-color spark particles when moving
      const dx = x - lastX;
      const dy = y - lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > 3 && sparksRef.current.length < 45) {
        sparkIdCounter.current += 1;
        const isCyan = sparkIdCounter.current % 3 === 0;
        const color = isCyan ? "0, 240, 255" : "244, 81, 42";

        sparksRef.current.push({
          id: sparkIdCounter.current,
          x,
          y,
          vx: (Math.random() - 0.5) * 1.8 - dx * 0.12,
          vy: (Math.random() - 0.5) * 1.8 - dy * 0.12,
          size: Math.random() * 2.5 + 1,
          alpha: 0.9,
          color,
        });
      }

      lastX = x;
      lastY = y;

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest("a, button, input, select, textarea, [role='button'], [data-interactive='true']")
      );
      setIsHovered(isInteractive);

      const cardElement = target.closest(
        "article, .project-card-interactive, [data-card-hover]"
      ) as HTMLElement | null;

      if (cardElement) {
        setIsProjectHovered(true);
        const customText = cardElement.getAttribute("data-cursor-text") || "VIEW";
        setHoverText(customText);
      } else {
        setIsProjectHovered(false);
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev.slice(-3), newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  // Animation Loop for Trailing Ring & Particle Sparks
  useEffect(() => {
    if (isTouchDevice) return;

    let animId: number;
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    const onResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const loop = () => {
      // 1. Lerp trailing position
      const t = trailingRef.current;
      const targetX = position.x;
      const targetY = position.y;

      const dx = targetX - t.x;
      const dy = targetY - t.y;

      t.vx = dx * 0.24;
      t.vy = dy * 0.24;
      t.x += t.vx;
      t.y += t.vy;

      const speed = Math.sqrt(t.vx * t.vx + t.vy * t.vy);
      const angle = Math.atan2(t.vy, t.vx);

      // Stretch along velocity vector
      const stretch = Math.min(speed / 16, 0.5);
      const scaleX = 1 + stretch;
      const scaleY = Math.max(0.6, 1 - stretch * 0.5);

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${t.x}px, ${t.y}px, 0) translate(-50%, -50%) rotate(${angle}rad) scale(${scaleX}, ${scaleY})`;
      }

      // 2. Render particle sparks
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const sparks = sparksRef.current;
          for (let i = sparks.length - 1; i >= 0; i--) {
            const s = sparks[i];
            s.x += s.vx;
            s.y += s.vy;
            s.alpha -= 0.035;
            s.size *= 0.96;

            if (s.alpha <= 0 || s.size <= 0.2) {
              sparks.splice(i, 1);
              continue;
            }

            ctx.fillStyle = `rgba(${s.color}, ${s.alpha})`;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
    };
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Particle Sparks Canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-50"
      />

      {/* Click Shockwave Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-50 rounded-full border-2 border-[#F4512A] animate-cursor-ripple w-12 h-12"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
        />
      ))}

      {/* Central Sharp Dot with Cyber Aura */}
      <div
        className="fixed pointer-events-none z-50 w-2.5 h-2.5 rounded-full bg-[#F4512A] shadow-md shadow-[#F4512A]/80 transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isProjectHovered ? 0 : isHovered ? 0.5 : 1})`,
        }}
      />

      {/* Trailing Elastic Cyber Ring with HUD Crosshair Elements */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center transition-colors duration-200 border ${
          isProjectHovered
            ? "w-20 h-20 bg-[#F4512A] text-white border-[#F4512A] shadow-xl shadow-[#F4512A]/50 font-mono font-black text-[11px] tracking-widest"
            : isHovered
            ? "w-12 h-12 bg-[#F4512A]/15 border-[#F4512A] shadow-lg shadow-[#F4512A]/30 scale-110"
            : "w-8 h-8 border-black/30 dark:border-white/40 bg-transparent"
        }`}
      >
        {/* Subtle Cyber Reticle Tick Marks */}
        {!isProjectHovered && (
          <>
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-0.5 bg-[#F4512A]/70" />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-0.5 bg-[#F4512A]/70" />
            <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-0.5 h-1 bg-[#F4512A]/70" />
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-0.5 h-1 bg-[#F4512A]/70" />
          </>
        )}

        {isProjectHovered && (
          <span className="animate-in zoom-in duration-150 select-none">
            {hoverText}
          </span>
        )}
      </div>
    </>
  );
}
