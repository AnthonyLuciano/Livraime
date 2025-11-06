import { Badge } from "@/components/ui/badge";
import { User } from "@/types/user.types";
import EditUserDialogComponent from "./EditUserDialogComponent";

interface UserRowProps {
  user: User;
  index: number;
}

export default function UserRowComponent({ user }: UserRowProps) {
  return (
    <div className="flex items-center justify-between p-2 rounded-lg border">
      <div className="space-y-1">
        <div className="font-medium">{user.name}</div>
        <div className="text-sm text-muted-foreground">{user.contact.email}</div>
      </div>
      <div className="flex items-center space-x-3">
        <Badge
          variant="outline"
          className={`px-3 py-1 text-sm ${user.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
        >
          {user.isActive ? "Ativo" : "Inativo"}
        </Badge>
        <EditUserDialogComponent user={user} />
      </div>
    </div>
  );
}
