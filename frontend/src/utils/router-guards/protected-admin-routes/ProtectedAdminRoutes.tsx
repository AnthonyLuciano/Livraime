import { Skeleton } from "@/components/ui/skeleton";
import { AuthContext } from "@/contexts/AuthContext";
import HasNotUser from "@/utils/router-guards/protected-admin-routes/HasNotUser";
import IsNotAdmin from "@/utils/router-guards/protected-admin-routes/IsNotAdmin";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

export default function ProtectedAdminRoutes() {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) return <Skeleton />;
  if (!user) return <HasNotUser />;

  const isAdmin = user.roles.some((role) => role === "ADMIN");
  return isAdmin ? <Outlet /> : <IsNotAdmin />;
}
