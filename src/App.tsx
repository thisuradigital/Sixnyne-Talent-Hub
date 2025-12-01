import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProfile } from "./types";
import { getUserProfile } from "./utils/storage";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { ModuleReader } from "./pages/ModuleReader";
import { QuizRunner } from "./pages/QuizRunner";
import { Profile } from "./pages/Profile";
import { Leaderboard } from "./pages/Leaderboard";
import { Sidebar } from "./components/Sidebar";
import { MobileNav } from "./components/MobileNav";

const queryClient = new QueryClient();

type View = "login" | "dashboard" | "module" | "quiz" | "profile" | "leaderboard" | "comprehensive";

interface AppState {
  view: View;
  user: UserProfile | null;
  selectedModuleId: string | null;
}

const App = () => {
  const [state, setState] = useState<AppState>({
    view: "login",
    user: null,
    selectedModuleId: null,
  });

  useEffect(() => {
    // Check for existing user session
    const profile = getUserProfile();
    if (profile) {
      setState(prev => ({ ...prev, user: profile, view: "dashboard" }));
    }
  }, []);

  const handleLogin = (profile: UserProfile) => {
    setState({ view: "dashboard", user: profile, selectedModuleId: null });
  };

  const handleLogout = () => {
    setState({ view: "login", user: null, selectedModuleId: null });
  };

  const handleNavigate = (view: View, moduleId?: string) => {
    setState(prev => ({ ...prev, view, selectedModuleId: moduleId || null }));
  };

  const handleUpdateProfile = (profile: UserProfile) => {
    setState(prev => ({ ...prev, user: profile }));
  };

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
        
        <div className="flex min-h-screen w-full bg-background">
          {/* Desktop Sidebar */}
          {(state.view === "dashboard" || state.view === "profile" || state.view === "leaderboard" || state.view === "comprehensive") && (
            <Sidebar 
              currentView={state.view}
              onNavigate={(view) => handleNavigate(view as View)}
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
};

export default App;
