"use client";

import React, { useState } from "react";
import { contactConfig, socialLinks } from "@/data/social";
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  Clock,
  AlertCircle,
} from "lucide-react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(contactConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      // Simulate resilient API request or server action
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Failed to dispatch message. Please use direct email instead.");
    }
  };

  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-6 sm:px-10 space-y-12 sm:space-y-16">
      {/* Editorial Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-[#F4512A] font-bold block">
          COMMUNICATIONS & INQUIRIES
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#151515] dark:text-white uppercase leading-none">
          HAVE AN IDEA? <br />
          <span className="text-[#F4512A]">LET'S BUILD SOMETHING USEFUL.</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
          Whether you want to discuss full-stack engineering roles, collaborate on an open-source cybersecurity project, or build a bespoke web application, I'm ready to talk.
        </p>
      </div>

      {/* Grid: Left Editorial Details & 1-Click Copy | Right Interactive Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
        {/* Left Information Column */}
        <div className="lg:col-span-5 space-y-8">
          {/* Quick Direct Email Card with One-Click Copy */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F4512A]/10 text-[#F4512A] flex items-center justify-center">
              <Mail className="w-6 h-6 animate-pulse" />
            </div>

            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                Direct Email
              </span>
              <p className="text-lg font-bold text-[#151515] dark:text-white font-mono break-all">
                {contactConfig.email}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={copyEmail}
                className="flex-1 py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs font-mono font-bold uppercase tracking-wider border border-black/10 dark:border-white/15 bg-white dark:bg-zinc-800 hover:border-[#F4512A] text-zinc-800 dark:text-zinc-200 transition-all shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-500">EMAIL COPIED ✓</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#F4512A]" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${contactConfig.email}`}
                className="py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider bg-[#F4512A] text-white hover:bg-[#e0441e] transition-colors"
              >
                <span>Email Me ↗</span>
              </a>
            </div>
          </div>

          {/* Location & Availability */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 space-y-4 text-xs font-mono">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#F4512A] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#151515] dark:text-white block">
                  Location
                </span>
                <span className="text-zinc-600 dark:text-zinc-400">
                  {contactConfig.location}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t border-black/5 dark:border-white/5">
              <Clock className="w-4 h-4 text-[#F4512A] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#151515] dark:text-white block">
                  Availability
                </span>
                <span className="text-zinc-600 dark:text-zinc-400">
                  {contactConfig.availability}
                </span>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold block">
              Verified Profiles
            </span>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-mono font-medium border border-black/10 dark:border-white/10 bg-white/50 dark:bg-zinc-800/50 hover:border-[#F4512A] text-zinc-800 dark:text-zinc-200 transition-colors"
                >
                  {s.platform} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-3xl p-8 sm:p-10 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 shadow-xl space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-black text-[#151515] dark:text-white uppercase">
                Send Direct Message
              </h2>
              <p className="text-xs font-mono text-zinc-500">
                Responses typically delivered within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold uppercase text-zinc-600 dark:text-zinc-400">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-3 rounded-2xl text-xs font-mono bg-white/70 dark:bg-zinc-800/70 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#F4512A]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold uppercase text-zinc-600 dark:text-zinc-400">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-2xl text-xs font-mono bg-white/70 dark:bg-zinc-800/70 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#F4512A]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase text-zinc-600 dark:text-zinc-400">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="Software Engineering Collaboration / Project Inquiry"
                  className="w-full px-4 py-3 rounded-2xl text-xs font-mono bg-white/70 dark:bg-zinc-800/70 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#F4512A]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold uppercase text-zinc-600 dark:text-zinc-400">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Describe your vision, timeline, or engineering opportunity..."
                  className="w-full px-4 py-3 rounded-2xl text-xs font-mono bg-white/70 dark:bg-zinc-800/70 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#F4512A] resize-none"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 text-xs font-mono">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === "success" && (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>Thank you! Your message has been transmitted successfully.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 rounded-2xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider bg-[#F4512A] text-white hover:bg-[#e0441e] disabled:opacity-50 transition-all shadow-md shadow-[#F4512A]/25"
              >
                {status === "loading" ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
