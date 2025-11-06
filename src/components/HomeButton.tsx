"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HomeButton() {
  return (
    <Link href="/" className="fixed bottom-6 right-6 z-50">
      <Button
        className="
          flex items-center gap-2 rounded-lg
          bg-[#F2FD7D] text-[#28443F] px-6 py-5
          border-4 border-black
          shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
          font-bold text-lg
          transition-all duration-200 ease-out
          hover:translate-x-[3px] hover:translate-y-[3px]
          hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
          active:translate-x-[6px] active:translate-y-[6px]
          active:shadow-none hover:text-white
        "
      >
        <span className="text-2xl">&#x2F95;</span>
        <span>Home</span>
      </Button>
    </Link>
  );
}
