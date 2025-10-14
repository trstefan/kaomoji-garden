"use client";

import { useState } from "react";

export default function EmoticonGrid({
  emoticons,
}: {
  emoticons: { id: string; symbol: string }[];
}) {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (symbol: string) => {
    navigator.clipboard.writeText(symbol);
    setCopied(symbol);
    setTimeout(() => setCopied(null), 1000);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {emoticons.map((emote) => (
        <button
          key={emote.id}
          onClick={() => copyToClipboard(emote.symbol)}
          className="p-3 border rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition relative"
        >
          <span className="text-lg">{emote.symbol}</span>
          {copied === emote.symbol && (
            <span className="absolute top-1 right-1 text-xs text-green-500">
              Copied!
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
