import api from "../../api";

const AuthService = {
  register: async (credentials) => {
    return api.post('/api/v1/rest-auth/registration/', {
      'username': credentials.username,
      'email': credentials.email,
      'password1': credentials.password,
      'password2': credentials.confirmPassword
    })
      .then(response => response.data)
      .catch(err => {
        console.log(err);
        throw err;
      });
  },

  login: async (credentials) => {
    return api.post('/api/v1/rest-auth/login/', {
      'email': credentials.email,
      'password': credentials.password
    })
      .then(response => {
        console.log(`Auth serivce with data: ${JSON.stringify(response.data['key'])}`);
        return response.data['key'];
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },

  logout: async () => {
    api.post('/api/v1/rest-auth/logout/')
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
}

export default AuthService;