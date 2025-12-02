import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Trophy, Medal, Award } from "lucide-react";
import { MOCK_LEADERBOARD, MODULES } from "@/data/constants";
import { calculateTotalXP, getTotalCompletedSections, getUserProfile } from "@/utils/storage";

export const Leaderboard = () => {
  const navigate = useNavigate();
  const user = getUserProfile()!;
  const userXP = calculateTotalXP();
  const completedSections = getTotalCompletedSections();
  const totalSections = MODULES.reduce((sum, m) => sum + m.sections.length, 0);
  const userModulesCompleted = Math.floor((completedSections / totalSections) * MODULES.length);

  // Combine user with mock data and sort
  const allEntries = [
    ...MOCK_LEADERBOARD,
    { name: user.name, xp: userXP, modulesCompleted: userModulesCompleted }
  ].sort((a, b) => b.xp - a.xp);

  const userRank = allEntries.findIndex(e => e.name === user.name) + 1;
  const nextRankXP = allEntries[userRank - 2]?.xp || userXP;
  const xpToNextRank = Math.max(0, nextRankXP - userXP);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-gold" />;
      case 2:
        return <Medal className="h-6 w-6 text-muted-foreground" style={{ color: "#C0C0C0" }} />;
      case 3:
        return <Medal className="h-6 w-6 text-warning" style={{ color: "#CD7F32" }} />;
      default:
        return <Award className="h-6 w-6 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button onClick={() => navigate("/masterclass/dashboard")} variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Trophy className="h-8 w-8" />
              </div>
              <div>
                <CardTitle className="text-2xl">Leaderboard</CardTitle>
                <CardDescription>See how you rank against your peers</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* User's Current Rank Card */}
        <Card className="mb-6 border-primary/50 bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {getRankIcon(userRank)}
                <div>
                  <p className="text-sm text-muted-foreground">Your Current Rank</p>
                  <p className="text-3xl font-bold text-primary">#{userRank}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Your XP</p>
                <p className="text-2xl font-bold">{userXP.toLocaleString()}</p>
                {userRank > 1 && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {xpToNextRank.toLocaleString()} XP to rank {userRank - 1}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leaderboard Table */}
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {allEntries.map((entry, index) => {
                const rank = index + 1;
                const isUser = entry.name === user.name;

                return (
                  <div
                    key={`${entry.name}-${index}`}
                    className={`flex items-center justify-between p-4 transition-colors ${
                      isUser ? "bg-primary/5 border-l-4 border-l-primary" : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 text-center">
                        {rank <= 3 ? (
                          getRankIcon(rank)
                        ) : (
                          <span className="text-lg font-semibold text-muted-foreground">
                            #{rank}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <p className={`font-semibold ${isUser ? "text-primary" : ""}`}>
                          {entry.name}
                          {isUser && <span className="ml-2 text-xs text-primary">(You)</span>}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {entry.modulesCompleted} / {MODULES.length} modules completed
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className={`text-xl font-bold ${isUser ? "text-primary" : ""}`}>
                        {entry.xp.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground">XP</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* XP Info */}
        <Card className="mt-6">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-3">How to Earn XP</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-success" />
                Complete a section: <span className="font-semibold text-foreground">+50 XP</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Correct quiz answer: <span className="font-semibold text-foreground">+100 XP</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
