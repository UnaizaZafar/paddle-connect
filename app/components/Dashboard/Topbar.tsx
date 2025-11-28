import { notifications, player_profile } from "@/utils/svgs";

export default function Topbar() {
  return (
    <div className="flex flex-1 justify-end gap-3 py-3.5 px-8 w-[calc(100vw-272px)] h-max border-b border-soft-200 fixed top-0 bg-white z-10">
      {notifications}
      {player_profile}
    </div>
  );
}
