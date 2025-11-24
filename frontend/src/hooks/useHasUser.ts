import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

export function useHasUser() {
  const { user } = useContext(AuthContext);
  const hasUser = !!user;

  return {
    hasUser,
  };
}
