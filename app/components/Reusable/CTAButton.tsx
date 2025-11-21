import { arrow } from "@/public/utils/svgs";
import Link from "next/link";
type ButtonVariants = "primary-colored" | "primary-black" | "secondary";
type CTAButtonProps = {
  link?: string;
  text: string;
  variant: ButtonVariants;
  showArrow?: boolean;
};
const variantClasses: Record<ButtonVariants, string> = {
  "primary-colored":
    "bg-[#98FF3A]  hover:bg-black hover:text-[#98FF3A] transition duration-300 text-black border-1.5 border-transparent",
  "primary-black": "text-white bg-black",
  secondary:
    "bg-transparent hover:bg-white/30 transition duration-300 text-white border border-[#F2F2F7]",
};
export default function CTAButton({
  link = "/",
  text,
  variant,
  showArrow = true,
}: CTAButtonProps) {
  return (
    <Link
      href={link}
      className={`group flex items-center gap-3 ${variantClasses[variant]}
      rounded-xl py-2 md:py-2.5 px-3 md:px-6 text-sm md:text-base font-space-grotesk font-medium justify-center leading-150`}
    >
      {text}
      {showArrow && (
        <span className="group-hover:-rotate-45 transition duration-300">
          {arrow}
        </span>
      )}
    </Link>
  );
}
