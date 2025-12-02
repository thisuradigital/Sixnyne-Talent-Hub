import { UserProfile, CompletedSection, QuizScore, JobApplication } from "@/types";

const STORAGE_KEYS = {
  USER_PROFILE: 'csm_user_profile',
  COMPLETED_SECTIONS: 'csm_completed_sections',
  QUIZ_SCORES: 'csm_quiz_scores',
  JOB_APPLICATIONS: 'hiring_job_applications',
  SKILL_TESTING_SCORES: 'skill_testing_scores'
};

// User Profile
export const saveUserProfile = (profile: UserProfile): void => {
  localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
};

export const getUserProfile = (): UserProfile | null => {
  const data = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
  return data ? JSON.parse(data) : null;
};

export const clearUserProfile = (): void => {
  localStorage.removeItem(STORAGE_KEYS.USER_PROFILE);
};

// Completed Sections
export const getCompletedSections = (): CompletedSection[] => {
  const data = localStorage.getItem(STORAGE_KEYS.COMPLETED_SECTIONS);
  return data ? JSON.parse(data) : [];
};

export const saveCompletedSection = (moduleId: string, sectionIndex: number): void => {
  const completed = getCompletedSections();
  const exists = completed.some(
    s => s.moduleId === moduleId && s.sectionIndex === sectionIndex
  );
  if (!exists) {
    completed.push({ moduleId, sectionIndex });
    localStorage.setItem(STORAGE_KEYS.COMPLETED_SECTIONS, JSON.stringify(completed));
  }
};

export const removeCompletedSection = (moduleId: string, sectionIndex: number): void => {
  const completed = getCompletedSections();
  const filtered = completed.filter(
    s => !(s.moduleId === moduleId && s.sectionIndex === sectionIndex)
  );
  localStorage.setItem(STORAGE_KEYS.COMPLETED_SECTIONS, JSON.stringify(filtered));
};

export const isSectionCompleted = (moduleId: string, sectionIndex: number): boolean => {
  const completed = getCompletedSections();
  return completed.some(s => s.moduleId === moduleId && s.sectionIndex === sectionIndex);
};

export const getModuleCompletionPercentage = (moduleId: string, totalSections: number): number => {
  const completed = getCompletedSections().filter(s => s.moduleId === moduleId);
  return Math.round((completed.length / totalSections) * 100);
};

export const getTotalCompletedSections = (): number => {
  return getCompletedSections().length;
};

// Quiz Scores
export const getQuizScores = (): QuizScore[] => {
  const data = localStorage.getItem(STORAGE_KEYS.QUIZ_SCORES);
  return data ? JSON.parse(data) : [];
};

export const saveQuizScore = (moduleId: string, score: number, totalQuestions: number): void => {
  const scores = getQuizScores();
  const existingIndex = scores.findIndex(s => s.moduleId === moduleId);
  
  const newScore: QuizScore = {
    moduleId,
    score,
    totalQuestions,
    timestamp: Date.now()
  };

  if (existingIndex >= 0) {
    // Only update if new score is better
    if (score > scores[existingIndex].score) {
      scores[existingIndex] = newScore;
    }
  } else {
    scores.push(newScore);
  }

  localStorage.setItem(STORAGE_KEYS.QUIZ_SCORES, JSON.stringify(scores));
};

export const getQuizScore = (moduleId: string): QuizScore | null => {
  const scores = getQuizScores();
  return scores.find(s => s.moduleId === moduleId) || null;
};

export const getAverageQuizScore = (): number => {
  const scores = getQuizScores();
  if (scores.length === 0) return 0;
  
  const total = scores.reduce((sum, s) => sum + (s.score / s.totalQuestions * 100), 0);
  return Math.round(total / scores.length);
};

// XP Calculations
export const calculateTotalXP = (): number => {
  const sections = getTotalCompletedSections();
  const scores = getQuizScores();
  
  const sectionXP = sections * 50; // 50 XP per section
  const quizXP = scores.reduce((sum, s) => sum + (s.score * 100), 0); // 100 XP per correct answer
  
  return sectionXP + quizXP;
};

// Overall Progress
export const getOverallProgress = (totalSections: number): number => {
  const completed = getTotalCompletedSections();
  return Math.round((completed / totalSections) * 100);
};

// Job Applications - Get functions defined first
export const getJobApplications = (): JobApplication[] => {
  const data = localStorage.getItem(STORAGE_KEYS.JOB_APPLICATIONS);
  return data ? JSON.parse(data) : [];
};

export const getJobApplicationsByJobId = (jobId: string): JobApplication[] => {
  return getJobApplications().filter(app => app.jobId === jobId);
};

export const saveJobApplication = (jobId: string, formData: Omit<JobApplication, 'id' | 'jobId' | 'submittedAt'>): void => {
  const applications = getJobApplications();
  const newApplication: JobApplication = {
    id: `app_${Date.now()}`,
    jobId,
    ...formData,
    submittedAt: Date.now()
  };
  applications.push(newApplication);
  localStorage.setItem(STORAGE_KEYS.JOB_APPLICATIONS, JSON.stringify(applications));
};
