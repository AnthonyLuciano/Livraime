export interface PartnerRequest {
  id: number;
  name: string;
  type: "sebo" | "autor";
  serviceDescription: string;
  contact: {
    email: string;
    phone: string;
  };
  address: string;
  status: "pendente" | "aprovado" | "rejeitado";
  submittedAt: string;
}
