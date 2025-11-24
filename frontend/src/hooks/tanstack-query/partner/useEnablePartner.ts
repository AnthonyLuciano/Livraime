import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/config/api";

export function useEnablePartner() {
  const queryClient = useQueryClient();

  return useMutation({

    mutationFn: (id: number) => api.patch(`/admins/partners/${id}/enable`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["partners"] });
    },
  });
}
