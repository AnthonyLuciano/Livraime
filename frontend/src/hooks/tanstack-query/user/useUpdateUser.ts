import { EditUserFormData } from "@/pages/admin/components/content/UserListComponent/edit-user.schema";
import userService from "@/services/user.service";
import { UserFromAPI } from "@/types/user.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UpdateUserVariables {
  id: number;
  data: Partial<EditUserFormData>;
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation<UserFromAPI, Error, UpdateUserVariables>({
    mutationFn: ({ id, data }) => userService.update(id, data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
}
