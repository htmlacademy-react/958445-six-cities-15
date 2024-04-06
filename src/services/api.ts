import { toast } from 'react-toastify';
import { StatusCodes } from 'http-status-codes';
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { getToken } from './token';

type DetailMessageType = {
  type: string;
  message: string;
};

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.NOT_FOUND]: true,
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
};

const shouldDisplayError = (response: AxiosResponse) =>
  !!StatusCodeMapping[response.status];

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

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = error.response.data;

        toast.warn(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};
