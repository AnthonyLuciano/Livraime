import z from "zod";

export const planSchema = z.object({
  nivel: z.enum(["BASICO", "INTERMEDIARIO", "PREMIUM"]),
  valor: z.number(),
  beneficios: z.array(
    z.object({
      nome: z.string(),
      descricao: z.string(),
    })
  ),
});
