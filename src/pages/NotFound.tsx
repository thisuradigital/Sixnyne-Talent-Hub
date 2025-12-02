import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Briefcase, GraduationCap, ClipboardCheck, Building2, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const quickLinks = [
    {
      path: "/",
      title: "Homepage",
      description: "Return to the main portal",
      icon: Home,
      color: "from-primary/20 to-primary/5",
      iconColor: "text-primary"
    },
    {
      path: "/jobs",
      title: "Job Listings",
      description: "Browse open positions",
      icon: Briefcase,
      color: "from-destructive/20 to-destructive/5",
      iconColor: "text-destructive"
    },
    {
      path: "/masterclass",
      title: "MasterClasses",
      description: "Access training programs",
      icon: GraduationCap,
      color: "from-primary/20 to-primary/5",
      iconColor: "text-primary"
    },
    {
      path: "/skill-testing",
      title: "Skill Testing",
      description: "Take assessments",
      icon: ClipboardCheck,
      color: "from-warning/20 to-warning/5",
      iconColor: "text-warning"
    },
    {
      path: "/company",
      title: "Company Info",
      description: "Learn about us",
      icon: Building2,
      color: "from-accent/20 to-accent/5",
      iconColor: "text-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Hiring Portal</h1>
              <p className="text-sm text-muted-foreground">Your gateway to opportunities</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <h1 className="text-8xl font-bold text-primary/20">404</h1>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Card 
                key={link.path}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => navigate(link.path)}
              >
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 ${link.iconColor}`} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {link.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => navigate("/")}
            size="lg"
            className="px-8"
          >
            <Home className="h-4 w-4 mr-2" />
            Back to Homepage
          </Button>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
