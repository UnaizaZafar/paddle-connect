"use client";
import { CardDemo } from "@/app/components/Authentication/CardDemo";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { emailIcon, reset_password } from "@/utils/svgs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function ResetPasswordPage() {
  return (
    <CardDemo
      extraClasses="gap-8"
      showFullLine={true}
      cardIcon={reset_password}
      title="Reset Password"
      subtitle="Enter your email to reset your password."
    >
      <CardContent>
        <form>
          <div className="grid gap-1">
            <Label htmlFor="email">
              Email Address<span className="text-primary font-medium">*</span>{" "}
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="hello@alignui.com"
              icon={emailIcon}
              required
              className="text-soft-400"
            />
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <Button
          size={"xl"}
          type="submit"
          variant={"submit"}
          className="w-full p-3.5 leading-5 font-semibold tracking-[-0.6%] text-charcoal-black"
        >
          Reset Password
        </Button>
      </CardFooter>
      <p className="font-inter tracking-[-0.6%] text-sub-500 text-sm place-self-center leading-5 text-center">
        Don’t have access anymore?
      </p>
    </CardDemo>
  );
}
