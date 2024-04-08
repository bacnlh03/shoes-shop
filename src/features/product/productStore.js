import { create } from "zustand";
import ProductService from "./productService";

const useProductStore = create((set, get) => ({
  originalListProduct: [],
  listProduct: [],
  selectedProduct: {},
  isLoading: false,
  error: null,
  getListProduct: async () => {
    set({ isLoading: true, error: null });

    try {
      const products = await ProductService.getListProduct();

      set({ isLoading: false, listProduct: products, originalListProduct: products });
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
  },
  sortProductByPriceAsc: async () => {
    try {
      const products = get().listProduct.slice();

      if (products && products.length > 0) {
        products.sort((a, b) => a.price - b.price);

        set({ isLoading: false, listProduct: products });
      } else {
        throw new Error("List of products is empty.");
      }
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  },
  sortProductByPriceDesc: async () => {
    set({ isLoading: true, error: null });

    try {
      const products = get().listProduct.slice();

      if (products && products.length > 0) {
        products.sort((a, b) => b.price - a.price);

        set({ isLoading: false, listProduct: products });
      } else {
        throw new Error("List of products is empty.");
      }
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  },
  searchProductByName: async (query) => {
    set({ isLoading: true, error: null });

    try {
      if (query === '') {
        const originalListProduct = get().originalListProduct;
        set({ isLoading: false, listProduct: originalListProduct });
      }

      const queryLowerCase = query.toLowerCase();

      const result = get().listProduct.slice().filter(
        product => product.name.toLowerCase().includes(queryLowerCase)
      );

      set({ isLoading: false, listProduct: result });
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  }
}));

export default useProductStore;