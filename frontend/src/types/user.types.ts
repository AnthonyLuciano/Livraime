import { Plan } from "@/types/plan.types";
import { Address } from "@/types/validators/payment.schema";

export interface User {
  id: number;
  name: string;
  cpf: string;
  isActive: boolean;
  address: Address;
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
  endereco: Address;
  telefone: Phone;
  plano: string;
  dataCadastro: string;
  ativo: boolean;
}

export interface CreateUserDto {
  nome: string;
  email: string;
  cpf: string;
  senha: string;
  endereco: Address;
  telefone: Phone;
  plano: Plan;
}

export interface Phone {
  areaCode: string;
  number: string;
}

// type UserRole = "USER";
