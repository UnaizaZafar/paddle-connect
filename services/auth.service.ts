import api from "@/lib/axios";

const API_BASE_URL = `auth`;
export interface LoginPayload {
  email: string;
  password: string;
}
export interface User {
  id: number;
  email: string;
  name?: string;
  phone?: string;
  role: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface AuthResponse {
  user: User;
  token: string;
  accessToken?: string;
  refreshToken?: string;
}

const AUTH = {
  async login(payload: LoginPayload) {
    const res = await api.post<ApiResponse<AuthResponse>>(
      `${API_BASE_URL}/login`,
      payload
    );
    return res.data;
  },
 
};
export default AUTH;
