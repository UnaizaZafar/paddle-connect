import { logo } from "@/public/utils/svgs";
import { menu } from "@/public/utils/data";
import Link from "next/link";
import CTAButton from "../Reusable/CTAButton";
export default function Footer() {
  return (
    <footer className="py-20 max-w-7xl mx-auto flex flex-col gap-12">
      <div className="flex justify-between">
        <div className="flex flex-col gap-6">
          <span>{logo}</span>
          <div className="flex gap-8">
            {menu.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="font-space-grotesk font-bold text-sm relative group"
              >
                {item.name}
                <div className="w-0 group-hover:w-full h-0.5 bg-primary/50 translate-x transition-all duration-300"/>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-space-grotesk font-bold leading-150">
            Join our newsletter
          </p>
          <div className="flex gap-4">
            <input
              placeholder="Enter you email"
              className="rounded-xl border border-primary/15 py-2 px-3 bg-primary/5 font-space-grotesk leading-150 text-primary/60 min-w-93.5"
            />
            <CTAButton
              showArrow={false}
              text="Send Email"
              variant="primary-colored"
            />
          </div>
          <p className="text-xs leading-150 font-poppins text-primary">
            By subscribing you agree to our{" "}
            <span>
              <Link href={"/"} className="underline hover:font-medium transition-all duration-150">
                privacy policy
              </Link>{" "}
            </span>
          </p>
        </div>
      </div>
      <h1 className="text-155 text-black leading-150 font-vastago-grotesk">
        Paddle Connect
      </h1>
      <div className="border-t border-primary/15 pt-8 flex justify-between">
        <div className="flex gap-4">
          <Link
            href={"/"}
            className="underline font-space-grotesk text-sm leading-150 text-primary hover:font-medium transition-all duration-150"
          >
            Privacy policy
          </Link>
          <Link
            href={"/"}
            className="underline font-space-grotesk text-sm leading-150 text-primary hover:font-medium transition-all duration-150"
          >
            Terms of service
          </Link>
        </div>
        <p className="font-space-grotesk text-sm text-primary">
          © 2025 Paddle Connect. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
