import { toast } from "@/hooks/use-toast";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function IsNotAdmin() {
  useEffect(() => {
    toast({
      title: "Acesso negado",
      description: "Você precisa ser administrador para acessar essa página.",
      duration: 3000,
    });
  }, []);

  return <Navigate to="/" replace />;
}
