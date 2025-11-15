import z from "zod";

export const registerSchema = z.object({
  nome: z.string().trim().min(3, "Nome deve ter no mínimo 3 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  cpf: z
    .string()
    .trim()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido (formato: 000.000.000-00)"),
  senha: z.string().trim().min(8, "Senha deve ter no mínimo 8 caracteres").max(100, "Senha muito longa"),
  telefone: z
    .string()
    .trim()
    .regex(/^\(\d{2}\)\s\d{5}-\d{4}$/, "Telefone inválido (formato: (00) 00000-0000)"),
  endereco: z.object({
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

export type RegisterFormData = z.infer<typeof registerSchema>;
