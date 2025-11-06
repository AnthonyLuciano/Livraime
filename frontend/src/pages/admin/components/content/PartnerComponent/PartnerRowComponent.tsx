import { Badge } from "@/components/ui/badge";
import { Partner } from "@/types/partner.types";
import EditPartnerDialog from "./EditPartnerDialog";

interface PartnerRowProps {
  partner: Partner;
  onUpdate: (partner: Partner) => void;
}

export default function PartnerRowComponent({ partner, onUpdate }: PartnerRowProps) {
  return (
    <div className="flex items-center justify-between p-2 rounded-lg border">
      <div className="space-y-1">
        <div className="font-medium">{partner.name}</div>
        <div className="text-sm text-muted-foreground">{partner.contact.email}</div>
        <div className="text-xs text-muted-foreground">{partner.type === "sebo" ? "Sebo" : "Autor Independente"}</div>
      </div>

      <div className="flex items-center space-x-3">
        <Badge
          variant="outline"
          className={`px-3 py-1 text-sm ${partner.active ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
        >
          {partner.active ? "Ativo" : "Inativo"}
        </Badge>
        <EditPartnerDialog partner={partner} onUpdate={onUpdate} />
      </div>
    </div>
  );
}
