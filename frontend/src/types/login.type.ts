import { UserFromAPI } from "@/types/user.types";
import { loginSchema } from "@/types/validators/login.schema";
import z from "zod";

export type LoginFormData = z.infer<typeof loginSchema>;

export interface LoginResponse {
  user?: UserFromAPI;
  message: string;
}
