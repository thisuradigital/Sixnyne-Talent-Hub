import { Home, Trophy, User, Award, Briefcase, GraduationCap, ClipboardCheck, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export const MobileNav = ({ currentView, onNavigate }: MobileNavProps) => {
  // Check if we're in a specific section
  const isMasterClassSection = ["masterclass-dashboard", "masterclass-leaderboard", "masterclass-exam", "profile"].includes(currentView);

  // Platform-wide navigation items (5 items that fit well on mobile)
  const platformNavItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "jobs", label: "Jobs", icon: Briefcase },
    { id: "masterclass", label: "Learn", icon: GraduationCap },
    { id: "skill-testing", label: "Test", icon: ClipboardCheck },
    { id: "profile", label: "Profile", icon: User },
  ];

  // MasterClass-specific navigation items
  const masterClassNavItems = [
    { id: "masterclass-dashboard", label: "Home", icon: Home },
    { id: "masterclass-leaderboard", label: "Leaderboard", icon: Trophy },
    { id: "masterclass-exam", label: "Exam", icon: Award },
    { id: "profile", label: "Profile", icon: User },
  ];

  // Use appropriate nav items based on current section
  const navItems = isMasterClassSection ? masterClassNavItems : platformNavItems;

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className={cn("h-16", isMasterClassSection ? "grid grid-cols-4" : "grid grid-cols-5")}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
