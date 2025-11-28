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

export default function SideBar() {
  const [isSelected, setIsSelected] = useState(1);

  return (
    <div className="flex flex-col font-inter border-r border-soft-200 w-full max-w-[272px] h-screen z-10">
      <div className="px-3 py-3.5 border-b border-soft-200">
        <Image
          src={"/images/logo.webp"}
          alt="Paddle Connect Logo"
          width={190}
          height={34}
        />
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

        <div className="bg-weak-100 rounded-xl p-4 flex flex-col gap-3 ">
          <div className="flex justify-between w-full">
            <div className="flex gap-2.5">
              {headphone}
              <p className="text-main-900 font-medium tracking-[-1.1%] leading-6">
                Need support?
              </p>
            </div>
            <span>{close_button}</span>
          </div>
          <p className="text-sub-500 text-sm tracking-tightest leading-5">
            Contact with one of our experts to get support.
          </p>
        </div>
      </div>
      <div className="p-6 flex justify-between items-center border-t border-soft-200">
        <div className="flex gap-3 items-center">
          {player_profile}
          <div className="flex flex-col gap-1">
            <p className="font-medium tracking-tightest text-main-900 text-sm leading-5 flex items-center gap-0.5 w-full">
              Arthur Taylor {verified_batch}
            </p>
            <p className="text-sub-500 text-xs leading-4">arthur@alignui.com</p>
          </div>
        </div>
        {chevron}
      </div>
    </div>
  );
}
