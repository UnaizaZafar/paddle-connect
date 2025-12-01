"use client";
import { CalendarComponent } from "@/app/components/Dashboard/CalendarComponent";
import { DataTable } from "@/app/components/Dashboard/DataTable";
import ShowStatsSection from "@/app/components/Dashboard/ShowStatsSection";
import StatusBar from "@/app/components/Dashboard/StatusBar";
import StatusModal from "@/app/components/Dashboard/StatusModal";
import { usePlayersList } from "@/hooks/usePlayer";
import { tableColumns } from "@/utils/tableColumns";
import { useState } from "react";

export default function PlayersPage() {
  const { data = [], isLoading } = usePlayersList();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"ACTIVE" | "INACTIVE">(
    "ACTIVE"
  );

  const filteredData = data
    .filter((item) => item.status === statusFilter)
    .filter((item) => {
      const searchLower = search.toLowerCase();
      return (
        (item?.fullName?.toString() ?? "")
          .toLowerCase()
          .startsWith(searchLower) ||
        (item?.phoneNumber?.toString() ?? "").startsWith(searchLower)
      );
    });
  const totalPlayers = data?.length ?? 0;
  const activeCount =
    data?.filter((item) => item.status === "ACTIVE").length ?? 0;
  const inactiveCount =
    data?.filter((item) => item.status === "INACTIVE").length ?? 0;

  return (
    <div className="flex flex-col px-6.5 py-7 my-16 font-inter mx-auto h-full">
      <div className="flex items-center justify-between pb-7.5">
        <h3 className="text-2xl leading-5 tracking-tightest text-main-900 font-medium">
          Level Upgrade Request
        </h3>
        <CalendarComponent />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <span className="loader " />
        </div>
      ) : (
        <>
          <ShowStatsSection
            total={totalPlayers}
            active={activeCount}
            inactive={inactiveCount}
          />
          <div className="py-5 flex flex-col gap-6">
            <StatusBar
              onSearchChange={setSearch}
              onStatusChange={setStatusFilter}
            />
            <DataTable
              data={filteredData}
              columns={tableColumns}
              isLoading={isLoading}
            />
          </div>
          <StatusModal isApprove={true} />
        </>
      )}
    </div>
  );
}
