import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MODULES } from "@/data/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  ChevronLeft, ChevronRight, CheckCircle2, Circle, 
  ArrowLeft, CheckCheck, X 
} from "lucide-react";
import { 
  isSectionCompleted, 
  saveCompletedSection, 
  removeCompletedSection,
  getModuleCompletionPercentage 
} from "@/utils/storage";
import { Toast } from "@/components/Toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ModuleReader = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const module = MODULES.find(m => m.id === moduleId!);
  const [currentSection, setCurrentSection] = useState(0);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  useEffect(() => {
    // Scroll to top when section changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentSection]);

  if (!module) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Button onClick={() => navigate("/masterclass/dashboard")} variant="ghost">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>
        <p className="text-center mt-8">Module not found</p>
      </div>
    );
  }

  const section = module.sections[currentSection];
  const isCompleted = isSectionCompleted(moduleId!, currentSection);
  const progress = getModuleCompletionPercentage(moduleId!, module.sections.length);

  const handleToggleComplete = () => {
    if (isCompleted) {
      removeCompletedSection(moduleId!, currentSection);
      setToast({ message: "Section marked as incomplete", type: "error" });
    } else {
      saveCompletedSection(moduleId!, currentSection);
      setToast({ message: "Section completed! +50 XP", type: "success" });
    }
  };

  const handleNext = () => {
    if (currentSection < module.sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24 lg:pb-8">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Button onClick={() => navigate("/masterclass/dashboard")} variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
            <Button onClick={() => navigate(`/masterclass/quiz/${moduleId}`)} variant="outline" size="sm">
              Take Quiz
            </Button>
          </div>
          
          <h1 className="text-2xl font-bold mb-2">{module.title}</h1>
          <div className="flex items-center gap-4">
            <Progress value={progress} className="flex-1" />
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              {progress}% Complete
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Sidebar - Table of Contents */}
          <div className="hidden lg:block lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Contents</h3>
                <nav className="space-y-1">
                  {module.sections.map((sec, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSection(idx)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-2 ${
                        currentSection === idx
                          ? "bg-primary text-primary-foreground font-medium"
                          : "hover:bg-muted"
                      }`}
                    >
                       {isSectionCompleted(moduleId!, idx) ? (
                        <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                      ) : (
                        <Circle className="h-4 w-4 flex-shrink-0" />
                      )}
                      <span className="truncate">{sec.title}</span>
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Mobile - Section Dropdown */}
          <div className="lg:hidden col-span-1 mb-4">
            <Select
              value={currentSection.toString()}
              onValueChange={(value) => setCurrentSection(parseInt(value))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select section" />
              </SelectTrigger>
              <SelectContent>
                {module.sections.map((sec, idx) => (
                  <SelectItem key={idx} value={idx.toString()}>
                    <div className="flex items-center gap-2">
                      {isSectionCompleted(moduleId!, idx) ? (
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                      ) : (
                        <Circle className="h-4 w-4" />
                      )}
                      {sec.title}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <Card>
              <CardContent className="p-6 md:p-8">
                {/* Section Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">
                      Section {currentSection + 1} of {module.sections.length}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                  </div>
                  <Button
                    onClick={handleToggleComplete}
                    variant={isCompleted ? "outline" : "default"}
                    size="sm"
                    className="ml-4"
                  >
                    {isCompleted ? (
                      <>
                        <CheckCheck className="mr-2 h-4 w-4" />
                        Completed
                      </>
                    ) : (
                      <>
                        <Circle className="mr-2 h-4 w-4" />
                        Mark Complete
                      </>
                    )}
                  </Button>
                </div>

                {/* Content Paragraphs */}
                <div className="prose prose-lg max-w-none mb-8">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-foreground mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* DOs and DON'Ts */}
                {(section.dos.length > 0 || section.donts.length > 0) && (
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    {section.dos.length > 0 && (
                      <Card className="border-success/30 bg-success/5">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-success" />
                            <span className="text-success">DO</span>
                          </h3>
                          <ul className="space-y-3">
                            {section.dos.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}

                    {section.donts.length > 0 && (
                      <Card className="border-destructive/30 bg-destructive/5">
                        <CardContent className="p-6">
                          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                            <X className="h-5 w-5 text-destructive" />
                            <span className="text-destructive">DON'T</span>
                          </h3>
                          <ul className="space-y-3">
                            {section.donts.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <X className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center">
              <Button
                onClick={handlePrevious}
                disabled={currentSection === 0}
                variant="outline"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              {currentSection === module.sections.length - 1 ? (
                <Button onClick={() => navigate(`/masterclass/quiz/${moduleId}`)} size="lg">
                  Take Quiz
                </Button>
              ) : (
                <Button onClick={handleNext}>
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
