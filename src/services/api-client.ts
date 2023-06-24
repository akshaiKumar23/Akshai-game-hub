import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5b4359dbae4d4b6287a6fb5af0235d60",
  },
});


class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config);
  }
}

export default APIClient;