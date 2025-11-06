import { Shield } from "lucide-react";

export default function AdminHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Dashboard <span className="text-primary">Administrativo</span>
        </h1>
        <p className="text-muted-foreground">Gerencie usuários, assinaturas e parceiros da plataforma</p>
      </div>
      <Shield className="h-8 w-8 text-primary" />
    </div>
  );
}
