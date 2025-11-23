import { userQueryKeys } from "@/query-keys/user.keys";
import userService from "@/services/user.service";
import { Beneficiados } from "@/types/beneficiados.type";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export default function useGetBeneficiariesByUser(userId?: number, options?: UseQueryOptions<Beneficiados, unknown>) {
  return useQuery<Beneficiados, unknown>({
    queryKey: userQueryKeys.getBeneficiariesByUser(userId!),
    queryFn: () => userService.getBeneficiaryByUser(userId!),
    enabled: Boolean(userId),
    ...options,
  });
}
