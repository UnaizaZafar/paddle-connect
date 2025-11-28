import React from "react";
import { player_profile, select_menu } from "./svgs";

export type Player = {
  playerName: React.ReactNode;
  currentLevel: string;
  matchDate: string;
  requestedDate: string;
  acceptedDate: string;
  status: "pending" | "approved" | "rejected";
  options: React.ReactNode; // <-- change to ReactNode
};

export const payments: Player[] = [
  {
    playerName: (
      <div className="flex gap-3 items-center text-main-900 font-medium">
        <span className="border-2 border-primary rounded-full w-9 h-9 overflow-hidden object-center">
          {player_profile}
        </span>
        Alex Johnson
      </div>
    ),
    currentLevel: "Advanced",
    matchDate: "2024-11-20",
    requestedDate: "2024-11-21",
    acceptedDate: "2024-11-22",
    status: "approved",
    options: select_menu,
  },
  {
    playerName: (
      <div className="flex gap-3 items-center text-main-900 font-medium">
        <span className="border-2 border-primary rounded-full w-9 h-9 overflow-hidden object-center">
          {player_profile}
        </span>
        Samira Khan
      </div>
    ),
    currentLevel: "Beginner",
    matchDate: "2024-11-25",
    requestedDate: "2024-11-25",
    acceptedDate: "-",
    status: "pending",
    options: select_menu,
  },
  {
    playerName: (
      <div className="flex gap-3 items-center text-main-900 font-medium">
        <span className="border-2 border-primary rounded-full w-9 h-9 overflow-hidden object-center">
          {player_profile}
        </span>
        Leo Martinez
      </div>
    ),
    currentLevel: "Intermediate",
    matchDate: "2024-11-18",
    requestedDate: "2024-11-19",
    acceptedDate: "2024-11-19",
    status: "rejected",
    options: select_menu,
  },
  {
    playerName: (
      <div className="flex gap-3 items-center text-main-900 font-medium">
        <span className="border-2 border-primary rounded-full w-9 h-9 overflow-hidden object-center">
          {player_profile}
        </span>
        Chloe davies
      </div>
    ),
    currentLevel: "Advanced",
    matchDate: "2024-11-10",
    requestedDate: "2024-11-10",
    acceptedDate: "2024-11-11",
    status: "rejected",
    options: select_menu,
  },
];
