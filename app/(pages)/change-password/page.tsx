import { CardDemo } from "@/app/components/Authentication/CardDemo";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { eye_line, lock, reset_password } from "@/utils/svgs";
export default function SignupPage() {
  return (
    <CardDemo
      showFullLine={true}
      cardIcon={reset_password}
      title="Change Password"
      subtitle="Fill all the requried fields"
    >
      <CardContent>
        <form className="flex flex-col gap-1">
          <div className="flex flex-col gap-3">
            <div className="grid gap-1">
              <Label htmlFor="email">
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
            <div className="grid gap-1">
              <Label htmlFor="email">
                Confirm Password<span className="text-primary">*</span>{" "}
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

      <CardFooter className="flex-col gap-2">
        <Button
          size={"xl"}
          type="submit"
          variant={"submit"}
          className="w-full p-3.5 leading-5 font-semibold"
        >
          Change Password
        </Button>
      </CardFooter>
    </CardDemo>
  );
}
