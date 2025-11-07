import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetAllUsers } from "@/hooks/tanstack/user/use-get-all-users";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { useEffect } from "react";
import UserRowComponent from "./UserRowComponent";

export default function UserListComponent() {
  const { data, isPending, error } = useGetAllUsers();
  const { toast } = useToast();

  useEffect(() => {
    if (error) {
      toast({
        title: "Erro na busca",
        description: `Ocorreu um erro ao buscar os usuários: ${
          axios.isAxiosError(error) && error.response ? error.response : error.message ?? "Erro desconhecido"
        }`,
      });
    }
  }, [error, toast]);

  if (isPending) return <div className="text-center">Carregando...</div>;

  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Gerenciar Usuários</CardTitle>
              <CardDescription>Visualize e gerencie todos os usuários da plataforma</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {data?.map((user, index) => <UserRowComponent key={index} user={user} index={index} />) ?? []}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
