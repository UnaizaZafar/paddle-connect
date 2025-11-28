"use client";

import { ColumnDef } from "@tanstack/react-table";
import React from "react";

export type Player = {
  playerName: string;
  currentLevel: string;
  matchDate: string;
  requestedDate: string;
  acceptedDate: string;
  status: "pending" | "approved" | "rejected";
  options: React.ReactNode;
};

export const tableColumns: ColumnDef<Player, unknown>[] = [
  {
    accessorKey: "playerName",
    header: "Player Name",
    cell: ({ row }) => {
      return <div className="">{row.original.playerName}</div>;
    },
  },
  { accessorKey: "currentLevel", header: "Current Level" },
  { accessorKey: "matchDate", header: "Match Date" },
  { accessorKey: "requestedDate", header: "Requested Date" },
  { accessorKey: "acceptedDate", header: "Accepted Date" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }): React.ReactNode => {
      const status = row.original.status;
      // Move the styles inside the cell
      const statusStyles: Record<Player["status"], string> = {
        approved: " bg-[#38C793]",
        rejected: " bg-[#FF383C]",
        pending: " bg-[#FFCC00]",
      };
      return (
        <div className="w-max px-2 py-1 text-center border border-soft-200 rounded-md text-xs font-medium flex items-center gap-2.5 text-sub-500">
          <div className={`rounded-full size-1.5  ${statusStyles[status]}`} />
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      );
    },
  },
  {
    accessorKey: "options",
    header: "",
    cell: ({ row }): React.ReactNode => row.original.options,
  },
];
