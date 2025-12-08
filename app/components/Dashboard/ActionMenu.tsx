"use client";
import { approved, warn, select_menu } from "@/utils/svgs";
import { useState } from "react";

export default function ActionMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-1 hover:bg-gray-100 rounded"
      >
        {select_menu}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-35 p-2 bg-white border rounded shadow z-10 font-inter">
          <button
            className="flex gap-2 w-full p-2 text-sm hover:bg-gray-100"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <span className="text-main-900 w-5 h-5">{approved}</span>
            Approve
          </button>

          <button
            className="flex gap-2 w-full text-left p-2 hover:bg-gray-100"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <span className="text-red-base w-5 h-5">{warn}</span>
            Reject
          </button>
        </div>
      )}
    </div>
  );
}
