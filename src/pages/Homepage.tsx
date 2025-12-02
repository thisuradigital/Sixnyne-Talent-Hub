import { useNavigate } from "react-router-dom";
import { Briefcase, GraduationCap, ClipboardCheck, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Homepage = () => {
  const navigate = useNavigate();
  const pathways = [
    {
      path: "/jobs",
      title: "Apply for Jobs",
      description: "Explore open positions and submit your application to join our team",
      icon: Briefcase,
      color: "from-destructive/20 to-destructive/5",
      iconColor: "text-destructive"
    },
    {
      path: "/masterclass",
      title: "MasterClasses",
      description: "Comprehensive training programs for Client Service, Design, and Creative roles",
      icon: GraduationCap,
      color: "from-primary/20 to-primary/5",
      iconColor: "text-primary"
    },
    {
      path: "/skill-testing",
      title: "Skill Testing",
      description: "Assessments and learning modules for new hires to validate core competencies",
      icon: ClipboardCheck,
      color: "from-warning/20 to-warning/5",
      iconColor: "text-warning"
    },
    {
      path: "/company",
      title: "Get to Know the Company",
      description: "Learn about our culture, values, team, and what makes us unique",
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
      <header className="border-b border-border/50 glass-effect sticky top-0 z-10 relative">
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
      <main className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-foreground mb-6 bg-gradient-purple bg-clip-text text-transparent">
            Welcome to Our Hiring Portal
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your path below to get started on your journey with us
          </p>
        </div>

        {/* Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pathways.map((pathway, index) => {
            const Icon = pathway.icon;
            return (
              <Card 
                key={pathway.path}
                className="group hover-lift overflow-hidden border-border/50 backdrop-blur-sm bg-card/80 shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-purple-glow rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${pathway.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-card`}>
                    <Icon className={`h-8 w-8 ${pathway.iconColor}`} />
                  </div>
                  
                  <h3 className="relative text-2xl font-bold text-foreground mb-3">
                    {pathway.title}
                  </h3>
                  
                  <p className="relative text-muted-foreground mb-6 leading-relaxed">
                    {pathway.description}
                  </p>
                  
                  <Button 
                    onClick={() => navigate(pathway.path)}
                    className="relative w-full bg-gradient-purple hover:shadow-glow border-0"
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};
