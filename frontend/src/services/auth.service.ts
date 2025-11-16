import { api } from "@/config/api";
import { EmailConfirmationFormData } from "@/types/auth.type";

export const authService = {
  confirmEmail: async (data: EmailConfirmationFormData): Promise<string> => {
    return await api.post("/auth/confirmar-email", data);
  },
} as const;
