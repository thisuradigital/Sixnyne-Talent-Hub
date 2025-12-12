import { useNavigate } from "react-router-dom";
import { Briefcase, GraduationCap, ClipboardCheck, Building2, ArrowRight, Sparkles } from "lucide-react";
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
      gradient: "from-red-500/20 to-orange-500/10",
      accentColor: "from-red-500 to-orange-500",
      iconColor: "text-red-600 dark:text-red-400"
    },
    {
      path: "/masterclass",
      title: "MasterClasses",
      description: "Comprehensive training programs for Client Service, Design, and Creative roles",
      icon: GraduationCap,
      gradient: "from-purple-500/20 to-pink-500/10",
      accentColor: "from-purple-500 to-pink-500",
      iconColor: "text-purple-600 dark:text-purple-400"
    },
    {
      path: "/skill-testing",
      title: "Skill Testing",
      description: "Assessments and learning modules for new hires to validate core competencies",
      icon: ClipboardCheck,
      gradient: "from-amber-500/20 to-yellow-500/10",
      accentColor: "from-amber-500 to-yellow-500",
      iconColor: "text-amber-600 dark:text-amber-400"
    },
    {
      path: "/company",
      title: "Get to Know the Company",
      description: "Learn about our culture, values, team, and what makes us unique",
      icon: Building2,
      gradient: "from-cyan-500/20 to-blue-500/10",
      accentColor: "from-cyan-500 to-blue-500",
      iconColor: "text-cyan-600 dark:text-cyan-400"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial opacity-40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-purple-glow opacity-30 rounded-full blur-3xl" />
      </div>
      
      {/* Header */}
      <header className="border-b border-border/30 glass-effect sticky top-0 z-50 relative backdrop-blur-xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-gradient-purple shadow-elevated">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Hiring Portal</h1>
              <p className="text-sm text-muted-foreground">Your gateway to opportunities</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20 max-w-7xl relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-block">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Welcome to Your Journey</span>
            </div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold text-foreground leading-tight">
            Welcome to Our <br />
            <span className="bg-gradient-purple bg-clip-text text-transparent">Hiring Portal</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose your path below to get started on your journey with us. Whether you're looking to join our team, develop your skills, or learn about our culture, we have the perfect pathway for you.
          </p>
        </div>

        {/* Pathway Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {pathways.map((pathway, index) => {
            const Icon = pathway.icon;
            return (
              <div
                key={pathway.path}
                className="fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <Card 
                  className="group h-full card-hover overflow-hidden border border-border/40 hover:border-border/60 transition-all duration-300"
                >
                  <CardContent className="p-8 relative h-full flex flex-col">
                    {/* Gradient Background Accent */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-purple-glow rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon Container */}
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${pathway.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-elevated transition-all duration-300 border border-border/20`}>
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pathway.accentColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      <Icon className={`h-10 w-10 ${pathway.iconColor} relative z-10`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="relative text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {pathway.title}
                      </h3>
                      
                      <p className="relative text-muted-foreground mb-6 leading-relaxed flex-grow">
                        {pathway.description}
                      </p>
                    </div>
                    
                    {/* Button */}
                    <Button 
                      onClick={() => navigate(pathway.path)}
                      className="relative w-full group/btn bg-gradient-purple hover:shadow-glow border-0 text-white font-semibold h-12 rounded-lg transition-all duration-300"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Get Started
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-20 p-12 rounded-2xl bg-gradient-purple-soft border border-border/30">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to take the next step?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whatever pathway you choose, we're here to support your success and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate("/jobs")}
              variant="default"
              className="bg-gradient-purple hover:shadow-glow text-white"
              size="lg"
            >
              Explore Jobs
            </Button>
            <Button 
              onClick={() => navigate("/masterclass")}
              variant="outline"
              size="lg"
            >
              Browse MasterClasses
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};
