import { create } from "zustand";
import OrderService from "./orderService";

const useOrderStore = create((set) => ({
  orders: JSON.parse(sessionStorage.getItem('orders')) || [],
  isLoading: false,
  error: null,
  getOrders: async () => {
    set({ isLoading: true, error: null });

    try {
      const orders = await OrderService.getOrders();

      set({ orders: orders, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  },
  addOrder: async (values, total, cart) => {
    console.log(total);
    set({ isLoading: true, error: null });

    try {
      await OrderService.addOrder(values, total, cart);

      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  }
}));

export default useOrderStore;