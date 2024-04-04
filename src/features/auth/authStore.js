import { create } from "zustand";
import AuthService from "./authService";

const useAuthStore = create((set) => ({
  token: localStorage.getItem('token') || null,
  isLoading: false,
  error: null,
  login: async (credentials) => {
    set({ isLoading: true, error: null });

    try {
      const token = await AuthService.login(credentials);
      console.log(token);
      localStorage.setItem('token', token);

      set({ token: token, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  },
  register: async (credentials) => {
    set({ isLoading: true, error: null });

    try {
      const token = await AuthService.register(credentials);
      localStorage.setItem('token', token);

      set({ token: token, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  },
  logout: async () => {
    set({ isLoading: true, error: null });

    try {
      await AuthService.logout();
      localStorage.clear();

      set({ token: null, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  }
}));

export default useAuthStore;