import { UserRole } from "@/types/role.types";
import { Address } from "./address.type";

/**
 * @deprecated use o "UserFromAPI ao invés"
 */
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
  plano: string | null;
  dataCadastro: string;
  ativo: boolean;
  roles: UserRole[];
}

export interface CreateUserDto {
  nome: string;
  email: string;
  cpf: string;
  senha: string;
  endereco: Address;
  telefone: Phone;
}

export interface Phone {
  areaCode: string;
  number: string;
}

export interface LinkUserToPlan {
  cpf: string;
  Plano: string;
}
