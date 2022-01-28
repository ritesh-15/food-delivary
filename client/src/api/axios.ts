import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest.isRetry = true;

      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/refresh",
          {
            withCredentials: true,
          }
        );

        return api.request(originalRequest);
      } catch (err) {}
    }
    throw error;
  }
);
