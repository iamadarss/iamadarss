export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Full-time" | "Internship" | "Contract" | "Open Source" | "Academic";
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Full Stack & Systems Developer",
    organization: "Independent Engineering & Open Source",
    location: "Remote",
    period: "2023 — Present",
    type: "Open Source",
    description: "Designing and maintaining full-stack web applications, desktop browser operating environments, and cybersecurity utilities.",
    responsibilities: [
      "Architected AuraOS, a web-based operating system featuring an interactive terminal, virtual filesystem, and multi-window physics.",
      "Developed QR Attendance ERP, an institutional management platform that reduced roll call delays by 90% via rotating dynamic QR validation.",
      "Engineered Linkly URL Shortener with real-time telemetry, QR code generation, and client-side performance caching.",
      "Conducted security audits, vulnerability scans, and implemented OWASP Top 10 countermeasures across web APIs.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Python", "Tailwind CSS", "PostgreSQL", "Docker", "Git"],
    achievements: [
      "Shipped multiple open-source utilities with 100% test pass rates and production deployments.",
      "Maintained active public GitHub repositories with modular, well-documented codebases.",
    ],
  },
  {
    id: "exp-2",
    role: "Cybersecurity & Data Researcher",
    organization: "Academic Projects & Technical Labs",
    location: "India",
    period: "2023 — 2024",
    type: "Academic",
    description: "Conducted hands-on threat analysis research, log parser optimization, and statistical data cleaning workflows.",
    responsibilities: [
      "Built SentinelLog SIEM engine in Python to process and detect attack patterns (SQL injection, XSS, brute force) across server log files.",
      "Created data ingestion pipelines capable of parsing thousands of lines per second with sub-2% false-positive rates.",
      "Constructed interactive data dashboards for statistical outlier visualization and predictive forecasting.",
    ],
    technologies: ["Python", "Pandas", "Flask", "Regex", "SQLite", "Data Analysis", "Network Security"],
    achievements: [
      "Successfully benchmarked automated log intrusion signatures against standard benchmark attack dumps.",
      "Authored documentation on zero-trust authorization practices and defensive coding standards.",
    ],
  },
];
