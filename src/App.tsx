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
import { GlobalLayout } from "./components/GlobalLayout";
import { getUserProfile } from "./utils/storage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute = ({ element }: { element: React.ReactNode }) => {
  return getUserProfile() ? element : <Navigate to="/login" replace />;
};

const App = () => {
  const isLoggedIn = getUserProfile();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {!isLoggedIn ? (
          // Login page without global nav
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        ) : (
          // App with global nav
          <GlobalLayout>
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
              
              {/* MasterClass Protected Routes */}
              <Route path="/masterclass/dashboard" element={<MasterClassLayout><Dashboard /></MasterClassLayout>} />
              <Route path="/masterclass/module/:moduleId" element={<MasterClassLayout hideNav><ModuleReader /></MasterClassLayout>} />
              <Route path="/masterclass/quiz/:moduleId" element={<MasterClassLayout hideNav><QuizRunner isComprehensive={false} /></MasterClassLayout>} />
              <Route path="/masterclass/exam" element={<MasterClassLayout><QuizRunner isComprehensive={true} moduleId="comprehensive" /></MasterClassLayout>} />
              <Route path="/masterclass/profile" element={<MasterClassLayout><Profile /></MasterClassLayout>} />
              <Route path="/masterclass/leaderboard" element={<MasterClassLayout><Leaderboard /></MasterClassLayout>} />

              {/* Skill Testing Pathway */}
              <Route path="/skill-testing" element={<SkillTestingDashboard />} />
              <Route path="/skill-testing/quiz/:assessmentId" element={<QuizRunner isComprehensive={false} />} />

              {/* Fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </GlobalLayout>
        )}
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
