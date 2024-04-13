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
  sortProductByTime: async () => {
    set({ isLoading: true, error: null });

    try {
      const products = get().listProduct.slice();

      if (products && products.length > 0) {
        products.sort((a, b) => b.id - a.id);

        set({ isLoading: false, listProduct: products });
      } else {
        throw new Error("List of products is empty.");
      }
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  },
  filterProduct: async ({ name, gender, kids, priceGroup }) => {
    console.log({ name, gender, kids, priceGroup });
    set({ isLoading: true, error: null });

    try {
      if (name === '' && gender === undefined && kids === undefined && priceGroup === undefined) {
        console.log('Inside first check');
        const originalListProduct = get().originalListProduct;
        set({ isLoading: false, listProduct: originalListProduct });
        return;
      }

      const queryLowerCase = name?.toLowerCase();
      console.log(queryLowerCase);

      let result = get().originalListProduct.slice();

      if (queryLowerCase && queryLowerCase !== '') {
        console.log('Inside name');
        result = result.filter(
          product => product.name.toLowerCase().includes(queryLowerCase)
        );
        console.log(`After filter name: ${result}`);
      }

      if (gender !== undefined && gender !== null) {
        console.log(`Inside gender: ${gender}`);
        result = result.filter(
          product => product.gender_id === gender
        );
        console.log(`After filter gender: ${result}`);
      }

      if (priceGroup !== undefined && priceGroup !== null) {
        console.log(`Inside price group: ${priceGroup}`);

        let minPrice = 0;
        let maxPrice = 0;

        switch (priceGroup) {
          case 0:
            maxPrice = 1000000;
            break;
          case 1:
            minPrice = 1000000;
            maxPrice = 2000000;
            break;
          case 2:
            minPrice = 2000000;
            maxPrice = 3000000;
            break;
          case 3:
            minPrice = 3000000;
            maxPrice = 4000000;
            break;
          case 4:
            minPrice = 4000000;
            maxPrice = 5000000;
            break;
          case 5:
            minPrice = 5000000;
            break;
          default:
            throw new Error("Invalid price group");
        }

        result = result.filter(
          product => product.price > minPrice && (maxPrice === 0 || product.price <= maxPrice)
        );
      }

      if (result.length === 0) {
        throw new Error("No products matching the filter criteria");
      }

      set({ isLoading: false, listProduct: result });
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  }
}));

export default useProductStore;