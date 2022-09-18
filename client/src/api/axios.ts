import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodies-15.herokuapp.com/api/v1",
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
          "https://foodies-15.herokuapp.com/api/v1",
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
