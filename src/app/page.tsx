import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default async function HomePage() {
  const { data: categories = [] } = await supabase
    .from("categories")
    .select("*")
    .order("order", { ascending: true });

  return (
    <>
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="bg-[#F2FD7D] border-b-4 border-black overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-700">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#28443F] mb-6 leading-tight text-balance">
                Say It with{" "}
                <span className="bg-white px-2 border-2 border-black inline-block transform -rotate-2">
                  Style
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[#28443F] mb-8 leading-relaxed max-w-lg">
                Express every mood with thousands of kaomoji. Explore pre-made
                faces or craft your own unique text expressions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/generator"
                  className="inline-block bg-[#28443F] text-[#F2FD7D] px-8 py-4 rounded-lg font-bold text-lg border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200 text-center"
                >
                  &#x2699;&#xFE0F; Try the Generator
                </Link>
                <a
                  href="#categories"
                  className="inline-block bg-white text-[#28443F] px-8 py-4 rounded-lg font-bold text-lg border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] transition-all duration-200 text-center"
                >
                  Browse Kaomoji
                </a>
              </div>
            </div>

            <div className="hidden lg:block animate-in fade-in zoom-in duration-1000 delay-300">
              <div className="bg-white border-4 border-black rounded-2xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 text-center relative group">
                {/* Floating decor */}
                <div className="absolute -top-6 -right-6 text-4xl animate-float">
                  ✨
                </div>
                <div
                  className="absolute -bottom-6 -left-6 text-4xl animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  🌸
                </div>

                <div className="text-8xl mb-4  cursor-default">
                  &#xFF08;&#x25D4;&#x203F;&#x25D4;&#xFF09;
                </div>
                <div className="text-6xl mb-4 text-gray-300 opacity-50 select-none">
                  &#xFF08;&#x2022;&#x203F;&#x2022;&#xFF09;
                </div>
                <div className="text-7xl group-hover:text-[#28443F] transition-colors duration-300">
                  &#xFF0E;&#x25D4;&#x203F;&#x203F;&#x25D4;&#xFF0E;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6" id="categories">
        <h2 className="text-3xl sm:text-4xl font-black text-[#28443F] mb-8 text-center">
          Browse by Category
        </h2>

        {/* Quick Links */}
        <div className="space-y-4 mb-8">
          <Link
            href="/"
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white border-4 border-black p-5 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 group"
          >
            <span className="flex items-center gap-3 font-bold text-lg text-[#28443F]">
              <span className="text-2xl">&#x2F95;</span>
              <span>Home</span>
            </span>
          </Link>

          <Link
            href="/generator"
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#F2FD7D] border-4 border-black p-5 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 group"
          >
            <span className="flex items-center gap-3 font-bold text-lg text-[#28443F]">
              <span className="text-2xl">&#x2699;&#xFE0F;</span>
              <span>Emoji Generator</span>
            </span>
          </Link>
        </div>

        {/* Category List */}
        <div className="grid sm:grid-cols-2 gap-4">
          {(categories ?? []).map((cat) => (
            <Link
              key={cat.id}
              href={`/${cat.slug}`}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white border-4 border-black p-5 rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 group"
            >
              <span className="flex items-center gap-3 font-bold text-lg text-[#28443F]">
                <span className="text-2xl">{cat.icon}</span>
                <span>{cat.name}</span>
              </span>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer CTA */}
      <section className="bg-[#28443F] border-t-4 border-black py-20 px-4 sm:px-6 mt-16 relative overflow-hidden">
        {/* Animated Background Icons */}
        <div className="absolute top-10 left-10 text-[#F2FD7D]/10 text-9xl transform -rotate-12 select-none">
          (^.^)
        </div>
        <div className="absolute bottom-10 right-10 text-[#F2FD7D]/10 text-9xl transform rotate-12 select-none">
          (o_O)
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-6xl font-black text-[#F2FD7D] mb-6 tracking-tighter">
            Don&#39;t Just Type.
            <span className="italic block sm:inline"> Emote.</span>
          </h2>
          <p className="text-lg text-[#F2FD7D]/90 mb-10 leading-relaxed max-w-xl mx-auto">
            Access the full library and create your own text faces for free.
            Start expressing your true self today.
          </p>
          <Link
            href="/generator"
            className="inline-block bg-[#F2FD7D] text-[#28443F] px-10 py-5 rounded-lg font-bold text-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[8px] hover:translate-y-[8px] active:scale-95 transition-all duration-200"
          >
            Get Started Now - It&#39;s Free!
          </Link>
        </div>
      </section>
    </>
  );
}
