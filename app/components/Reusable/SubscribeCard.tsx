import React from "react";

type SubscribeCardProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  cost: React.ReactNode;
  isSelected: boolean;
  onClick: () => void  
};
export default function SubscribeCard({
  icon,
  title,
  subtitle,
  cost,
  isSelected,
  onClick,
}: SubscribeCardProps) {
  return (
    <div onClick={onClick}
      className={`cursor-pointer p-2.5 rounded-xl hover:bg-soft-200/20 ${
        isSelected
          ? "border border-primary"
          : "border dark:border-sub-500 border-[#E2E4E9]"
      }  flex gap-2.5 items-center justify-between w-full`}
    >
      <div className="flex gap-2.5 items-center">
        {icon}
        <div className="flex flex-col gap-1 items-start">
          <p className="dark:text-soft-200 text-main-900 font-medium leading-6 tracking-[-1.1%]">
            {title}
          </p>
          <p className="dark:text-soft-400 text-sub-500 text-sm tracking-tightest leading-5">
            {subtitle}
          </p>
        </div>
      </div>
      <p className="font-medium text-2xl dark:text-soft-200 text-main-900 place-content-end">
        {cost}
      </p>
    </div>
  );
}
