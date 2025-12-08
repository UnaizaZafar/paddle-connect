"use client";
import { CalendarComponent } from "@/app/components/Dashboard/CalendarComponent";
import { DataTable } from "@/app/components/Dashboard/DataTable";
import ShowStatsSection from "@/app/components/Dashboard/ShowStatsSection";
import StatusBar from "@/app/components/Dashboard/StatusBar";
import StatusModal from "@/app/components/Dashboard/StatusModal";
import { usePlayersList } from "@/hooks/usePlayer";
import { tableColumns, type Player as TablePlayer } from "@/utils/tableColumns";
import { useState, useEffect } from "react";

export default function PlayersPage() {
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const { data, isLoading, isFetching } = usePlayersList(page, debouncedSearch);

  // Debounce search input and reset to page 1 when search changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchInput);
      // Reset to page 1 when search changes
      setPage(1);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchInput]);

  const players = data?.players ?? [];
  const activePlayers = data?.stats?.activePlayers ?? 0;
  const inactivePlayers = data?.stats?.inactivePlayers ?? 0;
  const totalPlayers = data?.stats?.totalPlayers ?? 0;
  const totalPages = data?.pagination?.totalPages ?? 1;
  const currentPage = Math.min(page, totalPages || 1);
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

      {/* Show full loading only on initial load (when there's no data yet) */}
      {isLoading && !data ? (
        <div className="flex justify-center items-center h-full">
          <span className="loader" />
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
              onSearchChange={setSearchInput}
              onStatusChange={setStatusFilter}
            />
            {/* Table with internal loading state */}
            <DataTable
              data={displayedPlayers}
              columns={tableColumns}
              fetch={isFetching}
            />
            {/* Pagination */}
            <div className="flex gap-2 font-inter justify-center items-center text-sm w-full">
              <button
                disabled={currentPage === 1 || isFetching}
                onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                className="disabled:cursor-not-allowed px-2 py-1 bg-soft-200 hover:bg-soft-400 border border-soft-200 rounded-lg cursor-pointer"
              >
                Prev
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages || isFetching}
                onClick={() =>
                  setPage((prev) => Math.min(totalPages, prev + 1))
                }
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
