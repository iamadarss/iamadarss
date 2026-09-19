export interface Education {
  id: string;
  degree: string;
  institution: string;
  branch: string;
  session: string;
  grade?: string;
  location: string;
  relevantSubjects: string[];
  academicAchievements: string[];
}

export const educationList: Education[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "College of Management Studies (Affiliated with CSJM University)",
    branch: "Computer Applications & Software Development",
    session: "2025 — 2028",
    grade: "CGPA: 7.90",
    location: "Kanpur, Uttar Pradesh",
    relevantSubjects: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP in C, C++, Python)",
      "Web Technologies (HTML, CSS, JavaScript)",
      "Responsive Web Design & DOM Manipulation",
      "Database Management Systems (DBMS)",
      "Computer Networks & Operating Systems",
      "Software Engineering Best Practices",
    ],
    academicAchievements: [
      "Secured a strong academic record with a 7.90 CGPA in undergraduate computer applications coursework.",
      "Proficient in algorithm design, data structures, and OOP principles with C, C++, and Python.",
      "Engineered automated script tools and web applications applying core programming concepts.",
    ],
  },
  {
    id: "edu-2",
    degree: "Class XII (Senior Secondary)",
    institution: "Patiraja Inter College",
    branch: "Science Stream (PCM)",
    session: "2025",
    grade: "81.20%",
    location: "Kanpur, Uttar Pradesh",
    relevantSubjects: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Computer Science Fundamentals",
      "English",
    ],
    academicAchievements: [
      "Achieved 81.20% in Class XII Board Examinations with distinction in mathematical sciences.",
      "Demonstrated strong problem-solving and analytical aptitude throughout secondary education.",
    ],
  },
  {
    id: "edu-3",
    degree: "Class X (High School)",
    institution: "Patiraja Inter College",
    branch: "General Sciences & Mathematics",
    session: "2023",
    grade: "86.33%",
    location: "Kanpur, Uttar Pradesh",
    relevantSubjects: [
      "Mathematics",
      "Science",
      "Social Science",
      "English",
      "Hindi",
    ],
    academicAchievements: [
      "Graduated High School with an outstanding 86.33% grade point average.",
      "Recognized for academic discipline and logical aptitude.",
    ],
  },
];
