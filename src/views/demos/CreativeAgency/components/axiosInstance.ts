// src/plugins/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
