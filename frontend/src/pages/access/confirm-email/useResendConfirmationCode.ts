import { authService } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";

export function useResendEmailConfirmationCode() {
  return useMutation({
    mutationFn: authService.resendEmailConfirmationCode,
  });
}
