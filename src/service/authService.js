import api from "../api";

const AuthService = {
  register: async (email, username, password, confirmPassword) => {
    return api.post('/api/v1/rest-auth/registration/', {
      'username': username,
      'email': email,
      'password1': password,
      'password2': confirmPassword
    })
      .then(response => response.data)
      .catch(err => {
        console.log(err);
        throw err;
      });
  },

  login: async (email, password) => {
    return api.post('/api/v1/rest-auth/login/', {
      'email': email,
      'password': password
    })
      .then(response => {
        const token = response.data['key'];
        localStorage.setItem('token', token);
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }
}

export default AuthService;