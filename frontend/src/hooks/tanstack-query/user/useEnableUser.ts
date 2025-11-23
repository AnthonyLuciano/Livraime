import userService from "@/services/user.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useEnableUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => userService.enable(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
