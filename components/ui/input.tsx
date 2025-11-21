import * as React from "react";

import { cn } from "@/lib/utils";
type iconProps = {
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  type?: string;
};
function Input({
  icon,
  className,
  type,
  iconRight,
  // ...props
}: 
iconProps) {
  const paddingClass = icon ? "pl-10" : "pl-3";

  return (
    <div className="w-full relative">
      {icon && (
        <span
          className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 text-soft-400"
          aria-hidden="true"
        >
          {icon}
        </span>
      )}

      <input
        type={type}
        data-slot="input"
        className={cn(
          // Base styles for the shadcn-like input appearance
          "file:text-foreground placeholder:text-soft-400 selection:bg-blue-500 selection:text-white dark:bg-gray-100/20 h-10 w-full min-w-0 rounded-lg border border-soft-200 bg-white py-2.5 pr-3 text-base shadow-x-small transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",

          // Focus and Error states
          "focus-visible:border-blue-500 focus-visible:ring-blue-500/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-red-400/20 dark:aria-invalid:ring-red-400/40 aria-invalid:border-red-500",
          paddingClass,
          className
        )}
        // {...props}
      />
      {iconRight && (
        <span
          className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 text-gray-400 "
          aria-hidden="true"
        >
          {iconRight}
        </span>
      )}
    </div>
  );
}

export { Input };
