import { create } from "zustand";
import UserService from "./userService";

const useUserStore = create((set) => ({
  user: null,
  getCurrentUser: async () => {
    const user = await UserService.getUser();
    set({ user: user });
  }
}));

export default useUserStore;