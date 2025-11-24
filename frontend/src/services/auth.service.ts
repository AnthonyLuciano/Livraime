import { api } from "@/config/api";
import { EmailConfirmationFormData } from "@/types/auth.type";
import { LoginFormData, LoginResponse } from "@/types/login.type";

export const authService = {
  async login(request: LoginFormData): Promise<LoginResponse> {
    const response = await api.post<LoginResponse>("/auth/login", request);
    return response.data;
  },

  async confirmEmail(data: EmailConfirmationFormData): Promise<string> {
    const response = await api.post<string>("/auth/confirmar-email", data);
    return response.data;
  },

  async resendEmailConfirmationCode(email: string) {
    return await api.post<void>("/auth/reenviar-codigo", null, { params: { email } });
  },
  async forgotPassword(email: string) {
    return await api.post("/auth/forgot-password", null, { params: { email } });
  },

  async resetPassword(data: { email: string; code: string; newPassword: string }) {
    return await api.post("/auth/reset-password", data);
  },
} as const;
