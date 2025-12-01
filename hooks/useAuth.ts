"use client";
import AUTH, {
  ApiResponse,
  AuthResponse,
  LoginPayload,
} from "@/services/auth.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ApiError } from "next/dist/server/api-utils";
import { setCookie } from "@/lib/cookies";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addLoginData } from "@/app/redux/slices/userSlice";
export function useLogin() {
  const router = useRouter();
  const dispatch = useDispatch();
  return useMutation<ApiResponse<AuthResponse>, ApiError, LoginPayload>({
    mutationFn: AUTH.login,
    onSuccess: (response, variables) => {
      const authData = response.data;
      const token = authData.token || authData.accessToken || "";
      dispatch(addLoginData(authData));

      if (!token) {
        console.error("No token found in response:", response);
        alert("Login failed: No token received");
        return;
      }
      setCookie("token", token, { maxAge: 86400 });
      router.replace("/onboarding");
      toast.success("Successfully Logged in");
    },
    onError: (error) => {
      const status = error?.response?.status || "Login failed";
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
