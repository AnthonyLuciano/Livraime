import { UserFromAPI } from "@/types/user.types";
import { createContext } from "react";

interface AuthContextType {
  user: UserFromAPI | null;
  login: (user: UserFromAPI) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
