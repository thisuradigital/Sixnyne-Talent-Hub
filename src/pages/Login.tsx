import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { saveUserProfile } from "@/utils/storage";
import { UserProfile } from "@/types";

export const Login = () => {
  const navigate = useNavigate();
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
    
    // Force page reload to refresh app state with new login
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-purple-glow opacity-20 rounded-full blur-3xl" />
      </div>

      <Card className="w-full max-w-md relative z-10 shadow-elevated">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto p-4 bg-gradient-purple rounded-full w-fit shadow-glow">
            <Sparkles className="h-12 w-12 text-white" />
          </div>
          <div>
            <CardTitle className="text-3xl font-bold bg-gradient-purple bg-clip-text text-transparent">Welcome</CardTitle>
            <CardDescription className="mt-2">
              Join our Hiring Portal and explore amazing opportunities
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

            <Button type="submit" className="w-full bg-gradient-purple hover:shadow-glow text-white" size="lg">
              Get Started
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
