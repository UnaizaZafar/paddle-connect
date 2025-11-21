import CTAButton from "./CTAButton";
import ListItem from "./ListItem";
import { priceListItems } from "@/public/utils/data";
type PriceCardProps = {
  icon: React.ReactNode;
  price: string;
  title: string;
  desc: string;
  duration: string;
  buttonText: string;
};

export default function PriceCard({
  icon,
  price,
  title,
  desc,
  duration,
  buttonText,
}: PriceCardProps) {
  return (
    <div className="bg-grey rounded-20 p-4 lg:p-8 border border-text/15 w-full flex flex-col gap-4 lg:gap-8 justify-between">
      <div className=" flex gap-8 justify-between">
        <div className="flex flex-col gap-2">
          {icon}
          <h5 className="pt-2 font-poppins text-2xl leading-140 -tracking-[1%] text-text">
            {title}
          </h5>
          <p className="font-space-grotesk text-text leading-150 ">{desc}</p>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-56 font-poppins leading-120 text-text ">
          {price}
        </h1>
      </div>
      <div className="border-t border-text/15" />
      <div className="flex flex-col gap-4 text-text">
        <p className="font-space-grotesk leading-150 ">{duration}</p>
        <div className="grid grid-cols-2 gap-3 lg:gap-x-6 lg:gap-y-4 justify-between">
          {priceListItems.map((item, index) => (
            <ListItem key={index} text={item} />
          ))}
        </div>
      </div>
      <span className="place-content-end lg:pt-4.5">
        <CTAButton
          variant="primary-colored"
          text={buttonText}
          showArrow={false}
        />
      </span>
    </div>
  );
}
