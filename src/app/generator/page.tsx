"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";
import data from "@/data/emoticonParts.json"; // 👈 import JSON file

export default function EmojiGeneratorPage() {
  // Initialize from JSON data
  const [base, setBase] = useState(data.base[0]);
  const [eyes, setEyes] = useState(data.eyes[0]);
  const [mouth, setMouth] = useState(data.mouth[0]);
  const [arms, setArms] = useState(data.arms[0]);
  const [accessory, setAccessory] = useState(data.accessory[0]);

  const generateEmoji = () => {
    if (arms)
      return `${arms[0]}${base[0]}${eyes}${mouth}${eyes}${base[1]}${arms[1]}${accessory}`;
    return `${base[0]}${eyes}${mouth}${eyes}${base[1]}${accessory}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateEmoji());
    toast?.success("Emoji copied!");
  };

  const handleRandomize = () => {
    setBase(data.base[Math.floor(Math.random() * data.base.length)]);
    setEyes(data.eyes[Math.floor(Math.random() * data.eyes.length)]);
    setMouth(data.mouth[Math.floor(Math.random() * data.mouth.length)]);
    setArms(data.arms[Math.floor(Math.random() * data.arms.length)]);
    setAccessory(
      data.accessory[Math.floor(Math.random() * data.accessory.length)]
    );
  };

  const handleSave = async () => {
    const symbol = generateEmoji();

    const { error } = await supabase.from("emoticons").insert([
      {
        symbol,
        category_id: "753aedb6-b751-4ead-a0fc-0738bb31908b", // "By users"
        created_at: new Date(),
      },
    ]);

    if (error) {
      console.error(error);
      toast?.error("Failed to save emoji 😢");
    } else {
      toast?.success("Emoji saved successfully! 🎉");
    }
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
          <Dropdown
            label="Base"
            value={base}
            options={data.base}
            setValue={setBase}
          />
          <Dropdown
            label="Eyes"
            value={eyes}
            options={data.eyes}
            setValue={setEyes}
          />
          <Dropdown
            label="Mouth / Nose"
            value={mouth}
            options={data.mouth}
            setValue={setMouth}
          />
          <Dropdown
            label="Arms"
            value={arms}
            options={data.arms}
            setValue={setArms}
          />
          <Dropdown
            label="Accessory / Decor"
            value={accessory}
            options={data.accessory}
            setValue={setAccessory}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <Button variant="outline" onClick={handleCopy}>
            Copy
          </Button>
          <Button onClick={handleRandomize}>Randomize</Button>
          <Button variant="outline" onClick={handleSave}>
            Save to the collection
          </Button>
        </div>
      </div>
    </main>
  );
}

// Dropdown Subcomponent
type DropdownProps = {
  label: string;
  value: string;
  options: string[];
  setValue: (value: string) => void;
};

function Dropdown({ label, value, options, setValue }: DropdownProps) {
  return (
    <div className="text-left">
      <label className="block text-sm font-medium mb-1.5 text-gray-600 dark:text-gray-300">
        {label}
      </label>
      <select
        className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-2.5 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 cursor-pointer shadow-sm hover:border-gray-400 dark:hover:border-gray-500"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((opt, i) => (
          <option key={i} value={opt} className="dark:bg-gray-800">
            {opt || "None (Remove)"}
          </option>
        ))}
      </select>
    </div>
  );
}
