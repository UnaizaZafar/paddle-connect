"use client";
import AUTH, {
  ApiResponse,
  AuthResponse,
  InviteOwnerPayload,
  LoginPayload,
  RegisterPayload,
  RegisterResponse,
  VerifyCodePayload,
  VerifyCodeResponse,
} from "@/services/auth.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ApiError } from "next/dist/server/api-utils";
import { setCookie } from "@/lib/cookies";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addLoginData } from "@/app/redux/slices/userSlice";
import { registerData } from "@/app/redux/slices/registerSlice";
import { verifyData } from "@/app/redux/slices/verificationSlice";
export function useLogin() {
  const router = useRouter();
  const dispatch = useDispatch();
  return useMutation<ApiResponse<AuthResponse>, ApiError, LoginPayload>({
    mutationFn: AUTH.login,
    onSuccess: (response) => {
      const authData = response.data;
      const token = authData.token || authData.accessToken || "";
      const role = authData.user.role || "";
      dispatch(addLoginData(authData));

      if (!token) {
        console.error("No token found in response:", response);
        alert("Login failed: No token received");
        return;
      }
      setCookie("role", role, { maxAge: 86400 });
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

export function useAdminLogin() {
  const router = useRouter();
  const dispatch = useDispatch();
  return useMutation<ApiResponse<AuthResponse>, ApiError, LoginPayload>({
    mutationFn: AUTH.adminLogin,
    onSuccess: (response) => {
      const authData = response.data;
      const role = authData.user.role || "";
      const token = authData.token || authData.accessToken || "";
      dispatch(addLoginData(authData));

      if (!token) {
        console.error("No token found in response:", response);
        alert("Login failed: No token received");
        return;
      }
      setCookie("role", role, { maxAge: 86400 });
      setCookie("token", token, { maxAge: 86400 });
      router.replace("/invite-gym-owner");
      toast.success("Successfully Logged in");
    },
    onError: (error) => {
      const status = error?.response?.status || "Login failed";
      if (status === 404) {
        toast.error("User does'nt Exist");
        router.replace("/sign-up");
      }
      if (status === 401 || status === 500) {
        toast.error("Incorrect email or password. Please try again.");
      }
    },
  });
}
export function useInviteGymOwner() {
  const router = useRouter();
  return useMutation<ApiResponse<AuthResponse>, ApiError, InviteOwnerPayload>({
    mutationFn: AUTH.inviteGymOwner,
    onSuccess: (response) => {
      // const authData = response.data;
      console.log("invite data response", response);

      // const inviteLink = response?.data?.invitations?.[0]?.link;
      // if (response?.data?.invitations?.success) {
      //   toast.error("Invite Not Sent");
      // } else {
      //   toast.success("Successfully Sent Invite");
      // }
      toast.success("Successfully Sent Invite");

      router.replace("/players");
    },
    onError: (error) => {
      console.log("invite gym owner", error);

      const status = error?.response?.status || "Login failed";
      const message = error?.response?.data?.message;
      if (status === 404) {
        toast.error("User does'nt Exist");
      }
      if (status === 401) {
        toast.error("Unauthorized access.");
      } else {
        toast.error(message || "Failed to send invitation");
      }
    },
  });
}
export function useRegister() {
  const router = useRouter();
  const dispatch = useDispatch();
  return useMutation<ApiResponse<RegisterResponse>, ApiError, RegisterPayload>({
    mutationFn: (payload: RegisterPayload) => AUTH.registerUser(payload),
    onSuccess: (response) => {
      const registeredData = response.data;
      dispatch(registerData(registeredData));
      router.replace("/verify-account");
      toast.success("Successfully Registered");
    },
    onError: (error) => {
      alert(error?.message);
      const status = error?.response?.status || "Login failed";
      if (status === 404) {
        toast.error("User doesn't exist");
      } else if (status === 401 || status === 500) {
        toast.error("Incorrect email or password");
      } else {
        toast.error("Registration failed");
      }
    },
  });
}
export function useVerifyCode() {
  const router = useRouter();
  const dispatch = useDispatch();
  return useMutation<
    ApiResponse<VerifyCodeResponse>,
    ApiError,
    VerifyCodePayload
  >({
    mutationFn: AUTH.verifyCode,

    onSuccess: (response) => {
      const verificationData = response.data;
      const token = verificationData.token;
      console.log("verifycode", verificationData);
      dispatch(verifyData(verificationData));
      setCookie("token", token, { maxAge: 86400 });
      toast.success("Successfully Registered");
      router.replace("/players");
    },
    onError: (error) => {
      alert(error?.message);
      console.log("verify error", error);
      const status = error?.response?.status || "Login failed";
      if (status === 404) {
        toast.error("Code Failed");
      } else if (status === 401 || status === 500) {
        toast.error("Incorrect Code");
      } else {
        toast.error("Verification failed");
      }
    },
  });
}
