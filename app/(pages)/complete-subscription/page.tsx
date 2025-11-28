"use client";
import SubscribeCard from "@/app/components/Reusable/SubscribeCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import {
  free_trial,
  paddle_connect_logo,
  subscription_card,
} from "@/utils/svgs";
import { useState } from "react";
export default function SubscriptionPage() {
  const [subscriptionType, setSubscriptionType] = useState("free");
  return (
    <Card className="w-full max-w-126 shadow-custom-card px-4 py-2.5">
      <CardHeader className="justify-start w-full">
        <CardDescription className=" pr-4 pt-4 flex gap-4 items-center ">
          {subscription_card}
          <div className="flex flex-col gap-1 items-start">
            <p className="dark:text-soft-200 text-main-900 font-medium leading-6 tracking-[-1.1%]">
              Complete Your Subscription
            </p>
            <p className="dark:text-soft-400 text-sub-500 text-sm tracking-tightest leading-5">
              Unlock your dashboard with a quick payment.
            </p>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="py-6 border-y dark:border-sub-400 border-soft-200 w-full flex flex-col gap-4">
        <SubscribeCard
          onClick={() => setSubscriptionType("free")}
          isSelected={subscriptionType === "free"}
          icon={free_trial}
          title="3-Month Free Trial"
          subtitle="Start you free trial to unlock access."
          cost="Free"
        />
        <SubscribeCard
          isSelected={subscriptionType === "costly"}
          onClick={() => setSubscriptionType("costly")}
          icon={paddle_connect_logo}
          title="Unlock Full Access "
          subtitle="Pay securely to unlock access."
          cost={
            <>
              $20<span className="text-base">/month</span>
            </>
          }
        />
      </CardContent>
      <CardFooter className="py-4 justify-center">
        <Button
          size={"xl"}
          variant="submit"
          className="w-full py-3.5 text-sm font-semibold font-inter tracking-tightest cursor-pointer"
        >
          {subscriptionType === "free"
            ? "Start your free trail"
            : "Checkout with Stripe"}
        </Button>
      </CardFooter>
    </Card>
  );
}
