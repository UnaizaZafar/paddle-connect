import { CalendarComponent } from "@/app/components/Dashboard/CalendarComponent";
import { DataTable } from "@/app/components/Dashboard/DataTable";
import ShowStatsSection from "@/app/components/Dashboard/ShowStatsSection";
import StatusBar from "@/app/components/Dashboard/StatusBar";
import StatusModal from "@/app/components/Dashboard/StatusModal";
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
      <ShowStatsSection />
      <div className="py-5 flex flex-col gap-6">
        <StatusBar />
        <DataTable data={payments} columns={tableColumns} />
      </div>
      <StatusModal isApprove={true} />
    </div>
  );
}
