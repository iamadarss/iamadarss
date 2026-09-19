export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  deliverables: string[];
  technologies: string[];
}

export const services: Service[] = [
  {
    id: "serv-fullstack",
    title: "Full Stack Development",
    slug: "full-stack-development",
    description: "End-to-end web applications built with Next.js, React, Node.js/Python, and relational SQL databases with rock-solid reliability.",
    icon: "layers",
    deliverables: [
      "Production-ready Next.js / React full-stack application",
      "Type-safe API endpoints and server actions",
      "Database schema architecture & migrations",
      "Authentication (OAuth, JWT, RBAC)",
      "Automated CI/CD deployment pipeline",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Docker"],
  },
  {
    id: "serv-webdev",
    title: "Web Development & Creative UI",
    slug: "web-development",
    description: "Award-caliber, responsive, high-performance web experiences with smooth animations, glassmorphism, and flawless mobile adaptation.",
    icon: "layout",
    deliverables: [
      "Interactive landing pages with micro-animations",
      "Lighthouse 95+ performance optimization",
      "Accessible (WCAG compliant) semantic HTML",
      "Cross-browser & mobile responsive layout",
    ],
    technologies: ["React", "HTML5", "CSS3 / Tailwind", "Framer Motion", "JavaScript"],
  },
  {
    id: "serv-cybersec",
    title: "Cybersecurity Auditing & Hardening",
    slug: "cybersecurity-projects",
    description: "Security assessment of web applications, OWASP Top 10 vulnerability remediation, rate limiting, and defensive architectural reviews.",
    icon: "shield-check",
    deliverables: [
      "OWASP Top 10 vulnerability assessment report",
      "Input validation & injection defense implementation",
      "Secure authentication & session handling setup",
      "Automated rate-limiting and DDoS mitigation rules",
    ],
    technologies: ["OWASP ZAP", "Python", "Security Headers", "Linux Firewall", "JWT"],
  },
  {
    id: "serv-data",
    title: "Data Analysis & Visualization",
    slug: "data-analysis",
    description: "Transforming complex datasets into actionable insights, automated cleaning pipelines, and interactive executive reporting dashboards.",
    icon: "bar-chart-3",
    deliverables: [
      "Automated data cleaning & deduplication scripts",
      "Interactive charts and metric aggregation panels",
      "Exploratory Data Analysis (EDA) reports",
      "Exportable executive summaries (PDF/CSV)",
    ],
    technologies: ["Python", "Pandas", "NumPy", "Chart.js / Recharts", "Excel"],
  },
  {
    id: "serv-dashboard",
    title: "Dashboard & ERP Development",
    slug: "dashboard-development",
    description: "Custom internal tooling, institutional ERP portals, and analytics command centers with real-time updates and role-based permissions.",
    icon: "gauge",
    deliverables: [
      "Real-time data visualization and filtering",
      "Multi-tenant or multi-role permission controls",
      "Data export and automated audit trails",
      "Modular responsive widget system",
    ],
    technologies: ["Next.js", "PostgreSQL", "Tailwind CSS", "REST API", "Zod"],
  },
  {
    id: "serv-api",
    title: "API Development & Integration",
    slug: "api-development",
    description: "High-throughput, RESTful and webhook-driven backend APIs designed for resilience, security, and developer ergonomics.",
    icon: "cpu",
    deliverables: [
      "RESTful API design and OpenAPI documentation",
      "Cryptographic request validation and rate limiting",
      "Third-party webhook integration (Stripe, Resend, Auth)",
      "Database query caching and indexing",
    ],
    technologies: ["Node.js / Express", "Python / Flask", "PostgreSQL", "Zod", "Redis"],
  },
  {
    id: "serv-automation",
    title: "Scripting & Workflow Automation",
    slug: "automation",
    description: "Custom automation bots, scraping pipelines, scheduled reporting jobs, and server maintenance scripts that save hours of manual effort.",
    icon: "bot",
    deliverables: [
      "Automated batch processing scripts",
      "Scheduled data extractors and parsers",
      "Error notification hooks via email or Discord",
      "Containerized background workers",
    ],
    technologies: ["Python", "Bash", "Cron / Task Scheduler", "Docker", "Node.js"],
  },
  {
    id: "serv-portfolio",
    title: "Portfolio & Brand Engineering",
    slug: "portfolio-development",
    description: "Designing bespoke, high-converting digital portfolios for developers, executives, and founders who want an unmistakable presence.",
    icon: "sparkles",
    deliverables: [
      "Bespoke visual identity & typographic hierarchy",
      "Interactive 3D / canvas elements and custom cursor",
      "Case study layout & project showcases",
      "Command palette (Cmd+K) & dark mode system",
    ],
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Canvas API", "Vercel"],
  },
];
