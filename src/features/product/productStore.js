import { create } from "zustand";
import ProductService from "./productService";

const useProductStore = create((set) => ({
  listProduct: [],
  selectedProduct: {},
  isLoading: false,
  error: null,
  getListProduct: async () => {
    set({ isLoading: true, error: null });

    try {
      const products = await ProductService.getListProduct();

      set({ isLoading: false, listProduct: products });
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  },
  getProductById: async (id) => {
    set({ isLoading: true, error: null });

    try {
      const product = await ProductService.getProductById(id);

      set({ isLoading: false, selectedProduct: product });
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  }
}));

export default useProductStore;