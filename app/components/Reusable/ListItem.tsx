import { tick } from "@/public/svgs";
type ListProps = {
  text: string;
};
export default function ListItem({ text }: ListProps) {
  return (
    <div className="flex gap-4 font-space-grotesk leading-150 last:col-span-2">
      {tick} {text}
    </div>
  );
}
