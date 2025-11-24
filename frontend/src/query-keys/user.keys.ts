export const userQueryKeys = {
  getAll: () => ["users"],
  getById: (id: number) => ["user", id],
  getBeneficiariesByUser: (userId: number) => [...userQueryKeys.getById(userId), "beneficiaries"],
} as const;
