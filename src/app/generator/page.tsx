"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner"; // optional toast lib if you use it

export default function EmojiGeneratorPage() {
  const bases = ["()", "{}", "[]", "<>"];
  const eyesList = ["•", "^", "¬", "x", "o"];
  const mouths = ["‿", "ᴥ", "﹏", "_", "ᴗ"];
  const armsList = ["", "ʕʔ", "( )", "¯¯", "ᕦᕤ"];
  const accessories = ["", "★", "♡", "♪", "☀️"];

  const [base, setBase] = useState(bases[0]);
  const [eyes, setEyes] = useState(eyesList[0]);
  const [mouth, setMouth] = useState(mouths[0]);
  const [arms, setArms] = useState(armsList[0]);
  const [accessory, setAccessory] = useState(accessories[0]);

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
    setBase(bases[Math.floor(Math.random() * bases.length)]);
    setEyes(eyesList[Math.floor(Math.random() * eyesList.length)]);
    setMouth(mouths[Math.floor(Math.random() * mouths.length)]);
    setArms(armsList[Math.floor(Math.random() * armsList.length)]);
    setAccessory(accessories[Math.floor(Math.random() * accessories.length)]);
  };

  const handleSave = async () => {
    const symbol = generateEmoji();

    const { data, error } = await supabase.from("emoticons").insert([
      {
        symbol,

        category_id: "753aedb6-b751-4ead-a0fc-0738bb31908b",
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
            options={bases}
            setValue={setBase}
          />
          <Dropdown
            label="Eyes"
            value={eyes}
            options={eyesList}
            setValue={setEyes}
          />
          <Dropdown
            label="Mouth / Nose"
            value={mouth}
            options={mouths}
            setValue={setMouth}
          />
          <Dropdown
            label="Arms"
            value={arms}
            options={armsList}
            setValue={setArms}
          />
          <Dropdown
            label="Accessory / Decor"
            value={accessory}
            options={accessories}
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

// Small dropdown subcomponent
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
