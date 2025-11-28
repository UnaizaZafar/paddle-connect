type StatsProps = {
  icon: React.ReactNode;
  type: string;
  stats: number;
};
export default function Statistics({ icon, type, stats }: StatsProps) {
  return (
    <div className="py-4 px-[15px] border-r border-soft-200 flex gap-2.5 w-full">
      <div className="bg-primary/10 rounded-lg text-primary py-[7px] px-2 h-max w-10">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm leading-5 text-muted-foreground font-medium">
          {type}
        </p>
        <p className="text-base-foreground font-semibold text-3xl leading-9">
          {stats}
        </p>
      </div>
    </div>
  );
}
