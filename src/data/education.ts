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
    details: "Coursework spanning Data Structures & Algorithms, OOP, DBMS, Operating Systems and Computer Networks.",
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
