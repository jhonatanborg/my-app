import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const errorResponse = (error: any | Error) => {
  const event = new CustomEvent('apiError', { detail: error });
  window.dispatchEvent(event);
  if (error instanceof Error) {
    throw new Error(error.message);
  }
  if (error.response?.status === 401) {
    const authError = new CustomEvent('authError', { detail: error });
    window.dispatchEvent(authError);
  }
};

api.interceptors.response.use((response) => response, errorResponse);

api.interceptors.request.use(
  (config: AxiosRequestConfig<any>) => {
    const token = localStorage.getItem('token');
    if (token) {
      config!.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const insideAPI = axios.create({
  baseURL: 'https://survey-wus2-dev-f5f450-apim.azure-api.net/v1',
});

insideAPI.interceptors.request.use(
  (config: AxiosRequestConfig<any>) => {
    const token = localStorage.getItem('token');
    if (token) {
      config!.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { api, insideAPI };
