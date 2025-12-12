import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Award, BookOpen, TrendingUp, LogOut, Edit2, Save } from "lucide-react";
import { saveUserProfile, clearUserProfile, calculateTotalXP, getTotalCompletedSections, getAverageQuizScore, getUserProfile, getModuleCompletionPercentage } from "@/utils/storage";
import { MODULES } from "@/data/constants";

export const Profile = () => {
  const navigate = useNavigate();
  const user = getUserProfile()!;
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [role, setRole] = useState(user.role);

  const totalXP = calculateTotalXP();
  const completedSections = getTotalCompletedSections();
  const totalSections = MODULES.reduce((sum, m) => sum + m.sections.length, 0);
  const averageQuizScore = getAverageQuizScore();
  const modulesCompleted = MODULES.filter(m => {
    const moduleProgress = getModuleCompletionPercentage(m.id, m.sections.length);
    return moduleProgress === 100;
  }).length;

  const handleSave = () => {
    const updated: UserProfile = { name, role };
    saveUserProfile(updated);
    setIsEditing(false);
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout? Your progress is saved and will be available when you log back in.")) {
      clearUserProfile();
      window.location.href = "/login";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid gap-6">
          {/* Profile Info Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Profile Settings</CardTitle>
                    <CardDescription>Manage your account information</CardDescription>
                  </div>
                </div>
                {!isEditing && (
                  <Button onClick={() => setIsEditing(true)} variant="outline">
                    <Edit2 className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="profile-name">Full Name</Label>
                <Input
                  id="profile-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={!isEditing}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="profile-role">Role / Position</Label>
                <Input
                  id="profile-role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  disabled={!isEditing}
                />
              </div>

              {isEditing && (
                <div className="flex gap-2">
                  <Button onClick={handleSave}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                  <Button onClick={() => {
                    setName(user.name);
                    setRole(user.role);
                    setIsEditing(false);
                  }} variant="outline">
                    Cancel
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Statistics */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total XP</p>
                    <p className="text-2xl font-bold">{totalXP.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Modules Completed</p>
                    <p className="text-2xl font-bold">{modulesCompleted} / {MODULES.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-success/10 text-success">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Sections Completed</p>
                    <p className="text-2xl font-bold">{completedSections} / {totalSections}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-warning/10 text-warning">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Quiz Average</p>
                    <p className="text-2xl font-bold">{averageQuizScore}%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Logout */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">Logout</h3>
                  <p className="text-sm text-muted-foreground">
                    Your progress is automatically saved and will be available when you return
                  </p>
                </div>
                <Button onClick={handleLogout} variant="destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
