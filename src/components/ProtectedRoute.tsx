import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "@/utils/storage";

interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo: string;
}

export const ProtectedRoute = ({ children, redirectTo }: ProtectedRouteProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const profile = getUserProfile();
    if (!profile) {
      navigate(redirectTo, { replace: true });
    }
  }, [navigate, redirectTo]);

  // Only render children if user is authenticated
  const profile = getUserProfile();
  if (!profile) {
    return null;
  }

  return <>{children}</>;
};
