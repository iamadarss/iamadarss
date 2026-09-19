export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Cybersecurity" | "Programming" | "Data Analytics" | "Web Development" | "Projects" | "Career" | "Tutorials";
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
  content: string;
}

export const blogCategories = [
  "All",
  "Cybersecurity",
  "Programming",
  "Data Analytics",
  "Web Development",
  "Projects",
  "Career",
  "Tutorials",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "building-auraos-desktop-in-the-browser",
    title: "Building AuraOS: Lessons from Simulating a Desktop Window Manager in the Browser",
    excerpt: "How I engineered a zero-dependency window management system, multi-tasking shell, and virtual filesystem inside the DOM.",
    category: "Projects",
    date: "2024-05-18",
    readTime: "7 min read",
    tags: ["JavaScript", "Architecture", "DOM", "State Machines"],
    featured: true,
    content: `
# Building AuraOS: Lessons from Simulating a Desktop Window Manager

Modern web browsers have evolved into full-fledged execution runtimes. With Web Workers, the File System Access API, and hardware-accelerated CSS transforms, the gap between desktop operating systems and browser web applications has narrowed dramatically.

In this deep dive, I walk through the technical architecture of **AuraOS**, an open-source web desktop environment designed to provide a cohesive multitasking workspace inside any modern browser.

---

## 1. The Core Windowing Engine

The primary hurdle in building a desktop UI inside the DOM is coordinating multiple floating viewports:
- **Z-Index Layering**: Managing dynamic active focus without arbitrarily incrementing z-indices to Infinity.
- **Physics & Snapping**: Translating pointer events into performant 60fps CSS transform coordinates.
- **State Serialization**: Allowing users to minimize, maximize, and restore window coordinates reliably.

\`\`\`javascript
class WindowManager {
  constructor() {
    this.windows = new Map();
    this.activeId = null;
    this.topZIndex = 100;
  }

  focusWindow(id) {
    if (this.activeId === id) return;
    const target = this.windows.get(id);
    if (!target) return;

    this.topZIndex += 1;
    target.element.style.zIndex = this.topZIndex;
    this.activeId = id;
  }
}
\`\`\`

---

## 2. Sandboxing the Virtual Terminal

AuraOS includes an embedded terminal emulator that supports fundamental Unix-like commands (\`ls\`, \`cat\`, \`echo\`, \`touch\`, \`sysinfo\`). Rather than executing raw strings, we treat input as tokens passing through a validated dispatch table.

This prevents prototype pollution and ensures command execution remains isolated inside the simulated in-memory tree.

---

## 3. Key Takeaways

1. **Avoid Layout Thrashing**: Always mutate \`transform: translate3d(x, y, 0)\` during drag interactions rather than mutating \`top\` or \`left\`.
2. **Event Delegation Saves Memory**: Attaching drag listeners to document root rather than individual cards prevents memory leaks across destroyed window elements.
3. **Ergonomics Matter**: Subtle bounce easing on window maximize makes digital interfaces feel tactile and responsive.
    `,
  },
  {
    slug: "owasp-top-10-web-security-checklist-2026",
    title: "Defending Next.js & Full-Stack Apps: An OWASP Top 10 Defensive Blueprint",
    excerpt: "A practical developer checklist for eliminating SQLi, broken access control, and client-side injection vulnerabilities in modern web applications.",
    category: "Cybersecurity",
    date: "2024-04-12",
    readTime: "8 min read",
    tags: ["Cybersecurity", "Next.js", "OWASP", "Authentication"],
    featured: true,
    content: `
# Defending Next.js & Full-Stack Apps: An OWASP Defensive Blueprint

As full-stack frameworks abstract backend boundaries through Server Actions and Route Handlers, developers often overlook classic vulnerability surfaces.

Security cannot be treated as a decorative veneer applied right before shipping. Here is my operational blueprint for securing full-stack applications against common modern attack vectors.

---

## 1. Broken Object-Level Authorization (BOLA)

A common issue in modern web apps is validating *who* is requesting a resource, but failing to verify whether they *own* it.

\`\`\`typescript
// VULNERABLE: Direct access based on client ID
export async function getDocument(docId: string) {
  return await db.document.findUnique({ where: { id: docId } });
}

// SECURE: Enforcing tenant isolation
export async function getDocumentSecure(docId: string, userId: string) {
  const doc = await db.document.findFirst({
    where: {
      id: docId,
      ownerId: userId, // Guarantees tenant ownership
    }
  });

  if (!doc) throw new Error("Unauthorized or not found");
  return doc;
}
\`\`\`

---

## 2. Hardening Content Security Policy (CSP)

A robust CSP header prevents arbitrary script execution in case of an unexpected XSS vector. Always avoid \`'unsafe-inline'\` and \`'unsafe-eval'\` in production.

\`\`\`http
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-random123'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;
\`\`\`

---

## 3. Rate Limiting Server Actions

Next.js Server Actions are public HTTP endpoints under the hood. Without rate limiting, malicious actors can bombard actions with credential stuffing or resource-heavy queries.

Implement token-bucket or Redis-backed sliding window limiters on any endpoint accepting sensitive mutations.
    `,
  },
  {
    slug: "practical-data-cleaning-pipelines-pandas",
    title: "Automating Dirty Data Cleansing: From Messy CSVs to Clean Insights with Pandas",
    excerpt: "Step-by-step techniques to detect null anomalies, handle skewed distributions, and generate automated statistical summaries with Python.",
    category: "Data Analytics",
    date: "2024-02-28",
    readTime: "6 min read",
    tags: ["Python", "Pandas", "Data Cleaning", "Analytics"],
    featured: false,
    content: `
# Automating Dirty Data Cleansing with Pandas

Data rarely arrives clean. Real-world datasets are littered with erratic dates (\`2024/01/02\` vs \`02-Jan-24\`), rogue null strings (\`"N/A"\`, \`"null"\`, \`"None"\`), and extreme statistical outliers that distort models.

Here is the automated transformation pipeline I developed while building **DataPulse**.

---

## 1. Standardizing Missing Value Representations

Raw imports often treat text representations of nulls as valid string objects. Convert them immediately upon ingestion:

\`\`\`python
import pandas as pd
import numpy as np

def ingest_and_clean_nulls(filepath: str) -> pd.DataFrame:
    missing_sentinels = ["n/a", "na", "--", "null", "none", "nil", " "]
    df = pd.read_csv(filepath, na_values=missing_sentinels, keep_default_na=True)
    return df
\`\`\`

---

## 2. IQR Outlier Filtering

Outliers can distort mean and standard deviation metrics. The Interquartile Range (IQR) method provides an automated rule for identifying anomalous observations:

\`\`\`python
def flag_iqr_outliers(df: pd.DataFrame, column: str) -> pd.Series:
    q1 = df[column].quantile(0.25)
    q3 = df[column].quantile(0.75)
    iqr = q3 - q1
    lower_bound = q1 - (1.5 * iqr)
    upper_bound = q3 + (1.5 * iqr)
    return (df[column] < lower_bound) | (df[column] > upper_bound)
\`\`\`

---

## Conclusion

Automating these pre-checks transforms data preparation from an unpredictable chore into a reproducible, deterministic engineering workflow.
    `,
  },
  {
    slug: "building-real-time-qr-attendance-system",
    title: "Zero Proxy Attendance: Building a Time-Rotating QR ERP System",
    excerpt: "Architecting a cryptographic rotating QR protocol to defeat proxy attendance and streamline classroom management.",
    category: "Web Development",
    date: "2024-01-15",
    readTime: "6 min read",
    tags: ["Next.js", "WebRTC", "Cryptography", "Full Stack"],
    featured: false,
    content: `
# Zero Proxy Attendance: Building a Time-Rotating QR ERP

The ubiquitous issue with QR code attendance in schools and conferences is screenshot sharing. A student seated in the front row photographs the QR code on the projector and blasts it over WhatsApp, allowing friends miles away to check in.

Here is how we solved this problem in **QR Attendance ERP**.

---

## 1. Time-Based One-Time Tokens (TOTP for Attendance)

Instead of generating a static QR code representing a course ID, the instructor's display generates a rolling HMAC token updated every 5 seconds.

- **Token Seed**: Unique session UUID + Current unix timestamp window + Server secret.
- **Validity Window**: Tokens expire within 10 seconds.
- **Single-Use Guard**: Once a student registers a check-in with token \`T\`, the server flags that student-token combination in Redis.

\`\`\`typescript
export function verifyAttendanceToken(submittedToken: string, sessionSecret: string): boolean {
  const currentWindow = Math.floor(Date.now() / 5000);
  const validTokens = [
    generateHMAC(sessionSecret, currentWindow),
    generateHMAC(sessionSecret, currentWindow - 1), // 5s clock-drift tolerance
  ];
  return validTokens.includes(submittedToken);
}
\`\`\`

---

## 2. Results

Deploying this architecture eliminated proxy check-ins while reducing roll-call overhead from 15 minutes down to under 90 seconds.
    `,
  },
];
