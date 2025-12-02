import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { SKILL_ASSESSMENTS, SKILL_LESSONS } from "@/data/skillTestingConstants";
import { getQuizScore } from "@/utils/storage";
import { ArrowLeft, Clock, CheckCircle2, BookOpen, Brain } from "lucide-react";
import * as LucideIcons from "lucide-react";

export const SkillTestingDashboard = () => {
  const navigate = useNavigate();
  const completedAssessments = SKILL_ASSESSMENTS.filter(assessment => {
    const score = getQuizScore(assessment.id);
    return score && assessment.passingScore ? 
      (score.score / score.totalQuestions * 100) >= assessment.passingScore : 
      false;
  }).length;

  const overallProgress = Math.round((completedAssessments / SKILL_ASSESSMENTS.length) * 100);

  const getAssessmentStatus = (assessmentId: string, passingScore?: number) => {
    const score = getQuizScore(assessmentId);
    if (!score) return { status: "not-started", label: "Not Started", variant: "secondary" as const };
    
    const percentage = (score.score / score.totalQuestions) * 100;
    if (passingScore && percentage >= passingScore) {
      return { status: "passed", label: "Passed", variant: "default" as const };
    }
    return { status: "failed", label: "Failed", variant: "destructive" as const };
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold text-foreground">Skill Testing Platform</h1>
          <p className="text-muted-foreground mt-2">Validate your competencies for new hire onboarding</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Progress Overview */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">Overall Progress</h3>
                <p className="text-sm text-muted-foreground">
                  {completedAssessments} of {SKILL_ASSESSMENTS.length} assessments passed
                </p>
              </div>
              <div className="text-3xl font-bold text-primary">{overallProgress}%</div>
            </div>
            <Progress value={overallProgress} className="h-3" />
          </CardContent>
        </Card>

        {/* Assessments Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Required Assessments</h2>
              <p className="text-sm text-muted-foreground">Complete all assessments to pass onboarding</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_ASSESSMENTS.map((assessment) => {
              const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[assessment.icon] || Brain;
              const status = getAssessmentStatus(assessment.id, assessment.passingScore);
              const score = getQuizScore(assessment.id);

              return (
                <Card key={assessment.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant={status.variant}>{status.label}</Badge>
                    </div>
                    <CardTitle className="text-xl">{assessment.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {assessment.description}
                    </p>

                    <div className="space-y-2 mb-4 text-sm">
                      {assessment.timeLimit && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{assessment.timeLimit} minutes</span>
                        </div>
                      )}
                      {assessment.passingScore && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>Passing: {assessment.passingScore}%</span>
                        </div>
                      )}
                    </div>

                    {score && (
                      <div className="mb-4 p-3 bg-muted rounded-lg">
                        <p className="text-sm font-medium">
                          Last Score: {Math.round((score.score / score.totalQuestions) * 100)}%
                        </p>
                      </div>
                    )}

                    <Button 
                      onClick={() => navigate(`/skill-testing/quiz/${assessment.id}`)} 
                      className="w-full"
                      variant={status.status === "passed" ? "outline" : "default"}
                    >
                      {status.status === "not-started" ? "Start Assessment" : 
                       status.status === "passed" ? "Retake" : "Try Again"}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Learning Modules Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-accent/10">
              <BookOpen className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Preparation Lessons</h2>
              <p className="text-sm text-muted-foreground">Study materials to help you prepare</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_LESSONS.map((lesson) => {
              const IconComponent = (LucideIcons as Record<string, React.ComponentType<{ className?: string }>>)[lesson.icon] || BookOpen;

              return (
                <Card key={lesson.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="p-2 rounded-lg bg-accent/10 w-fit mb-2">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{lesson.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {lesson.description}
                    </p>
                    <Badge variant="secondary" className="mb-4">Coming Soon</Badge>
                    <Button 
                      className="w-full"
                      disabled
                      variant="outline"
                    >
                      View Lesson
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
