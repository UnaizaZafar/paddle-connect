import Image from "next/image";
import CardData, { CardSizeVariant } from "./CardData";
type CardProps = {
  imageSrc: string;
  subtitle: string;
  title: string;
  description?: string;
  size?: CardSizeVariant;
  padding?: string;
};

export default function Card({
  imageSrc,
  subtitle,
  title,
  description,
  size,
  padding,
}: CardProps) {
  return (
    <div className="group flex rounded-20 overflow-hidden border border-text/15 first:row-span-2 first:flex-col">
      <Image
        src={`/images/${imageSrc}.webp`}
        alt={title}
        width={0}
        height={0}
        unoptimized
        className="group-first:w-full w-1/2 group-first:aspect-[3/1.75] aspect-[4/3.5] object-cover"
      />
      <CardData
        title={title}
        subtitle={subtitle}
        description={description}
        size={size}
        padding={padding}
      />
    </div>
  );
}
