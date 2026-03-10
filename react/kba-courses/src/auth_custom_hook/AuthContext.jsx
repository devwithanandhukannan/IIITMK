import { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  const verifyUser = useCallback(async () => {
    try {
      const res = await fetch("/api/verify_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (res.ok) {
        const data = await res.json();
        setIsAuthenticated(true);
        setUserData(data.user);
      } else {
        setIsAuthenticated(false);
        setUserData(null);
      }
    } catch (error) {
      console.error(error);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    verifyUser();
  }, [verifyUser]);

  const value = useMemo(() => ({
    isAuthenticated,
    loading,
    userData,
    verifyUser
  }), [isAuthenticated, loading, userData, verifyUser]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};



// const value = useMemo(() => {
//   console.log("Running...");
//   return num * 2;
// }, [num]);

// Flow:

// num = 5
// render → "Running..." printed

// num = 5 again
// render → cached value used (no log)

// num = 10
// render → "Running..." printed again

// So:

// Dependency changed → recompute
// Dependency same → reuse cached value