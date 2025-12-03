import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Homepage } from "./pages/Homepage";
import { JobListings } from "./pages/JobListings";
import { JobDetails } from "./pages/JobDetails";
import { JobApplication } from "./pages/JobApplication";
import { MasterClassHub } from "./pages/MasterClassHub";
import { SkillTestingDashboard } from "./pages/SkillTestingDashboard";
import { CompanyInfo } from "./pages/CompanyInfo";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { ModuleReader } from "./pages/ModuleReader";
import { QuizRunner } from "./pages/QuizRunner";
import { Profile } from "./pages/Profile";
import { Leaderboard } from "./pages/Leaderboard";
import { MasterClassLayout } from "./components/MasterClassLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Homepage />} />

          {/* Job Application Pathway */}
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/jobs/:jobId" element={<JobDetails />} />
          <Route path="/jobs/:jobId/apply" element={<JobApplication />} />

          {/* Company Info */}
          <Route path="/company" element={<CompanyInfo />} />

          {/* MasterClass Pathway */}
          <Route path="/masterclass" element={<MasterClassHub />} />
          <Route path="/masterclass/login" element={<Login />} />
          
          {/* MasterClass Protected Routes */}
          <Route path="/masterclass/dashboard" element={
            <ProtectedRoute redirectTo="/masterclass/login">
              <MasterClassLayout><Dashboard /></MasterClassLayout>
            </ProtectedRoute>
          } />
          <Route path="/masterclass/module/:moduleId" element={
            <ProtectedRoute redirectTo="/masterclass/login">
              <MasterClassLayout hideNav><ModuleReader /></MasterClassLayout>
            </ProtectedRoute>
          } />
          <Route path="/masterclass/quiz/:moduleId" element={
            <ProtectedRoute redirectTo="/masterclass/login">
              <MasterClassLayout hideNav><QuizRunner isComprehensive={false} /></MasterClassLayout>
            </ProtectedRoute>
          } />
          <Route path="/masterclass/exam" element={
            <ProtectedRoute redirectTo="/masterclass/login">
              <MasterClassLayout><QuizRunner isComprehensive={true} moduleId="comprehensive" /></MasterClassLayout>
            </ProtectedRoute>
          } />
          <Route path="/masterclass/profile" element={
            <ProtectedRoute redirectTo="/masterclass/login">
              <MasterClassLayout><Profile /></MasterClassLayout>
            </ProtectedRoute>
          } />
          <Route path="/masterclass/leaderboard" element={
            <ProtectedRoute redirectTo="/masterclass/login">
              <MasterClassLayout><Leaderboard /></MasterClassLayout>
            </ProtectedRoute>
          } />

          {/* Skill Testing Pathway */}
          <Route path="/skill-testing" element={
            <ProtectedRoute redirectTo="/skill-testing/login">
              <SkillTestingDashboard />
            </ProtectedRoute>
          } />
          <Route path="/skill-testing/login" element={<Login />} />
          <Route path="/skill-testing/quiz/:assessmentId" element={
            <ProtectedRoute redirectTo="/skill-testing/login">
              <QuizRunner isComprehensive={false} />
            </ProtectedRoute>
          } />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
