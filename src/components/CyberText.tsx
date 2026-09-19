"use client";

import React, { useState, useEffect, useRef } from "react";

const GLYPHS = "010101XYZ_#@&<>[]{}!/\\=+*^~";

interface CyberTextProps {
  text: string;
  className?: string;
  scrambleOnHover?: boolean;
}

export function CyberText({
  text,
  className = "",
  scrambleOnHover = true,
}: CyberTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const frameRef = useRef<number | null>(null);

  const startScramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const maxIterations = text.length;

    const scramble = () => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, idx) => {
            if (char === " ") return " ";
            if (idx < iteration) return text[idx];
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );

      if (iteration < maxIterations) {
        iteration += 1 / 3;
        frameRef.current = requestAnimationFrame(scramble);
      } else {
        setDisplayText(text);
        setIsScrambling(false);
      }
    };

    frameRef.current = requestAnimationFrame(scramble);
  };

  useEffect(() => {
    setDisplayText(text);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [text]);

  return (
    <span
      onMouseEnter={scrambleOnHover ? startScramble : undefined}
      className={`inline-block cursor-default font-mono tracking-wider transition-colors ${className}`}
    >
      {displayText}
    </span>
  );
}
