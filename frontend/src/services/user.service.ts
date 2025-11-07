import { userAdapter } from "@/adapters/user.adapter";
import { api } from "@/config/api";
import { CreateUserDto, User, UserFromAPI } from "@/types/user.types";

const userRoute = "/usuarios";
const adminRoute = "/admins/users";

const userService = {
  async getAll(): Promise<User[]> {
    const response = await api.get<UserFromAPI[]>(userRoute);
    return response.data.map((user) => userAdapter.toEntity(user));
  },

  async create(data: CreateUserDto): Promise<UserFromAPI> {
    const response = await api.post<UserFromAPI>(userRoute, data);
    return response.data;
  },

  async update(id: number, data: Partial<CreateUserDto>): Promise<UserFromAPI> {
    const response = await api.patch<UserFromAPI>(`${adminRoute}/${id}`, data);
    return response.data;
  },

  async disable(id: number): Promise<void> {
    await api.patch(`${adminRoute}/${id}/disable`);
  },
} as const;

export default userService;
