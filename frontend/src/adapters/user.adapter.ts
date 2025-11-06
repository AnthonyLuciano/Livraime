import { User, UserFromAPI } from "../types/user.types";

export const userAdapter = {
  toAPI(entity: User): UserFromAPI {
    return {
      id: entity.id,
      cpf: entity.cpf,
      nome: entity.name,
      email: entity.contact.email,
      telefone: entity.contact.phone,
      endereco: entity.address,
      plano: entity.plan,
      dataCadastro: entity.registerDate.toISOString(),
      ativo: entity.isActive,
    };
  },

  toEntity(apiObject: UserFromAPI): User {
    return {
      id: apiObject.id,
      cpf: apiObject.cpf,
      name: apiObject.nome,
      contact: {
        email: apiObject.email,
        phone: apiObject.telefone,
      },
      address: apiObject.endereco,
      plan: apiObject.plano,
      registerDate: new Date(apiObject.dataCadastro),
      isActive: apiObject.ativo,
    };
  },
} as const;
