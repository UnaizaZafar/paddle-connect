import Image from "next/image";
type PlatformCardProps = {
  subtitle: string;
  title: string;
  desc: string;
  imageSrc: string;
  extraClasses?: string;
  imageWrapper?: string;
  allowOverflow?: boolean;
};
export default function PlatformCard({
  subtitle,
  title,
  desc,
  imageSrc,
  extraClasses,
  imageWrapper,
  allowOverflow = false,
}: PlatformCardProps) {
  return (
    <div
      className={`rounded-20 bg-grey border border-primary/15 ${
        allowOverflow ? "overflow-visible" : "overflow-hidden"
      }  flex max-lg:flex-col lg:even:flex-row-reverse relative xl:min-h-127`}
    >
      <div className={`${imageWrapper?"p-6 lg:p-8 lg:pl-12 lg:pr-28 ":"p-6 lg:p-8 xl:p-12"} flex flex-col gap-2 justify-center w-full lg:w-3/5`}>
        <p className="font-space-grotesk font-bold leading-150">{subtitle}</p>
        <h1 className="font-poppins text-3xl lg:text-4xl xl:text-40 leading-120 text-primary -tracking-[1%]">
          {title}
        </h1>
        <p className="font-space-grotesk text-lg lg:text-xl leading-150 text-primary lg:pt-4">
          {desc}
        </p>
      </div>
      {imageWrapper ? (
        <div className={`absolute ${imageWrapper}`}>
          <Image
            src={`/images/${imageSrc}.webp`}
            alt={title}
            fill
            className={`object-contain hidden lg:block ${extraClasses}`}
            unoptimized
          />
        </div>
      ) : (
        <Image
          src={`/images/${imageSrc}.webp`}
          alt={title}
          width={0}
          height={0}
          className={`object-contain lg:pl-10.5 ${extraClasses}`}
          unoptimized
        />
      )}
    </div>
  );
}
