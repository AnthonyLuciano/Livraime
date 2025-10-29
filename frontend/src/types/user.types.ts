export interface User {
  id: number;
  name: string;
  cpf: string;
  isActive: boolean;
  address: string;
  plan: string;
  registerDate: Date;
  contact: {
    email: string;
    phone: string;
  };
}

export interface UserFromAPI {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  endereco: string;
  telefone: string;
  plano: string;
  dataCadastro: string;
  ativo: boolean;
}
