import { api } from "@/config/api";
import { CreateUserDto, UserFromAPI } from "@/types/user.types";

const userRoutes = {
  get: "/usuarios",
  create: "/auth/cadastro",
  update: "/admins/users",
  delete: "/admins/users",
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

  async update(id: number, data: Partial<CreateUserDto>): Promise<UserFromAPI> {
    const response = await api.patch<UserFromAPI>(`${userRoutes.update}/${id}`, data);
    return response.data;
  },

  async disable(id: number): Promise<void> {
    await api.patch(`${userRoutes.delete}/${id}/disable`);
  },

  async enable(id: number): Promise<void> {
    await api.patch(`${userRoutes.delete}/${id}/enable`);
  },
} as const;

export default userService;
