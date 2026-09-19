export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "WEB" | "FULL STACK" | "CYBERSECURITY" | "DATA" | "AI" | "AUTOMATION" | "MOBILE";
  categories: string[];
  description: string;
  longDescription: string;
  technologies: string[];
  github: string;
  live: string;
  status: "Live & Active" | "Completed" | "In Development";
  featured: boolean;
  year: string;
  image: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: string;
  challenges: string[];
  learnings: string[];
  metrics?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: "weather-application",
    title: "Weather Application",
    subtitle: "Real-Time Weather Telemetry & Responsive Climate Dashboard",
    category: "WEB",
    categories: ["WEB", "AUTOMATION"],
    description: "A responsive front-end web application demonstrating real-time API integration, dynamic DOM manipulation, and location-based forecast telemetry using HTML, CSS, and JavaScript.",
    longDescription: "The Weather Application provides instant weather forecasting, atmospheric telemetry, temperature curves, and air conditions across global locations. Built using vanilla HTML5, modern CSS3 animations, and asynchronous JavaScript DOM manipulation, it communicates with RESTful weather APIs to render real-time meteorological metrics with zero framework overhead.",
    technologies: ["JavaScript", "HTML5", "CSS3", "REST Weather API", "DOM Manipulation", "Responsive Design", "Git"],
    github: "https://github.com/iamadarss/weather-application",
    live: "https://iamadarss.github.io/weather-application/",
    status: "Live & Active",
    featured: true,
    year: "2025",
    image: "/images/urlshortener.jpg",
    problem: "Many weather portals are bogged down by intrusive ad tracking and heavy asset payloads, slowing down quick meteorological lookups on constrained mobile networks.",
    solution: "Designed a clean, lightweight, mobile-first weather tracker leveraging browser Geolocation and cached asynchronous API responses for near-instant rendering.",
    features: [
      "Real-time temperature, humidity, wind velocity, and weather conditions monitoring",
      "Dynamic visual themes adapting to live day/night and precipitation states",
      "Search autocomplete for global cities and coordinate-based reverse geocoding",
      "Mobile-first responsive interface with tactile touch ergonomics",
      "Client-side caching minimizing redundant API request overhead",
    ],
    architecture: "Modular Vanilla JavaScript architecture isolating WeatherService (API fetch & parse), DOMRenderer (UI updates), and StateStore (recent searches).",
    challenges: [
      "Handling sporadic API rate limits and intermittent mobile connectivity with elegant offline fallbacks.",
      "Structuring smooth CSS transitions that reflect changing atmospheric conditions.",
    ],
    learnings: [
      "Deep mastery of Asynchronous JavaScript, Promises, Fetch API, and DOM lifecycle events.",
      "Designing responsive layouts with fluid clamp() functions and CSS Grid.",
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "API Response Parse", value: "<80ms" },
      { label: "Bundle Size", value: "<15KB Zero-Dep" },
    ],
  },
  {
    slug: "youtube-shorts-automation",
    title: "YouTube Long-to-Shorts Automation",
    subtitle: "Automated Python Scripting & Video Processing Pipeline",
    category: "AUTOMATION",
    categories: ["AUTOMATION", "AI"],
    description: "An automated Python video processing and scripting tool that extracts highlight clips from long-form videos and converts them into vertical Shorts.",
    longDescription: "Content creators spend hours manually scrubbing timestamps and reformatting 16:9 videos into 9:16 vertical shorts. This automation tool streamlines the workflow using Python scripting, audio amplitude heuristics, and video processing bindings to detect peak moments, crop dynamic aspect ratios, and export upload-ready short-form media.",
    technologies: ["Python", "FFmpeg", "MoviePy", "OpenCV", "CLI Scripting", "Automation"],
    github: "https://github.com/iamadarss/youtube-shorts-automation",
    live: "https://github.com/iamadarss/youtube-shorts-automation",
    status: "Completed",
    featured: true,
    year: "2025",
    image: "/images/auraos.jpg",
    problem: "Manually clipping, reframing, and rendering vertical shorts from hours of horizontal footage is tedious, repetitive, and time-intensive.",
    solution: "Engineered a Python automation pipeline that analyzes video audio streams, isolates engagement spikes, auto-centers speaker framing, and batches vertical shorts with subtitle overlays.",
    features: [
      "Automated audio-level peak detection to locate high-energy segments",
      "Intelligent horizontal (16:9) to vertical (9:16) aspect ratio framing and cropping",
      "Batch export queuing with customizable video bitrates and resolution profiles",
      "Configurable duration clamps ensuring compliance with YouTube Shorts guidelines",
      "Command-line interface with verbose logging and progress meters",
    ],
    architecture: "Pipelined Python CLI tool incorporating MediaExtractor, AudioAnalyzer, VideoCropper, and ExportEncoder modules.",
    challenges: [
      "Minimizing memory consumption during heavy multi-stream video transcode operations.",
      "Maintaining speaker face tracking when converting wide shots to vertical aspect ratios.",
    ],
    learnings: [
      "In-depth command of Python multiprocessing, subprocess management, and video encoding parameters.",
      "Algorithmic peak detection and computational media manipulation techniques.",
    ],
    metrics: [
      { label: "Editing Time Saved", value: "85%" },
      { label: "Batch Export Speed", value: "3x Real-time" },
      { label: "Aspect Ratio", value: "9:16 Auto-Crop" },
    ],
  },
  {
    slug: "qr-attendance-erp",
    title: "QR Attendance ERP",
    subtitle: "Automated Campus Attendance Tracking & Academic Reporting System",
    category: "FULL STACK",
    categories: ["FULL STACK", "DATA", "AUTOMATION"],
    description: "An enterprise-grade academic ERP system that automates student attendance check-ins using rotating dynamic QR codes and analytics.",
    longDescription: "Traditional attendance taking in universities is slow, prone to buddy punching, and error-heavy. QR Attendance ERP replaces paper rosters with dynamic rotating QR authentication, live webcam scanner detection, student dashboard metrics, and automated percentage calculation for institutional administrators.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL / Prisma", "Html5-Qrcode", "Vercel"],
    github: "https://github.com/iamadarss/qr-attendance-erp",
    live: "https://qr-attendance-erp.vercel.app/",
    status: "Live & Active",
    featured: true,
    year: "2024",
    image: "/images/qrattendance.jpg",
    problem: "Manual attendance rolls consume 10-15 minutes of every university lecture and facilitate proxy attendance fraud.",
    solution: "Engineered a time-sensitive tokenized QR generation system where students scan from their devices within a narrow 5-second window, instantly registering timestamped verified attendance.",
    features: [
      "Real-time webcam and camera feed barcode/QR scanning integration",
      "Time-based rotating cryptographic QR generation to eliminate proxy scanning",
      "Student & Faculty role-based access control (RBAC) and authentication",
      "Comprehensive attendance statistics, percentage charts, and low-attendance warnings",
      "Exportable CSV/Excel reports for institutional compliance records",
    ],
    architecture: "Next.js App Router with server actions, relational schema design with student-course-session relationships, and token-based validation.",
    challenges: [
      "Mitigating camera latency across diverse mobile browsers and varying classroom lighting conditions.",
      "Preventing student proxy scanning by enforcing cryptographic session expiry and timestamp verification.",
    ],
    learnings: [
      "Deep practical experience with client-side camera stream processing and WebRTC permission handling.",
      "Designing resilient database models capable of handling hundreds of concurrent write requests during class start periods.",
    ],
    metrics: [
      { label: "Attendance Roll Time", value: "Reduced 90%" },
      { label: "Scanner Recognition", value: "<350ms" },
      { label: "Proxy Prevention", value: "Tokenized Rotation" },
    ],
  },
  {
    slug: "url-shortener",
    title: "Linkly URL Shortener",
    subtitle: "High-Performance Link Shortening & Real-Time Click Analytics",
    category: "WEB",
    categories: ["WEB", "FULL STACK", "DATA"],
    description: "A modern, lightning-fast URL shortening web service featuring instant link generation, custom aliases, QR code creation, and click metrics.",
    longDescription: "Linkly provides individuals and businesses with a streamlined platform to shorten cumbersome links, monitor engagement through real-time telemetry, generate scannable branded QR codes, and safeguard against phishing redirects via URL destination scanning.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "REST API", "QR Code Generation", "Netlify"],
    github: "https://github.com/iamadarss/url-shortener",
    live: "https://linklyurl.netlify.app/",
    status: "Live & Active",
    featured: true,
    year: "2024",
    image: "/images/urlshortener.jpg",
    problem: "Long, unwieldy URLs reduce click-through rates and lack visibility into recipient engagement and geographic analytics.",
    solution: "Designed an intuitive link condensing web app that converts long URLs into compact identifiers while generating instant QR codes and tracking link analytics.",
    features: [
      "Instant one-click URL shortening with clipboard auto-copy",
      "Dynamic SVG/PNG QR Code generator with customizable colors and styling",
      "Validation regex engine preventing malicious link schemes and infinite redirect loops",
      "Dark/Light adaptive user interface with sleek glass cards",
      "Client-side history caching for instant link retrieval",
    ],
    architecture: "Component-driven React single-page app utilizing debounced input validation, asynchronous state caching, and responsive design tokens.",
    challenges: [
      "Handling client-side error states gracefully when external shortening APIs throttle or fail.",
      "Creating seamless SVG to PNG downloadable canvas rasterization for generated QR codes.",
    ],
    learnings: [
      "Mastered URL parsing, URI encoding standards, and security considerations around open-redirect vulnerabilities.",
      "Advanced state management and optimistic UI updates for instant perceived performance.",
    ],
    metrics: [
      { label: "Generation Speed", value: "<120ms" },
      { label: "Code Coverage", value: "100% Client-Side" },
      { label: "QR Export Options", value: "PNG & SVG" },
    ],
  },
  {
    slug: "auraos",
    title: "AuraOS",
    subtitle: "Web-Based Desktop Operating System & Interactive Environment",
    category: "FULL STACK",
    categories: ["FULL STACK", "WEB", "CYBERSECURITY"],
    description: "A futuristic, browser-based desktop operating system interface featuring multitasking windows, virtual file system, terminal emulator, and native apps.",
    longDescription: "AuraOS is an experimental web desktop operating system built to explore modern browser capabilities. It brings traditional desktop computing ergonomics to the web through an ultra-responsive windowing manager, process scheduler, sandboxed terminal with real CLI tools, filesystem emulation with LocalStorage persistence, and customizable themes.",
    technologies: ["JavaScript", "HTML5", "CSS3 / CSS Variables", "LocalStorage API", "Web Audio API", "Git"],
    github: "https://github.com/iamadarss/aura-web-os",
    live: "https://iamadarss.github.io/aura-web-os/",
    status: "Live & Active",
    featured: true,
    year: "2024",
    image: "/images/auraos.jpg",
    problem: "Most browser applications are limited to single-page static layouts, failing to utilize browser multithreading and ergonomic windowing paradigms for power users and developers.",
    solution: "Architected a custom window management engine with z-index stacking, dragging physics, window snapping, a virtual filesystem hierarchy, and an integrated terminal with command execution.",
    features: [
      "Draggable, resizable, and minimizable multi-window desktop interface",
      "Interactive shell with commands (ls, cat, echo, clear, help, sysinfo)",
      "Virtual in-memory and persistent file system hierarchy",
      "Native utility apps: Text Editor, File Explorer, System Monitor, Browser viewport",
      "Glassmorphism aesthetic with dynamic wallpaper switching and smooth physics",
    ],
    architecture: "Event-driven modular architecture separating WindowManager, ProcessController, VirtualFileSystem, and UI View Renderers.",
    challenges: [
      "Managing complex z-index layering and focus delegation without memory leaks across dozens of simultaneous window instances.",
      "Ensuring responsive layout adaptation between high-resolution monitors and mobile touch gestures.",
    ],
    learnings: [
      "Deep understanding of DOM event propagation, coordinate recalculation, and touch event mapping.",
      "Optimizing rendering cycles for ultra-smooth 60fps window dragging and resizing.",
    ],
    metrics: [
      { label: "Window Frame Rate", value: "60 FPS" },
      { label: "Terminal Command Latency", value: "<15ms" },
      { label: "Supported Native Apps", value: "6 Built-in" },
    ],
  },
  {
    slug: "sentinellog-siem",
    title: "SentinelLog Threat Analyzer",
    subtitle: "Real-Time Cybersecurity Event Monitoring & SIEM Anomaly Detection",
    category: "CYBERSECURITY",
    categories: ["CYBERSECURITY", "DATA", "AUTOMATION"],
    description: "An interactive cybersecurity event log analyzer and intrusion detection dashboard that flags brute force attempts, SQLi, and suspicious traffic.",
    longDescription: "SentinelLog ingests Apache/Nginx web server logs and authentication records, parsing IP addresses, geolocation data, HTTP request payloads, and status codes to pinpoint malicious activity. Built with heuristics for SQL injection detection, path traversal scanning, and DDoS pattern recognition.",
    technologies: ["Python", "Flask", "TypeScript", "Chart.js", "Regex Rules Engine", "SQLite"],
    github: "https://github.com/iamadarss",
    live: "https://github.com/iamadarss",
    status: "Completed",
    featured: false,
    year: "2024",
    image: "/images/auraos.jpg",
    problem: "Security analysts are overwhelmed by raw unstructured server logs, making rapid threat detection and IP blocking tedious.",
    solution: "Created an automated parser with signature-based detection algorithms that categorizes threats by severity score and provides 1-click IP ban rule generation.",
    features: [
      "Multi-format log parser (Common Log Format, Combined Log Format, Syslog)",
      "Automated attack signature identification (SQL Injection, XSS, Path Traversal, Brute Force)",
      "GeoIP mapping visualizing source origins of anomalous incoming requests",
      "Exportable IPTables / UFW firewall rules for instant threat remediation",
      "Real-time severity scoring (Critical, High, Medium, Low)",
    ],
    architecture: "Python regex parsing pipeline coupled with a lightweight REST API serving structured incident telemetries to a modern reactive frontend.",
    challenges: [
      "Efficiently parsing multi-gigabyte log archives without excessive CPU overhead or thread blocking.",
      "Minimizing false-positive alerts on standard automated bots and web crawlers.",
    ],
    learnings: [
      "Understanding RFC network standards, HTTP attack vectors, and SIEM event processing models.",
      "Writing performant compiled regular expressions and state machine tokenizers.",
    ],
    metrics: [
      { label: "Log Throughput", value: "10,000 lines/sec" },
      { label: "Attack Patterns", value: "24 Signatures" },
      { label: "False Positive Rate", value: "<1.8%" },
    ],
  },
];
