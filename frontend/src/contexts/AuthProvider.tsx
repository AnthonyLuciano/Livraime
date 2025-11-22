import { AuthContext } from "@/contexts/AuthContext";
import { UserFromAPI } from "@/types/user.types";
import { useEffect, useState } from "react";

export function AuthProvider({ children }) {
  const [user, setUser] = useState<UserFromAPI | null>(null);
  const [loading, setLoading] = useState(true); // <<< aqui

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) {
      setUser(JSON.parse(saved));
    }

    setLoading(false);
  }, []);

  function login(user: UserFromAPI) {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }

  function logout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading: loading }}>{children}</AuthContext.Provider>;
}
