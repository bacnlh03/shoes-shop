import api from "../../api";

const UserService = {
  getUser: async () => {
    return api.get('/api/v1/rest-auth/user/')
      .then(response => {
        return response.data;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
};

export default UserService;