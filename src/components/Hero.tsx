"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";
import { InteractiveGrid } from "./InteractiveGrid";
import { Marquee } from "./Marquee";
import { ArrowDownRight, ArrowUpRight, FileDown, ShieldCheck, Terminal } from "lucide-react";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 30;
    const y = (clientY - innerHeight / 2) / 30;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-6 overflow-hidden select-none"
    >
      {/* 3D Perspective Wireframe Room Grid */}
      <InteractiveGrid />

      {/* Giant Background Outline Typography (Layered Behind Character) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-4 overflow-hidden">
        <div
          style={{
            transform: `translate3d(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px, 0)`,
          }}
          className="transition-transform duration-300 ease-out text-center flex flex-col items-center justify-center w-full max-w-6xl opacity-30 dark:opacity-40"
        >
          <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase text-outline-dark block leading-none">
            I'M BORN TO
          </span>
          <span className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase text-outline-hero block leading-none mt-1 sm:mt-3">
            INNOVATE SOLUTIONS!
          </span>
        </div>
      </div>

      {/* Main Content Grid: Left Stats & Intro | Center Character | Right Bio & CTAs */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-10 flex-1 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4 my-auto">
        {/* LEFT COLUMN: Name, Subtitle & Vertical Stats */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-6 sm:space-y-8 text-left order-2 lg:order-1">
          {/* Introduction Badge & Name */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-[#F4512A]/10 text-[#F4512A] border border-[#F4512A]/20">
              <Terminal className="w-3.5 h-3.5" />
              <span>HELLO, I'M</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#151515] dark:text-white uppercase leading-none">
              ADARSH <br />
              <span className="text-[#F4512A]">PATEL</span>
            </h1>

            {/* Rotating Role Pill */}
            <div className="h-7 flex items-center">
              <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#777777] dark:text-zinc-300 uppercase transition-all duration-300">
                {profile.roles[roleIndex]}
              </span>
            </div>
          </div>

          {/* Vertical Key Stats (Exact Reference Style: Bold Orange Numbers + Clean Labels) */}
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-6 pt-2 border-t border-black/10 dark:border-white/10">
            {profile.stats.slice(0, 3).map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F4512A] tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#151515] dark:text-zinc-200 mt-1">
                  {stat.label} {stat.sublabel}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER COLUMN: 3D Developer Character Avatar with Depth & Parallax */}
        <div className="lg:col-span-4 flex items-center justify-center relative order-1 lg:order-2 my-2 lg:my-0">
          <div
            style={{
              transform: `translate3d(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px, 0)`,
            }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center transition-transform duration-200 ease-out"
          >
            {/* Ambient Background Circle Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#F4512A]/20 via-[#F4512A]/5 to-transparent rounded-full filter blur-2xl transform scale-90 pointer-events-none" />

            {/* 3D Character Portrait Image */}
            <div className="relative w-full h-full rounded-full p-2 overflow-hidden flex items-center justify-center">
              <Image
                src="/images/adarsh_hero.jpg"
                alt="Adarsh Patel — 3D Developer Character Avatar"
                fill
                priority
                sizes="(max-width: 768px) 280px, 384px"
                className="object-cover object-top drop-shadow-2xl rounded-full transform hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            {/* Floating Security Badge */}
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 glass-card px-3 py-1.5 rounded-full flex items-center gap-1.5 text-[11px] font-mono font-semibold shadow-lg text-[#151515] dark:text-zinc-200 border border-black/10 dark:border-white/15 animate-bounce duration-1000">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F4512A]" />
              <span>Cyber & Code</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Signature, Editorial Summary & Action Buttons */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-6 text-left lg:text-right order-3">
          {/* Stylized Handwritten Signature */}
          <div className="flex flex-col lg:items-end">
            <span className="font-signature text-3xl sm:text-4xl text-[#151515] dark:text-white transform -rotate-3 select-none">
              Adarsh Patel
            </span>
          </div>

          {/* Professional Bio Statement */}
          <p className="text-sm sm:text-base text-[#151515]/80 dark:text-zinc-300 leading-relaxed font-medium">
            Hi, I'm <span className="font-bold text-[#151515] dark:text-white">Adarsh Patel</span>. BCA student and passionate Software & Web Developer specializing in C, C++, Python, modern web development, and automation tools.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 lg:justify-end pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#151515] dark:bg-white text-white dark:text-[#151515] hover:bg-[#F4512A] dark:hover:bg-[#F4512A] dark:hover:text-white shadow-md hover:shadow-lg transition-all"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F4512A] text-white hover:bg-[#e0441e] shadow-md shadow-[#F4512A]/25 transition-all"
            >
              <span>View Projects</span>
              <ArrowDownRight className="w-4 h-4" />
            </Link>

            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-medium border border-black/15 dark:border-white/20 hover:border-[#F4512A] bg-white/60 dark:bg-zinc-800/60 text-[#151515] dark:text-zinc-200 backdrop-blur-sm transition-all"
            >
              <FileDown className="w-3.5 h-3.5 text-[#F4512A]" />
              <span>Resume</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Angled Animated Marquee Ticker (Exact Reference Element) */}
      <div className="relative w-full mt-6">
        <Marquee angled={true} />
      </div>
    </section>
  );
}
