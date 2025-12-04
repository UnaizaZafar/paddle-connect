import api from "@/lib/axios";

const API_BASE_URL = `auth`;
export interface LoginPayload {
  email: string;
  password: string;
}
export interface InviteOwnerPayload {
  emails: string[];
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
  invitations?: string;
}

const AUTH = {
  async login(payload: LoginPayload) {
    const res = await api.post<ApiResponse<AuthResponse>>(
      `${API_BASE_URL}/login`,
      payload
    );
    return res.data;
  },
  async adminLogin(payload: LoginPayload) {
    const res = await api.post<ApiResponse<AuthResponse>>(
      `${API_BASE_URL}/login-admins`,
      payload
    );
    return res.data;
  },
  async inviteGymOwner(payload: InviteOwnerPayload) {
    const res = await api.post<ApiResponse<AuthResponse>>(
      "/admin/gym-owners/invite",
      payload
    );
    console.log("Gym owner invite response", res);
    return res.data;
  },
};
export default AUTH;
