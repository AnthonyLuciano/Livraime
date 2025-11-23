import { useEffect, useState } from "react";
import PartnerRequestRowComponent from "./PartnerRequestRowComponent";
import { PartnerRequest } from "@/types/partnerRequest.types";
import { api } from "@/config/api";

export default function PartnerRequestsList() {
  const [requests, setRequests] = useState<PartnerRequest[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRequests();
  }, []);

  async function fetchRequests() {
    try {
      setLoading(true);
      const resp = await api.get("/api/parceiros");
      const data = resp.data as any[];
      // map backend Parceiro -> PartnerRequest
      const mapped: PartnerRequest[] = data.map((p) => ({
        id: p.id,
        name: p.nome,
        type: p.tipo === "autor" ? "autor" : "sebo",
        serviceDescription: p.descricaoServicos || "",
        contact: {
          email: p.email || "",
          phone: p.telefone || "",
        },
        address: p.endereco || "",
        status: p.active ? "aprovado" : "pendente",
        submittedAt: p.createdAt,
      }));

      // only pending and recently submitted (treat active=false as requests)
      setRequests(mapped.filter((r) => r.status === "pendente"));
    } catch (err) {
      console.error("Erro ao buscar solicitações de parceiro", err);
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdate(updated: PartnerRequest) {
    try {
      const status = updated.status; // aprovado | rejeitado
      await api.put(`/api/parceiros/${updated.id}/status`, { status });
      // refresh list
      fetchRequests();
    } catch (err) {
      console.error("Erro ao atualizar status da solicitação", err);
    }
  }

  if (loading) return <p>Carregando solicitações...</p>;

  return (
    <div className="space-y-4">
      {requests.length === 0 && <p className="text-sm text-muted-foreground">Nenhuma solicitação pendente</p>}
      {requests.map((r) => (
        <PartnerRequestRowComponent key={r.id} request={r} onUpdate={handleUpdate} />
      ))}
    </div>
  );
}
