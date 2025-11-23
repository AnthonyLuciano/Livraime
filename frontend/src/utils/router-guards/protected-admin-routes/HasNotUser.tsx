import { toast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function HasNotUser() {
  useEffect(() => {
    toast({
      title: "Redirecionado para página de login",
      description: "É necessário efetuar login para acessar essa página.",
      duration: 5000,
    });
  }, []);

  return <Navigate to="/login" replace />;
}
