"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function EmojiGeneratorPage() {
  const [base, setBase] = useState("()");
  const [eyes, setEyes] = useState("•");
  const [mouth, setMouth] = useState("‿");
  const [arms, setArms] = useState("");
  const [accessory, setAccessory] = useState("");

  const generateEmoji = () => {
    // If arms exist, they wrap the whole thing
    if (arms)
      return `${arms[0]}${base[0]}${eyes}${mouth}${eyes}${base[1]}${arms[1]}`;
    return `${base[0]}${eyes}${mouth}${eyes}${base[1]}${accessory}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateEmoji());
  };

  return (
    <main className="max-w-xl mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold mb-6">Emoticon Generator</h1>

      <div className="border rounded-lg p-6 bg-neutral-50 dark:bg-neutral-900 shadow">
        <h2 className="text-lg font-semibold mb-4">EMOTICON GENERATOR</h2>

        {/* Preview */}
        <div className="border rounded-md bg-neutral-100 dark:bg-neutral-800 py-6 mb-6 text-3xl font-mono">
          {generateEmoji()}
        </div>

        {/* Dropdowns */}
        <div className="space-y-4">
          {/* Base */}
          <div>
            <label className="block text-sm font-medium mb-1">Base</label>
            <select
              className="w-full border rounded p-2 bg-transparent"
              value={base}
              onChange={(e) => setBase(e.target.value)}
            >
              <option value="()">()</option>
              <option value="{}">{`{}`}</option>
              <option value="[]">[]</option>
              <option value="<>">&lt;&gt;</option>
            </select>
          </div>

          {/* Eyes */}
          <div>
            <label className="block text-sm font-medium mb-1">Eyes</label>
            <select
              className="w-full border rounded p-2 bg-transparent"
              value={eyes}
              onChange={(e) => setEyes(e.target.value)}
            >
              <option value="•">•</option>
              <option value="^">^</option>
              <option value="¬">¬</option>
              <option value="x">x</option>
              <option value="o">o</option>
            </select>
          </div>

          {/* Mouth / Nose */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Mouth / Nose
            </label>
            <select
              className="w-full border rounded p-2 bg-transparent"
              value={mouth}
              onChange={(e) => setMouth(e.target.value)}
            >
              <option value="‿">‿</option>
              <option value="ᴥ">ᴥ</option>
              <option value="﹏">﹏</option>
              <option value="_">_</option>
              <option value="ᴗ">ᴗ</option>
            </select>
          </div>

          {/* Arms */}
          <div>
            <label className="block text-sm font-medium mb-1">Arms</label>
            <select
              className="w-full border rounded p-2 bg-transparent"
              value={arms}
              onChange={(e) => setArms(e.target.value)}
            >
              <option value="">None</option>
              <option value="ʕʔ">ʕʔ</option>
              <option value="( )">( )</option>
              <option value="¯¯">¯¯</option>
              <option value="ᕦᕤ">ᕦᕤ</option>
            </select>
          </div>

          {/* Accessory */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Accessory / Decor
            </label>
            <select
              className="w-full border rounded p-2 bg-transparent"
              value={accessory}
              onChange={(e) => setAccessory(e.target.value)}
            >
              <option value="">None</option>
              <option value="★">★</option>
              <option value="♡">♡</option>
              <option value="♪">♪</option>
              <option value="☀️">☀️</option>
            </select>
          </div>
        </div>

        {/* Copy Button */}
        <div className="mt-6">
          <Button onClick={handleCopy} variant="secondary">
            Copy Emoticon
          </Button>
        </div>
      </div>
    </main>
  );
}
