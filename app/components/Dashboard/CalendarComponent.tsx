"use client";

import * as React from "react";
import { parseDate } from "chrono-node";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { calendar_icon } from "@/utils/svgs";

function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }

  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function CalendarComponent() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("Last month");
  const [date, setDate] = React.useState<Date | undefined>(
    parseDate(value) || undefined
  );
  const [month, setMonth] = React.useState<Date | undefined>(date);

  return (
    <div className="relative flex gap-2 max-w-58.5">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date-picker"
            variant="ghost"
            className="absolute top-1/2 left-3 size-6 -translate-y-1/2 z-10"
          >
            {calendar_icon}
            <span className="sr-only">Select date</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="end">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            month={month}
            onMonthChange={setMonth}
            onSelect={(date) => {
              setDate(date);
              setValue(formatDate(date));
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      <Input
        id="date"
        value={value}
        placeholder="Tomorrow or next week"
        className="bg-background pl-10 py-2.5 pr-2.5 text-main-900 text-sm leading-5"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
          const date = parseDate(e.target.value);
          if (date) {
            setDate(date);
            setMonth(date);
          }
        }}
        onKeyDown={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.type === "keydown") {
            e.preventDefault();
            setOpen(true);
          }
        }}
      />
    </div>
  );
}
