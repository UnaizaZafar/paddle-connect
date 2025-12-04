"use client";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./Layout/Footer";
import Navbar from "./Layout/Navbar";
import Image from "next/image";
import { ModeToggle } from "./Authentication/ModeToggle";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "./Dashboard/SideBar";
import Topbar from "./Dashboard/Topbar";
import ReduxProviders from "../redux/ReduxProviders";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const queryClient = new QueryClient();

  // Pages without navbar/footer
  const createAccountScreens =
    pathname === "/login" ||
    pathname === "/sign-up" ||
    pathname === "/verify-account" ||
    pathname === "/reset-password" ||
    pathname === "/change-password" ||
    pathname === "/onboarding" ||
    pathname === "/complete-subscription";

  // Dashboard pages with sidebar/topbar
  const dashboardScreens = pathname === "/players";

  return (
    <ReduxProviders>
      <QueryClientProvider client={queryClient}>
        {/* -------------------- Account Pages -------------------- */}
        {createAccountScreens ? (
          <div className="flex flex-col justify-between max-lg:px-4 max-xxl:px-6 2xl:px-0 max-w-338 mx-auto mt-6 mb-8 h-full">
            <div className="flex justify-between">
              <Link href={"/"}>
                <Image
                  src={"/images/logo.webp"}
                  alt="Paddle Connect Logo"
                  height={39}
                  width={214}
                />
              </Link>
              {pathname.includes("onboarding") ? (
                <div className="flex gap-2 items-center">
                  <p className="font-inter text-sm text-center leading-5 dark:text-sub-400 text-sub-500 tracking-[-0.6%]">
                    Don&apos;t have an account?{" "}
                    <Link
                      href={"/"}
                      className="underline font-medium dark:text-sub-400 hover:text-sub-500 text-charcoal-black"
                    >
                      Register
                    </Link>
                  </p>
                  <ModeToggle />
                </div>
              ) : (
                <ModeToggle />
              )}
            </div>

            <ToastContainer position="top-right" autoClose={2500} />

            <div className="flex justify-center items-center bg-[url(/images/pattern.webp)] bg-no-repeat bg-cover bg-center h-full">
              {children}
            </div>

            <p className="text-sub-500 font-inter text-sm leading-5 tracking-tightest">
              © 2025 Paddle Art
            </p>
          </div>
        ) : dashboardScreens ? (
          /* -------------------- Dashboard Pages -------------------- */
          <div className="flex h-screen w-screen">
            {/* Topbar fixed */}
            <div className="fixed top-0 left-[272px] right-0 z-50">
              <Topbar />
            </div>

            {/* Sidebar fixed below Topbar */}
            <div className="fixed top-0 left-0 bottom-0 z-40">
              <SideBar />
            </div>

            {/* Scrollable children */}
            <div className="flex-1 ml-[272px] h-full overflow-auto">{children}</div>
          </div>
        ) : (
          /* -------------------- Default Pages -------------------- */
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </QueryClientProvider>
    </ReduxProviders>
  );
}
