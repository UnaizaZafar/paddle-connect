"use client";
import { sideBarMenu } from "@/utils/data";
import Image from "next/image";
import MenuPill from "./MenuPill";
import { useState } from "react";
import {
  chevron,
  close_button,
  headphone,
  player_profile,
  verified_batch,
} from "@/utils/svgs";
import { useSelector } from "react-redux";
import { selectUser } from "@/app/redux/slices/userSlice";
import Link from "next/link";
import { useLogout } from "@/hooks/useAuth";

export default function SideBar() {
  const [isSelected, setIsSelected] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const userData = useSelector(selectUser);
  const displayName = userData.name;
  const displayEmail = userData.email;
  const handleLogout = useLogout();
  return (
    <div className="flex flex-col font-inter border-r border-soft-200 w-full max-w-[272px] h-screen z-10">
      <div className="px-3 py-3.5 border-b border-soft-200">
        <Link href={"#"}>
          <Image
            src={"/images/logo.webp"}
            alt="Paddle Connect Logo"
            width={190}
            height={34}
          />
        </Link>
      </div>
      <div className="p-5 flex flex-col justify-between h-full">
        <div className="flex flex-col gap-2.5">
          <p className="uppercase font-medium text-xs text-soft-400 leading-[4%]">
            main
          </p>
          <div className="flex flex-col gap-1">
            {sideBarMenu.map((item) => (
              <MenuPill
                key={item.id}
                onClick={() => setIsSelected(item.id)}
                isSelected={isSelected === item.id}
                text={item.name}
                icon={item.icon}
                hasSubMenu={item?.hasSubMenu}
              />
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="bg-weak-100 rounded-xl p-4 flex flex-col gap-3 ">
            <div className="flex justify-between w-full">
              <div className="flex gap-2.5">
                {headphone}
                <p className="text-main-900 font-medium tracking-[-1.1%] leading-6">
                  Need support?
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer"
              >
                {close_button}
              </button>
            </div>
            <p className="text-sub-500 text-sm tracking-tightest leading-5">
              Contact with one of our experts to get support.
            </p>
          </div>
        )}
      </div>
      <div className="relative border-t border-soft-200">
        <div className="p-6 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            {player_profile}
            <div className="flex flex-col gap-1">
              <p className="font-medium tracking-tightest text-main-900 text-sm leading-5 flex items-center gap-0.5 w-full">
                {displayName} {verified_batch}
              </p>
              <p className="text-sub-500 text-xs leading-4 w-11/12 truncate">
                {displayEmail}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsSupportOpen(!isSupportOpen)}
            className="cursor-pointer"
          >
            {chevron}
          </button>
        </div>
        {isSupportOpen && (
          <div className="absolute bottom-3/4 right-2 bg-white border border-soft-200 rounded-lg shadow-lg overflow-hidden w-1/2 ">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleLogout();
              }}
              className="w-full px-4 py-3 text-left text-sm text-main-900 hover:bg-weak-100 transition-colors cursor-pointer"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
