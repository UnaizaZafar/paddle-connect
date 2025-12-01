import { store } from "@/app/redux/store";
import axios, { type AxiosError, type InternalAxiosRequestConfig } from "axios";

// Create Axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // optional: 10 seconds
});

// Flag to prevent multiple simultaneous refresh attempts
let isRefreshing = false;

// This interceptor runs before any request is sent from your application to the server. Its purpose is to automatically attach the user's access token to the Authorization header if one exists in localStorage..
// ✅ Request Interceptor (e.g., attach  token)
api.interceptors.request.use(
  (config) => {
    const token = store.getState().login.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptors allow to handle responses received from the server before they reach your application's .then() or .catch() blocks.
// Response interceptor to handle 401
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
    }
    return Promise.reject(error);
  }
);

// ✅ Response Interceptor (e.g., handle errors globally and token refresh)
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    // Handle 401 Unauthorized - attempt token refresh
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      // Skip refresh for login/register/refresh-token endpoints
      const isAuthEndpoint =
        originalRequest.url?.includes("/auth/login") ||
        originalRequest.url?.includes("/auth/register") ||
        originalRequest.url?.includes("/auth/refresh-token");

      if (isAuthEndpoint) {
        return Promise.reject(error);
      }

      // If already refreshing, just reject (simplified - no queue)
      if (isRefreshing) {
        return Promise.reject(error);
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = localStorage.getItem("refreshToken");

      if (!refreshToken) {
        // No refresh token available, clear everything and reject
        isRefreshing = false;
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        return Promise.reject(error);
      }

      try {
        // Call refresh token endpoint using plain axios to avoid interceptor loop
        const response = await axios.post<{
          success: boolean;
          data: { accessToken: string };
        }>(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/refresh-token`,
          { refreshToken },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.success && response.data.data?.accessToken) {
          const { accessToken } = response.data.data;

          // Update access token in localStorage
          localStorage.setItem("token", accessToken);

          // Update the original request with new token
          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          }

          isRefreshing = false;

          // Retry the original request
          return api(originalRequest);
        } else {
          throw new Error("Token refresh failed: Invalid response");
        }
      } catch (refreshError) {
        // Refresh failed, clear tokens and logout
        isRefreshing = false;
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");

        // Reject the error so components can handle logout
        return Promise.reject(refreshError);
      }
    } else if (error.response && error.response.status >= 500) {
      const errorMessage =
        error.response.data &&
        typeof error.response.data === "object" &&
        "message" in error.response.data
          ? (error.response.data as { message: string }).message
          : "Server error";
      console.error("Server error:", errorMessage);
    }

    return Promise.reject(error);
  }
);

export default api;
