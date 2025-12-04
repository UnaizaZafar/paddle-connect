"use client";
import CTAButton from "../Reusable/CTAButton";
import Link from "next/link";
import Image from "next/image";
import { menu } from "@/utils/data";
import { useState, useEffect } from "react";
export default function Navbar() {
  return (
    <>
      <nav className="hidden lg:flex z-10 absolute top-6 left-1/2 -translate-x-1/2 lg:max-w-4xl xl:max-w-5xl w-full justify-between items-center rounded-[18px] bg-white py-2 pr-3.5 pl-5 mx-auto">
        <Link href={"/"}>
          <Image
            src="/images/logo.webp"
            alt="PaddleConnect Logo"
            width={214}
            height={39}
          />
        </Link>

        <div className="flex gap-8">
          {menu.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="font-space-grotesk leading-150 text-black group relative"
            >
              {item.name}
              <div className="w-0 group-hover:w-full h-0.5 bg-text/50 translate-x transition-all duration-300" />
            </Link>
          ))}
        </div>
        <div className="flex gap-2">
          <CTAButton
            text="Admin Login"
            variant="primary-colored"
            showArrow={false}
            link={"/admin-login"}
          />

          <CTAButton
            text="Login"
            variant="primary-black"
            showArrow={false}
            link={"/login"}
          />
        </div>
      </nav>
      <HamburgerMenu />
    </>
  );
}
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <nav className="flex lg:hidden flex-col bg-white w-full top-0 left-0 p-4 z-50 fixed">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <Image
            src="/images/logo.webp"
            alt="PaddleConnect Logo"
            width={190}
            height={39}
          />
        </Link>
        <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <svg
            key="menu-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 transition-all duration-300"
          >
            <path
              d="M4 8 L20 8"
              className={`
          transition-all duration-300 origin-center
          ${isOpen ? "-rotate-45 translate-y-1" : "rotate-0"}
        `}
            />
            <path
              d="M4 16 L20 16"
              className={`
          transition-all duration-300 origin-center
          ${isOpen ? "rotate-45 -translate-y-0.5" : "rotate-0"}
        `}
            />
          </svg>
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
              className="font-space-grotesk leading-150 text-black p-4 border-b border-b-text/20"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <CTAButton
          text="Login"
          variant="primary-black"
          showArrow={false}
          link={"/login"}
        />
      </div>
    </nav>
  );
};
