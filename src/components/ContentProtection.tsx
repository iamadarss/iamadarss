"use client";

import React, { useState, useEffect } from "react";
import { ShieldAlert } from "lucide-react";

export function ContentProtection() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("Content Protected");

  const showNotice = (msg = "Content Protected // © Adarsh Patel") => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 2200);
  };

  useEffect(() => {
    // 1. Prevent Right Click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      showNotice("Right-click is disabled // © Adarsh Patel");
    };

    // 2. Prevent Copy & Cut
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      showNotice("Copying content is protected // © Adarsh Patel");
    };

    const handleCut = (e: ClipboardEvent) => {
      e.preventDefault();
      showNotice("Cutting content is protected // © Adarsh Patel");
    };

    // 3. Prevent Dragging
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    // 4. Prevent Keyboard shortcuts (Ctrl+C, Ctrl+U, Ctrl+S, F12, Ctrl+Shift+I)
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrMeta = e.ctrlKey || e.metaKey;

      // F12
      if (e.key === "F12") {
        e.preventDefault();
        showNotice("Inspect element is protected");
        return;
      }

      if (isCtrlOrMeta) {
        const key = e.key.toLowerCase();
        // Ctrl+C (Copy), Ctrl+X (Cut), Ctrl+U (View Source), Ctrl+S (Save), Ctrl+Shift+I (Inspect)
        if (
          key === "c" ||
          key === "x" ||
          key === "u" ||
          key === "s" ||
          (e.shiftKey && (key === "i" || key === "j" || key === "c"))
        ) {
          // Allow Ctrl+C inside input / textarea
          const activeTag = document.activeElement?.tagName?.toLowerCase();
          if (key === "c" && (activeTag === "input" || activeTag === "textarea")) {
            return;
          }

          e.preventDefault();
          showNotice("Action restricted // © Adarsh Patel");
        }
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("cut", handleCut);
    document.addEventListener("dragstart", handleDragStart);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("cut", handleCut);
      document.removeEventListener("dragstart", handleDragStart);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!toastVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] pointer-events-none animate-in fade-in zoom-in-95 duration-200">
      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#151515]/95 dark:bg-black/95 text-white border border-[#F4512A]/60 shadow-2xl shadow-[#F4512A]/30 backdrop-blur-xl">
        <ShieldAlert className="w-4 h-4 text-[#F4512A] animate-bounce" />
        <span className="font-mono text-xs font-semibold tracking-wider text-zinc-100">
          {toastMessage}
        </span>
      </div>
    </div>
  );
}
