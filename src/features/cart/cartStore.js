import { create } from "zustand";
import CartService from "./cartService";

const useCartStore = create((set) => ({
  cart: JSON.parse(sessionStorage.getItem('cart')) || [],
  isLoading: false,
  error: null,
  getCart: async () => {
    set({ isLoading: true, error: null });

    try {
      const cart = await CartService.getCart();

      set({ cart: cart, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  },
  addToCart: async (product) => {
    set({ isLoading: true, error: null });

    try {
      await CartService.addToCart(product);

      set({ isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  }
}));

export default useCartStore;