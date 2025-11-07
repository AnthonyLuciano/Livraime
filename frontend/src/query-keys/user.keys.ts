export const userQueryKeys = {
  getAll: () => ["users"],
  getById: (id: number) => ["user", id],
} as const;
