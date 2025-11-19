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
      <div className="flex flex-col gap-6 items-center">
        <h1 className="font-semibold leading-120 font-poppins text-5xl -tracking-[1%] text-primary">
          {heading}
        </h1>
        <p className="font-space-grotesk text-2xl text-center text-primary max-w-3xl">
          {desc}
        </p>
      </div>
    </>
  );
}
