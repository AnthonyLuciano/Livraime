import { emailConfirmationSchema } from "@/pages/access/register/email-confirmation.schema";
import z from "zod";

export type EmailConfirmationFormData = z.infer<typeof emailConfirmationSchema>;
