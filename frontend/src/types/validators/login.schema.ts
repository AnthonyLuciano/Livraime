import z from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter no mínimo 6 caracteres." })
    .max(20, { message: "A senha deve ter no máximo 20 caracteres." }),
});
