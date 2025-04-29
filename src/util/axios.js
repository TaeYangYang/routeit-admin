import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8081/api' // server base url
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('Authorization');
  if(token){
    config.headers.Authorization = 'Authorization';
  }
  return config;
});

export default instance;