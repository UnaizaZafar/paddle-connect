"use client";
import Link from "next/link";
import { CardDemo } from "@/app/components/Authentication/CardDemo";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { verify_account } from "@/utils/svgs";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useVerifyCode } from "@/hooks/useAuth";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRegister } from "@/app/redux/slices/registerSlice";
import { toast } from "react-toastify";
export default function VerifyAccountPage() {
  const getRegisteredData = useSelector(selectRegister);
  const [code, setCode] = useState<string>("");
  const verifyCodeMutation = useVerifyCode();
  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length !== 4) {
      toast.error("Please enter the complete 4-digit code");
      return;
    }
    const payload = {
      email: getRegisteredData.email,
      code: Number(code),
    };

    verifyCodeMutation.mutate(payload);
  };
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
            {getRegisteredData.email}
          </span>{" "}
        </>
      }
    >
      <CardContent>
        <form onSubmit={handleVerifyCode} className="flex flex-col gap-8">
          <div className="flex gap-2.5">
            <InputOTP
              maxLength={4}
              pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
              value={code}
              onChange={(value) => setCode(value)}
            >
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
          </div>
          <Button
            type="submit"
            variant={"submit"}
            className="w-full p-3.5 leading-5 font-semibold"
          >
            Verify Code
          </Button>
        </form>
      </CardContent>

      <div className="flex flex-col gap-1 font-inter tracking-tightest text-sub-500 text-sm place-self-center leading-5 text-center">
        Experiencing issues receiving the code?
        <Link
          href="/login"
          className="dark:text-sub-400 text-main-900 hover:text-sub-500 underline"
        >
          Resend code
        </Link>
      </div>
    </CardDemo>
  );
}
