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
