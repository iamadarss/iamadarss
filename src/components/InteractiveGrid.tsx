"use client";

import React, { useEffect, useRef } from "react";

export function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetX = mouseX;
    let targetY = mouseY;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      // Smooth lerp mouse position
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains("dark");
      const gridColor = isDark
        ? "rgba(255, 255, 255, 0.07)"
        : "rgba(21, 21, 21, 0.065)";
      const highlightColor = isDark
        ? "rgba(244, 81, 42, 0.15)"
        : "rgba(244, 81, 42, 0.1)";

      // Perspective vanishing point offset by mouse
      const offsetX = (mouseX - width / 2) * 0.08;
      const offsetY = (mouseY - height / 2) * 0.06;
      const vpX = width / 2 + offsetX;
      const vpY = height * 0.46 + offsetY;

      // Inner back wall boundary
      const bwW = Math.min(width * 0.38, 480);
      const bwH = Math.min(height * 0.34, 300);
      const bwLeft = vpX - bwW / 2;
      const bwRight = vpX + bwW / 2;
      const bwTop = vpY - bwH / 2;
      const bwBottom = vpY + bwH / 2;

      ctx.lineWidth = 1;
      ctx.strokeStyle = gridColor;

      // Draw back wall outline & subtle grid
      ctx.strokeRect(bwLeft, bwTop, bwW, bwH);

      const backCols = 6;
      const backRows = 4;
      for (let i = 1; i < backCols; i++) {
        const x = bwLeft + (bwW / backCols) * i;
        ctx.beginPath();
        ctx.moveTo(x, bwTop);
        ctx.lineTo(x, bwBottom);
        ctx.stroke();
      }
      for (let j = 1; j < backRows; j++) {
        const y = bwTop + (bwH / backRows) * j;
        ctx.beginPath();
        ctx.moveTo(bwLeft, y);
        ctx.lineTo(bwRight, y);
        ctx.stroke();
      }

      // Draw perspective corner rays extending to viewport edges
      const corners = [
        { fromX: bwLeft, fromY: bwTop, toX: 0, toY: 0 },
        { fromX: bwRight, fromY: bwTop, toX: width, toY: 0 },
        { fromX: bwLeft, fromY: bwBottom, toX: 0, toY: height },
        { fromX: bwRight, fromY: bwBottom, toX: width, toY: height },
      ];

      ctx.beginPath();
      corners.forEach((c) => {
        ctx.moveTo(c.fromX, c.fromY);
        ctx.lineTo(c.toX, c.toY);
      });
      ctx.stroke();

      // Floor grid perspective lines
      const floorLines = 9;
      for (let i = 0; i <= floorLines; i++) {
        const t = i / floorLines;
        const startX = bwLeft + bwW * t;
        const startY = bwBottom;
        const endX = (t - 0.5) * (width * 1.6) + width / 2;
        const endY = height;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }

      // Horizontal floor depth rings (exponential spacing)
      const depthRings = 7;
      for (let k = 1; k <= depthRings; k++) {
        const progress = Math.pow(k / depthRings, 1.8);
        const y = bwBottom + (height - bwBottom) * progress;
        const leftX = bwLeft - (bwLeft - 0) * progress;
        const rightX = bwRight + (width - bwRight) * progress;

        ctx.beginPath();
        ctx.moveTo(leftX, y);
        ctx.lineTo(rightX, y);
        ctx.stroke();
      }

      // Left and right wall horizontal perspective dividers
      const wallDividers = 4;
      for (let j = 1; j <= wallDividers; j++) {
        const p = j / wallDividers;
        // Left wall
        const lTopY = bwTop - (bwTop - 0) * p;
        const lBotY = bwBottom + (height - bwBottom) * p;
        const lX = bwLeft - bwLeft * p;
        ctx.beginPath();
        ctx.moveTo(lX, lTopY);
        ctx.lineTo(lX, lBotY);
        ctx.stroke();

        // Right wall
        const rTopY = bwTop - (bwTop - 0) * p;
        const rBotY = bwBottom + (height - bwBottom) * p;
        const rX = bwRight + (width - bwRight) * p;
        ctx.beginPath();
        ctx.moveTo(rX, rTopY);
        ctx.lineTo(rX, rBotY);
        ctx.stroke();
      }

      // Subtle ambient glow centered on character location
      const gradient = ctx.createRadialGradient(
        vpX,
        vpY + 40,
        20,
        vpX,
        vpY + 40,
        Math.max(width * 0.35, 360)
      );
      gradient.addColorStop(0, highlightColor);
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-80 dark:opacity-60 transition-opacity duration-500"
      aria-hidden="true"
    />
  );
}
