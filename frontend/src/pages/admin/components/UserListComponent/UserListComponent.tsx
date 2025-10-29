import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "@/types/user.types";
import UserRowComponent from "./UserRowComponent";

export default function UserListComponent() {
  const mockUsers: User[] = [
    {
      name: "Maria Silva",
      contact: {
        email: "maria@email.com",
        phone: "",
      },
      address: "Av. Brasil, 123",
      cpf: "123.456.789-00",
      id: 0,
      plan: "Premium",
      registerDate: new Date(),
      isActive: true,
    },
    {
      name: "João Santos",
      contact: {
        email: "joao@email.com",
        phone: "",
      },
      address: "Av. Brasil, 456",
      cpf: "987.654.321-00",
      id: 1,
      plan: "Basico",
      registerDate: new Date(),
      isActive: false,
    },
  ];

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
          <div className="space-y-4">
            {mockUsers.map((user, index) => (
              <UserRowComponent key={index} user={user} index={index} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
