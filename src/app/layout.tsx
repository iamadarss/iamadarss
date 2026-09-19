import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ClientShell } from "@/components/ClientShell";
import { profile } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://iamadarss.vercel.app/"),
  title: {
    default: "Adarsh Patel — Software Developer | Web Developer | Python & Automation",
    template: "%s | Adarsh Patel",
  },
  description:
    "Adarsh Patel is a software developer and web developer specializing in C, C++, Python, responsive front-end engineering, and automation tools.",
  keywords: [
    "Adarsh Patel",
    "Software Developer",
    "Web Developer",
    "Python Developer",
    "C++ Developer",
    "Front-End Developer",
    "React",
    "Next.js",
    "Weather Application",
    "YouTube Shorts Automation",
    "Portfolio 2026",
  ],
  authors: [{ name: "Adarsh Patel", url: "https://github.com/iamadarss" }],
  creator: "Adarsh Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iamadarss.vercel.app/",
    title: "Adarsh Patel — Software Developer | Web Developer | Python & Automation",
    description:
      "Portfolio and engineering showcase of Adarsh Patel, specializing in software development, web applications, and automation tools.",
    siteName: "Adarsh Patel Portfolio",
    images: [
      {
        url: "/images/adarsh_hero.jpg",
        width: 1200,
        height: 1200,
        alt: "Adarsh Patel — 3D Developer Avatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh Patel — Software Developer | Web Developer | Python & Automation",
    description:
      "Portfolio and engineering showcase of Adarsh Patel, specializing in software development, web applications, and automation tools.",
    images: ["/images/adarsh_hero.jpg"],
    creator: "@iamadarss",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: "https://iamadarss.vercel.app/",
    sameAs: [
      "https://github.com/iamadarss",
      "https://linkedin.com/in/iamadarss",
      "https://instagram.com/iamadarss",
    ],
    knowsAbout: [
      "Software Development",
      "Web Development",
      "Responsive Web Design",
      "DOM Manipulation",
      "Python Automation",
      "C & C++ Programming",
      "Data Structures & Algorithms",
      "Network Security",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("adarsh-theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark");}else{document.documentElement.classList.remove("dark");}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <ThemeProvider>
          <ClientShell>{children}</ClientShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
