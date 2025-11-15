import { Plan } from "@/types/plan.types";

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

export interface CreateUserDto {
  nome: string;
  email: string;
  cpf: string;
  senha: string;
  endereco: string;
  telefone: string;
  plano: Plan;
  dataCadastro: string;
  codigoVerificacao: string;
}

type UserRole = "USER";
