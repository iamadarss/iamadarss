"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CommandPalette } from "./CommandPalette";
import { CustomCursor } from "./CustomCursor";
import { CursorAmbientLight } from "./CursorAmbientLight";
import { FloatingCyberElements } from "./FloatingCyberElements";
import { ScrollProgress } from "./ScrollProgress";
import { EasterEgg } from "./EasterEgg";

export function ClientShell({ children }: { children: React.ReactNode }) {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    (window as unknown as { openCommandPalette?: () => void }).openCommandPalette = () => {
      setCommandPaletteOpen(true);
    };

    // Shield against unhandled errors originating from third-party browser extensions
    const handleExtensionError = (e: ErrorEvent) => {
      if (
        e.filename &&
        (e.filename.startsWith("chrome-extension://") ||
          e.filename.startsWith("moz-extension://") ||
          e.filename.includes("executors"))
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    window.addEventListener("error", handleExtensionError);
    return () => window.removeEventListener("error", handleExtensionError);
  }, []);

  return (
    <>
      <ScrollProgress />
      <CursorAmbientLight />
      <FloatingCyberElements />
      <CustomCursor />
      <EasterEgg />
      <Navbar />
      <main className="flex-1 w-full min-h-screen relative z-10">{children}</main>
      <Footer />
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </>
  );
}
