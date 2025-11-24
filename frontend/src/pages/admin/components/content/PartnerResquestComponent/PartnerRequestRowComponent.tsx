import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PartnerRequest } from "@/types/partnerRequest.types";
import { Check, Mail, MapPin, Phone, X } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PartnerRequestRowComponentProps {
  request: PartnerRequest;
  onUpdate: (request: PartnerRequest) => void;
}

export default function PartnerRequestRowComponent({
  request,
  onUpdate,
}: PartnerRequestRowComponentProps) {
  const isPending = request.status === "pendente";

  const handleApprove = () => {
    onUpdate({ ...request, status: "aprovado" });
  };

  const handleReject = () => {
    onUpdate({ ...request, status: "rejeitado" });
  };

  const statusColors = {
    pendente: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
    aprovado: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
    rejeitado: "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20",
  };

  const statusLabels = {
    pendente: "Pendente",
    aprovado: "Aprovado",
    rejeitado: "Rejeitado",
  };

  return (
    <Card className={isPending ? "border-primary/50" : ""}>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg">{request.name}</h3>
                <p className="text-sm text-muted-foreground">
                  Enviado em {format(new Date(request.submittedAt), "dd 'de' MMMM 'de' yyyy 'às' HH:mm", { locale: ptBR })}
                </p>
              </div>
              <Badge variant="outline" className={statusColors[request.status]}>
                {statusLabels[request.status]}
              </Badge>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{request.type === "sebo" ? "Sebo" : "Autor"}</Badge>
            </div>

            <p className="text-sm text-muted-foreground">{request.serviceDescription}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>{request.contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{request.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground md:col-span-2">
                <MapPin className="h-4 w-4" />
                <span>{request.address}</span>
              </div>
            </div>
          </div>

          {isPending && (
            <div className="flex flex-row md:flex-col gap-2">
              <Button
                onClick={handleApprove}
                className="flex-1 md:flex-initial"
                size="sm"
                variant="default"
              >
                <Check className="h-4 w-4 mr-2" />
                Aprovar
              </Button>
              <Button
                onClick={handleReject}
                className="flex-1 md:flex-initial"
                size="sm"
                variant="destructive"
              >
                <X className="h-4 w-4 mr-2" />
                Rejeitar
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}