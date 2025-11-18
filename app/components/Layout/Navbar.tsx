import { logo } from "@/public/svgs";
import CTAButton from "../Reusable/CTAButton";
import Link from "next/link";
import { menu } from "@/public/utils/data";
export default function Navbar() {
  return (
    <nav className="z-10 absolute top-6 left-1/2 -translate-x-1/2 max-w-5xl w-full flex justify-between items-center rounded-[18px] bg-white py-2 pr-3.5 pl-5 mx-auto">
      {logo}
      <div className="flex gap-8">
        {menu.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className="font-space-grotesk leading-150 text-black"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <CTAButton
        text="Start Free Trail"
        variant="primary-black"
      />
    </nav>
  );
}
