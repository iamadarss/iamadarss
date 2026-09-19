export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string;
  featured?: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: process.env.NEXT_PUBLIC_GITHUB_USERNAME
      ? `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`
      : "https://github.com/iamadarss",
    username: "iamadarss",
    icon: "github",
    featured: true,
  },
  {
    platform: "LinkedIn",
    url: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/iamadarss",
    username: "iamadarss",
    icon: "linkedin",
    featured: true,
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/iamadarss",
    username: "@iamadarss",
    icon: "instagram",
    featured: true,
  },
  {
    platform: "Email",
    url: `mailto:${process.env.NEXT_PUBLIC_EMAIL || "adarshpatel8738@gmail.com"}`,
    username: process.env.NEXT_PUBLIC_EMAIL || "adarshpatel8738@gmail.com",
    icon: "mail",
    featured: true,
  },
  {
    platform: "Portfolio",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://iamadarss.vercel.app/",
    username: "iamadarss.vercel.app",
    icon: "globe",
    featured: true,
  },
];

export const contactConfig = {
  email: process.env.NEXT_PUBLIC_EMAIL || "adarshpatel8738@gmail.com",
  phone: "+91 92773 10761",
  github: "https://github.com/iamadarss",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/iamadarss",
  instagram: "https://instagram.com/iamadarss",
  location: "Kanpur, Uttar Pradesh, India • Open to Worldwide / Remote",
  availability: "Open to Software Developer, Web Developer & Full-Stack Roles",
};
