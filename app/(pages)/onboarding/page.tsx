"use client";
import { InputGroupDropdown } from "@/app/components/Authentication/InputGroup";
import { SelectDemo } from "@/app/components/Authentication/SelectField";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { deleteCookie } from "@/lib/cookies";
import { gym_logo, gym_racket } from "@/utils/svgs";
import { removeLoginData } from "@/app/redux/slices/userSlice";
import { useDispatch } from "react-redux";
export default function OnboardingPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogout = () => {
    // Clear all cookies
    deleteCookie("role");
    deleteCookie("token");
    deleteCookie("authData");
    deleteCookie("loginCreds");
    dispatch(removeLoginData());
    // Redirect to login
    router.replace("/login");
  };
  return (
    <Card className="w-full max-w-126 shadow-custom-card">
      <CardHeader className="flex justify-between items-center">
        {/* <CardHeader className="justify-start w-full"> */}
        <CardDescription className="pl-5 pr-4 py-4 flex gap-4 items-center ">
          {gym_racket}
          <div className="flex flex-col gap-1 items-start">
            <p className="dark:text-soft-200 text-main-900 font-medium leading-6 tracking-[-1.1%]">
              Add Gym Details
            </p>
            <p className="dark:text-soft-400 text-sub-500 text-sm tracking-tightest leading-5">
              Fill all the required details.
            </p>
          </div>
        </CardDescription>
        {/* temporary */}
        <Button
          onClick={handleLogout}
          size={"xl"}
          variant="submit"
          className="w-max py-3.5 text-sm font-semibold tracking-tightest bg-black hover:bg-black/80 text-white"
        >
          Logout
        </Button>
      </CardHeader>
      <CardContent className="p-5 border-y dark:border-sub-400 border-soft-200 w-full flex flex-col gap-5">
        <div className="flex gap-5 items-start w-full">
          {gym_logo}
          <div className="flex flex-col gap-1 items-start">
            <p className="dark:text-soft-200 text-main-900 font-medium leading-6 tracking-[-1.1%]">
              Upload Gym Logo
            </p>
            <p className="dark:text-soft-400 text-sub-500 text-sm tracking-tightest leading-5">
              Min 400x400px, PNG or JPEG
            </p>
            <div className="flex gap-3 pt-2">
              <CardAction
                style={{ color: "#df1c41" }}
                className="border border-base bg-white shadow-x-red rounded-lg px-2.5 py-1.5 font-inter font-medium leading-5 tracking-tightest text-sm "
              >
                Remove
              </CardAction>
              <CardAction className="border border-soft-200 text-sub-500 bg-white shadow-x-red rounded-lg px-2.5 py-1.5 font-inter font-medium leading-5 tracking-tightest text-sm ">
                Change Photo
              </CardAction>
            </div>
          </div>
        </div>
        <form>
          <div className="flex flex-col gap-5">
            <div className="grid gap-1">
              <Label
                className="leading-5 dark:text-soft-400 text-main-900"
                htmlFor="name"
              >
                Gym Name<span className="text-primary font-medium">*</span>{" "}
              </Label>
              <Input
                id="name"
                type="name"
                placeholder="Gym Name"
                required
                className="dark:shadow-none shadow-x-small"
              />
            </div>
            <div className="grid gap-1">
              <Label
                className="leading-5 dark:text-soft-400 text-main-900"
                htmlFor="address"
              >
                Gym Address/Location
                <span className="text-primary font-medium">*</span>{" "}
              </Label>
              <Input
                id="address"
                type="text"
                required
                placeholder="Gym Address/Location"
                className="dark:shadow-none shadow-x-small"
              />
            </div>
            <div className="grid gap-1">
              <Label
                className="leading-5 dark:text-soft-400 text-main-900"
                htmlFor="city"
              >
                City<span className="text-primary font-medium">*</span>{" "}
              </Label>
              <SelectDemo />
            </div>
            <div className="grid gap-1">
              <Label
                className="leading-5 dark:text-soft-400 text-main-900"
                htmlFor="number"
              >
                Phone number<span className="text-primary font-medium">*</span>{" "}
              </Label>
              <InputGroupDropdown />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex gap-3 py-4 px-5 justify-center">
        <Button
          size={"xl"}
          variant="outline"
          className="w-1/2 py-3.5 text-sm font-semibold tracking-tightest"
        >
          Cancel
        </Button>
        <Button
          size={"xl"}
          variant="submit"
          className="w-1/2 py-3.5 text-sm font-semibold tracking-tightest"
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
