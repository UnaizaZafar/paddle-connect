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
import { toast } from "react-toastify";
export function useLogin() {
  const router = useRouter();

  return useMutation<ApiResponse<AuthResponse>, ApiError, LoginPayload>({
    mutationFn: AUTH.login,
    onSuccess: (response, variables) => {
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
      setCookieJSON(
        "loginCreds",
        { email: variables.email },
        { maxAge: 85400 }
      );
      if (refreshToken) {
        localStorage.setItem("refreshToken", refreshToken);
      }
      localStorage.setItem("user", JSON.stringify(user));
      router.replace("/onboarding");
      toast.success("Successfully Logged in");
    },
    onError: (error) => {
      const status = error?.response?.status || "Login failed";
      console.log("status", error);
      if (status === 404) {
        toast.error("User does'nt Exist");
        router.replace("/sign-up");
      }
      if (status === 401) {
        toast.error("Incorrect email or password. Please try again.");
      }
    },
  });
}
