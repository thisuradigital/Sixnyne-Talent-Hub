import { Home, BookOpen, Trophy, User, Award, Briefcase, GraduationCap, ClipboardCheck, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onBackToHome?: () => void;
}

export const Sidebar = ({ currentView, onNavigate, onBackToHome }: SidebarProps) => {
  // Check if we're in a specific section
  const isMasterClassSection = ["masterclass-dashboard", "masterclass-leaderboard", "masterclass-exam", "profile"].includes(currentView);

  // Platform-wide navigation items
  const platformNavItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "jobs", label: "Jobs", icon: Briefcase },
    { id: "masterclass", label: "MasterClass", icon: GraduationCap },
    { id: "skill-testing", label: "Skill Testing", icon: ClipboardCheck },
    { id: "company", label: "Company", icon: Building2 },
    { id: "profile", label: "Profile", icon: User },
  ];

  // MasterClass-specific navigation items
  const masterClassNavItems = [
    { id: "masterclass-dashboard", label: "Dashboard", icon: Home },
    { id: "masterclass-leaderboard", label: "Leaderboard", icon: Trophy },
    { id: "masterclass-exam", label: "Comprehensive Exam", icon: Award },
    { id: "profile", label: "Profile", icon: User },
  ];

  // Use appropriate nav items based on current section
  const navItems = isMasterClassSection ? masterClassNavItems : platformNavItems;

  return (
    <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:w-64 lg:bg-sidebar lg:border-r lg:border-sidebar-border">
      <div className="flex-1 flex flex-col min-h-0">
        {/* Logo/Title */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-sidebar-border">
          <div className="p-2 rounded-lg bg-sidebar-primary">
            {isMasterClassSection ? (
              <BookOpen className="h-6 w-6 text-sidebar-primary-foreground" />
            ) : (
              <GraduationCap className="h-6 w-6 text-sidebar-primary-foreground" />
            )}
          </div>
          <div>
            <h1 className="font-bold text-sidebar-foreground text-lg leading-tight">
              {isMasterClassSection ? "Training Portal" : "Hiring Portal"}
            </h1>
            <p className="text-xs text-sidebar-foreground/70">
              {isMasterClassSection ? "Dashboard" : "Navigation"}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {onBackToHome && isMasterClassSection && (
            <button
              onClick={onBackToHome}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground mb-4 border border-sidebar-border"
            >
              <Home className="h-5 w-5 flex-shrink-0" />
              <span>Back to Home</span>
            </button>
          )}
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
