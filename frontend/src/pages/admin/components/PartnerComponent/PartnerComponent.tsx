import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Partner } from "@/types/partner.types";
import { useState } from "react";
import CreatePartnerDialogComponent from "./CreatePartnerDialogComponent";
import PartnerRowComponent from "./PartnerRowComponent";

export default function PartnerComponent() {
  const [partners, setPartners] = useState<Partner[]>([
    {
      id: 1,
      name: "Sebo Cultura Viva",
      type: "sebo",
      serviceDescription: "Venda e troca de livros usados",
      contact: {
        email: "contato@culturaviva.com",
        phone: "(11) 99999-9999",
      },
      address: "Rua dos Livros, 45 - São Paulo/SP",
      active: true,
    },
    {
      id: 2,
      name: "João Escritor",
      type: "autor",
      serviceDescription: "Autor independente de ficção científica",
      contact: {
        email: "joaoautor@email.com",
        phone: "(11) 98888-8888",
      },
      address: "Av. das Letras, 123 - São Paulo/SP",
      active: false,
    },
  ]);

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
          {partners.map((partner) => (
            <PartnerRowComponent key={partner.id} partner={partner} onUpdate={handleUpdatePartner} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
