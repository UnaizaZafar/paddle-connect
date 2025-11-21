"use client";
import { usePathname } from "next/navigation";
import Footer from "./Layout/Footer";
import Navbar from "./Layout/Navbar";
import Image from "next/image";
import { ModeToggle } from "./Authentication/ModeToggle";
import Link from "next/link";
export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/login" ||
      pathname === "/sign-up" ||
      pathname === "/verify-account" ||
      pathname === "/reset-password" ||
      pathname === "/change-password" ? (
        <div className="flex flex-col justify-between max-lg:px-4 max-xxl:px-6 2xl:px-0 max-w-[1352px] mx-auto py-6 h-full">
          <div className="flex justify-between">
            <Link href={"/"}>
              <Image
                src={"/images/logo.webp"}
                alt="Paddle Connect Logo"
                height={39}
                width={214}
              />
            </Link>
            <ModeToggle />
          </div>
          <div className="flex justify-center items-center bg-[url(/images/pattern.webp)] bg-no-repeat bg-cover bg-center h-full">
            {children}
          </div>
          <p className="text-sub-500 font-inter text-sm leading-5 tracking-[-0.6%]">
            © 2025 Paddle Art
          </p>
        </div>
      ) : (
        <>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
