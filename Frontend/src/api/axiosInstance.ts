import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://10.0.0.8:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
