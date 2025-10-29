export interface Partner {
  id: number;
  name: string;
  type: "sebo" | "autor";
  serviceDescription: string;
  contact: {
    email: string;
    phone: string;
  };
  address: string;
  active: boolean;
}

export interface PartnerResponseDTO {
  id: number;
  nome: string;
  tipo: string;
  endereco: string;
  telefone: string;
  email: string;
  descricaoServicos: string;
  ativo: boolean;
}
