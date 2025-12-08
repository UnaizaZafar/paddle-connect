"use client";
import { CalendarComponent } from "@/app/components/Dashboard/CalendarComponent";
import { DataTable } from "@/app/components/Dashboard/DataTable";
import ShowStatsSection from "@/app/components/Dashboard/ShowStatsSection";
import StatusBar from "@/app/components/Dashboard/StatusBar";
import StatusModal from "@/app/components/Dashboard/StatusModal";
import { usePlayersList } from "@/hooks/usePlayer";
import { tableColumns, type Player as TablePlayer } from "@/utils/tableColumns";
import { useState } from "react";

export default function PlayersPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data, isLoading, isFetching } = usePlayersList(page, search);
  const players = data?.players ?? [];
  const activePlayers = data?.stats?.activePlayers ?? 0;
  const inactivePlayers = data?.stats?.inactivePlayers ?? 0;
  const totalPlayers = data?.stats?.totalPlayers ?? 0;
  const totalPages = data?.pagination?.totalPages ?? 1;
  const [statusFilter, setStatusFilter] = useState<"ACTIVE" | "INACTIVE">(
    "ACTIVE"
  );

  const displayedPlayers: TablePlayer[] = players
    .filter((item) => item.status === statusFilter)
    .map((player) => ({
      profilePicture: player.profilePicture || "",
      fullName: player.fullName,
      rank: player.rank,
      phoneNumber: player.phoneNumber,
      dateOfBirth: player.dateOfBirth,
      createdAt: player.createdAt || player.dateOfBirth,
      status: player.status as "ACTIVE" | "INACTIVE",
    }));
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
            active={activePlayers}
            inactive={inactivePlayers}
          />
          <div className="py-5 flex flex-col gap-6">
            <StatusBar
              onSearchChange={setSearch}
              onStatusChange={setStatusFilter}
            />
            <DataTable
              data={displayedPlayers}
              columns={tableColumns}
              fetch={isFetching}
            />
            <div className="flex gap-2 font-inter justify-center items-center text-sm w-full">
              <button
                disabled={page === 1}
                onClick={() => setPage((prev) => prev - 1)}
                className="disabled:cursor-not-allowed px-2 py-1 bg-soft-200 hover:bg-soft-400 border border-soft-200 rounded-lg cursor-pointer"
              >
                Prev
              </button>
              <span>
                Page {page} of {totalPages}
              </span>
              <button
                disabled={page === totalPages}
                onClick={() => setPage((prev) => prev + 1)}
                className="disabled:cursor-not-allowed px-2 py-1 bg-soft-200 hover:bg-soft-400 border border-soft-200 rounded-lg cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
          <StatusModal isApprove={true} />
        </>
      )}
    </div>
  );
}
