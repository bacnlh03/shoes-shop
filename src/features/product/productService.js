import api from "../../api";

const ProductService = {
  getListProduct: async () => {
    return api.get('/api/shoes/')
      .then(response => {
        console.log(`ProductService: ${response.data}`);
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
        console.log(`Detail: ${JSON.stringify(response.data)}`);
        return response.data
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
};

export default ProductService;