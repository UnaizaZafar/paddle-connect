"use client";
import Link from "next/link";
import { CardDemo } from "@/app/components/Authentication/CardDemo";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  emailIcon,
  error_warning_fill,
  eye_line,
  lock,
  signupUser,
  user_line,
} from "@/utils/svgs";
import { useRegister } from "@/hooks/useAuth";
import { useState } from "react";
import { RegisterPayload } from "@/services/auth.service";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { selectRegister } from "@/app/redux/slices/registerSlice";
import LoadingSpinner from "@/app/components/Reusable/LoadingSpinner";
export default function SignupPage() {
  const registerUserMutation = useRegister();
  const searchParams = useSearchParams();

  const [form, setForm] = useState<RegisterPayload>({
    token: searchParams.get("token") || "",
    email: searchParams.get("email") || "",
    password: "",
    fullName: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pwd = form.password;
    const mail = form.email;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>/?-]).{8,}$/;
    if (!passRegex.test(pwd)) {
      const passError = document.getElementById("password-error");
      if (passError) {
        passError.innerHTML =
          "Password must contain at least 8 characters and requires at least one uppercase letter, one lowercase letter, one digit, and one special character.";
      }
    }
    if (!emailRegex.test(mail)) {
      const emailError = document.getElementById("email-error");
      if (emailError) {
        emailError.innerHTML = "Incorrect email format";
      }
    }

    registerUserMutation.mutate(form);
    console.log("REGISTER PAYLOAD BEING SENT:", form);
  };

  // const registeredUser = useSelector(selectRegister);
  return (
    <CardDemo
      cardIcon={signupUser}
      title="Create a new account"
      subtitle="Enter your details to register."
    >
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
          <div className="flex flex-col gap-3">
            <div className="grid gap-1">
              <Label
                className="dark:text-soft-200 text-main-900 font-inter"
                htmlFor="email"
              >
                Full Name<span className="text-primary font-medium">*</span>{" "}
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="James Brown"
                icon={user_line}
                required
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm((prev) => ({ ...prev, fullName: e.target.value }))
                }
                className="text-soft-400"
                value={form.fullName}
                disabled={registerUserMutation.isPending}
              />
            </div>
            <div className="grid gap-1">
              <Label
                className="dark:text-soft-200 text-main-900 font-inter"
                htmlFor="email"
              >
                Email Address<span className="text-primary font-medium">*</span>{" "}
              </Label>
              <Input
                disabled={form.email !== "" || registerUserMutation.isPending}
                id="email"
                type="email"
                placeholder="hello@alignui.com"
                icon={emailIcon}
                value={form.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
                required
                className="text-soft-400"
              />
              <p id="email-error" className="text-xs text-red-base" />
            </div>
            <div className="grid gap-1">
              <Label
                className="dark:text-soft-200 text-main-900 font-inter"
                htmlFor="password"
              >
                Password<span className="text-primary font-medium">*</span>{" "}
              </Label>
              <Input
                id="password"
                type="password"
                required
                placeholder="••••••••••"
                value={form.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm((prev) => ({ ...prev, password: e.target.value }))
                }
                icon={lock}
                iconRight={eye_line}
                disabled={registerUserMutation.isPending}
              />
            </div>
          </div>
          <div
            id="password-error"
            className="flex gap-0.5 text-sub-500 font-inter text-xs"
          >
            {error_warning_fill}
            Must contain 1 uppercase letter, 1 number, min. 8 characters.
          </div>
          <Button
            size={"xl"}
            type="submit"
            variant={"submit"}
            className="w-full p-3.5 leading-5 font-semibold mt-5"
            disabled={registerUserMutation.isPending}
          >
            {registerUserMutation.isPending ? <LoadingSpinner /> : "Register"}
          </Button>
        </form>
      </CardContent>

      <p className="font-inter tracking-tightest text-sub-500 text-sm place-self-center leading-5">
        Already have an account?{" "}
        <span className="dark:text-sub-400 text-charcoal-black hover:underline ">
          <Link href="/login">Login</Link>
        </span>
      </p>
    </CardDemo>
  );
}
