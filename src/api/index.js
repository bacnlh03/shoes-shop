import axios from "axios";

const api = axios.create({
  baseURL: 'https://tuan11b3.pythonanywhere.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;