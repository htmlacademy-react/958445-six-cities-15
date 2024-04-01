import axios, { InternalAxiosRequestConfig } from 'axios';

import { getToken } from './token';

const TIMEOUT = 5000;
const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';

export const createApi = () => {
  const api = axios.create({
    timeout: TIMEOUT,
    baseURL: BACKEND_URL,
  });

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  return api;
};
