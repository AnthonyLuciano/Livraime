import { planSchema } from "@/types/validators/plan.schema";
import z from "zod";

export const paymentSchema = z.object({
  name: z.string().trim().min(3, "Nome deve ter no mínimo 3 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  password: z.string().trim().min(8, "Senha deve ter no mínimo 8 caracteres").max(100, "Senha muito longa"),
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
  cpf: z
    .string()
    .trim()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido (formato: 000.000.000-00)"),
  cardNumber: z
    .string()
    .trim()
    .regex(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, "Número do cartão inválido (formato: 0000 0000 0000 0000)"),
  cardName: z.string().trim().min(3, "Nome no cartão deve ter no mínimo 3 caracteres").max(100),
  expiryDate: z
    .string()
    .trim()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Data inválida (formato: MM/AA)"),
  cvv: z
    .string()
    .trim()
    .regex(/^\d{3,4}$/, "CVV inválido (3 ou 4 dígitos)"),
  plan: planSchema.optional().refine((value) => value !== undefined, { message: "Selecione um plano" }),
});

export type PaymentFormData = z.infer<typeof paymentSchema>;
