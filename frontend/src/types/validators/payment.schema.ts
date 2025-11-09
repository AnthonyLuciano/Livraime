import { planSchema } from "@/types/validators/plan.schema";
import z from "zod";

export const paymentSchema = z.object({
  name: z.string().trim().min(3, "Nome deve ter no mínimo 3 caracteres").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
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
  plan: planSchema,
});

export type PaymentFormData = z.infer<typeof paymentSchema>;
