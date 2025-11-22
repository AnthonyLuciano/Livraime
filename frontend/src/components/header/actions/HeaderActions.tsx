import { auth } from "@/auth/auth";
import AuthButtons from "@/components/header/actions/AuthButtons";
import LogoutButton from "@/components/header/actions/LogoutButton";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeaderActions() {
  const hasUser = !!auth.getUser();

  return (
    <div className="hidden md:flex items-center space-x-4">
      {hasUser ? <LogoutButton /> : <AuthButtons />}
      <Link to="/assinante">
        <Button size="sm" className="bg-gradient-secondary hover:opacity-90 shadow-button">
          <Heart className="h-4 w-4 mr-2" />
          Assine Agora
        </Button>
      </Link>
    </div>
  );
}
