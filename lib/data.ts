export const profile = {
  name: "Suchitra M",
  initials: "SM",
  roles: [
    "Aspiring Software Engineer",
    "AI & Machine Learning Engineering Student",
    "Java Full Stack Developer",
  ],
  location: "Bengaluru, India",
  email: "suchithra2405@gmail.com",
  phone: "+91-88673-72550",
  linkedin: "https://www.linkedin.com/in/suchitra-m24",
  github: "https://github.com/suchitra-m24",
  resumeUrl: "/resume.pdf",
  intro:
    "Hi, I'm Suchitra M, an AI & Machine Learning engineering student passionate about building scalable web applications and solving real-world problems through technology.",
  introSecondary:
    "I enjoy Java Full Stack Development, backend engineering, AI, and continuously learning new technologies. I'm currently seeking internship opportunities where I can contribute, learn, and grow as a software engineer.",
  badges: [
    "Java Full Stack",
    "AI & Machine Learning",
    "Backend Development",
    "Problem Solving",
    "Open to Internship",
  ],
};

export const about = {
  paragraphs: [
    "I'm an AI & Machine Learning engineering student who builds full-stack web applications end to end, from designing the database schema to shipping a polished React interface. My work sits at the intersection of solid backend engineering and practical machine learning.",
    "Most of my projects follow the same pattern: a real problem, a role-based system to manage it, and a clean Java Spring Boot backend paired with a React frontend, secured with JWT authentication and role-based access control. I care about writing code that is organized, testable, and easy for someone else to pick up.",
    "Outside of coursework, I spend time strengthening my grasp of data structures, algorithms, and object-oriented design — I've solved 60+ problems on LeetCode — because I've found that strong fundamentals are what make new frameworks easy to pick up. I'm currently looking for an internship where I can apply what I've built so far and keep growing as an engineer.",
  ],
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  { title: "Programming", skills: ["Java", "JavaScript", "Python (Basic)"] },
  { title: "Frontend", skills: ["HTML", "CSS", "Bootstrap", "React"] },
  { title: "Backend", skills: ["Spring Boot", "Spring MVC", "REST APIs", "Hibernate (JPA)", "JSP", "J2EE"] },
  { title: "Database", skills: ["MySQL"] },
  { title: "Tools", skills: ["Git", "GitHub", "Postman"] },
  { title: "Concepts", skills: ["OOP", "MVC", "Data Structures", "Algorithms", "JWT Auth", "RBAC", "Networks & OS"] },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  accent: string;
  github: string;
};

export const projects: Project[] = [
  {
    title: "Smart Waste Management System",
    description:
      "Role-based web application for Citizens, Collectors, and Admins with complaint reporting, real-time status tracking, analytics dashboards, and an eco-points reward system with leaderboard functionality.",
    tech: ["Java", "Spring Boot", "Spring MVC", "Hibernate (JPA)", "React", "MySQL"],
    accent: "from-brand-indigo to-brand-blue",
    github: "https://github.com/suchitra-m24/smart-waste-management",
  },
  {
    title: "Job Portal",
    description:
      "Role-based job portal supporting Admin, Employer, and Job Seeker with JWT-secured authentication, job posting, resume upload, search & filtering, and application management via RESTful APIs.",
    tech: ["Java", "Spring Boot", "Hibernate (JPA)", "React", "MySQL", "JWT"],
    accent: "from-brand-blue to-brand-purple",
    github: "https://github.com/suchitra-m24/Job-Portal",
  },
];

export const education = {
  degree: "Bachelor of Engineering",
  field: "Artificial Intelligence & Machine Learning",
  institution: "Sri Krishna Institute of Technology",
  location: "Bengaluru, India",
  period: "Nov 2023 – June 2027 (Expected)",
  cgpa: "7.1 / 10",
  history: [
    {
      school: "MES College",
      credential: "Pre-University Course (PUC)",
      result: "87%",
      period: "Sep 2020 – Aug 2022",
    },
    {
      school: "Jindal Public School",
      credential: "Class 10 (SSLC)",
      result: "93%",
      period: "June 2019 – June 2020",
    },
  ],
};

export const achievements = [
  {
    title: "HACK.IO Hackathon — Team Lead",
    description:
      "Led a team building a Hospital Queue Management system, integrating the Twilio API for real-time SMS alerts to patients and improving patient flow efficiency.",
  },
  {
    title: "Competitive Programming",
    description:
      "Solved 60+ Data Structures & Algorithms problems on LeetCode, strengthening problem-solving, debugging, and coding proficiency.",
  },
];

export const stats = [
  { label: "Projects Built", value: 2, suffix: "" },
  { label: "LeetCode Problems", value: 60, suffix: "+" },
  { label: "CGPA", value: 7.1, suffix: "/10" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
