"use client";

import React, { useRef, useState, useEffect } from "react";

interface MagneticProps {
  children: React.ReactElement<{ style?: React.CSSProperties; className?: string }>;
  strength?: number; // 0.1 to 0.8
  radius?: number; // attraction radius in px
  scaleOnHover?: boolean;
}

export function Magnetic({
  children,
  strength = 0.45,
  radius = 90,
  scaleOnHover = true,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Disable magnetic physics on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const node = ref.current;
    if (!node) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < radius) {
        setIsHovered(true);
        setPosition({
          x: dx * strength,
          y: dy * strength,
        });
      } else if (isHovered) {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [strength, radius, isHovered]);

  return (
    <div
      ref={ref}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${
          scaleOnHover && isHovered ? 1.04 : 1
        })`,
        transition: isHovered
          ? "transform 0.08s cubic-bezier(0.1, 0.9, 0.2, 1)"
          : "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }}
      className="inline-block will-change-transform"
    >
      {children}
    </div>
  );
}
