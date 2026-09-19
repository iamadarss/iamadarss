export interface LabExperiment {
  id: string;
  title: string;
  category: "Cybersecurity" | "Interactive UI" | "Data Science" | "Algorithms" | "Creative Code";
  description: string;
  status: "Interactive" | "Prototype" | "Research";
  date: string;
  tags: string[];
  type: "cipher" | "hash" | "packet" | "matrix" | "noise" | "data-dist";
}

export const labExperiments: LabExperiment[] = [
  {
    id: "exp-cipher",
    title: "Live Cryptographic Cipher Playground",
    category: "Cybersecurity",
    description: "Interactive in-browser text encryption/decryption using Caesar, ROT13, Base64, and XOR keystream algorithms.",
    status: "Interactive",
    date: "2024",
    tags: ["Cryptography", "Ciphers", "Encoding", "Security"],
    type: "cipher",
  },
  {
    id: "exp-hash",
    title: "SHA-256 Avalanche Effect Visualizer",
    category: "Cybersecurity",
    description: "Observe how mutating a single input bit completely alters cryptographic digest hashes in real-time.",
    status: "Interactive",
    date: "2024",
    tags: ["SHA-256", "Entropy", "Hashes", "Bitwise"],
    type: "hash",
  },
  {
    id: "exp-packet",
    title: "Network Packet Inspection Simulator",
    category: "Cybersecurity",
    description: "Live packet stream simulator demonstrating TCP/UDP header breakdown, port scanning, and suspicious payload flags.",
    status: "Interactive",
    date: "2024",
    tags: ["Networking", "TCP/IP", "Wireshark", "Firewall"],
    type: "packet",
  },
  {
    id: "exp-data-dist",
    title: "Real-Time Data Distribution & Outlier Inspector",
    category: "Data Science",
    description: "Dynamic Gaussian and Poisson distribution generator with interactive IQR threshold sliders and variance controls.",
    status: "Interactive",
    date: "2024",
    tags: ["Statistics", "Distributions", "IQR", "Data Science"],
    type: "data-dist",
  },
  {
    id: "exp-matrix",
    title: "Interactive Perspective Grid Matrix",
    category: "Creative Code",
    description: "Procedural wireframe 3D grid with cursor physics, depth distortion, and mouse tilt response.",
    status: "Interactive",
    date: "2024",
    tags: ["Canvas", "3D Projection", "Math", "Perspective"],
    type: "matrix",
  },
];
