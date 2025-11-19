import TagPill from "./TagPill";
type SectionHeaderProps = {
  tagText: string;
  heading: string;
  desc: string;
};
export default function SectionHeader({
  tagText,
  heading,
  desc
}: SectionHeaderProps) {
  return (
    <>
      <TagPill text={tagText} />
      <div className="flex flex-col gap-4 lg:gap-6 items-center text-center">
        <h2 className="font-semibold leading-120 font-poppins text-3xl lg:text-5xl -tracking-[1%] text-primary">
          {heading}
        </h2>
        <p className="font-space-grotesk text-xl lg:text-2xl text-center text-primary max-w-3xl">
          {desc}
        </p>
      </div>
    </>
  );
}
