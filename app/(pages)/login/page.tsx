import { CardDemo } from "@/app/components/Authentication/CardDemo";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { emailIcon, eye_line, lock, loginUser } from "@/public/utils/svgs";
export default function LoginPage() {
  return (
    <CardDemo
      cardIcon={loginUser}
      title="Login to your account"
      subtitle="Enter your details to login."
    >
      <CardContent>
        <form>
          <div className="flex flex-col gap-3">
            <div className="grid gap-2">
              <Label htmlFor="email">
                Email Address<span className="text-primary">*</span>{" "}
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
            <div className="grid gap-2">
              <Label htmlFor="email">
                Password<span className="text-primary">*</span>{" "}
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
        </form>
      </CardContent>
      <a
        href="#"
        className="ml-auto inline-block text-sm underline-offset-1 underline place-self-end dark:text-sub-400 text-sub-500 dark:hover:text-sub-500 hover:text-black transition duration-200"
      >
        Forgot password?
      </a>
      <CardFooter className="flex-col gap-2">
        <Button
          type="submit"
          variant={"submit"}
          className="w-full p-3.5 leading-5"
        >
          Login
        </Button>
      </CardFooter>
    </CardDemo>
  );
}
