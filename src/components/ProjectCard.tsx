"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Github } from "./Icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative glass-card rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 hover:border-[#F4512A]/60 dark:hover:border-[#F4512A]/60 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between bg-white/60 dark:bg-zinc-900/60">
      <div>
        {/* Project Thumbnail with Zoom on Hover */}
        <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-zinc-200 dark:bg-zinc-800">
          <Image
            src={project.image}
            alt={`${project.title} Preview Screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Category Badge & Year */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#151515]/80 text-white backdrop-blur-md border border-white/15">
              {project.category}
            </span>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-white/90 bg-black/40 backdrop-blur-md">
              {project.year}
            </span>
          </div>

          {/* Quick Action Overlay on Hover */}
          <div className="absolute bottom-3 right-3 flex items-center gap-2">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo`}
                className="w-9 h-9 rounded-full bg-white text-[#151515] hover:bg-[#F4512A] hover:text-white flex items-center justify-center shadow-lg transition-colors"
                title="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} GitHub repository`}
                className="w-9 h-9 rounded-full bg-black/80 text-white hover:bg-[#F4512A] flex items-center justify-center shadow-lg backdrop-blur-md transition-colors"
                title="GitHub Source"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7 space-y-4">
          <div className="space-y-1.5">
            <Link
              href={`/projects/${project.slug}`}
              className="group-hover:text-[#F4512A] transition-colors inline-flex items-center gap-2"
            >
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#151515] dark:text-white">
                {project.title}
              </h3>
            </Link>
            <p className="text-xs font-mono text-[#777777] dark:text-zinc-400 font-medium line-clamp-1">
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Technology Chips */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-black/5 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer Link to Case Study */}
      <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
        <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
          Status: {project.status}
        </span>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#151515] dark:text-white group-hover:text-[#F4512A] dark:group-hover:text-[#F4512A] transition-colors"
        >
          <span>Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
