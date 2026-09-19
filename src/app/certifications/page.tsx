"use client";

import React from "react";
import { certifications } from "@/data/certifications";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

export default function CertificationsPage() {
  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-6 sm:px-10 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono uppercase tracking-widest text-[#F4512A] font-bold block">
          VERIFIED CREDENTIALS
        </span>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#151515] dark:text-white uppercase leading-none">
          CERTIFICATIONS & <span className="text-[#F4512A]">BADGES</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
          Industry accreditations and verifiable certifications in cybersecurity, network defense, and data analytics.
        </p>
      </div>

      {certifications.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-black/10 dark:border-white/10 hover:border-[#F4512A]/60 bg-white/60 dark:bg-zinc-900/60 flex flex-col justify-between space-y-6 transition-all shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#F4512A]/10 text-[#F4512A] flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-zinc-600 dark:text-zinc-400">
                    {cert.date}
                  </span>
                </div>

                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-[#151515] dark:text-white">
                    {cert.title}
                  </h2>
                  <p className="text-xs font-mono text-[#F4512A] font-semibold">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-black/5 dark:bg-white/10 text-zinc-700 dark:text-zinc-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                {cert.credentialId && (
                  <span className="text-[11px] font-mono text-zinc-500">
                    ID: {cert.credentialId}
                  </span>
                )}
                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F4512A] hover:underline ml-auto"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Elegant Empty State as required by prompt */
        <div className="text-center py-16 glass-card rounded-3xl p-8 border border-black/10 dark:border-white/10 space-y-3">
          <ShieldCheck className="w-10 h-10 text-[#F4512A] mx-auto opacity-70" />
          <h3 className="text-lg font-bold text-[#151515] dark:text-white">
            Certifications In Progress
          </h3>
          <p className="text-xs font-mono text-zinc-500 max-w-md mx-auto">
            Currently preparing for advanced industry certifications. Verified credentials will appear here once officially validated.
          </p>
        </div>
      )}
    </div>
  );
}
