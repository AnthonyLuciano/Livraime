export const userRoles = ["USER"] as const;

export type UserRole = (typeof userRoles)[number];
