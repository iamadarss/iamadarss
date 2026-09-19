"use client";

import React from "react";
import Link from "next/link";
import { services } from "@/data/services";
import {
  Layers,
  Layout,
  ShieldCheck,
  BarChart3,
  Gauge,
  Cpu,
  Bot,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  layers: Layers,
  layout: Layout,
  "shield-check": ShieldCheck,
  "bar-chart-3": BarChart3,
  gauge: Gauge,
  cpu: Cpu,
  bot: Bot,
  sparkles: Sparkles,
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 sm:px-10 space-y-12 sm:space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-[#F4512A] font-bold block">
          ENGINEERING & CONSULTING
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#151515] dark:text-white uppercase leading-none">
          TECHNICAL <span className="text-[#F4512A]">SERVICES</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
          Bespoke full-stack engineering, web application security hardening, and analytics pipeline development tailored for founders, institutions, and fast-moving teams.
        </p>
      </div>

      {/* Services Grid (8 Services) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => {
          const Icon = serviceIcons[service.icon] || Layers;
          return (
            <div
              key={service.id}
              className="glass-card rounded-3xl p-8 border border-black/10 dark:border-white/10 hover:border-[#F4512A]/60 flex flex-col justify-between space-y-6 transition-all duration-300 hover:shadow-2xl bg-white/60 dark:bg-zinc-900/60"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#F4512A]/10 text-[#F4512A] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Tier 1 Service
                  </span>
                </div>

                <div className="space-y-1">
                  <h2 className="text-2xl font-black text-[#151515] dark:text-white">
                    {service.title}
                  </h2>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#F4512A]">
                    Key Deliverables
                  </span>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F4512A] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-black/5 dark:border-white/5 space-y-4">
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-black/5 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="w-full py-3 rounded-2xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider bg-[#151515] dark:bg-white text-white dark:text-[#151515] hover:bg-[#F4512A] dark:hover:bg-[#F4512A] dark:hover:text-white transition-colors shadow-sm"
                >
                  <span>Start A Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
