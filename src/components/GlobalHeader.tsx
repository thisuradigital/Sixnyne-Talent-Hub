import { useNavigate, useLocation } from "react-router-dom";
import { Home, Briefcase, GraduationCap, ClipboardCheck, Building2, LogOut, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clearUserProfile } from "@/utils/storage";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const GlobalHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
    navigate("/login");
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-card border-b border-border/30 z-50 backdrop-blur-xl glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-purple flex items-center justify-center">
              <span className="text-white font-bold text-sm">HP</span>
            </div>
            <span className="hidden sm:inline font-semibold text-lg">Hiring Portal</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <Button
                  key={item.id}
                  variant={active ? "default" : "ghost"}
                  size="sm"
                  onClick={() => handleNavClick(item.path)}
                  className="gap-2"
                  data-testid={`nav-${item.id}`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden lg:inline">{item.label}</span>
                </Button>
              );
            })}
          </nav>

          {/* Desktop Logout */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="gap-2"
              data-testid="button-logout"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden lg:inline">Logout</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/30 py-3 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.path)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-2 rounded-md transition-colors text-left",
                    active
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-muted-foreground hover:bg-muted"
                  )}
                  data-testid={`mobile-nav-${item.id}`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-2 rounded-md text-left text-muted-foreground hover:bg-muted transition-colors"
              data-testid="mobile-button-logout"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
