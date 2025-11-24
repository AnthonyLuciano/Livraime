import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/config/api";

export function useDisablePartner() {
  const queryClient = useQueryClient();

  return useMutation({
    // use admin route to match backend AdminController: /api/admins/partners/{id}/disable
    mutationFn: (id: number) => api.patch(`/admins/partners/${id}/disable`),
    onSuccess: () => {
      // Invalidate partners queries if added later
      queryClient.invalidateQueries({ queryKey: ["partners"] });
    },
  });
}
