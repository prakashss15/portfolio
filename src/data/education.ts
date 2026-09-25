export type EducationEntry = {
  institution: string;
  degree: string;
  duration: string;
  details?: string;
};

export const education: EducationEntry[] = [
  {
    institution: "Siddaganga Institute of Technology, Tumkur",
    degree: "B.E. in Computer Science & Engineering",
    duration: "2023 — 2027",
    details: "Coursework spanning Data Structures & Algorithms, OOP, DBMS, Operating Systems and Computer Networks. CGPA: 9.13 (Till 6th Semester)",
  },
  {
    institution: "Govt PU College, Majalatti",
    degree: "PUC",
    duration: "2021 — 2023",
    details: "Percentage: 91.33%",
  },
  {
    institution: "C K High School, Examba, Belagavi",
    degree: "SSLC",
    duration: "2020 — 2021",
    details: "Percentage: 98.40%",
  },
];

export const codingProfile = {
  summary:
    "I practice data structures and algorithms primarily in C++, working through problems on LeetCode to build speed and pattern recognition for interviews and competitive programming.",
  focusAreas: [
    "Arrays & Strings",
    "Trees & BSTs",
    "Graphs",
    "Dynamic Programming",
    "Recursion & Backtracking",
    "SQL",
  ],
};
