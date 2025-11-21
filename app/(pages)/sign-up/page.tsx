import Link from "next/link";
import { CardDemo } from "@/app/components/Authentication/CardDemo";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  emailIcon,
  error_warning_fill,
  eye_line,
  lock,
  signupUser,
  user_line,
} from "@/public/utils/svgs";
export default function SignupPage() {
  return (
    <CardDemo
      cardIcon={signupUser}
      title="Create a new account"
      subtitle="Enter your details to register."
    >
      <CardContent>
        <form className="flex flex-col gap-1">
          <div className="flex flex-col gap-3">
            <div className="grid gap-1">
              <Label className="dark:text-soft-200 text-main-900 font-inter" htmlFor="email">
                Full Name<span className="text-primary font-medium">*</span>{" "}
              </Label>
              <Input
                id="name"
                type="name"
                placeholder="James Brown"
                icon={user_line}
                required
                className="text-soft-400"
              />
            </div>
            <div className="grid gap-1">
              <Label className="dark:text-soft-200 text-main-900 font-inter" htmlFor="email">
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
            <div className="grid gap-1">
              <Label className="dark:text-soft-200 text-main-900 font-inter" htmlFor="email">
                Password<span className="text-primary font-medium">*</span>{" "}
              </Label>
              <Input
                id="password"
                type="password"
                required
                placeholder="••••••••••"
                icon={lock}
                iconRight={eye_line}
              />
            </div>
          </div>
          <div className="flex gap-0.5 text-sub-500 font-inter text-xs">
            {error_warning_fill}
            Must contain 1 uppercase letter, 1 number, min. 8 characters.
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <Button
          size={"xl"}
          type="submit"
          variant={"submit"}
          className="w-full p-3.5 leading-5 font-semibold"
        >
          Register
        </Button>
      </CardFooter>
      <p className="font-inter tracking-[-0.6%] text-sub-500 text-sm place-self-center leading-5">
        Already have an account?{" "}
        <span className="dark:text-sub-400 text-charcoal-black hover:underline ">
          <Link href="/login">Login</Link>
        </span>
      </p>
    </CardDemo>
  );
}
