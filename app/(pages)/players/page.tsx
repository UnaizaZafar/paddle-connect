import { CalendarComponent } from "@/app/components/Dashboard/CalendarComponent";
import { DataTable } from "@/app/components/Dashboard/DataTable";
import Statistics from "@/app/components/Dashboard/Statistics";
import StatusBar from "@/app/components/Dashboard/StatusBar";
import StatusModal from "@/app/components/Dashboard/StatusModal";
import { approved, levels, pending, reject } from "@/utils/svgs";
import { tableColumns } from "@/utils/tableColumns";
import { payments } from "@/utils/tableData";

export default function PlayersPage() {
  return (
    <div className="flex flex-col px-6.5 py-7 my-16 font-inter mx-auto">
      <div className="flex justify-between items-center pb-7.5">
        <h3 className="text-2xl leading-5 tracking-tightest text-main-900 font-medium">
          Level Upgrade Request
        </h3>
        <CalendarComponent />
      </div>
      <div className="flex py-2.5 border-y border-soft-200/85 border-dashed mb-4">
        <Statistics icon={levels} type="Total Requests" stats={89} />
        <Statistics icon={approved} type="Approved Requests" stats={49} />
        <Statistics icon={reject} type="Rejected Requests" stats={30} />
        <Statistics icon={pending} type="Pending Requests" stats={10} />
      </div>
      <div className="py-5 flex flex-col gap-6">
        <StatusBar />
        <DataTable data={payments} columns={tableColumns} />
      </div>
      <StatusModal isApprove={true} />
    </div>
  );
}
