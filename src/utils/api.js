import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL
});

api.interceptors.request.use(config => {
  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  }
  return config;
});

export default api;

