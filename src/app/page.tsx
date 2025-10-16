import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default async function HomePage() {
  const { data: categories } = await supabase
    .from("categories")
    .select("*")
    .order("order", { ascending: true });

  return (
    <main className="max-w-2xl mx-auto py-6 px-3 sm:px-6">
      <h1 className="text-4xl sm:text-text-4xl font-bold mt-10 mb-6 text-center tracking-wide">
        Kaomoji Garden
      </h1>

      {/* Navigation Links */}
      <div className="space-y-3 mb-6 font-semibold">
        <Link
          href="/"
          className="
 flex flex-col sm:flex-row items-start sm:items-center justify-between border p-3 rounded-lg  gap-2 shadow-[0_2px_4px_rgba(0,0,0,0.04)] transition-all duration-200 ease-in-out hover:-translate-y-[2px] hover:bg-secondary
 "
        >
          <span className="flex items-center gap-2">
            <span>&#x2F95;</span>
            <span>Home</span>
          </span>
          <span className="font-bold hidden sm:inline">→</span>
        </Link>

        {/* ✨ New Link for Emoji Generator */}
        <Link
          href="/generator"
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between border p-3 rounded-lg gap-2 shadow-[0_2px_4px_rgba(0,0,0,0.04)] transition-all duration-200 ease-in-out hover:-translate-y-[2px] hover:bg-secondary"
        >
          <span className="flex items-center gap-2">
            <span>⚙️</span>
            <span>Emoji Generator</span>
          </span>
          <span className="font-bold hidden sm:inline">→</span>
        </Link>
      </div>

      {/* Category List */}
      <div className="space-y-4 font-semibold">
        {categories?.map((cat) => (
          <Link
            key={cat.id}
            href={`/${cat.slug}`}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between border p-3 rounded-lg transition gap-2 shadow-[0_2px_4px_rgba(0,0,0,0.04)]  duration-200 ease-in-out hover:-translate-y-[2px] hover:bg-secondary"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">{cat.icon}</span>
              <span>{cat.name}</span>
            </span>
            <span className="font-bold hidden sm:inline">→</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
