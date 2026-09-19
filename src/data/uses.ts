export interface ToolItem {
  name: string;
  category: "Hardware" | "Development & Editor" | "Operating System" | "Browser & Utilities" | "Design & AI Tools";
  description: string;
  link?: string;
  badge?: string;
}

export const usesCategories = [
  "Hardware",
  "Development & Editor",
  "Operating System",
  "Browser & Utilities",
  "Design & AI Tools",
] as const;

export const usesTools: ToolItem[] = [
  // Hardware
  {
    name: "Primary Engineering Workstation",
    category: "Hardware",
    description: "Multi-core processor with 32GB RAM, fast NVMe SSD storage for rapid Docker builds, virtual machines, and parallel builds.",
    badge: "Daily Driver",
  },
  {
    name: "Mechanical Keyboard & Precision Mouse",
    category: "Hardware",
    description: "Tactile mechanical keyboard with customized keycaps and ergonomic high-DPI gaming mouse for prolonged coding marathons.",
  },
  {
    name: "Dual High-Resolution Monitors",
    category: "Hardware",
    description: "Primary landscape IPS panel for main editor/terminal and secondary vertical monitor for server logs, documentation, and chat.",
  },

  // Development & Editor
  {
    name: "Visual Studio Code",
    category: "Development & Editor",
    description: "Configured with Tokyo Night / GitHub Dark theme, Vim keybindings, ESLint, Prettier, Error Lens, and GitLens.",
    badge: "Primary IDE",
  },
  {
    name: "Windows Terminal + PowerShell 7 & WSL2",
    category: "Development & Editor",
    description: "Starship prompt, zoxide for instant navigation, fzf fuzzy finder, and Ubuntu 24.04 LTS subsystem for Linux environments.",
  },
  {
    name: "Git & GitHub CLI (gh)",
    category: "Development & Editor",
    description: "Version control workflow powered by interactive rebase aliases, PR reviews from the command line, and signed commits.",
  },
  {
    name: "Docker Desktop",
    category: "Development & Editor",
    description: "Containerization sandbox for spinning up isolated PostgreSQL, Redis, and vulnerable testing environments locally.",
  },

  // Operating System
  {
    name: "Windows 11 Pro + WSL2 (Ubuntu Linux)",
    category: "Operating System",
    description: "The best of both worlds: robust hardware driver compatibility combined with a native Linux kernel for systems development and Bash scripting.",
    badge: "Dual Environment",
  },
  {
    name: "Kali Linux / Parrot OS (VM)",
    category: "Operating System",
    description: "Sandboxed virtual machine environments for practicing network auditing, packet analysis with Wireshark, and CTF challenges.",
  },

  // Browser & Utilities
  {
    name: "Arc Browser / Brave",
    category: "Browser & Utilities",
    description: "Workspaces, tab archiving, built-in ad-blocking, and dedicated developer profile for inspecting Network and Application panels.",
    badge: "Daily Browser",
  },
  {
    name: "Postman & Bruno",
    category: "Browser & Utilities",
    description: "API testing, automated collection runners, and mock servers for rapid backend endpoint validation.",
  },
  {
    name: "Wireshark",
    category: "Browser & Utilities",
    description: "Deep packet inspection, analyzing TLS handshakes, DNS queries, and TCP stream reassembly during network security research.",
  },

  // Design & AI Tools
  {
    name: "Figma",
    category: "Design & AI Tools",
    description: "Rapid wireframing, component library design, vector icon editing, and layout prototyping before coding.",
    badge: "Design",
  },
  {
    name: "Antigravity & Claude 3.7 / GPT-4o",
    category: "Design & AI Tools",
    description: "Pair programming, architectural brainstorming, regex generation, refactoring assistance, and test case ideation.",
  },
  {
    name: "Excalidraw",
    category: "Design & AI Tools",
    description: "Hand-drawn architecture diagrams, data flow schemas, and system design whiteboarding.",
  },
];
