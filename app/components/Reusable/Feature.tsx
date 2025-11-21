type FeaturesProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};
export default function Feature({ icon, title, desc }: FeaturesProps) {
  return (
    <div className="flex flex-col items-center gap-4 lg:gap-6 text-text">
      {icon}
      <div className="flex flex-col gap-2 lg:gap-4">
        <h5 className="font-poppins text-xl lg:text-2xl leading-140 -tracking-[1%] text-center">
          {title}
        </h5>
        <p className="font-space-grotesk leading-150 text-center">{desc}</p>
      </div>
    </div>
  );
}
