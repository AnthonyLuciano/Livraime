import { userQueryKeys } from "@/query-keys/user.keys";
import userService from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";

export function useGetAllUsers() {
  return useQuery({
    queryKey: userQueryKeys.getAll(),
    queryFn: userService.getAll,
  });
}
