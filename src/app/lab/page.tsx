"use client";

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Key,
  ShieldAlert,
  Sliders,
  Play,
  Pause,
  Activity,
} from "lucide-react";

export default function LabPage() {
  // --- 1. Cipher Tool State ---
  const [cipherInput, setCipherInput] = useState("Security is an emergent property");
  const [cipherType, setCipherType] = useState<"rot13" | "base64" | "hex" | "binary">("rot13");

  const computeCipher = () => {
    try {
      if (cipherType === "base64") {
        return btoa(cipherInput);
      }
      if (cipherType === "hex") {
        return Array.from(cipherInput)
          .map((c) => c.charCodeAt(0).toString(16).padStart(2, "0"))
          .join(" ");
      }
      if (cipherType === "binary") {
        return Array.from(cipherInput)
          .map((c) => c.charCodeAt(0).toString(2).padStart(8, "0"))
          .join(" ");
      }
      // ROT13
      return cipherInput.replace(/[a-zA-Z]/g, (c) => {
        const base = c <= "Z" ? 65 : 97;
        return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
      });
    } catch {
      return "[Encoding Error]";
    }
  };

  // --- 2. Live Packet Sniffer Simulation State ---
  const [isSniffing, setIsSniffing] = useState(true);
  const [packets, setPackets] = useState<
    { id: number; proto: string; src: string; dst: string; port: number; status: "Normal" | "Suspicious" }[]
  >([
    { id: 101, proto: "TCP", src: "192.168.1.14", dst: "10.0.0.1", port: 443, status: "Normal" },
    { id: 102, proto: "UDP", src: "192.168.1.14", dst: "8.8.8.8", port: 53, status: "Normal" },
    { id: 103, proto: "TCP", src: "45.134.20.1", dst: "192.168.1.1", port: 22, status: "Suspicious" },
  ]);

  useEffect(() => {
    if (!isSniffing) return;
    const interval = setInterval(() => {
      const protos = ["TCP", "UDP", "TLSv1.3", "HTTPS", "DNS"];
      const randProto = protos[Math.floor(Math.random() * protos.length)];
      const isSuspicious = Math.random() < 0.2;
      const newPacket = {
        id: Math.floor(Math.random() * 90000) + 10000,
        proto: randProto,
        src: `${Math.floor(Math.random() * 200) + 20}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
        dst: "192.168.1.100",
        port: isSuspicious ? 22 : 443,
        status: (isSuspicious ? "Suspicious" : "Normal") as "Normal" | "Suspicious",
      };

      setPackets((prev) => [newPacket, ...prev.slice(0, 5)]);
    }, 2200);

    return () => clearInterval(interval);
  }, [isSniffing]);

  // --- 3. Interactive Gaussian Curve State ---
  const [mean, setMean] = useState(50);
  const [variance, setVariance] = useState(15);

  const generatePoints = () => {
    const points: string[] = [];
    for (let x = 0; x <= 100; x += 2) {
      const exponent = -Math.pow(x - mean, 2) / (2 * Math.pow(variance, 2));
      const y = 80 - Math.exp(exponent) * 70;
      points.push(`${x * 3},${y * 2}`);
    }
    return points.join(" ");
  };

  return (
    <div className="pt-28 pb-20 max-w-6xl mx-auto px-6 sm:px-10 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#F4512A] text-white">
          <Sparkles className="w-3.5 h-3.5" />
          <span>RESEARCH & EXPERIMENTS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#151515] dark:text-white uppercase leading-none">
          THE <span className="text-[#F4512A]">LAB</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
          An interactive digital laboratory showcasing experimental tools, cryptographic ciphers, network packet telemetries, and mathematical visualizers running in real-time.
        </p>
      </div>

      {/* Experiment 1: Cryptographic Cipher Playground */}
      <section className="glass-card rounded-3xl p-8 border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/5 dark:border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F4512A]/10 text-[#F4512A] flex items-center justify-center">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-[#151515] dark:text-white">
                Live Cryptographic Cipher Playground
              </h2>
              <p className="text-xs font-mono text-zinc-500">
                Interactive real-time encoding & keystream transformation
              </p>
            </div>
          </div>

          {/* Algorithm Selector */}
          <div className="flex items-center gap-2">
            {(["rot13", "base64", "hex", "binary"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setCipherType(type)}
                className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                  cipherType === type
                    ? "bg-[#F4512A] text-white shadow-sm"
                    : "bg-black/5 dark:bg-white/10 text-zinc-700 dark:text-zinc-300"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-mono font-bold uppercase text-zinc-500">
              Input Plaintext
            </label>
            <textarea
              value={cipherInput}
              onChange={(e) => setCipherInput(e.target.value)}
              rows={3}
              className="w-full p-4 rounded-2xl text-xs font-mono bg-white/70 dark:bg-zinc-800/70 border border-black/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-[#F4512A] resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono font-bold uppercase text-zinc-500">
              Computed Ciphertext ({cipherType.toUpperCase()})
            </label>
            <div className="w-full p-4 rounded-2xl text-xs font-mono bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/10 text-[#F4512A] dark:text-[#ff7b5c] font-bold break-all min-h-[82px] flex items-center">
              {computeCipher()}
            </div>
          </div>
        </div>
      </section>

      {/* Experiment 2: Live Network Packet Stream Simulator */}
      <section className="glass-card rounded-3xl p-8 border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/5 dark:border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F4512A]/10 text-[#F4512A] flex items-center justify-center">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-[#151515] dark:text-white">
                Network Packet Telemetry Simulator
              </h2>
              <p className="text-xs font-mono text-zinc-500">
                Live stream monitoring TCP/UDP packets & intrusion heuristic flags
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsSniffing(!isSniffing)}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
          >
            {isSniffing ? (
              <>
                <Pause className="w-3 h-3 text-[#F4512A]" />
                <span>Pause Sniffer</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-emerald-500" />
                <span>Resume Stream</span>
              </>
            )}
          </button>
        </div>

        {/* Packet Stream Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead>
              <tr className="border-b border-black/5 dark:border-white/5 text-zinc-400">
                <th className="pb-2">Packet ID</th>
                <th className="pb-2">Protocol</th>
                <th className="pb-2">Source IP</th>
                <th className="pb-2">Target Port</th>
                <th className="pb-2">Heuristic Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 dark:divide-white/5">
              {packets.map((p) => (
                <tr key={p.id} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <td className="py-2.5 font-bold text-zinc-700 dark:text-zinc-300">
                    #{p.id}
                  </td>
                  <td className="py-2.5">
                    <span className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 text-zinc-800 dark:text-zinc-200 font-bold">
                      {p.proto}
                    </span>
                  </td>
                  <td className="py-2.5 text-zinc-600 dark:text-zinc-400">
                    {p.src}
                  </td>
                  <td className="py-2.5 text-zinc-600 dark:text-zinc-400">
                    :{p.port}
                  </td>
                  <td className="py-2.5">
                    {p.status === "Suspicious" ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                        <ShieldAlert className="w-3 h-3" />
                        FLAGGED (PORT SCAN)
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        VERIFIED
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Experiment 3: Interactive Gaussian Data Distribution */}
      <section className="glass-card rounded-3xl p-8 border border-black/10 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/5 dark:border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F4512A]/10 text-[#F4512A] flex items-center justify-center">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-[#151515] dark:text-white">
                Interactive Gaussian Distribution Model
              </h2>
              <p className="text-xs font-mono text-zinc-500">
                Adjust mean & variance to observe probability density deformation
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span>μ (Mean): <b className="text-[#F4512A]">{mean}</b></span>
            <span>σ (Std Dev): <b className="text-[#F4512A]">{variance}</b></span>
          </div>
        </div>

        {/* Dynamic SVG Plot */}
        <div className="relative w-full h-48 sm:h-56 bg-zinc-100 dark:bg-zinc-950 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 flex items-center justify-center p-4">
          <svg viewBox="0 0 300 160" className="w-full h-full">
            {/* Grid background */}
            <line x1="0" y1="140" x2="300" y2="140" stroke="currentColor" strokeOpacity="0.2" />
            <line x1="150" y1="0" x2="150" y2="160" stroke="currentColor" strokeOpacity="0.1" strokeDasharray="3 3" />

            {/* Rendered Gaussian Curve */}
            <polyline
              fill="none"
              stroke="#F4512A"
              strokeWidth="3"
              points={generatePoints()}
              className="transition-all duration-150"
            />
          </svg>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-zinc-500">Distribution Mean (Center)</span>
              <span className="font-bold text-[#151515] dark:text-white">{mean}</span>
            </div>
            <input
              type="range"
              min="20"
              max="80"
              value={mean}
              onChange={(e) => setMean(Number(e.target.value))}
              className="w-full accent-[#F4512A] cursor-pointer"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-zinc-500">Variance / Spread (Sigma)</span>
              <span className="font-bold text-[#151515] dark:text-white">{variance}</span>
            </div>
            <input
              type="range"
              min="6"
              max="35"
              value={variance}
              onChange={(e) => setVariance(Number(e.target.value))}
              className="w-full accent-[#F4512A] cursor-pointer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
