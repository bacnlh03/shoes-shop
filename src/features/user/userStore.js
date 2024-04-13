import { create } from "zustand";
import UserService from "./userService";

const useUserStore = create((set) => ({
  user: JSON.parse(sessionStorage.getItem('user')) || null,
  isLoading: false,
  getCurrentUser: async () => {
    set({ isLoading: true });

    const user = await UserService.getUser();
    sessionStorage.setItem('user', JSON.stringify(user));
    set({ user: user, isLoading: false });
  }
}));

export default useUserStore;