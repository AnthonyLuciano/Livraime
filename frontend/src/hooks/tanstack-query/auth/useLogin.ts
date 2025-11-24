import { authService } from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";

export function useLogin() {
  const { mutate: login, isPending } = useMutation({
    mutationFn: authService.login,
  });

  return { login, isPending };
}
