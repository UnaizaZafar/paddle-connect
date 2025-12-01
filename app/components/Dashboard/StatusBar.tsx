"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { magnifying_glass } from "@/utils/svgs";
import { useState } from "react";

export default function StatusBar({
  onSearchChange,
  onStatusChange,
}: {
  onSearchChange: (value: string) => void;
  onStatusChange: (status: "ACTIVE" | "INACTIVE") => void;
}) {
  const [isActive, setIsActive] = useState<1 | 2>(1);
  const handleClick = (status: 1 | 2) => {
    setIsActive(status);
    onStatusChange(status === 1 ? "ACTIVE" : "INACTIVE");
  };
  return (
    <div className="flex justify-between font-inter">
      <div className="rounded-10 bg-weak-100 p-1 flex gap-1">
        <div
          onClick={() => handleClick(1)}
          className={`${
            isActive === 1
              ? "bg-white shadow-switch-toggle font-medium text-main-900"
              : "text-soft-400 bg-transparent"
          } rounded-md py-1 px-8.5 tracking-tightest leading-5`}
        >
          Active
        </div>
        <div
          onClick={() => handleClick(2)}
          className={`${
            isActive === 2
              ? "bg-white shadow-switch-toggle font-medium text-main-900"
              : "text-soft-400 bg-transparent"
          }  rounded-md py-1 px-8.5 tracking-tightest leading-5`}
        >
          Inactive
        </div>
      </div>
      <div className="flex gap-4.5 ">
        <InputGroup className="rounded-10 h-10 max-w-83 ">
          <InputGroupAddon className="pr-1! pl-2 py-2.5 text-sm">
            <span>{magnifying_glass}</span>
          </InputGroupAddon>

          <InputGroupInput
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search"
            className="pl-0 text-muted-foreground"
          />
        </InputGroup>

        <Select>
          <SelectTrigger className="w-34.5 py-2.5 px-3 h-10!">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Approved">Approved</SelectItem>
              <SelectItem value="Rejected">Rejected</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
