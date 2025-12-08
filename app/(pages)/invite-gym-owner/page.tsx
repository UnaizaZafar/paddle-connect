"use client";
import { CardDemo } from "@/app/components/Authentication/CardDemo";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useInviteGymOwner } from "@/hooks/useAuth";
import { emailIcon, loginUser } from "@/utils/svgs";
import { useState } from "react";
import { InviteOwnerPayload } from "@/services/auth.service";
import { deleteCookie } from "@/lib/cookies";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/app/components/Reusable/LoadingSpinner";
export default function InviteGymOwnerPage() {
  const router = useRouter();
  const [emails, setEmails] = useState<string>("");
  const inviteOwnerMutation = useInviteGymOwner();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emails)) {
      const emailError = document.getElementById("email-error");
      if (emailError) {
        emailError.innerHTML = "Incorrect email format";
      }
    }
    const payload: InviteOwnerPayload = {
      emails: emails.split(",").map((e) => e.trim()),
    };
    inviteOwnerMutation.mutate(payload);
    setEmails("");
  };
  const handleLogout = () => {
    // Clear all cookies
    deleteCookie("role");
    deleteCookie("token");
    deleteCookie("authData");
    deleteCookie("loginCreds");
    router.replace("/admin-login");
  };
  return (
    <CardDemo cardIcon={loginUser} title="Invite Gym Owner" showFullLine>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid gap-1">
            <Label htmlFor="email" className="dark:text-soft-200 text-main-900">
              Email Address<span className="text-primary font-medium">*</span>{" "}
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="hello@alignui.com"
              value={emails}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmails(e.target.value)
              }
              icon={emailIcon}
              required
              className="text-soft-400"
              disabled={inviteOwnerMutation.isPending}
            />
            <p id="email-error" className="text-xs text-red-base" />
          </div>
          <Button
            disabled={inviteOwnerMutation.isPending}
            size={"xl"}
            type="submit"
            variant={"submit"}
            className="cursor-pointer w-full p-3.5 leading-5 font-semibold"
          >
            {inviteOwnerMutation.isPending ? <LoadingSpinner /> : "Invite"}
          </Button>
        </form>
      </CardContent>
      <Button size={"xl"} onClick={handleLogout} className="text-white">
        Logout
      </Button>
    </CardDemo>
  );
}
