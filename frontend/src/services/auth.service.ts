import { api } from "@/config/api";
import { EmailConfirmationFormData } from "@/types/auth.type";
import { LoginFormData, LoginResponse } from "@/types/login.type";

export const authService = {
  async login(request: LoginFormData): Promise<LoginResponse> {
    return await api.post("/auth/login", request);
  },

  async confirmEmail(data: EmailConfirmationFormData): Promise<string> {
    return await api.post("/auth/confirmar-email", data);
  },

  async resendEmailConfirmationCode(email: string) {
    return await api.post("/auth/reenviar-codigo", null, { params: { email } });
  },
  async forgotPassword(email: string) {
    return await api.post("/auth/forgot-password", null, { params: { email } });
  },

  async resetPassword(data: { email: string; code: string; newPassword: string }) {
    return await api.post("/auth/reset-password", data);
  },
} as const;
