"use client";
import { CardDemo } from "@/app/components/Authentication/CardDemo";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLogin } from "@/hooks/useAuth";
import { emailIcon, eye_line, lock, loginUser } from "@/public/utils/svgs";
import { useState } from "react";
import { LoginPayload } from "@/services/auth.service";
export default function LoginPage() {
  const [form, setForm] = useState<LoginPayload>({
    email: "",
    password: "",
  });
  const loginMutation = useLogin();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate(form);
  };
  return (
    <CardDemo
      cardIcon={loginUser}
      title="Login to your account"
      subtitle="Enter your details to login."
    >
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="grid gap-1">
              <Label
                htmlFor="email"
                className="dark:text-soft-200 text-main-900"
              >
                Email Address<span className="text-primary font-medium">*</span>{" "}
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="hello@alignui.com"
                value={form.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, email: e.target.value })
                }
                icon={emailIcon}
                required
                className="text-soft-400"
              />
            </div>
            <div className="grid gap-1">
              <Label
                htmlFor="email"
                className="dark:text-soft-200 text-main-900"
              >
                Password<span className="text-primary font-medium">*</span>{" "}
              </Label>
              <Input
                id="password"
                type="password"
                required
                value={form.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, password: e.target.value })
                }
                placeholder="••••••••••"
                icon={lock}
                iconRight={eye_line}
              />
            </div>
          </div>
          <a
            href="#"
            className="ml-auto inline-block text-sm underline-offset-1 underline place-self-end dark:text-sub-400 text-sub-500 dark:hover:text-sub-500 hover:text-black transition duration-200 tracking-[-0.6%]"
          >
            Forgot password?
          </a>

          <Button
            disabled={loginMutation.isPending}
            size={"xl"}
            type="submit"
            variant={"submit"}
            className="cursor-pointer w-full p-3.5 leading-5 font-semibold"
          >
            Login
          </Button>
        </form>
      </CardContent>
    </CardDemo>
  );
}
