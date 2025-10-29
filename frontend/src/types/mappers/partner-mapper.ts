import { Partner, PartnerResponseDTO } from "../partner.types";

export const partnerMapper = {
  toAPI(entity: Partner): PartnerResponseDTO {
    return {
      id: entity.id,
      nome: entity.name,
      tipo: entity.type,
      endereco: entity.address,
      telefone: entity.contact.phone,
      email: entity.contact.email,
      descricaoServicos: entity.serviceDescription,
      ativo: entity.active,
    };
  },

  toEntity(apiObject: PartnerResponseDTO): Partner {
    return {
      id: apiObject.id,
      name: apiObject.nome,
      type: apiObject.tipo as "sebo" | "autor",
      address: apiObject.endereco,
      contact: {
        phone: apiObject.telefone,
        email: apiObject.email,
      },
      serviceDescription: apiObject.descricaoServicos,
      active: apiObject.ativo,
    };
  },
} as const;
