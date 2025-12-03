import { ReactNode, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";
import { getUserProfile } from "@/utils/storage";

interface AppLayoutProps {
  children: ReactNode;
  hideNav?: boolean;
  requireAuth?: boolean;
  redirectTo?: string;
}

export const AppLayout = ({
  children,
  hideNav = false,
  requireAuth = false,
  redirectTo = "/masterclass/login"
}: AppLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentView, setCurrentView] = useState<string>("home");

  useEffect(() => {
    // Check authentication if required
    if (requireAuth) {
      const userProfile = getUserProfile();
      if (!userProfile) {
        navigate(redirectTo, { replace: true });
        return;
      }
    }

    // Determine current view based on pathname
    const path = location.pathname;
    if (path === "/" || path.startsWith("/home")) {
      setCurrentView("home");
    } else if (path.startsWith("/jobs")) {
      setCurrentView("jobs");
    } else if (path.startsWith("/masterclass")) {
      // For masterclass, check specific sub-routes
      if (path.includes("/dashboard")) {
        setCurrentView("masterclass-dashboard");
      } else if (path.includes("/exam")) {
        setCurrentView("masterclass-exam");
      } else if (path.includes("/leaderboard")) {
        setCurrentView("masterclass-leaderboard");
      } else if (path.includes("/profile")) {
        setCurrentView("profile");
      } else {
        setCurrentView("masterclass");
      }
    } else if (path.startsWith("/skill-testing")) {
      setCurrentView("skill-testing");
    } else if (path.startsWith("/company")) {
      setCurrentView("company");
    } else if (path.startsWith("/profile")) {
      setCurrentView("profile");
    }
  }, [location.pathname, navigate, requireAuth, redirectTo]);

  const handleNavigate = (view: string) => {
    switch (view) {
      case "home":
        navigate("/");
        break;
      case "jobs":
        navigate("/jobs");
        break;
      case "masterclass":
        navigate("/masterclass");
        break;
      case "masterclass-dashboard":
        navigate("/masterclass/dashboard");
        break;
      case "masterclass-leaderboard":
        navigate("/masterclass/leaderboard");
        break;
      case "masterclass-exam":
        navigate("/masterclass/exam");
        break;
      case "skill-testing":
        navigate("/skill-testing");
        break;
      case "company":
        navigate("/company");
        break;
      case "profile":
        navigate("/profile");
        break;
      default:
        break;
    }
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {!hideNav && (
        <>
          <Sidebar
            currentView={currentView}
            onNavigate={handleNavigate}
            onBackToHome={handleBackToHome}
          />
          <MobileNav currentView={currentView} onNavigate={handleNavigate} />
        </>
      )}
      <main className={hideNav ? "" : "lg:pl-64 pb-16 lg:pb-0"}>
        {children}
      </main>
    </div>
  );
};
