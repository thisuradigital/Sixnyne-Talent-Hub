import { useNavigate } from "react-router-dom";
import { Briefcase, GraduationCap, ClipboardCheck, Building2, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-radial opacity-60 pointer-events-none" />
      
      {/* Header */}
      <header className="border-b border-border/50 glass-effect relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-purple shadow-glow">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Hiring Portal</h1>
              <p className="text-sm text-muted-foreground">Your gateway to opportunities</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 max-w-5xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6 relative">
            <h1 className="text-9xl font-bold bg-gradient-purple bg-clip-text text-transparent">404</h1>
            <div className="absolute inset-0 bg-gradient-purple blur-3xl opacity-20" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Card 
                key={link.path}
                className="group hover-lift cursor-pointer border-border/50 backdrop-blur-sm bg-card/80 shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => navigate(link.path)}
              >
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-purple-glow rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-card`}>
                    <Icon className={`h-6 w-6 ${link.iconColor}`} />
                  </div>
                  
                  <h3 className="relative text-lg font-bold text-foreground mb-2">
                    {link.title}
                  </h3>
                  
                  <p className="relative text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
          <Button 
            onClick={() => navigate("/")}
            size="lg"
            className="px-8 bg-gradient-purple hover:shadow-glow border-0"
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
