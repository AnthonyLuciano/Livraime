import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useHasUser } from "@/hooks/useHasUser";
import { CreditCard, Heart, User } from "lucide-react";

export function TabOptions() {
  const { hasUser } = useHasUser();

  return (
    <>
      <TabsList className="grid w-full grid-cols-3 lg:w-fit lg:mx-auto">
        <TabsTrigger value="planos" className="flex items-center space-x-2">
          <CreditCard className="h-4 w-4" />
          <span className="hidden sm:inline">Planos</span>
        </TabsTrigger>
        {hasUser && <UserActions />}
      </TabsList>
    </>
  );
}

function UserActions() {
  return (
    <>
      <TabsTrigger value="beneficiarios" className="flex items-center space-x-2">
        <Heart className="h-4 w-4" />
        <span className="hidden sm:inline">Beneficiários</span>
      </TabsTrigger>
      <TabsTrigger value="perfil" className="flex items-center space-x-2">
        <User className="h-4 w-4" />
        <span className="hidden sm:inline">Perfil</span>
      </TabsTrigger>
    </>
  );
}
