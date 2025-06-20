import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://yael-l79u.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
