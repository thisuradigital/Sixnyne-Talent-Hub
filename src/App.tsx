import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import { AppLayout } from "./components/AppLayout";
import { getUserProfile } from "./utils/storage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<AppLayout><Homepage /></AppLayout>} />

          {/* Job Application Pathway */}
          <Route path="/jobs" element={<AppLayout><JobListings /></AppLayout>} />
          <Route path="/jobs/:jobId" element={<AppLayout><JobDetails /></AppLayout>} />
          <Route path="/jobs/:jobId/apply" element={<AppLayout><JobApplication /></AppLayout>} />

          {/* Company Info */}
          <Route path="/company" element={<AppLayout><CompanyInfo /></AppLayout>} />

          {/* Profile - Platform-wide */}
          <Route path="/profile" element={<AppLayout requireAuth><Profile /></AppLayout>} />

          {/* MasterClass Pathway */}
          <Route path="/masterclass" element={<AppLayout><MasterClassHub /></AppLayout>} />
          <Route path="/masterclass/login" element={<Login />} />

          {/* MasterClass Protected Routes */}
          <Route path="/masterclass/dashboard" element={<MasterClassLayout><Dashboard /></MasterClassLayout>} />
          <Route path="/masterclass/module/:moduleId" element={<MasterClassLayout hideNav><ModuleReader /></MasterClassLayout>} />
          <Route path="/masterclass/quiz/:moduleId" element={<MasterClassLayout hideNav><QuizRunner isComprehensive={false} /></MasterClassLayout>} />
          <Route path="/masterclass/exam" element={<MasterClassLayout><QuizRunner isComprehensive={true} moduleId="comprehensive" /></MasterClassLayout>} />
          <Route path="/masterclass/profile" element={<MasterClassLayout><Profile /></MasterClassLayout>} />
          <Route path="/masterclass/leaderboard" element={<MasterClassLayout><Leaderboard /></MasterClassLayout>} />

          {/* Skill Testing Pathway */}
          <Route path="/skill-testing" element={<AppLayout requireAuth redirectTo="/skill-testing/login">{getUserProfile() ? <SkillTestingDashboard /> : <Navigate to="/skill-testing/login" replace />}</AppLayout>} />
          <Route path="/skill-testing/login" element={<Login />} />
          <Route path="/skill-testing/quiz/:assessmentId" element={<AppLayout hideNav><QuizRunner isComprehensive={false} /></AppLayout>} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
