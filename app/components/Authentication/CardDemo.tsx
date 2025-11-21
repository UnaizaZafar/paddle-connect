import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { emailIcon, eye_line, lock, loginUser } from "@/public/utils/svgs";

export function CardDemo() {
  return (
    <Card className="w-full max-w-110 ">
      <CardHeader>
        <CardTitle>{loginUser}</CardTitle>
        <div className="flex flex-col gap-1">
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>Enter your details to login.</CardDescription>
        </div>
      </CardHeader>
      <div className="flex items-center gap-2.5">
        <div className="dark:bg-soft-200 bg-soft-200 w-full h-0.5" />
        <span className="font-inter dark:text-soft-200 text-soft-400 text-xs">OR</span>
        <div className="dark:bg-soft-200 bg-soft-200 w-full h-0.5" />
      </div>
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
    </Card>
  );
}
