import { UserFromAPI } from "@/types/user.types";

export const auth = {
  getUser(): UserFromAPI {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) throw new Error("User not found!");

    return user;
  },

  storeUser(user: UserFromAPI): void {
    localStorage.setItem("user", JSON.stringify(user));
  },
};
