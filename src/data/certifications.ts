export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  skills: string[];
  description: string;
}

// Configurable certifications list: Add verified certificates here or leave empty to show the elegant empty state
export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Network Security Engineer",
    issuer: "Network Security & Cyber Defense Credential",
    date: "2025",
    credentialId: "NSE-VERIFIED-CREDENTIAL",
    skills: ["Network Security", "Firewall Configuration", "Threat Mitigation", "Protocols & Defense", "Vulnerability Analysis"],
    description: "Professional certification demonstrating proficiency in perimeter defense, network access protocols, packet analysis, secure topologies, and vulnerability mitigation.",
  },
  {
    id: "cert-2",
    title: "AI DevOps Analyst",
    issuer: "DevOps & AI Automation Credential",
    date: "2025",
    credentialId: "AI-DEVOPS-ANALYST-CREDENTIAL",
    skills: ["AI Workflows", "DevOps Pipelines", "Python Automation", "CI/CD & Version Control", "System Optimization"],
    description: "Certification covering modern AI-assisted software delivery pipelines, automated scripting, infrastructure optimization, and DevOps monitoring.",
  },
];
