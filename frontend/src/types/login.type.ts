import { loginSchema } from "@/types/validators/login.schema";
import z from "zod";

export type LoginFormData = z.infer<typeof loginSchema>;
