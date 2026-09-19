"use client";

import React, { useEffect, useRef } from "react";

export function CursorAmbientLight() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Check coarse pointer / touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetX = mouseX;
    let targetY = mouseY;
    let isMoving = false;
    let moveTimeout: NodeJS.Timeout;

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      isMoving = true;
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        isMoving = false;
      }, 150);

      // Update root CSS variables for CSS-based spotlight illumination
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Ambient floating dust particles that react to cursor proximity
    interface AmbientDust {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      baseAlpha: number;
    }

    const particles: AmbientDust[] = [];
    const particleCount = Math.min(Math.floor(width / 35), 35);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.3 + 0.1,
        baseAlpha: Math.random() * 0.3 + 0.1,
      });
    }

    const render = () => {
      // Fast smooth interpolation
      mouseX += (targetX - mouseX) * 0.22;
      mouseY += (targetY - mouseY) * 0.22;

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains("dark");

      // Draw primary ambient radial glow behind the entire page
      const gradient = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        Math.max(width, height) * 0.45
      );

      if (isDark) {
        gradient.addColorStop(0, "rgba(244, 81, 42, 0.08)");
        gradient.addColorStop(0.35, "rgba(244, 81, 42, 0.03)");
        gradient.addColorStop(0.7, "rgba(255, 255, 255, 0.005)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      } else {
        gradient.addColorStop(0, "rgba(244, 81, 42, 0.05)");
        gradient.addColorStop(0.35, "rgba(244, 81, 42, 0.015)");
        gradient.addColorStop(0.7, "rgba(21, 21, 21, 0.003)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render reactive ambient dust particles
      const dustColor = isDark ? "255, 255, 255" : "244, 81, 42";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Distance to mouse
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 200;

        let alpha = p.baseAlpha;
        if (dist < maxDist) {
          // Repel slightly and glow brighter when cursor is close
          const force = (1 - dist / maxDist) * 0.8;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
          alpha = Math.min(1, p.baseAlpha + (1 - dist / maxDist) * 0.5);
        }

        ctx.fillStyle = `rgba(${dustColor}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
      clearTimeout(moveTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-80 dark:opacity-100 transition-opacity duration-500"
    />
  );
}
