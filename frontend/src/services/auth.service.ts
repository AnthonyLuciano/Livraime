import { api } from "@/config/api";
import { EmailConfirmationFormData } from "@/types/auth.type";

export const authService = {
  async confirmEmail(data: EmailConfirmationFormData): Promise<string> {
    return await api.post("/auth/confirmar-email", data);
  },

  async resendEmailConfirmationCode(email: string) {
    return await api.post("/auth/reenviar-codigo", null, { params: { email } });
  },
} as const;
