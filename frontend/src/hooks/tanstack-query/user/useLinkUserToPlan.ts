import { userQueryKeys } from "@/query-keys/user.keys";
import userService from "@/services/user.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useLinkUserToPlan() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userService.linkPlan,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userQueryKeys.getAll() });
    },
  });
}
