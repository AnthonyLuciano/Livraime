import z from "zod";

export const addressSchema = z.object({
  address: z.object({
    street: z.string().trim().min(3, "Rua deve ter no mínimo 3 caracteres").max(100, "Rua muito longa"),
    number: z.string().trim().min(1, "Número deve ter no mínimo 1 caractere").max(10, "Número muito longo"),
    complement: z.string().trim().max(100, "Complemento muito longo").optional(),
    neighborhood: z.string().trim().min(3, "Bairro deve ter no mínimo 3 caracteres").max(100, "Bairro muito longo"),
    city: z.string().trim().min(3, "Cidade deve ter no mínimo 3 caracteres").max(100, "Cidade muito longa"),
    state: z.string().trim().length(2, "Estado deve ter 2 caracteres"),
    zipCode: z
      .string()
      .trim()
      .regex(/^\d{5}-\d{3}$/, "CEP inválido (formato: 00000-000)"),
  }),
});
