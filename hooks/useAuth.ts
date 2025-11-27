"use client";
import AUTH, {
  ApiResponse,
  AuthResponse,
  LoginPayload,
} from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ApiError } from "next/dist/server/api-utils";
import { setCookie, setCookieJSON } from "@/lib/cookies";
export function useLogin() {
  const router = useRouter();

  return useMutation<ApiResponse<AuthResponse>, ApiError, LoginPayload>({
    mutationFn: AUTH.login,
    onSuccess: (response,variables) => {
      const authData = response.data;
      const token = authData.token || authData.accessToken || "";
      const refreshToken = authData.refreshToken || "";
      const user = authData.user;
      if (!token) {
        console.error("No token found in response:", response);
        alert("Login failed: No token received");
        return;
      }
      setCookie("token", token, { maxAge: 86400 });
      localStorage.setItem("token", token);
      setCookieJSON("authData", authData, { maxAge: 85400 });
      setCookieJSON("loginCreds", { email: variables.email }, { maxAge: 85400 });
      if (refreshToken) {
        localStorage.setItem("refreshToken", refreshToken);
      }
      localStorage.setItem("user", JSON.stringify(user));

      router.replace("/onboarding");
    },
    onError: (error) => {
      console.log("Login error", error);
      const message = error?.message || "Login failed";
      alert(message);
    },
  });
}
