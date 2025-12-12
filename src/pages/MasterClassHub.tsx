import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Palette, Sparkles, ArrowLeft } from "lucide-react";

export const MasterClassHub = () => {
  const navigate = useNavigate();
  const categories = [
    {
      id: "cs",
      path: "/masterclass/login",
      title: "Client Service MasterClass",
      description: "Master the art of exceptional client relationships, communication, and service delivery",
      icon: Users,
      color: "from-primary/20 to-primary/5",
      iconColor: "text-primary",
      status: "available",
      modules: 5
    },
    {
      id: "design",
      path: "#",
      title: "Design MasterClass",
      description: "Learn design fundamentals, brand identity, and visual communication excellence",
      icon: Palette,
      color: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-500",
      status: "coming-soon",
      modules: 5
    },
    {
      id: "creative",
      path: "#",
      title: "Creative MasterClass",
      description: "Develop creative strategy, copywriting, and content creation skills",
      icon: Sparkles,
      color: "from-pink-500/20 to-pink-500/5",
      iconColor: "text-pink-500",
      status: "coming-soon",
      modules: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial opacity-40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-purple-glow opacity-30 rounded-full blur-3xl" />
      </div>
      
      {/* Header */}
      <header className="border-b border-border/30 glass-effect sticky top-0 z-50 relative backdrop-blur-xl">
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold bg-gradient-purple bg-clip-text text-transparent">MasterClass Programs</h1>
          <p className="text-muted-foreground mt-2">Choose your learning path and develop your skills</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
              <Card 
                className="group card-hover h-full relative overflow-hidden border border-border/40 hover:border-border/60"
              >
                <CardContent className="p-8 relative">
                  {category.status === "coming-soon" && (
                    <Badge className="absolute top-4 right-4 bg-gradient-purple-soft border-primary/20" variant="secondary">
                      Coming Soon
                    </Badge>
                  )}

                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-purple-glow rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-card`}>
                    <Icon className={`h-8 w-8 ${category.iconColor}`} />
                  </div>
                  
                  <h3 className="relative text-2xl font-bold text-foreground mb-3">
                    {category.title}
                  </h3>
                  
                  <p className="relative text-muted-foreground mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="relative flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <Badge variant="outline" className="border-primary/30">{category.modules} Modules</Badge>
                  </div>
                  
                  <Button 
                    onClick={() => category.status === "available" && navigate(category.path)}
                    className="relative w-full"
                    size="lg"
                    disabled={category.status === "coming-soon"}
                  >
                    {category.status === "available" ? "Enter MasterClass" : "Coming Soon"}
                  </Button>
                </CardContent>
              </Card>
              </div>
            );
          })}
        </div>

        {/* Info Section */}
        <Card className="mt-12 glass-effect shadow-elevated animate-fade-in" style={{ animationDelay: '300ms' }}>
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-4 text-foreground">What is a MasterClass?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our MasterClass programs are comprehensive training experiences designed to transform 
              your professional skills. Each MasterClass contains multiple modules with detailed lessons, 
              practical examples, and quizzes to validate your learning.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Track your progress, earn XP, compete on leaderboards, and earn certificates as you 
              complete modules. The Client Service MasterClass is fully available now, with Design 
              and Creative MasterClasses launching soon.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
