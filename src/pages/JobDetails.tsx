import { useParams, useNavigate } from "react-router-dom";
import { JOB_LISTINGS } from "@/data/jobs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, MapPin, Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export const JobDetails = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const job = JOB_LISTINGS.find(j => j.id === jobId);

  if (!job) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8">
          <p className="text-muted-foreground">Job not found</p>
          <Button onClick={() => navigate("/jobs")} className="mt-4">Back to Listings</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" onClick={() => navigate("/jobs")} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Listings
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-3xl mb-3">{job.title}</CardTitle>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    {job.department}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Posted {new Date(job.postedDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <Badge variant={job.type === "Full-time" ? "default" : "secondary"} className="text-sm">
                {job.type}
              </Badge>
            </div>

            <Button onClick={() => navigate(`/jobs/${jobId}/apply`)} size="lg" className="w-full sm:w-auto">
              Apply for This Position
            </Button>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">About the Role</h3>
              <p className="text-muted-foreground leading-relaxed">{job.description}</p>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold mb-4">Key Responsibilities</h3>
              <ul className="space-y-2">
                {job.responsibilities.map((resp, index) => (
                  <li key={index} className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold mb-4">Requirements</h3>
              <ul className="space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Ready to Apply?</h3>
              <p className="text-muted-foreground mb-4">
                Join our team and be part of something amazing. Submit your application today.
              </p>
              <Button onClick={() => navigate(`/jobs/${jobId}/apply`)} size="lg">
                Start Application
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
