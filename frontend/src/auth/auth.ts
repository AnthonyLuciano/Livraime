import { UserFromAPI } from "@/types/user.types";

export const auth = {
  getUser(): UserFromAPI | null {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) return null;

    const user: UserFromAPI = JSON.parse(storedUser);
    return user;
  },

  storeUser(user: UserFromAPI): void {
    localStorage.setItem("user", JSON.stringify(user));
  },

  removeUser() {
    localStorage.removeItem("user");
  },
};
