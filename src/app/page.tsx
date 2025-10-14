import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default async function HomePage() {
  const { data: categories } = await supabase.from("categories").select("*");

  return (
    <main className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Emoticon Hub</h1>

      {/* Navigation Links */}
      <div className="space-y-3 mb-6">
        <Link
          href="/"
          className="flex items-center justify-between border p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
        >
          <span className="flex items-center gap-2">
            <span>🏠</span>
            <span>Home</span>
          </span>
          <span className="text-neutral-400">→</span>
        </Link>

        {/* ✨ New Link for Emoji Generator */}
        <Link
          href="/generator"
          className="flex items-center justify-between border p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
        >
          <span className="flex items-center gap-2">
            <span>⚙️</span>
            <span>Emoji Generator</span>
          </span>
          <span className="text-neutral-400">→</span>
        </Link>
      </div>

      {/* Category List */}
      <div className="space-y-3">
        {categories?.map((cat) => (
          <Link
            key={cat.id}
            href={`/${cat.slug}`}
            className="flex items-center justify-between border p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">{cat.icon}</span>
              <span>{cat.name}</span>
            </span>
            <span className="text-neutral-400">→</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
