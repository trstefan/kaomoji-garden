"use client";

import { CategoryCard } from "@/components/CategoryCard";

const categories = [
  { emoticon: "🏠", label: "Home" },
  { emoticon: "😊", label: "Emoticon Generator" },
  { emoticon: "(ง •̀_•́)ง", label: "Lenny Faces" },
  { emoticon: "(◕‿◕)", label: "Cute" },
  { emoticon: "(ノ ◕ヮ◕)ノ*:・゚✧", label: "Table Flip" },
  { emoticon: "¯\\_(ツ)_/¯", label: "Shrug" },
  { emoticon: "(╯°□°)╯︵ ┻━┻", label: "Flipping" },
  { emoticon: "(ノಠ益ಠ)ノ", label: "Angry" },
  { emoticon: "ʕ•ᴥ•ʔ", label: "Bears" },
  { emoticon: "( ͡° ͜ʖ ͡°)", label: "Sad" },
  { emoticon: "(ಠ_ಠ)", label: "Cats" },
  { emoticon: "(ಠ_ಠ)", label: "Confused" },
  { emoticon: "(^_^)", label: "Happy" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Emoticon Hub</h1>
          <p className="text-muted-foreground">
            Explore our vast collection of Emoticons
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">
              EMOTICON CATEGORIES
            </h2>
            <p className="text-sm text-muted-foreground">
              Explore our vast collection of Emoticons, Kaomoji, Kawaii Faces,
              and Text Faces. Discover unique Emoticons and ASCII Art for every
              mood. Copy and Paste the perfect expression instantly!
            </p>
          </div>

          <div className="space-y-2">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                emoticon={category.emoticon}
                label={category.label}
                onClick={() => console.log(`Clicked ${category.label}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
