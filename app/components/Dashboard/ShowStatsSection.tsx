import { approved, levels, reject } from "@/utils/svgs";
import Statistics from "./Statistics";
type statsProps = {
  total: number;
  active: number;
  inactive: number;
};
export default function ShowStatsSection({
  total,
  active,
  inactive,
}: statsProps) {
  return (
    <div className="flex py-2.5 border-y border-soft-200/85 border-dashed mb-4">
      <Statistics icon={levels} type="Total Players" stats={total} />
      <Statistics icon={approved} type="Active Players" stats={active} />
      <Statistics icon={reject} type="Inactive Players" stats={inactive} />
    
    </div>
  );
}
