export interface Achievement {
  id: string;
  title: string;
  category: "Academic" | "Hackathon" | "Open Source" | "Technical Milestone";
  date: string;
  organization: string;
  description: string;
  highlight?: string;
  link?: string;
}

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "Hackathon Finalist & Innovation Recognition",
    category: "Hackathon",
    date: "2024",
    organization: "Collegiate Technical Hackathon",
    description: "Architected and presented a real-time QR-based institutional management solution solving physical classroom attendance delays.",
    highlight: "Top 5 Finalist out of 60+ Teams",
  },
  {
    id: "ach-2",
    title: "Open Source Creator of AuraOS",
    category: "Open Source",
    date: "2024",
    organization: "GitHub Community",
    description: "Published a fully interactive desktop OS simulator running in the browser with terminal emulation, virtual filesystem, and zero external framework bloat.",
    highlight: "Featured on GitHub Pages",
    link: "https://github.com/iamadarss/aura-web-os",
  },
  {
    id: "ach-3",
    title: "Academic Excellence in Computer Science Coursework",
    category: "Academic",
    date: "2023 — 2024",
    organization: "Engineering Faculty",
    description: "Consistent high performance across Data Structures, Algorithms, Computer Networks, and Database Management Systems.",
    highlight: "Consistent First-Class Honors",
  },
  {
    id: "ach-4",
    title: "Cybersecurity Capture The Flag (CTF) Challenges",
    category: "Technical Milestone",
    date: "2024",
    organization: "TryHackMe & PicoCTF",
    description: "Solved hands-on challenges across Web Exploitation, Cryptography, Forensics, and Reverse Engineering.",
    highlight: "Active Hands-on Security Lab Practice",
  },
];
