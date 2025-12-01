import { useState } from "react";
import { ModuleCard } from "@/components/ModuleCard";
import { MODULES } from "@/data/constants";
import { UserProfile } from "@/types";
import { calculateTotalXP, getOverallProgress } from "@/utils/storage";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Award, BookOpen, Clock } from "lucide-react";

interface DashboardProps {
  user: UserProfile;
  onSelectModule: (moduleId: string) => void;
}

export const Dashboard = ({ user, onSelectModule }: DashboardProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const totalSections = MODULES.reduce((sum, m) => sum + m.sections.length, 0);
  const overallProgress = getOverallProgress(totalSections);
  const totalXP = calculateTotalXP();
  const estimatedTime = Math.max(0, Math.ceil((totalSections * 10 - (totalSections * overallProgress / 100 * 10)) / 60));

  const filteredModules = MODULES.filter(module =>
    module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    module.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Welcome back, {user.name}! 👋
        </h1>
        <p className="text-lg text-muted-foreground">
          {user.role} • Continue your Client Service training journey
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Overall Progress</p>
                <p className="text-2xl font-bold">{overallProgress}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total XP Earned</p>
                <p className="text-2xl font-bold">{totalXP.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-warning/10 text-warning">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Estimated Time Left</p>
                <p className="text-2xl font-bold">{estimatedTime}h</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search modules..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Module Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Training Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map(module => (
            <ModuleCard
              key={module.id}
              module={module}
              onStart={() => onSelectModule(module.id)}
            />
          ))}
        </div>
        
        {filteredModules.length === 0 && (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">No modules found matching "{searchQuery}"</p>
          </Card>
        )}
      </div>
    </div>
  );
};
