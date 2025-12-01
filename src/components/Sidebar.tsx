import { Home, BookOpen, Trophy, User, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export const Sidebar = ({ currentView, onNavigate }: SidebarProps) => {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "leaderboard", label: "Leaderboard", icon: Trophy },
    { id: "comprehensive", label: "Comprehensive Exam", icon: Award },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <aside className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:w-64 lg:bg-sidebar lg:border-r lg:border-sidebar-border">
      <div className="flex-1 flex flex-col min-h-0">
        {/* Logo/Title */}
        <div className="flex items-center gap-3 px-6 py-6 border-b border-sidebar-border">
          <div className="p-2 rounded-lg bg-sidebar-primary">
            <BookOpen className="h-6 w-6 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-sidebar-foreground text-lg leading-tight">
              Client Service
            </h1>
            <p className="text-xs text-sidebar-foreground/70">MasterClass</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
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
