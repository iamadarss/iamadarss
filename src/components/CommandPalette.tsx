"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import {
  Search,
  Home,
  User,
  FolderGit2,
  Cpu,
  Briefcase,
  FileText,
  BookOpen,
  Sparkles,
  Mail,
  Sun,
  Moon,
  GraduationCap,
  Award,
  Layers,
  Wrench,
  Clock,
  X,
} from "lucide-react";
import { Github, Linkedin, Instagram } from "./Icons";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Actions" | "Social";
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  shortcut?: string;
}

export function CommandPalette({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const { resolvedTheme, toggleTheme } = useTheme();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const commands: CommandItem[] = [
    // Navigation
    {
      id: "nav-home",
      title: "Go to Home",
      category: "Navigation",
      icon: Home,
      action: () => {
        router.push("/");
        onClose();
      },
    },
    {
      id: "nav-about",
      title: "About Adarsh Patel",
      category: "Navigation",
      icon: User,
      action: () => {
        router.push("/about");
        onClose();
      },
    },
    {
      id: "nav-projects",
      title: "View All Projects",
      category: "Navigation",
      icon: FolderGit2,
      action: () => {
        router.push("/projects");
        onClose();
      },
    },
    {
      id: "nav-skills",
      title: "Technical Skills Matrix",
      category: "Navigation",
      icon: Cpu,
      action: () => {
        router.push("/skills");
        onClose();
      },
    },
    {
      id: "nav-experience",
      title: "Experience & Timeline",
      category: "Navigation",
      icon: Briefcase,
      action: () => {
        router.push("/experience");
        onClose();
      },
    },
    {
      id: "nav-education",
      title: "Education & Academics",
      category: "Navigation",
      icon: GraduationCap,
      action: () => {
        router.push("/education");
        onClose();
      },
    },
    {
      id: "nav-certifications",
      title: "Certifications & Badges",
      category: "Navigation",
      icon: Award,
      action: () => {
        router.push("/certifications");
        onClose();
      },
    },
    {
      id: "nav-services",
      title: "Services & Offerings",
      category: "Navigation",
      icon: Layers,
      action: () => {
        router.push("/services");
        onClose();
      },
    },
    {
      id: "nav-resume",
      title: "View Online Resume",
      category: "Navigation",
      icon: FileText,
      action: () => {
        router.push("/resume");
        onClose();
      },
    },
    {
      id: "nav-blog",
      title: "Engineering Blog & Writeups",
      category: "Navigation",
      icon: BookOpen,
      action: () => {
        router.push("/blog");
        onClose();
      },
    },
    {
      id: "nav-lab",
      title: "Interactive Laboratory (/lab)",
      category: "Navigation",
      icon: Sparkles,
      action: () => {
        router.push("/lab");
        onClose();
      },
    },
    {
      id: "nav-uses",
      title: "Developer Setup & Uses (/uses)",
      category: "Navigation",
      icon: Wrench,
      action: () => {
        router.push("/uses");
        onClose();
      },
    },
    {
      id: "nav-now",
      title: "What I'm Doing Now (/now)",
      category: "Navigation",
      icon: Clock,
      action: () => {
        router.push("/now");
        onClose();
      },
    },
    {
      id: "nav-contact",
      title: "Contact & Inquiries",
      category: "Navigation",
      icon: Mail,
      action: () => {
        router.push("/contact");
        onClose();
      },
    },

    // Actions
    {
      id: "act-theme",
      title: `Toggle Theme (Currently ${resolvedTheme})`,
      category: "Actions",
      icon: resolvedTheme === "light" ? Moon : Sun,
      action: () => {
        toggleTheme();
        onClose();
      },
      shortcut: "T",
    },
    {
      id: "act-copy-email",
      title: "Copy Email Address to Clipboard",
      category: "Actions",
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText("adarshpatel8738@gmail.com");
        alert("Email copied to clipboard: adarshpatel8738@gmail.com");
        onClose();
      },
      shortcut: "C",
    },

    // Social
    {
      id: "soc-github",
      title: "Visit GitHub Profile (@iamadarss)",
      category: "Social",
      icon: Github,
      action: () => {
        window.open("https://github.com/iamadarss", "_blank");
        onClose();
      },
    },
    {
      id: "soc-linkedin",
      title: "Visit LinkedIn Profile (iamadarss)",
      category: "Social",
      icon: Linkedin,
      action: () => {
        window.open("https://linkedin.com/in/iamadarss", "_blank");
        onClose();
      },
    },
    {
      id: "soc-instagram",
      title: "Visit Instagram Profile (@iamadarss)",
      category: "Social",
      icon: Instagram,
      action: () => {
        window.open("https://instagram.com/iamadarss", "_blank");
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Global Keydown Handler for Ctrl+K, Escape, and Arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
          (window as unknown as { openCommandPalette?: () => void }).openCommandPalette?.();
        }
      }

      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredCommands.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredCommands.length - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl glass-card rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 shadow-2xl bg-white/90 dark:bg-zinc-900/95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center px-5 py-4 border-b border-black/10 dark:border-white/10 gap-3">
          <Search className="w-5 h-5 text-[#F4512A]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search (e.g., projects, theme, resume)..."
            className="flex-1 bg-transparent text-sm sm:text-base text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none font-medium"
          />
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 text-zinc-500"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={() => cmd.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-left transition-colors ${
                    isSelected
                      ? "bg-[#F4512A] text-white shadow-md shadow-[#F4512A]/20"
                      : "text-zinc-800 dark:text-zinc-200 hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 rounded-xl flex items-center justify-center ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-black/5 dark:bg-white/10 text-[#F4512A]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold block leading-snug">
                        {cmd.title}
                      </span>
                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider block ${
                          isSelected ? "text-white/80" : "text-zinc-400"
                        }`}
                      >
                        {cmd.category}
                      </span>
                    </div>
                  </div>

                  {cmd.shortcut && (
                    <kbd
                      className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-black/5 dark:bg-white/10 text-zinc-500"
                      }`}
                    >
                      {cmd.shortcut}
                    </kbd>
                  )}
                </button>
              );
            })
          ) : (
            <div className="text-center py-8 text-xs font-mono text-zinc-400">
              No matching commands found.
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-2.5 bg-black/5 dark:bg-white/5 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>Esc Close</span>
          </div>
          <span className="text-[#F4512A] font-bold">Adarsh Patel</span>
        </div>
      </div>
    </div>
  );
}
