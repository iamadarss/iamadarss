"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export function EasterEgg() {
  useEffect(() => {
    let keyBuffer: string[] = [];
    const konamiCode = [
      "arrowup",
      "arrowup",
      "arrowdown",
      "arrowdown",
      "arrowleft",
      "arrowright",
      "arrowleft",
      "arrowright",
      "b",
      "a",
    ];

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      keyBuffer.push(key);
      if (keyBuffer.length > 20) {
        keyBuffer.shift();
      }

      const bufferStr = keyBuffer.join("");

      // Check for typing "adarsh" or "adarss"
      if (bufferStr.endsWith("adarsh") || bufferStr.endsWith("adarss")) {
        triggerEasterEgg("🎉 You unlocked the Adarsh Patel Developer Easter Egg! Keep building!");
        keyBuffer = [];
      }

      // Check for Konami code
      if (keyBuffer.slice(-10).join(",") === konamiCode.join(",")) {
        triggerEasterEgg("🚀 Konami Code Activated! Welcome to Cyber-Mode!");
        keyBuffer = [];
      }
    };

    const triggerEasterEgg = (message: string) => {
      // Launch colorful orange and gold confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#F4512A", "#FFF9F2", "#151515", "#FFA07A"],
      });

      // Subtle toast
      const toast = document.createElement("div");
      toast.className =
        "fixed bottom-8 left-1/2 -translate-x-1/2 z-50 glass-card px-5 py-3 rounded-full border border-[#F4512A] text-xs font-mono font-bold shadow-2xl bg-[#151515] text-white animate-bounce";
      toast.innerText = message;
      document.body.appendChild(toast);

      setTimeout(() => {
        toast.remove();
      }, 4000);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
}
