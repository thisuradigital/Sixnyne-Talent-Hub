import { Module } from "@/types";
import { ProgressBar } from "./ProgressBar";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import * as Icons from "lucide-react";
import { getModuleCompletionPercentage } from "@/utils/storage";

interface ModuleCardProps {
  module: Module;
  onStart: () => void;
}

export const ModuleCard = ({ module, onStart }: ModuleCardProps) => {
  const progress = getModuleCompletionPercentage(module.id, module.sections.length);
  
  // Get the icon component dynamically
  const IconComponent = (Icons as any)[module.icon] || Icons.Book;

  const getButtonText = () => {
    if (progress === 0) return "Start";
    if (progress === 100) return "Review";
    return "Continue";
  };

  const getButtonVariant = () => {
    if (progress === 100) return "outline";
    return "default";
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <IconComponent className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg mb-1">{module.title}</CardTitle>
            <CardDescription className="text-sm">{module.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-1">
        <ProgressBar progress={progress} />
        <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
          <span>{module.sections.length} sections</span>
          <span>•</span>
          <span>{module.quiz.length} quiz questions</span>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={onStart} 
          variant={getButtonVariant()}
          className="w-full"
        >
          {getButtonText()}
        </Button>
      </CardFooter>
    </Card>
  );
};
