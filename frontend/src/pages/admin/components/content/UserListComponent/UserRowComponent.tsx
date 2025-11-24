import { Badge } from "@/components/ui/badge";
import { UserFromAPI } from "@/types/user.types";
import EditUserDialogComponent from "./EditUserDialogComponent";

interface UserRowProps {
  user: UserFromAPI;
  index: number;
}

export default function UserRowComponent({ user }: UserRowProps) {
  return (
    <div className="flex items-center justify-between p-2 rounded-lg border">
      <div className="space-y-1">
        <div className="font-medium">{user.nome}</div>
        <div className="text-sm text-muted-foreground">{user.email}</div>
      </div>
      <div className="flex items-center space-x-3">
        <Badge
          variant="outline"
          className={`px-3 py-1 text-sm ${user.ativo ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
        >
          {user.ativo ? "Ativo" : "Inativo"}
        </Badge>
        <EditUserDialogComponent user={user} />
      </div>
    </div>
  );
}
