import api from "../api"

const ProductService = {
  getList: async () => {
    return api.get(`/api/shoes/`)
      .then((response) => response.data)
      .catch(err => {
        throw err;
      });
  },

  getById: async (id) => {
    return api.get(`/api/shoes/${id}/`)
      .then((response) => response.data)
      .catch(err => {
        throw err;
      });
  }
}

export default ProductService;