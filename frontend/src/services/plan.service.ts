import { api } from "@/config/api";
import { PlanFromAPI } from "@/types/plan.types";

export const planService = {
  async getAll(): Promise<PlanFromAPI[]> {
    const response = await api.get("/planos");
    return response.data;
  },
} as const;
