import React from "react";
import { Button } from "./ui/moving-border";


export function MovingBorderButton({ children, handleClick, className }) {
  return (
    <div>
      <Button
        borderRadius="1rem"
        className={`${className} bg-[#0B1B30] opacity-100 dark:bg-slate-900 text-white font-bold dark:text-white border-neutral-200 border-none dark:border-slate-800 hover:text-white hover:bg-[#263d5c] transition-all duration-300 w-full px-10`}
        onClick={handleClick}
      >
        {children}
      </Button>
    </div>
  );
}
