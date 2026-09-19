export interface Profile {
  name: string;
  shortName: string;
  role: string;
  roles: string[];
  tagline: string;
  heroHeadline: string;
  location: string;
  status: string;
  bio: string;
  extendedBio: string;
  quote: string;
  stats: {
    label: string;
    sublabel: string;
    value: string;
  }[];
  interests: string[];
  currentlyExploring: string[];
}

export const profile: Profile = {
  name: "Adarsh Patel",
  shortName: "Adarsh",
  role: "Software Developer • Web Developer • Python & Automation Enthusiast",
  roles: [
    "Software Developer",
    "Web Developer",
    "Front-End Developer",
    "Python & Automation Specialist",
  ],
  tagline: "CODE • BUILD • AUTOMATE • INNOVATE",
  heroHeadline: "I'M BORN TO INNOVATE SOLUTIONS!",
  location: "Kanpur, Uttar Pradesh, India • Available Worldwide",
  status: "Open to Software Developer & Web Developer Opportunities",
  bio: "BCA student & passionate Software Developer proficient in C, C++, Python, modern web development, and automation tools.",
  extendedBio: "BCA student seeking entry-level Software Developer or Web Developer opportunities. Proficient in Object-Oriented Programming (OOP), Data Structures, and Algorithms using C, C++, and Python. Experienced in front-end web development with HTML, CSS, JavaScript, and responsive design. Skilled in version control (Git/GitHub), debugging, and problem-solving. Passionate about developing scalable software solutions, web applications, and automation tools while adhering to best practices in coding and software development.",
  quote: "Passionate about developing scalable software solutions, modern web applications, and automation tools while adhering to best engineering practices.",
  stats: [
    {
      value: "7.90",
      label: "CGPA",
      sublabel: "BCA • CSJM University",
    },
    {
      value: "10+",
      label: "Projects",
      sublabel: "Built & Deployed",
    },
    {
      value: "3+",
      label: "Languages",
      sublabel: "C, C++, Python",
    },
    {
      value: "100%",
      label: "Dedication",
      sublabel: "Engineering & Problem-Solving",
    },
  ],
  interests: [
    "Software Development & Algorithms",
    "Front-End & Responsive Web Engineering",
    "Python Scripting & Automation Workflows",
    "Object-Oriented Programming (OOP)",
    "API Integration & Web Applications",
    "Network Security & DevOps",
  ],
  currentlyExploring: [
    "Full-Stack Web Architectures",
    "Data Structures & Advanced Algorithms",
    "AI DevOps & Automation Pipelines",
    "Network Security Engineering",
    "Video & Media Automation Workflows",
  ],
};
