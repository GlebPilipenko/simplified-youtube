import axios, { AxiosInstance } from 'axios';

export const apiServices = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_BASE_URL}`,
}) as AxiosInstance;
