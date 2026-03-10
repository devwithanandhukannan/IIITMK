import { Navigate } from "react-router-dom";
import { useAuth } from "./auth_custom_hook/AuthContext"; 
import Commonlayout from "./layout/Commonlayout";

function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <p>Checking authentication...</p>;

  return isAuthenticated ? <Commonlayout /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;