import { planQueryKeys } from "@/query-keys/plan.keys";
import { planService } from "@/services/plan.service";
import { useQuery } from "@tanstack/react-query";

export function useGetAllPlans() {
  return useQuery({
    queryKey: planQueryKeys.getAll(),
    queryFn: planService.getAll,
    refetchOnWindowFocus: false,
  });
}
