import { ball } from "@/public/utils/svgs";
type TagPillProps = {
  text: string;
};
export default function TagPill({ text }: TagPillProps) {
  return (
    <div className="bg-transparent border border-[#121212] py-2 px-5 rounded-4xl w-max flex items-center gap-2">
      {ball}
      <span className="font-poppins font-semibold text-black leading-[150%]">
        {text}
      </span>

      {ball}
    </div>
  );
}
