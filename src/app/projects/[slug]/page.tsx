import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import {
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { Github } from "@/components/Icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="pt-28 pb-20 max-w-5xl mx-auto px-6 sm:px-10 space-y-12 sm:space-y-16">
      {/* Back Button */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 hover:text-[#F4512A] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>
      </div>

      {/* Hero Header */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#F4512A] text-white">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/5 dark:bg-white/10 text-zinc-700 dark:text-zinc-300">
            Year: {project.year}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            Status: {project.status}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#151515] dark:text-white uppercase leading-none">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#777777] dark:text-zinc-300 font-medium">
          {project.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4512A] text-white hover:bg-[#e0441e] shadow-lg shadow-[#F4512A]/25 transition-all"
            >
              <span>Live Application</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border border-black/15 dark:border-white/20 bg-white/60 dark:bg-zinc-800/60 hover:border-[#F4512A] text-[#151515] dark:text-white backdrop-blur-sm transition-all shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          )}
        </div>
      </div>

      {/* Featured Preview Screenshot */}
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass-card border border-black/10 dark:border-white/10 shadow-2xl bg-zinc-900">
        <Image
          src={project.image}
          alt={`${project.title} Full Showcase`}
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Metrics Banner */}
      {project.metrics && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl border border-black/10 dark:border-white/10 text-center bg-white/40 dark:bg-zinc-900/40"
            >
              <span className="text-2xl sm:text-3xl font-black text-[#F4512A] block">
                {m.value}
              </span>
              <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Deep-Dive Case Study Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-6">
        {/* Main Content Columns */}
        <div className="lg:col-span-8 space-y-12">
          {/* PROBLEM */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase text-[#151515] dark:text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F4512A]" />
              <span>The Problem</span>
            </h2>
            <div className="glass-card p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50">
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </div>
          </section>

          {/* SOLUTION */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase text-[#151515] dark:text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F4512A]" />
              <span>The Engineering Solution</span>
            </h2>
            <div className="glass-card p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50">
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </section>

          {/* KEY FEATURES */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black uppercase text-[#151515] dark:text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F4512A]" />
              <span>Core Features & Capabilities</span>
            </h2>
            <div className="space-y-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl glass-card border border-black/5 dark:border-white/5 bg-white/40 dark:bg-zinc-900/40"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#F4512A] shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-700 dark:text-zinc-200">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ARCHITECTURE */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase text-[#151515] dark:text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F4512A]" />
              <span>System Architecture</span>
            </h2>
            <div className="glass-card p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 space-y-3">
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.architecture}
              </p>
            </div>
          </section>

          {/* CHALLENGES */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase text-[#151515] dark:text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span>Technical Challenges Overcome</span>
            </h2>
            <div className="space-y-2.5">
              {project.challenges.map((ch, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl glass-card border-l-4 border-l-amber-500 bg-white/40 dark:bg-zinc-900/40 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed"
                >
                  {ch}
                </div>
              ))}
            </div>
          </section>

          {/* LEARNINGS */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-black uppercase text-[#151515] dark:text-white flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[#F4512A]" />
              <span>Key Learnings & Takeaways</span>
            </h2>
            <div className="space-y-2.5">
              {project.learnings.map((lrn, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl glass-card border-l-4 border-l-[#F4512A] bg-white/40 dark:bg-zinc-900/40 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed"
                >
                  {lrn}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Sticky Panel: Tech Stack & Overview */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-6 rounded-3xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 sticky top-28 space-y-6">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#F4512A]">
              Technology Stack
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-black/5 dark:bg-white/10 text-zinc-800 dark:text-zinc-200 border border-black/5 dark:border-white/5"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="border-t border-black/10 dark:border-white/10 pt-4 space-y-2 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-zinc-500">Year:</span>
                <span className="font-bold text-[#151515] dark:text-white">
                  {project.year}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Status:</span>
                <span className="font-bold text-[#151515] dark:text-white">
                  {project.status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Category:</span>
                <span className="font-bold text-[#151515] dark:text-white">
                  {project.category}
                </span>
              </div>
            </div>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-2xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider bg-[#F4512A] text-white hover:bg-[#e0441e] transition-colors shadow-md shadow-[#F4512A]/20"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Next Project Footer Card */}
      <div className="pt-12 border-t border-black/10 dark:border-white/10">
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group block p-8 rounded-3xl glass-card border border-black/10 dark:border-white/10 hover:border-[#F4512A] transition-all bg-white/50 dark:bg-zinc-900/50"
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                Next Project Case Study →
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#151515] dark:text-white group-hover:text-[#F4512A] transition-colors">
                {nextProject.title}
              </h3>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                {nextProject.subtitle}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#151515] dark:bg-white text-white dark:text-[#151515] group-hover:bg-[#F4512A] group-hover:text-white flex items-center justify-center transition-colors">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </Link>
      </div>
    </article>
  );
}
