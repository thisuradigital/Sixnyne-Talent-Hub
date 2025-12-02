import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { saveUserProfile } from "@/utils/storage";
import { UserProfile } from "@/types";

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMasterClass = location.pathname.includes("masterclass");
  const isSkillTesting = location.pathname.includes("skill-testing");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [errors, setErrors] = useState({ name: "", role: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors = { name: "", role: "" };
    if (!name.trim()) newErrors.name = "Name is required";
    if (!role.trim()) newErrors.role = "Role is required";

    if (newErrors.name || newErrors.role) {
      setErrors(newErrors);
      return;
    }

    const profile: UserProfile = { name: name.trim(), role: role.trim() };
    saveUserProfile(profile);
    
    // Navigate based on pathway
    if (isMasterClass) {
      navigate("/masterclass/dashboard");
    } else if (isSkillTesting) {
      navigate("/skill-testing");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto p-4 bg-primary rounded-full w-fit">
            <GraduationCap className="h-12 w-12 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-3xl font-bold">Client Service MasterClass</CardTitle>
            <CardDescription className="mt-2">
              Welcome to your interactive training portal. Let's get started!
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setErrors(prev => ({ ...prev, name: "" }));
                }}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role / Position</Label>
              <Input
                id="role"
                placeholder="e.g., Associate, Manager"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                  setErrors(prev => ({ ...prev, role: "" }));
                }}
                className={errors.role ? "border-destructive" : ""}
              />
              {errors.role && (
                <p className="text-sm text-destructive">{errors.role}</p>
              )}
            </div>

            <Button type="submit" className="w-full" size="lg">
              Begin Training
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
