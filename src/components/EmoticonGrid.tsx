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
          className="p-5 border rounded-lg  hover:cursor-pointer transition relative"
        >
          <span className="text-lg">{emote.symbol}</span>
        </Button>
      ))}
    </div>
  );
}
