import { ReactNode, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";
import { getUserProfile } from "@/utils/storage";

interface MasterClassLayoutProps {
  children: ReactNode;
  hideNav?: boolean;
}

export const MasterClassLayout = ({ children, hideNav = false }: MasterClassLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check authentication
  useEffect(() => {
    const profile = getUserProfile();
    if (!profile) {
      navigate("/login");
    }
  }, [navigate]);

  const currentView = location.pathname.includes("/exam") ? "comprehensive" :
                     location.pathname.includes("/profile") ? "profile" :
                     location.pathname.includes("/leaderboard") ? "leaderboard" :
                     "dashboard";

  const handleNavigate = (view: string) => {
    if (view === "dashboard") navigate("/masterclass/dashboard");
    else if (view === "profile") navigate("/masterclass/profile");
    else if (view === "leaderboard") navigate("/masterclass/leaderboard");
    else if (view === "comprehensive") navigate("/masterclass/exam");
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Desktop Sidebar */}
      {!hideNav && (
        <Sidebar 
          currentView={currentView}
          onNavigate={handleNavigate}
          onBackToHome={handleBackToHome}
        />
      )}

      {/* Main Content */}
      <main className={`flex-1 ${!hideNav ? "lg:pl-64" : ""}`}>
        <div className={!hideNav ? "pb-20 lg:pb-0" : ""}>
          {children}
        </div>
      </main>

      {/* Mobile Navigation */}
      {!hideNav && (
        <MobileNav 
          currentView={currentView}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
};
