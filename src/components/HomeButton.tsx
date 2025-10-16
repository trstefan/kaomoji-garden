"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HomeButton() {
  return (
    <Link href="/" className="fixed bottom-6 right-6 z-50">
      <Button
        className="
          flex items-center gap-2 rounded-full 
          bg-[#868a50] text-black px-5 py-4 
          shadow-[0_2px_4px_rgba(0,0,0,0.04)] 
          backdrop-blur-md 
          opacity-80 
          transition-all duration-200 ease-in-out 
          hover:opacity-100 hover:-translate-y-[2px] hover:scale-105 
          hover:shadow-md hover:bg-foreground hover:text-white
        "
      >
        <span className="font-bold text-lg">&#x2F95;</span>
        <span className="font-bold">Home</span>
      </Button>
    </Link>
  );
}
