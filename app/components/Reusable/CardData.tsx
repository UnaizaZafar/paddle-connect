export type CardSizeVariant = "small" | "large";
type CardDataProps = {
  subtitle: string;
  title: string;
  description?: string;
  size?: CardSizeVariant;
  padding?: string;
};
const sizeVariantClasses: Record<CardSizeVariant, string> = {
  small: "text-2xl",
  large: "text-40",
};

export default function CardData({
  subtitle,
  title,
  description,
  padding,
  size = "small",
}: CardDataProps) {
  return (
    <div
      className={`${
        padding ?? "p-12"
      } flex flex-col justify-center gap-2 bg-grey h-full w-full`}
    >
      <p className="font-space-grotesk font-bold leading-150">{subtitle}</p>
      <p
        className={`font-poppins ${sizeVariantClasses[size]} text-primary leading-120`}
      >
        {title}
      </p>
      <p
        className={`font-space-grotesk leading-150 text-primary ${
          size === "large" && "pt-4"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
