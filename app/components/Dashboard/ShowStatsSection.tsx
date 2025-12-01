import { approved, levels, pending, reject } from "@/utils/svgs";
import Statistics from "./Statistics";

export default function ShowStatsSection() {
  return (
    <div className="flex py-2.5 border-y border-soft-200/85 border-dashed mb-4">
      <Statistics icon={levels} type="Total Requests" stats={89} />
      <Statistics icon={approved} type="Approved Requests" stats={49} />
      <Statistics icon={reject} type="Rejected Requests" stats={30} />
      <Statistics icon={pending} type="Pending Requests" stats={10} />
    </div>
  );
}
