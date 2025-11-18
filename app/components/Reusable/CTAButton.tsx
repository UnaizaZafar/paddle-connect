import { arrow } from "@/public/svgs";
import Link from "next/link";
type ButtonVariants = "primary-colored" | "primary-black" | "secondary";
type CTAButtonProps = {
  text: string;
  variant: ButtonVariants;
  showArrow?: boolean;
};
const variantClasses: Record<ButtonVariants, string> = {
  "primary-colored": "bg-[#98FF3A] text-black border-1.5 border-transparent",
  "primary-black": "text-white bg-black",
  secondary: "bg-transparent text-white border border-[#F2F2F7]",
};
export default function CTAButton({
  text,
  variant,
  showArrow = true,
}: CTAButtonProps) {
  return (
    <Link href="/"
      className={`flex items-center gap-3 ${variantClasses[variant]}
      rounded-xl py-2.5 px-6 font-space-grotesk font-medium justify-center leading-150`}
    >
      {text}
      {showArrow && <span>{arrow}</span>}
    </Link>
  );
}
