import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { AuthContext } from "@/contexts/AuthContext";
import { PopoverClose } from "@radix-ui/react-popover";
import { LogOut } from "lucide-react";
import { useContext } from "react";

function LogoutButton() {
  const { logout } = useContext(AuthContext);

  function handleSignOut() {
    logout();
    window.location.reload();
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm">
          <LogOut className="h-4 w-4 mr-2" />
          Sair
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4">
        <div className="flex flex-col gap-4">
          <p className="text-sm">Tem certeza que deseja sair?</p>
          <div className="flex justify-end gap-2">
            <PopoverClose asChild>
              <Button variant="ghost" size="sm">
                Não
              </Button>
            </PopoverClose>
            <Button variant="destructive" size="sm" onClick={handleSignOut}>
              Sim
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default LogoutButton;
