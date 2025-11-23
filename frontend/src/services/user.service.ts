import { api } from "@/config/api";
import { EditUserFormData } from "@/pages/admin/components/content/UserListComponent/edit-user.schema";
import { Beneficiados } from "@/types/beneficiados.type";
import { CreateUserDto, LinkUserToPlan, UserFromAPI } from "@/types/user.types";

const userRoutes = {
  get: "/usuarios",
  create: "/auth/cadastro",
  update: "/admins/users",
  delete: "/admins/users",
  linkToPlan: "/planos/vincular",
  getBeneficiaryByUser: "/usuarios/GetBeneficiadosByUser",
} as const;

const userService = {
  async getAll(): Promise<UserFromAPI[]> {
    const response = await api.get<UserFromAPI[]>(userRoutes.get);
    return response.data;
  },

  async create(data: CreateUserDto): Promise<UserFromAPI> {
    const response = await api.post<UserFromAPI>(userRoutes.create, data);
    return response.data;
  },

  async update(id: number, data: Partial<EditUserFormData>): Promise<UserFromAPI> {
    const response = await api.patch<UserFromAPI>(`${userRoutes.update}/${id}`, data);
    return response.data;
  },

  async disable(id: number): Promise<void> {
    await api.patch(`${userRoutes.delete}/${id}/disable`);
  },

  async enable(id: number): Promise<void> {
    await api.patch(`${userRoutes.delete}/${id}/enable`);
  },

  async linkPlan(request: LinkUserToPlan): Promise<string> {
    const response = await api.post<string>(userRoutes.linkToPlan, request);
    return response.data;
  },

  async getBeneficiaryByUser(id: number): Promise<Beneficiados> {
    const response = await api.get(`${userRoutes.getBeneficiaryByUser}/${id}`);
    return response.data;
  },
};

export default userService;
