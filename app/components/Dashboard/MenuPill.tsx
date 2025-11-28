import { chevron } from "@/public/utils/svgs";
import Link from "next/link";
type MenuPillProps = {
  icon: React.ReactNode;
  text: string;
  hasSubMenu?: boolean;
  onClick: () => void;
  isSelected: number;
};
export default function MenuPill({
  icon,
  text,
  hasSubMenu = false,
  onClick,
  isSelected,
}: MenuPillProps) {
  return (
    <Link
      href="#"
      onClick={onClick}
      className={`flex items-center justify-between hover:bg-weak-100 relative ${
        isSelected ? "bg-weak-100" : "bg-white"
      } transition duration-150 rounded-lg group`}
    >
      <div className="py-2 px-3 flex gap-2 items-center">
        <span
          className={`group-hover:text-primary/80 transition duration-150 ${
            isSelected ? "text-primary" : "text-sub-500"
          }`}
        >
          {icon}
        </span>
        <p
          className={`font-medium text-sm ${
            isSelected ? "text-main-900" : "text-sub-500"
          }  tracking-tightest`}
        >
          {text}
        </p>
      </div>
      {isSelected && (
        <div className="bg-primary rounded-r-sm w-1 h-1/2 absolute -left-5" />
      )}
      {hasSubMenu && chevron}
    </Link>
  );
}
