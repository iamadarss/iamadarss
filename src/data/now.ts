export interface NowData {
  lastUpdated: string;
  location: string;
  learning: string[];
  building: string[];
  reading: string[];
  focus: string[];
  goals: string[];
}

export const nowData: NowData = {
  lastUpdated: "September 2026",
  location: "India (UTC+5:30)",
  learning: [
    "Kernel-level security concepts, eBPF network observability, and memory safety",
    "Advanced WebGL / Three.js shader pipelines and post-processing performance",
    "Time-series anomaly detection algorithms in Python using Scikit-Learn",
  ],
  building: [
    "AuraOS 2.0: Enhancing desktop window physics, adding local storage indexedDB driver, and custom shell plugins",
    "Interactive developer tools and security automation scripts for rapid vulnerability triaging",
    "Extending QR Attendance ERP with biometric hardware integration prototypes",
  ],
  reading: [
    "Designing Data-Intensive Applications by Martin Kleppmann",
    "The Web Application Hacker's Handbook by Dafydd Stuttard & Marcus Pinto",
    "Refactoring UI by Adam Wathan & Steve Schoger",
  ],
  focus: [
    "Deepening systems-level cybersecurity understanding",
    "Contributing to open-source developer tooling",
    "Preparing for high-caliber full-stack engineering roles",
  ],
  goals: [
    "Publish 3 in-depth cybersecurity & data architecture case studies",
    "Compete in leading global Capture The Flag (CTF) security competitions",
    "Collaborate with visionary engineers building developer-first products",
  ],
};
