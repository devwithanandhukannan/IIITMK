import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await fetch("api/logout", {
          method: "POST",
          credentials: "include",
        });

        navigate("/login");
      } catch (error) {
        console.error("Logout failed:", error);
        navigate("/login"); // fallback
      }
    };

    logout();
  }, []);

  return null;
};

export default Logout;