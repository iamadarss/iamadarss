export interface Skill {
  name: string;
  category: "PROGRAMMING" | "WEB" | "TOOLS" | "CERTIFIED";
  level: number; // 0 - 100
  experience: string;
  description: string;
  relatedProjects: string[];
  icon: string;
  featured?: boolean;
}

export const skillCategories = [
  "PROGRAMMING",
  "WEB",
  "TOOLS",
  "CERTIFIED",
] as const;

export const skills: Skill[] = [
  // PROGRAMMING
  {
    name: "Python",
    category: "PROGRAMMING",
    level: 92,
    experience: "3+ Years",
    description: "Scripting, task automation, YouTube Shorts boundary detection tool, data structures, and algorithmic problem solving.",
    relatedProjects: ["YouTube Long-to-Shorts Automation", "Automation Scripts"],
    icon: "code",
    featured: true,
  },
  {
    name: "C",
    category: "PROGRAMMING",
    level: 88,
    experience: "2+ Years",
    description: "Procedural programming, pointers, low-level memory allocation, core data structures, and algorithmic foundation.",
    relatedProjects: ["Data Structures & Algorithms", "College Labs"],
    icon: "code",
    featured: true,
  },
  {
    name: "C++",
    category: "PROGRAMMING",
    level: 86,
    experience: "2+ Years",
    description: "Object-Oriented Programming (OOP), STL libraries, classes, inheritance, polymorphism, and problem solving.",
    relatedProjects: ["OOP Software Implementations", "Algorithm Labs"],
    icon: "code",
    featured: true,
  },
  {
    name: "JavaScript",
    category: "PROGRAMMING",
    level: 92,
    experience: "2+ Years",
    description: "ES6+ syntax, asynchronous programming, DOM APIs, event handling, fetch API, and interactive user interfaces.",
    relatedProjects: ["Weather Application", "Interactive Web Projects"],
    icon: "code",
    featured: true,
  },

  // WEB
  {
    name: "HTML5 & CSS3",
    category: "WEB",
    level: 95,
    experience: "3+ Years",
    description: "Semantic layouts, responsive flexbox and grid architectures, custom animations, and cross-browser styling.",
    relatedProjects: ["Weather Application", "Personal Portfolio"],
    icon: "file-code",
    featured: true,
  },
  {
    name: "Responsive Web Design & DOM",
    category: "WEB",
    level: 94,
    experience: "2+ Years",
    description: "Mobile-first responsive design, dynamic DOM manipulation, real-time UI state updates, and accessible component structures.",
    relatedProjects: ["Weather Application", "Portfolio Showcase"],
    icon: "globe",
    featured: true,
  },

  // TOOLS
  {
    name: "Git & GitHub",
    category: "TOOLS",
    level: 90,
    experience: "2+ Years",
    description: "Version control, branching workflows, repository management, commit conventions, and open source collaboration.",
    relatedProjects: ["iamadarss Repositories"],
    icon: "git-branch",
    featured: true,
  },
  {
    name: "Visual Studio Code",
    category: "TOOLS",
    level: 95,
    experience: "3+ Years",
    description: "Development workflow configuration, debugging setups, terminal integration, and multi-language environments.",
    relatedProjects: ["Daily Software Development"],
    icon: "terminal",
    featured: true,
  },
  {
    name: "Debugging & Problem Solving",
    category: "TOOLS",
    level: 90,
    experience: "2+ Years",
    description: "Logical code tracing, stack trace diagnosis, breakpoint debugging, algorithmic optimization, and edge-case handling.",
    relatedProjects: ["YouTube Long-to-Shorts Automation", "Weather Application"],
    icon: "terminal",
    featured: true,
  },

  // CERTIFIED
  {
    name: "Network Security Engineering",
    category: "CERTIFIED",
    level: 88,
    experience: "Certified",
    description: "Network security protocols, threat analysis, access control, firewall fundamentals, and system vulnerability assessment.",
    relatedProjects: ["Network Security Certification"],
    icon: "shield-check",
    featured: true,
  },
  {
    name: "AI DevOps Analysis",
    category: "CERTIFIED",
    level: 86,
    experience: "Certified",
    description: "AI workflow analysis, continuous automation, software delivery lifecycle, and modern development tooling integration.",
    relatedProjects: ["AI DevOps Analyst Certification"],
    icon: "cpu",
    featured: true,
  },
];
