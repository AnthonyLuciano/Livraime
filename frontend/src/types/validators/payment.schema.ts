import { planSchema } from "@/types/validators/plan.schema";
import z from "zod";

export const paymentSchema = z.object({
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
