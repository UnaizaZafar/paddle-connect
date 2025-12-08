import api from "@/lib/axios";

const API_BASE_URL = `auth`;
export interface LoginPayload {
  email: string;
  password: string;
}
export interface InviteOwnerPayload {
  emails: string[];
}
export interface VerifyCodePayload {
  email: string;
  code: number;
}
export interface RegisterPayload {
  token: string;
  email: string;
  password: string;
  fullName?: string;
}
export interface User {
  id: number;
  userId: string;
  email: string;
  name?: string;
  fullName?: string;
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
  invitations?: string[];
}
export interface RegisterResponse {
  email: string;
  message: string;
  userId: string;
  name: string;
  isFromSignup: boolean;
}
export interface VerifyCodeResponse {
  userId: string;
  token: string;
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
    return res.data;
  },
  async registerUser(payload: RegisterPayload) {
    const res = await api.post<ApiResponse<RegisterResponse>>(
      `${API_BASE_URL}/register`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  },
  async verifyCode(payload: VerifyCodePayload) {
    const res = await api.post<ApiResponse<VerifyCodeResponse>>(
      `${API_BASE_URL}/verify-code`,
      payload
    );
    return res.data;
  },
};
export default AUTH;
