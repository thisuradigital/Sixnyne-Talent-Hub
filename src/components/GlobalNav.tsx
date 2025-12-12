import { useNavigate, useLocation } from "react-router-dom";
import { Home, Briefcase, GraduationCap, ClipboardCheck, Building2, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clearUserProfile } from "@/utils/storage";
import { cn } from "@/lib/utils";

export const GlobalNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "home", path: "/", label: "Home", icon: Home },
    { id: "jobs", path: "/jobs", label: "Jobs", icon: Briefcase },
    { id: "masterclass", path: "/masterclass", label: "MasterClass", icon: GraduationCap },
    { id: "skills", path: "/skill-testing", label: "Skills", icon: ClipboardCheck },
    { id: "company", path: "/company", label: "Company", icon: Building2 },
  ];

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  const handleLogout = () => {
    clearUserProfile();
    navigate("/");
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border/30 z-40 backdrop-blur-xl glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <Button
                  key={item.id}
                  variant={active ? "default" : "ghost"}
                  size="sm"
                  onClick={() => navigate(item.path)}
                  className="gap-2"
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden lg:inline">{item.label}</span>
                </Button>
              );
            })}
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center justify-around flex-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <button
                  key={item.id}
                  onClick={() => navigate(item.path)}
                  className={cn(
                    "flex flex-col items-center justify-center gap-1 py-2 px-3 transition-colors",
                    active
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

          {/* Logout Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLogout}
            className="gap-2 ml-auto"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline text-sm">Logout</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};
