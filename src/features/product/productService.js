import api from "../../api";

const ProductService = {
  getListProduct: async () => {
    return api.get('/api/shoes/')
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  getProductById: async (id) => {
    return api.get(`/api/shoes/${id}/`)
      .then(response => {
        return response.data
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
};

export default ProductService;