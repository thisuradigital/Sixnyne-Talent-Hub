import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Palette, Sparkles, ArrowLeft } from "lucide-react";
import { MasterClassCategory } from "@/types";

interface MasterClassHubProps {
  onSelectCategory: (category: MasterClassCategory) => void;
  onBack: () => void;
}

export const MasterClassHub = ({ onSelectCategory, onBack }: MasterClassHubProps) => {
  const categories = [
    {
      id: "cs" as MasterClassCategory,
      title: "Client Service MasterClass",
      description: "Master the art of exceptional client relationships, communication, and service delivery",
      icon: Users,
      color: "from-primary/20 to-primary/5",
      iconColor: "text-primary",
      status: "available",
      modules: 5
    },
    {
      id: "design" as MasterClassCategory,
      title: "Design MasterClass",
      description: "Learn design fundamentals, brand identity, and visual communication excellence",
      icon: Palette,
      color: "from-purple-500/20 to-purple-500/5",
      iconColor: "text-purple-500",
      status: "coming-soon",
      modules: 5
    },
    {
      id: "creative" as MasterClassCategory,
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold text-foreground">MasterClass Programs</h1>
          <p className="text-muted-foreground mt-2">Choose your learning path</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <CardContent className="p-8">
                  {category.status === "coming-soon" && (
                    <Badge className="absolute top-4 right-4" variant="secondary">
                      Coming Soon
                    </Badge>
                  )}

                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${category.iconColor}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <Badge variant="outline">{category.modules} Modules</Badge>
                  </div>
                  
                  <Button 
                    onClick={() => onSelectCategory(category.id)}
                    className="w-full"
                    size="lg"
                    disabled={category.status === "coming-soon"}
                  >
                    {category.status === "available" ? "Enter MasterClass" : "Coming Soon"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Info Section */}
        <Card className="mt-12 bg-muted/50">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-4">What is a MasterClass?</h3>
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
