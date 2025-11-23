export const userRoles = ["USER", "ADMIN", "PARTNER", "AUTHOR"] as const;

export type UserRole = (typeof userRoles)[number];
