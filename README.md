<div align="center">

# ⚡ Adarsh Patel — Interactive Developer Portfolio

> **Software Developer • Web Developer • Python & Automation Specialist**  
> An interactive personal developer portfolio combining editorial typography, cyber-tech aesthetics, 3D perspective wireframe visuals, and production-ready performance.

[![Next.js 15](https://img.shields.io/badge/Next.js-15.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-F4512A?style=for-the-badge)](LICENSE)

[🌐 Live Portfolio](https://iamadarss.vercel.app/) • [📄 ATS Resume](https://iamadarss.vercel.app/resume) • [💼 LinkedIn](https://linkedin.com/in/iamadarss) • [📸 Instagram](https://instagram.com/iamadarss) • [✉️ Email Me](mailto:adarshpatel8738@gmail.com)

</div>

---

## 👨‍💻 About Adarsh Patel

BCA student seeking entry-level **Software Developer** or **Web Developer** opportunities. Proficient in **Object-Oriented Programming (OOP)**, **Data Structures**, and **Algorithms** using **C, C++, and Python**. Experienced in front-end web development with **HTML, CSS, JavaScript, and responsive design**. Skilled in version control (**Git/GitHub**), debugging, and problem-solving. Passionate about developing scalable software solutions, web applications, and automation tools while adhering to best practices in coding and software development.

- **📍 Location**: Kanpur, Uttar Pradesh, India • Available Globally & Remote
- **🎓 Education**: Bachelor of Computer Applications (BCA), College of Management Studies (CSJM University) — **CGPA: 7.90**
- **📜 Certifications**: Network Security Engineer • AI DevOps Analyst
- **🛠️ Core Competencies**: OOP, Problem-Solving, Data Structures & Algorithms, API Integration, Version Control

---

## ✦ Key Features

- **Dynamic Aesthetics & Layout**:
  - Warm light-mode aesthetic (`#E8E6E7`) with a cyber-dark mode (`#0D0D11`).
  - Signature vibrant orange accent (`#F4512A`) with interactive glow states.
  - Floating frosted glassmorphism pill navigation with active route detection and mobile drawer.
  - Interactive 3D perspective room wireframe canvas reacting in real-time to mouse coordinates.
  - Stylized 3D developer character avatar of Adarsh Patel centered between the 3D room and giant background typography.
  - Infinite angled ticker marquee (`SOFTWARE DEVELOPER ✦ C / C++ ✦ PYTHON ✦ WEB APPLICATIONS ✦ ...`).
- **ATS-Friendly Resume (`/resume`)**:
  - Direct web curriculum vitae matching Adarsh Patel's verified academic and technical credentials.
  - Print-optimized layout (`@media print`) and 1-click PDF export action.
- **Featured Software Showcase (`/projects` & `/projects/[slug]`)**:
  - **Weather Application**: Front-end web development project demonstrating real-time weather API integration, dynamic DOM manipulation, and responsive design.
  - **YouTube Long-to-Shorts Automation**: Python automation tool utilizing audio analysis, video processing, and scripting to generate vertical short-form media.
  - **QR Attendance ERP**: Enterprise-grade academic attendance automation using rotating dynamic QR validation.
  - **Linkly URL Shortener**: High-speed URL condensing service with live click telemetry and branded QR code generation.
  - **AuraOS**: Experimental web desktop operating system with multitasking windows, terminal emulator, and virtual filesystem.
  - Comprehensive problem/solution/architecture breakdown, metrics, and direct live demo & GitHub buttons.
- **Interactive Laboratory (`/lab`)**:
  - Live Cryptographic Cipher Playground (ROT13, Base64, Hex, Binary keystream encoder).
  - Network Packet Telemetry Simulator with pause/resume and intrusion detection heuristics.
  - Interactive Gaussian Data Distribution plot with real-time mean and variance sliders.
- **Command Palette (`Ctrl + K` / `Cmd + K`)**:
  - Keyboard-first command menu for rapid navigation across all 15+ routes, social shortcuts, and actions.
- **Editorial Contact Hub (`/contact`)**:
  - 1-click clipboard email copy (`adarshpatel8738@gmail.com`) with instant feedback.
  - Validated interactive contact form with status feedback.
- **Developer Easter Eggs**:
  - Type `"adarsh"` or `"adarss"`, or enter the Konami code (`↑ ↑ ↓ ↓ ← → ← → B A`) to trigger celebratory confetti.
- **Accessibility & SEO**:
  - 100% semantic HTML5, accessible ARIA roles, visible focus rings, and `prefers-reduced-motion` compliance.
  - Comprehensive JSON-LD Person & WebSite schemas, dynamic sitemap (`/sitemap.xml`), and robots rules (`/robots.txt`).

---

## 🛠️ Technical Stack

| Layer | Technologies |
|---|---|
| **Core Framework** | [Next.js 15+](https://nextjs.org/) (App Router, Server & Client Components) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Styling & UI** | [Tailwind CSS v4](https://tailwindcss.com/) with custom CSS design tokens |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Motion & Canvas** | HTML5 2.5D/3D Wireframe Canvas, Canvas Confetti |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```text
├── public/
│   ├── images/
│   │   ├── adarsh_hero.jpg      # 3D Avatar Portrait
│   │   ├── auraos.jpg           # AuraOS Showcase Mockup
│   │   ├── urlshortener.jpg     # Weather & Shortener Showcase Mockup
│   │   └── qrattendance.jpg     # QR Attendance ERP Mockup
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root Layout with Font & SEO Schemas
│   │   ├── globals.css          # Theme Variables & Custom Styles
│   │   ├── page.tsx             # Main Interactive Landing Page
│   │   ├── about/page.tsx       # Developer Biography & Philosophy
│   │   ├── projects/page.tsx    # Filterable Projects Catalog
│   │   ├── projects/[slug]/     # Deep-Dive Project Case Studies
│   │   ├── skills/page.tsx      # Interactive Skill Ecosystem
│   │   ├── experience/page.tsx  # Engineering Timeline
│   │   ├── education/page.tsx   # Academic Background & Subjects
│   │   ├── certifications/page.tsx # Verified Credential Cards
│   │   ├── resume/page.tsx      # Printable & ATS-Friendly CV
│   │   ├── services/page.tsx    # Specialized Offerings
│   │   ├── contact/page.tsx     # Editorial Contact Page
│   │   ├── blog/page.tsx        # Developer Blog & Articles
│   │   ├── blog/[slug]/page.tsx # Article Reader
│   │   ├── lab/page.tsx         # Interactive Digital Laboratory
│   │   ├── achievements/page.tsx# Hackathons & Honors
│   │   ├── uses/page.tsx        # Developer Workstation & Setup
│   │   ├── now/page.tsx         # Current Focus & Priorities
│   │   ├── not-found.tsx        # Custom 404 Page
│   │   ├── sitemap.ts           # Dynamic XML Sitemap
│   │   └── robots.ts            # Search Crawlers Robots Rules
│   ├── components/
│   │   ├── Navbar.tsx           # Floating Glass Pill Navigation
│   │   ├── Hero.tsx             # Hero with 3D Visual & Stats
│   │   ├── InteractiveGrid.tsx  # 3D Perspective Wireframe Room Canvas
│   │   ├── Marquee.tsx          # Angled Ticker Ribbon
│   │   ├── ProjectCard.tsx      # Project Showcase Card
│   │   ├── ProjectFilter.tsx    # Filter & Search Controller
│   │   ├── SkillCard.tsx        # Skill Proficiency Card
│   │   ├── SkillGrid.tsx        # Categorized Skill Matrix
│   │   ├── CommandPalette.tsx   # Ctrl+K Global Search
│   │   ├── ThemeToggle.tsx      # Light/Dark Theme Switcher
│   │   ├── ThemeProvider.tsx    # Theme Context & LocalStorage
│   │   ├── EasterEgg.tsx        # Konami & Adarsh Keystroke Listener
│   │   └── Footer.tsx           # Editorial Footer
│   ├── data/
│   │   ├── profile.ts           # Bio, stats, headline & interests
│   │   ├── projects.ts          # Verified projects & case studies
│   │   ├── skills.ts            # Categorized skills & levels
│   │   ├── experience.ts        # Career timeline & responsibilities
│   │   ├── education.ts         # Degree, college & coursework
│   │   ├── certifications.ts    # Certificates & verification
│   │   ├── services.ts          # Engineering offerings & deliverables
│   │   ├── blog.ts              # Technical deep-dive articles
│   │   ├── lab.ts               # Laboratory experiments metadata
│   │   ├── uses.ts              # Hardware, editor & developer setup
│   │   ├── now.ts               # Current activities & status
│   │   └── social.ts            # Configurable social & contact info
│   └── lib/
│       └── utils.ts             # Styling & Date Utilities
```

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (version 18+ or 20+)
- `npm` (bundled with Node.js)

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/iamadarss/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### 3. Environment Configuration
Copy `.env.example` to create your local environment file:
```bash
cp .env.example .env.local
```

Configured variables:
```env
NEXT_PUBLIC_SITE_URL=https://iamadarss.vercel.app/
NEXT_PUBLIC_GITHUB_USERNAME=iamadarss
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/iamadarss
NEXT_PUBLIC_EMAIL=adarshpatel8738@gmail.com
```

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build & Testing

Verify TypeScript compilation, linting, and static generation:
```bash
# Run lint check
npm run lint

# Build optimized production bundle
npm run build

# Preview production build locally
npm run start
```

---

## 🌐 Deployment to Vercel

1. Push your code to your GitHub account: `https://github.com/iamadarss/portfolio`.
2. Connect your GitHub repository to [Vercel](https://vercel.com/new).
3. Under Environment Variables, add the values from `.env.example`.
4. Deploy! Next.js will automatically generate optimized serverless assets and static pages.

---

## 📬 Contact & Connect

- **Email**: [adarshpatel8738@gmail.com](mailto:adarshpatel8738@gmail.com)
- **GitHub**: [@iamadarss](https://github.com/iamadarss)
- **LinkedIn**: [Adarsh Patel](https://linkedin.com/in/iamadarss)
- **Instagram**: [@iamadarss](https://instagram.com/iamadarss)
- **Phone**: +91 92773 10761

---

## ⚖️ License

Designed and developed by **Adarsh Patel**.  
Released under the [MIT License](LICENSE).

#   i a m a d a r s s  
 