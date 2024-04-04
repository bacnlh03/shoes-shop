import axios from "axios";

const api = axios.create({
  baseURL: 'https://tuan11b3.pythonanywhere.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = 'Token ' + token;
  }
  return config;
});

export default api;