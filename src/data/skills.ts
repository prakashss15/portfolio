export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["C++", "C", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Core Computer Science",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "SQL",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    title: "Backend & Frameworks",
    skills: ["Flask", "Django", "FastAPI", "Socket.IO", "REST APIs", "SQLite"],
  },
  {
    title: "AI / ML",
    skills: [
      "PyTorch",
      "CNN",
      "scikit-learn",
      "Audio Signal Processing",
      "Log-Mel Spectrograms",
      "Explainable AI (Grad-CAM)",
    ],
  },
  {
    title: "Web",
    skills: ["HTML", "CSS", "React"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Linux"],
  },
];
