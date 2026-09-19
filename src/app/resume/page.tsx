"use client";

import React from "react";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { educationList } from "@/data/education";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";
import { achievements } from "@/data/achievements";
import {
  Printer,
  FileDown,
  Mail,
  MapPin,
  Globe,
  Phone,
} from "lucide-react";
import { Github, Linkedin, Instagram } from "@/components/Icons";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-6 sm:px-10 space-y-8">
      {/* Header Actions (Hidden in Print) */}
      <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-card p-6 rounded-3xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#F4512A] font-bold block">
            CURRICULUM VITAE
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-[#151515] dark:text-white uppercase">
            ADARSH PATEL — RESUME
          </h1>
          <p className="text-xs font-mono text-zinc-500 mt-0.5">
            ATS-friendly web version • Ready for print or PDF export
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider border border-black/15 dark:border-white/20 hover:border-[#F4512A] bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-all shadow-sm cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-[#F4512A]" />
            <span>Print</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#F4512A] text-white hover:bg-[#e0441e] shadow-md shadow-[#F4512A]/25 transition-all cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* Printable Resume Document Card */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 space-y-9 shadow-xl text-zinc-800 dark:text-zinc-200">
        {/* Header / Personal Information */}
        <header className="border-b border-black/10 dark:border-white/10 pb-8 space-y-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#151515] dark:text-white uppercase">
                ADARSH PATEL
              </h2>
              <p className="text-sm sm:text-base font-mono font-bold text-[#F4512A] mt-1">
                Software Developer • Web Developer • Python & Automation
              </p>
            </div>
            <span className="font-signature text-3xl text-zinc-400 no-print self-center sm:self-end">
              Adarsh Patel
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-5 text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#F4512A]" />
              <span>Kanpur, Uttar Pradesh</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#F4512A]" />
              <a href="tel:+919277310761" className="hover:underline">
                92773 10761
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#F4512A]" />
              <a href="mailto:adarshpatel8738@gmail.com" className="hover:underline">
                adarshpatel8738@gmail.com
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <Linkedin className="w-3.5 h-3.5 text-[#F4512A]" />
              <a href="https://linkedin.com/in/iamadarss" target="_blank" rel="noreferrer" className="hover:underline">
                linkedin.com/in/iamadarss
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <Github className="w-3.5 h-3.5 text-[#F4512A]" />
              <a href="https://github.com/iamadarss" target="_blank" rel="noreferrer" className="hover:underline">
                github.com/iamadarss
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <Instagram className="w-3.5 h-3.5 text-[#F4512A]" />
              <a href="https://instagram.com/iamadarss" target="_blank" rel="noreferrer" className="hover:underline">
                @iamadarss
              </a>
            </span>
          </div>
        </header>

        {/* OBJECTIVE */}
        <section className="space-y-2">
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F4512A] border-b border-black/10 dark:border-white/10 pb-1">
            OBJECTIVE
          </h3>
          <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify">
            BCA student seeking entry-level Software Developer or Web Developer opportunities. Proficient in Object-Oriented Programming (OOP), Data Structures, and Algorithms using C, C++, and Python. Experienced in front-end web development with HTML, CSS, JavaScript, and responsive design. Skilled in version control (Git/GitHub), debugging, and problem-solving. Passionate about developing scalable software solutions, web applications, and automation tools while adhering to best practices in coding and software development.
          </p>
        </section>

        {/* EDUCATION */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F4512A] border-b border-black/10 dark:border-white/10 pb-1">
            EDUCATION
          </h3>
          <div className="space-y-4">
            <div className="space-y-1 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <span className="font-bold text-sm text-[#151515] dark:text-white">
                    College of Management Studies
                  </span>
                  <span className="text-zinc-500 font-mono"> — Kanpur, Uttar Pradesh</span>
                </div>
                <span className="font-mono text-zinc-500 font-bold">2025 — 2028</span>
              </div>
              <p className="italic text-zinc-700 dark:text-zinc-300">
                Bachelor of Computer Applications (BCA) — Affiliated with CSJM University, Kanpur
              </p>
              <p className="font-mono text-[#F4512A] font-semibold">
                CGPA: 7.90
              </p>
            </div>

            <div className="space-y-1 text-xs pt-1 border-t border-black/5 dark:border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <span className="font-bold text-sm text-[#151515] dark:text-white">
                    Patiraja Inter College
                  </span>
                  <span className="text-zinc-500 font-mono"> — Kanpur, Uttar Pradesh</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-700 dark:text-zinc-300">Class XII</span>
                <div className="flex items-center gap-4 font-mono">
                  <span className="font-bold text-[#F4512A]">81.20%</span>
                  <span className="text-zinc-500">2025</span>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-700 dark:text-zinc-300">Class X</span>
                <div className="flex items-center gap-4 font-mono">
                  <span className="font-bold text-[#F4512A]">86.33%</span>
                  <span className="text-zinc-500">2023</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section className="space-y-3">
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F4512A] border-b border-black/10 dark:border-white/10 pb-1">
            TECHNICAL SKILLS
          </h3>
          <div className="grid grid-cols-1 gap-2.5 text-xs">
            <div>
              <span className="font-bold text-[#151515] dark:text-white">Programming Languages: </span>
              <span className="text-zinc-600 dark:text-zinc-400 font-mono">
                C, C++, Python
              </span>
            </div>
            <div>
              <span className="font-bold text-[#151515] dark:text-white">Web Technologies: </span>
              <span className="text-zinc-600 dark:text-zinc-400 font-mono">
                HTML, CSS, JavaScript, Responsive Web Design, DOM Manipulation
              </span>
            </div>
            <div>
              <span className="font-bold text-[#151515] dark:text-white">Developer Tools: </span>
              <span className="text-zinc-600 dark:text-zinc-400 font-mono">
                Git, GitHub, Visual Studio Code, Debugging
              </span>
            </div>
            <div>
              <span className="font-bold text-[#151515] dark:text-white">Core Competencies: </span>
              <span className="text-zinc-600 dark:text-zinc-400 font-mono">
                Object-Oriented Programming (OOP), Problem-Solving, Data Structures, Algorithms, Version Control, API Integration
              </span>
            </div>
            <div>
              <span className="font-bold text-[#151515] dark:text-white">Target Areas: </span>
              <span className="text-zinc-600 dark:text-zinc-400 font-mono">
                Software Development, Web Development, Front-End Development, Full-Stack Development, Automation, Web Applications
              </span>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="space-y-3">
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F4512A] border-b border-black/10 dark:border-white/10 pb-1">
            CERTIFICATIONS
          </h3>
          <ul className="list-disc list-inside text-xs text-zinc-700 dark:text-zinc-300 space-y-1">
            <li>
              <span className="font-semibold text-[#151515] dark:text-white">Network Security Engineer</span>
            </li>
            <li>
              <span className="font-semibold text-[#151515] dark:text-white">AI DevOps Analyst</span>
            </li>
          </ul>
        </section>

        {/* PROJECTS */}
        <section className="space-y-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F4512A] border-b border-black/10 dark:border-white/10 pb-1">
            PROJECTS
          </h3>
          <div className="space-y-4">
            <div className="space-y-1 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="font-bold text-sm text-[#151515] dark:text-white">
                  Weather Application
                </span>
                <span className="font-mono text-zinc-500">HTML • CSS • JavaScript • REST API</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-300">
                Front-end development project demonstrating API integration and responsive design using HTML, CSS, and JavaScript.
              </p>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="font-bold text-sm text-[#151515] dark:text-white">
                  YouTube Long-Video to Shorts Automation
                </span>
                <span className="font-mono text-zinc-500">Python • FFmpeg • Scripting</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-300">
                Automation tool development showcasing problem-solving and Python scripting capabilities.
              </p>
            </div>

            <div className="space-y-1 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <span className="font-bold text-sm text-[#151515] dark:text-white">
                  QR Attendance ERP & Institutional Platform
                </span>
                <span className="font-mono text-zinc-500">Next.js • TypeScript • Tailwind CSS</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-300">
                Campus attendance tracking system utilizing dynamic rotating QR validation and real-time attendance statistics.
              </p>
            </div>

            <p className="italic text-[11px] text-zinc-500 font-mono pt-1">
              Note: Projects under development; focus on applying core programming concepts and problem-solving skills.
            </p>
          </div>
        </section>

        {/* ADDITIONAL INFORMATION */}
        <section className="space-y-2 border-t border-black/10 dark:border-white/10 pt-4">
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F4512A]">
            ADDITIONAL INFORMATION
          </h3>
          <p className="text-xs font-mono text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Fresher • Currently pursuing BCA • GitHub profile available for project work (<a href="https://github.com/iamadarss" target="_blank" rel="noreferrer" className="text-[#F4512A] hover:underline">github.com/iamadarss</a>) • Open to Software Developer and Web Developer opportunities
          </p>
        </section>
      </div>
    </div>
  );
}
