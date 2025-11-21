export type CardSizeVariant = "small" | "large";
type CardDataProps = {
  subtitle: string;
  title: string;
  description?: string;
  size?: CardSizeVariant;
  padding?: string;
};
const sizeVariantClasses: Record<CardSizeVariant, string> = {
  small: "text-xl xl:text-2xl",
  large: "text-3xl lg:text-4xl xl:text-40",
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
        padding ?? "p-6 lg:p-8 xl:p-12"
      } flex flex-col justify-center gap-2 bg-grey ${description?"h-full":"h-max"} w-full`}
    >
      <p className="font-space-grotesk font-bold leading-150">{subtitle}</p>
      <h5
        className={`font-poppins ${sizeVariantClasses[size]} text-text leading-120`}
      >
        {title}
      </h5>
      {description && (
        <p
          className={`font-space-grotesk leading-150 text-text ${
            size === "large" && "lg:pt-4"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
