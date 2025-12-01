import { useState, useEffect } from "react";
import { MODULES } from "@/data/constants";
import { QuizQuestion } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import { saveQuizScore } from "@/utils/storage";
import { Certificate } from "@/components/Certificate";

interface QuizRunnerProps {
  moduleId: string;
  onBack: () => void;
  isComprehensive?: boolean;
}

export const QuizRunner = ({ moduleId, onBack, isComprehensive = false }: QuizRunnerProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const questions: QuizQuestion[] = isComprehensive
    ? MODULES.flatMap(m => m.quiz).slice(0, 20) // 20 questions for comprehensive
    : MODULES.find(m => m.id === moduleId)?.quiz || [];

  const module = MODULES.find(m => m.id === moduleId);
  const currentQuestion = questions[currentQuestionIndex];

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleSelectAnswer = (index: number) => {
    if (!showFeedback) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowFeedback(true);
    if (selectedAnswer === currentQuestion.correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      // Quiz complete
      saveQuizScore(moduleId, score + (selectedAnswer === currentQuestion.correctIndex ? 1 : 0), questions.length);
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (!currentQuestion) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Button onClick={onBack} variant="ghost">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <p className="text-center mt-8">No questions available</p>
      </div>
    );
  }

  // Calculate final score
  const finalScore = score + (showFeedback && selectedAnswer === currentQuestion.correctIndex ? 1 : 0);
  const percentage = Math.round((finalScore / questions.length) * 100);
  const passed = percentage >= 70;

  if (quizComplete) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Card className="text-center">
            <CardContent className="p-8">
              {passed ? (
                <>
                  <CheckCircle2 className="h-20 w-20 text-success mx-auto mb-4" />
                  <h1 className="text-4xl font-bold mb-2">Congratulations! 🎉</h1>
                  <p className="text-xl text-muted-foreground mb-6">You passed the quiz!</p>
                </>
              ) : (
                <>
                  <XCircle className="h-20 w-20 text-warning mx-auto mb-4" />
                  <h1 className="text-4xl font-bold mb-2">Keep Learning!</h1>
                  <p className="text-xl text-muted-foreground mb-6">You can do better. Review the material and try again!</p>
                </>
              )}

              <div className="bg-muted rounded-lg p-6 mb-6 inline-block">
                <p className="text-5xl font-bold text-primary mb-2">{percentage}%</p>
                <p className="text-muted-foreground">
                  {finalScore} out of {questions.length} correct
                </p>
                {passed && (
                  <p className="text-sm text-accent font-medium mt-2">
                    +{finalScore * 100} XP Earned!
                  </p>
                )}
              </div>

              {passed && module && (
                <div className="mb-6">
                  <Certificate
                    userName={JSON.parse(localStorage.getItem('csm_user_profile') || '{}').name || 'Student'}
                    moduleName={isComprehensive ? "Client Service MasterClass" : module.title}
                    date={new Date().toLocaleDateString()}
                    score={percentage}
                    isGold={isComprehensive}
                  />
                </div>
              )}

              <div className="flex gap-4 justify-center">
                <Button onClick={handleRestart} variant="outline">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
                <Button onClick={onBack}>
                  Back to {isComprehensive ? "Dashboard" : "Module"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Button onClick={onBack} variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Exit Quiz
            </Button>
            <div className="text-sm text-muted-foreground">
              Score: {score} / {currentQuestionIndex}
            </div>
          </div>
          
          <h1 className="text-2xl font-bold mb-2">
            {isComprehensive ? "Comprehensive Exam" : `${module?.title} Quiz`}
          </h1>
          <div className="flex items-center gap-4">
            <Progress value={progress} className="flex-1" />
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              {currentQuestionIndex + 1} / {questions.length}
            </span>
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">{currentQuestion.question}</h2>

            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQuestion.correctIndex;
                const showCorrect = showFeedback && isCorrect;
                const showIncorrect = showFeedback && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleSelectAnswer(index)}
                    disabled={showFeedback}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      showCorrect
                        ? "border-success bg-success/10 text-success-foreground"
                        : showIncorrect
                        ? "border-destructive bg-destructive/10 text-destructive-foreground"
                        : isSelected
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50 hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showCorrect && <CheckCircle2 className="h-5 w-5" />}
                      {showIncorrect && <XCircle className="h-5 w-5" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {showFeedback && (
              <Card className={`mb-6 ${selectedAnswer === currentQuestion.correctIndex ? "bg-success/5 border-success/30" : "bg-warning/5 border-warning/30"}`}>
                <CardContent className="p-4">
                  <p className="font-medium mb-2">
                    {selectedAnswer === currentQuestion.correctIndex ? "Correct! ✓" : "Incorrect"}
                  </p>
                  <p className="text-sm text-muted-foreground">{currentQuestion.explanation}</p>
                </CardContent>
              </Card>
            )}

            <div className="flex justify-end">
              {!showFeedback ? (
                <Button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  size="lg"
                >
                  Submit Answer
                </Button>
              ) : (
                <Button onClick={handleNext} size="lg">
                  {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
