import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

export function ProfileContent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Configurações do Perfil</CardTitle>
        <CardDescription>Gerencie suas informações pessoais e preferências</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="text-center text-muted-foreground">
            <User className="h-12 w-12 mx-auto mb-4" />
            <p>Área de gerenciamento de perfil em desenvolvimento.</p>
            <p className="text-sm mt-2">
              Em breve você poderá editar suas informações, alterar senha e configurar preferências de notificação.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
