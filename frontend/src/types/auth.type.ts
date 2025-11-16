import { emailConfirmationSchema } from "@/types/validators/email-confirmation.schema";
import z from "zod";

export type EmailConfirmationFormData = z.infer<typeof emailConfirmationSchema>;
