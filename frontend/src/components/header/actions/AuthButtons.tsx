import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function AuthButtons() {
  return (
    <>
      <Link to="/login">
        <Button variant="ghost" size="sm">
          Login
        </Button>
      </Link>
      <Link to="/cadastro">
        <Button variant="outline" size="sm">
          Cadastre-se
        </Button>
      </Link>
    </>
  );
}

export default AuthButtons;
