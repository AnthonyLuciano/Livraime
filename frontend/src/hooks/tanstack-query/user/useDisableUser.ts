import { userQueryKeys } from "@/query-keys/user.keys";
import userService from "@/services/user.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDisableUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userService.disable,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userQueryKeys.getAll(),
      });
    },
  });
}
