import { userAdapter } from "@/adapters/user.adapter";
import { api } from "@/config/api";
import { CreateUserDto, User, UserFromAPI } from "@/types/user.types";

const userRoutes = {
  get: "/api/usuarios",
  create: "/auth/cadastro",
  update: "/admins/users",
  delete: "/admins/users",
} as const;

const userService = {
  async getAll(): Promise<User[]> {
    const response = await api.get<UserFromAPI[]>(userRoutes.get);
    return response.data.map((user) => userAdapter.toEntity(user));
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
} as const;

export default userService;
