"use client";
import { logo, menuIcon } from "@/public/utils/svgs";
import CTAButton from "../Reusable/CTAButton";
import Link from "next/link";
import { menu } from "@/public/utils/data";
import { useState } from "react";
export default function Navbar() {
  return (
    <>
      <nav className="hidden lg:flex z-10 absolute top-6 left-1/2 -translate-x-1/2 lg:max-w-4xl xl:max-w-5xl w-full justify-between items-center rounded-[18px] bg-white py-2 pr-3.5 pl-5 mx-auto">
        <Link href={"/"}>{logo}</Link>

        <div className="flex gap-8">
          {menu.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="font-space-grotesk leading-150 text-black group relative"
            >
              {item.name}
              <div className="w-0 group-hover:w-full h-0.5 bg-primary/50 translate-x transition-all duration-300" />
            </Link>
          ))}
        </div>
        <CTAButton text="Start Free Trail" variant="primary-black" />
      </nav>
      <HamburgerMenu />
    </>
  );
}
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex lg:hidden flex-col bg-white w-full absolute top-0 left-0 p-4 z-50">
      <div className="flex items-center justify-between">
        <Link href={"/"}>{logo}</Link>
        <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {menuIcon}
        </button>
      </div>

      <div
        className={`
      overflow-hidden transition-all duration-300 ease-in-out
      ${
        isOpen
          ? "max-h-100 opacity-100 translate-y-0"
          : "max-h-0 opacity-0 -translate-y-4"
      }
    `}
      >
        <div className="flex flex-col py-8">
          {menu.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="font-space-grotesk leading-150 text-black p-4 border-b border-b-grey"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <CTAButton text="Start Free Trial" variant="primary-black" />
      </div>
    </nav>
  );
};
