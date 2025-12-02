import { Briefcase, GraduationCap, ClipboardCheck, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Pathway } from "@/types";

interface HomepageProps {
  onSelectPathway: (pathway: Pathway) => void;
}

export const Homepage = ({ onSelectPathway }: HomepageProps) => {
  const pathways = [
    {
      id: "jobs" as Pathway,
      title: "Apply for Jobs",
      description: "Explore open positions and submit your application to join our team",
      icon: Briefcase,
      color: "from-destructive/20 to-destructive/5",
      iconColor: "text-destructive"
    },
    {
      id: "masterclass" as Pathway,
      title: "MasterClasses",
      description: "Comprehensive training programs for Client Service, Design, and Creative roles",
      icon: GraduationCap,
      color: "from-primary/20 to-primary/5",
      iconColor: "text-primary"
    },
    {
      id: "skill-testing" as Pathway,
      title: "Skill Testing",
      description: "Assessments and learning modules for new hires to validate core competencies",
      icon: ClipboardCheck,
      color: "from-warning/20 to-warning/5",
      iconColor: "text-warning"
    },
    {
      id: "company" as Pathway,
      title: "Get to Know the Company",
      description: "Learn about our culture, values, team, and what makes us unique",
      icon: Building2,
      color: "from-accent/20 to-accent/5",
      iconColor: "text-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
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
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Welcome to Our Hiring Portal
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your path below to get started on your journey with us
          </p>
        </div>

        {/* Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pathways.map((pathway) => {
            const Icon = pathway.icon;
            return (
              <Card 
                key={pathway.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pathway.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${pathway.iconColor}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {pathway.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {pathway.description}
                  </p>
                  
                  <Button 
                    onClick={() => onSelectPathway(pathway.id)}
                    className="w-full"
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
