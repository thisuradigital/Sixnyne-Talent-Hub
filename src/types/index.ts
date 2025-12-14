export interface Section {
  title: string;
  content: string[]; // Paragraphs
  dos: string[];
  donts: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  sections: Section[];
  quiz: QuizQuestion[];
}

export interface UserProfile {
  name: string;
  role: string;
}

export interface CompletedSection {
  moduleId: string;
  sectionIndex: number;
}

export interface QuizScore {
  moduleId: string;
  score: number;
  totalQuestions: number;
  timestamp: number;
}

export interface LeaderboardEntry {
  name: string;
  xp: number;
  modulesCompleted: number;
  avatar?: string;
}

// Pathway types
export type Pathway = "jobs" | "masterclass" | "skill-testing" | "company" | null;
export type MasterClassCategory = "cs" | "design" | "creative" | null;

// Job Application types
export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  description: string;
  requirements: string[];
  responsibilities: string[];
  postedDate: string;
}

export interface JobApplication {
  id: string;
  jobId: string;
  name: string;
  email: string;
  phone: string;
  linkedin?: string;
  coverLetter: string;
  resumeData?: string;
  submittedAt: number;
}

// Skill Testing types
export interface SkillAssessment {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: "assessment" | "lesson";
  timeLimit?: number; // minutes
  passingScore?: number; // percentage
  quiz: QuizQuestion[];
}

// Task Management types for Analytics
export type TaskStatus = "To Do" | "In Progress" | "In Review" | "Blocked" | "Done";
export type TaskCategory = "Development" | "Design" | "Marketing" | "Operations" | "Support";
export type TaskTeam = "Engineering" | "Product" | "Design" | "Marketing" | "Sales" | "Support";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  assignee: string;
  team: TaskTeam;
  category: TaskCategory;
  statusChangedAt: number; // timestamp when status was last changed
  assigneeChangedAt: number; // timestamp when assignee was last changed
  createdAt: number;
}

export interface StalledTask extends Task {
  workingDaysStalled: number;
}

// Holiday Management types
export interface Holiday {
  id: string;
  date: string; // ISO date string (YYYY-MM-DD)
  name: string;
}
