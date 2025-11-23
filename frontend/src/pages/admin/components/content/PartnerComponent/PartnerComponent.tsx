import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Partner, PartnerResponseDTO } from "@/types/partner.types";
import { useEffect, useState } from "react";
import CreatePartnerDialogComponent from "./CreatePartnerDialogComponent";
import PartnerRowComponent from "./PartnerRowComponent";
import PartnerRequestsList from "../PartnerResquestComponent/PartnerRequestsList";
import { api } from "@/config/api";

export default function PartnerComponent() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPartners();
  }, []);

  async function fetchPartners() {
    try {
      setLoading(true);
      const resp = await api.get<PartnerResponseDTO[]>("/api/parceiros");
      const data = resp.data;
      const mapped: Partner[] = data.map((p) => ({
        id: p.id,
        name: p.nome,
        type: p.tipo === "autor" ? "autor" : "sebo",
        serviceDescription: p.descricaoServicos || "",
        contact: {
          email: p.email || "",
          phone: p.telefone || "",
        },
        address: p.endereco || "",
        active: Boolean((p as any).active ?? (p as any).ativo ?? false),
      }));
      setPartners(mapped);
    } catch (err: any) {
      console.error("Erro ao buscar parceiros:", err);
      setError(err?.response?.data || err.message || "Erro ao buscar parceiros");
    } finally {
      setLoading(false);
    }
  }

  function handleAddPartner(newPartner: Partner) {
    setPartners((prev) => [...prev, newPartner]);
  }

  function handleUpdatePartner(updatedPartner: Partner) {
    setPartners((prev) => prev.map((p) => (p.id === updatedPartner.id ? updatedPartner : p)));
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Gerenciar Parceiros</CardTitle>
            <CardDescription>Visualize, cadastre e edite parcerias da plataforma</CardDescription>
          </div>
          <CreatePartnerDialogComponent onCreate={handleAddPartner} />
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <h4 className="font-semibold">Solicitações de Parceiros</h4>
          <PartnerRequestsList />
          <hr />
          {loading && <p>Carregando parceiros...</p>}
          {error && <p className="text-red-600">Erro: {error}</p>}
          {!loading && partners.length === 0 && <p className="text-muted-foreground">Nenhum parceiro cadastrado</p>}
          {partners.map((partner) => (
            <PartnerRowComponent key={partner.id} partner={partner} onUpdate={handleUpdatePartner} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
