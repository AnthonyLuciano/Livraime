import { z } from "zod";

export const emailConfirmationSchema = z.object({
  email: z.string().email("Email inválido."),
  code: z.string().min(6, "O token deve conter 6 dígitos."),
});
