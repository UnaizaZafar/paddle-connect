"use client";
import Link from "next/link";
import { CardDemo } from "@/app/components/Authentication/CardDemo";
import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { verify_account } from "@/utils/svgs";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
export default function VerifyAccountPage() {
  return (
    <CardDemo
      extraClasses="gap-8"
      showFullLine={true}
      cardIcon={verify_account}
      title="Enter Verification Code"
      subtitle={
        <>
          We’ve sent a code to{" "}
          <span className="font-medium dark:text-soft-200 text-main-900">
            arthur@alignui.com
          </span>{" "}
        </>
      }
    >
      <CardContent>
        <form className="flex gap-2.5">
          <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
            <InputOTPGroup>
              <InputOTPSlot
                className="border border-soft-200 py-4 px-2 rounded-10 text-2xl font-medium dark:text-soft-200 text-main-900 shadow-x-small"
                index={0}
              />
              <InputOTPSlot
                className="border border-soft-200 py-4 px-2 rounded-10 text-2xl font-medium dark:text-soft-200 text-main-900 shadow-x-small"
                index={1}
              />
              <InputOTPSlot
                className="border border-soft-200 py-4 px-2 rounded-10 text-2xl font-medium dark:text-soft-200 text-main-900 shadow-x-small"
                index={2}
              />
              <InputOTPSlot
                className="border border-soft-200 py-4 px-2 rounded-10 text-2xl font-medium dark:text-soft-200 text-main-900 shadow-x-small"
                index={3}
              />
            </InputOTPGroup>
          </InputOTP>
        </form>
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <Button
          type="submit"
          variant={"submit"}
          className="w-full p-3.5 leading-5 font-semibold"
        >
          Verify Code
        </Button>
      </CardFooter>
      <div className="flex flex-col gap-1 font-inter tracking-[-0.6%] text-sub-500 text-sm place-self-center leading-5 text-center">
        Experiencing issues receiving the code?
        <Link href="/login" className="dark:text-sub-400 text-main-900 hover:text-sub-500 underline">
          Resend code
        </Link>
      </div>
    </CardDemo>
  );
}
