"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function EmoticonGrid({
  emoticons,
}: {
  emoticons: { id: string; symbol: string }[];
}) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (symbol: string) => {
    navigator.clipboard.writeText(symbol);
    setCopied(symbol);
    toast.success(`Copied "${symbol}" to clipboard!`);
    setTimeout(() => setCopied(null), 1000);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {emoticons.map((emote) => (
        <Button
          key={emote.id}
          onClick={() => copyToClipboard(emote.symbol)}
          className="rounded-lg
          bg-[#F2FD7D] text-[#28443F] p-6
          border-4 border-black
          shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
          font-bold text-lg
          transition-all duration-200 ease-out
          hover:translate-x-[3px] hover:translate-y-[3px]
          hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
          active:translate-x-[6px] active:translate-y-[6px]
          active:shadow-none hover:text-white"
        >
          <span className="text-sm">{emote.symbol}</span>
        </Button>
      ))}
    </div>
  );
}
