import { auth } from "@/auth/auth";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { LogOut } from "lucide-react";

function LogoutButton() {
  function handleSignOut() {
    auth.removeUser();
    window.location.reload();
  }

  return (
    <Popover>
      <PopoverTrigger>
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
