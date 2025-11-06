"use client";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";
import { toast } from "sonner";
import data from "@/data/emoticonParts.json";

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
    toast?.success("Emoji copied to clipboard!");
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
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black text-[#28443F] mb-4">
            Emoticon Generator
          </h1>
          <p className="text-lg md:text-xl text-[#28443F]/80 font-bold">
            Create your own unique kaomoji emoticons
          </p>
        </div>

        {/* Main Generator Card */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 mb-8">
          {/* Preview Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-black text-[#28443F] mb-4 text-center">
              YOUR EMOTICON
            </h2>
            <div className="bg-[#F2FD7D] border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] py-12 px-6 text-center">
              <div className="text-5xl md:text-6xl font-mono text-[#28443F] break-all select-all">
                {generateEmoji()}
              </div>
            </div>
          </div>

          {/* Controls Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
              fullWidth
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleCopy}
              className="bg-[#28443F] text-[#F2FD7D] font-black text-lg px-8 py-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px]"
            >
              &#x1F4CB; COPY
            </button>
            <button
              onClick={handleRandomize}
              className="bg-[#F2FD7D] text-[#28443F] font-black text-lg px-8 py-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px]"
            >
              &#x1F3B2; RANDOMIZE
            </button>
            <button
              className="bg-[#28443F] text-[#F2FD7D] font-black text-lg px-8 py-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px]"
              onClick={handleSave}
            >
              &#x1F4BE; SAVE
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

// Dropdown Subcomponent
type DropdownProps<T> = {
  label: string;
  value: T;
  options: T[];
  setValue: (value: T) => void;
  fullWidth?: boolean;
};

function Dropdown<T extends string | string[]>({
  label,
  value,
  options,
  setValue,
  fullWidth,
}: DropdownProps<T>) {
  const displayValue = Array.isArray(value) ? value.join("") : value;

  return (
    <div className={fullWidth ? "md:col-span-2" : ""}>
      <label className="block text-lg font-black text-[#28443F] mb-3 uppercase">
        {label}
      </label>
      <select
        className="w-full border-4 border-black bg-white text-[#28443F] font-bold text-lg px-4 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#F2FD7D] cursor-pointer appearance-none"
        value={displayValue}
        onChange={(e) => {
          const selectedIndex = options.findIndex((opt) => {
            const optDisplay = Array.isArray(opt) ? opt.join("") : opt;
            return optDisplay === e.target.value;
          });
          setValue(options[selectedIndex]);
        }}
      >
        {options.map((opt, i) => {
          const optDisplay = Array.isArray(opt) ? opt.join("") : opt;
          return (
            <option key={i} value={optDisplay}>
              {optDisplay || "None (Remove)"}
            </option>
          );
        })}
      </select>
    </div>
  );
}
