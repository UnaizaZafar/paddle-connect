"use client";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { formatDate } from "./helper";
import ActionMenu from "@/app/components/Dashboard/ActionMenu";
export type Player = {
  profilePicture: string;
  fullName: string;
  rank: string;
  phoneNumber: string;
  dateOfBirth: string;
  createdAt: string;
  status: "ACTIVE" | "INACTIVE";
};

export const tableColumns: ColumnDef<Player, unknown>[] = [
  {
    accessorKey: "fullName",
    header: "Player Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-3 items-center truncate w-11/12">
          <img
            height={40}
            width={40}
            className="h-10 w-10 rounded-full"
            src={row.original.profilePicture || "/images/player.webp"}
            alt={row.original.fullName}
          />
          {row.original.fullName}
        </div>
      );
    },
  },
  {
    accessorKey: "rank",
    header: "Current Level",
    cell: ({ row }) => row.original?.rank ?? "—",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
    cell: ({ row }) => row.original?.phoneNumber ?? "—",
  },
  {
    accessorKey: "dateOfBirth",
    header: "DOB",
    cell: ({ row }) =>
      row.original?.dateOfBirth ? formatDate(row.original.dateOfBirth) : "—",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) =>
      row.original?.dateOfBirth ? formatDate(row.original.dateOfBirth) : "—",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }): React.ReactNode => {
      const status = row.original.status;
      // Move the styles inside the cell
      const statusStyles: Record<Player["status"], string> = {
        ACTIVE: " bg-[#38C793]",
        INACTIVE: " bg-[#FF383C]",
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
    accessorKey: "actions",
    header: "",
    cell: () => <ActionMenu />,
  },
];
