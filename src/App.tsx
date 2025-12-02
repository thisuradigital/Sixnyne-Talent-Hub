import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProfile, Pathway, MasterClassCategory } from "./types";
import { getUserProfile } from "./utils/storage";
import { Homepage } from "./pages/Homepage";
import { JobListings } from "./pages/JobListings";
import { JobDetails } from "./pages/JobDetails";
import { JobApplication } from "./pages/JobApplication";
import { MasterClassHub } from "./pages/MasterClassHub";
import { SkillTestingDashboard } from "./pages/SkillTestingDashboard";
import { CompanyInfo } from "./pages/CompanyInfo";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { ModuleReader } from "./pages/ModuleReader";
import { QuizRunner } from "./pages/QuizRunner";
import { Profile } from "./pages/Profile";
import { Leaderboard } from "./pages/Leaderboard";
import { Sidebar } from "./components/Sidebar";
import { MobileNav } from "./components/MobileNav";

const queryClient = new QueryClient();

type View = 
  | "homepage"
  | "jobs-listings" 
  | "job-details" 
  | "job-application"
  | "masterclass-hub"
  | "skill-testing"
  | "company-info"
  | "login" 
  | "dashboard" 
  | "module" 
  | "quiz" 
  | "profile" 
  | "leaderboard" 
  | "comprehensive";

interface AppState {
  view: View;
  pathway: Pathway;
  user: UserProfile | null;
  selectedModuleId: string | null;
  selectedJobId: string | null;
  masterclassCategory: MasterClassCategory;
}

const App = () => {
  const [state, setState] = useState<AppState>({
    view: "homepage",
    pathway: null,
    user: null,
    selectedModuleId: null,
    selectedJobId: null,
    masterclassCategory: null,
  });

  useEffect(() => {
    // Check for existing user session only for masterclass/skill-testing pathways
    if (state.pathway === "masterclass" || state.pathway === "skill-testing") {
      const profile = getUserProfile();
      if (profile && state.view === "login") {
        setState(prev => ({ ...prev, user: profile, view: state.pathway === "masterclass" ? "dashboard" : "skill-testing" }));
      }
    }
  }, [state.pathway, state.view]);

  const handleSelectPathway = (pathway: Pathway) => {
    if (pathway === "jobs") {
      setState(prev => ({ ...prev, pathway, view: "jobs-listings" }));
    } else if (pathway === "masterclass") {
      setState(prev => ({ ...prev, pathway, view: "masterclass-hub" }));
    } else if (pathway === "skill-testing") {
      const profile = getUserProfile();
      if (profile) {
        setState(prev => ({ ...prev, pathway, user: profile, view: "skill-testing" }));
      } else {
        setState(prev => ({ ...prev, pathway, view: "login" }));
      }
    } else if (pathway === "company") {
      setState(prev => ({ ...prev, pathway, view: "company-info" }));
    }
  };

  const handleSelectMasterClassCategory = (category: MasterClassCategory) => {
    if (category === "cs") {
      const profile = getUserProfile();
      if (profile) {
        setState(prev => ({ ...prev, masterclassCategory: category, user: profile, view: "dashboard" }));
      } else {
        setState(prev => ({ ...prev, masterclassCategory: category, view: "login" }));
      }
    }
    // Design and creative are coming soon, no action needed
  };

  const handleLogin = (profile: UserProfile) => {
    if (state.masterclassCategory === "cs") {
      setState(prev => ({ ...prev, user: profile, view: "dashboard" }));
    } else if (state.pathway === "skill-testing") {
      setState(prev => ({ ...prev, user: profile, view: "skill-testing" }));
    }
  };

  const handleLogout = () => {
    setState(prev => ({ ...prev, view: "login", user: null }));
  };

  const handleNavigate = (view: View, moduleId?: string) => {
    setState(prev => ({ ...prev, view, selectedModuleId: moduleId || null }));
  };

  const handleUpdateProfile = (profile: UserProfile) => {
    setState(prev => ({ ...prev, user: profile }));
  };

  const handleBackToHome = () => {
    setState({
      view: "homepage",
      pathway: null,
      user: null,
      selectedModuleId: null,
      selectedJobId: null,
      masterclassCategory: null,
    });
  };

  // Homepage
  if (state.view === "homepage") {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Homepage onSelectPathway={handleSelectPathway} />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  // Job Application Pathway
  if (state.pathway === "jobs") {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {state.view === "jobs-listings" && (
            <JobListings
              onSelectJob={(jobId) => setState(prev => ({ ...prev, view: "job-details", selectedJobId: jobId }))}
              onBack={handleBackToHome}
            />
          )}
          {state.view === "job-details" && state.selectedJobId && (
            <JobDetails
              jobId={state.selectedJobId}
              onApply={() => setState(prev => ({ ...prev, view: "job-application" }))}
              onBack={() => setState(prev => ({ ...prev, view: "jobs-listings", selectedJobId: null }))}
            />
          )}
          {state.view === "job-application" && state.selectedJobId && (
            <JobApplication
              jobId={state.selectedJobId}
              onBack={() => setState(prev => ({ ...prev, view: "job-details" }))}
              onSubmit={handleBackToHome}
            />
          )}
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  // MasterClass Pathway
  if (state.pathway === "masterclass") {
    if (state.view === "masterclass-hub") {
      return (
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <MasterClassHub
              onSelectCategory={handleSelectMasterClassCategory}
              onBack={handleBackToHome}
            />
          </TooltipProvider>
        </QueryClientProvider>
      );
    }

    if (state.view === "login" || !state.user) {
      return (
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Login onLogin={handleLogin} />
          </TooltipProvider>
        </QueryClientProvider>
      );
    }

    // MasterClass authenticated views
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          
          <div className="flex min-h-screen w-full bg-background">
            {/* Desktop Sidebar */}
            {(state.view === "dashboard" || state.view === "profile" || state.view === "leaderboard" || state.view === "comprehensive") && (
              <Sidebar 
                currentView={state.view}
                onNavigate={(view) => handleNavigate(view as View)}
                onBackToHome={handleBackToHome}
              />
            )}

            {/* Main Content */}
            <main className="flex-1 lg:pl-64">
              <div className={state.view === "dashboard" || state.view === "profile" || state.view === "leaderboard" || state.view === "comprehensive" ? "pb-20 lg:pb-0" : ""}>
                {state.view === "dashboard" && (
                  <Dashboard
                    user={state.user}
                    onSelectModule={(moduleId) => handleNavigate("module", moduleId)}
                  />
                )}

                {state.view === "module" && state.selectedModuleId && (
                  <ModuleReader
                    moduleId={state.selectedModuleId}
                    onBack={() => handleNavigate("dashboard")}
                    onStartQuiz={(moduleId) => handleNavigate("quiz", moduleId)}
                  />
                )}

                {state.view === "quiz" && state.selectedModuleId && (
                  <QuizRunner
                    moduleId={state.selectedModuleId}
                    onBack={() => handleNavigate("module", state.selectedModuleId)}
                    isComprehensive={false}
                  />
                )}

                {state.view === "comprehensive" && (
                  <QuizRunner
                    moduleId="comprehensive"
                    onBack={() => handleNavigate("dashboard")}
                    isComprehensive={true}
                  />
                )}

                {state.view === "profile" && (
                  <Profile
                    user={state.user}
                    onBack={() => handleNavigate("dashboard")}
                    onLogout={handleLogout}
                    onUpdateProfile={handleUpdateProfile}
                  />
                )}

                {state.view === "leaderboard" && (
                  <Leaderboard
                    user={state.user}
                    onBack={() => handleNavigate("dashboard")}
                  />
                )}
              </div>
            </main>

            {/* Mobile Navigation */}
            {(state.view === "dashboard" || state.view === "profile" || state.view === "leaderboard" || state.view === "comprehensive") && (
              <MobileNav 
                currentView={state.view}
                onNavigate={(view) => handleNavigate(view as View)}
              />
            )}
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  // Skill Testing Pathway
  if (state.pathway === "skill-testing") {
    if (state.view === "login" || !state.user) {
      return (
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Login onLogin={handleLogin} />
          </TooltipProvider>
        </QueryClientProvider>
      );
    }

    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {state.view === "skill-testing" && (
            <SkillTestingDashboard
              onSelectAssessment={(assessmentId) => handleNavigate("quiz", assessmentId)}
              onBack={handleBackToHome}
            />
          )}
          {state.view === "quiz" && state.selectedModuleId && (
            <QuizRunner
              moduleId={state.selectedModuleId}
              onBack={() => handleNavigate("skill-testing")}
              isComprehensive={false}
            />
          )}
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  // Company Info Pathway
  if (state.pathway === "company") {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <CompanyInfo onBack={handleBackToHome} />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  // Fallback to homepage
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Homepage onSelectPathway={handleSelectPathway} />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
