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
      <section className="bg-[#F2FD7D] border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-4  py-12 sm:py-20 ">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ">
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#28443F] mb-6 leading-tight text-balance">
                Say It with Style
              </h1>
              <p className="text-lg sm:text-xl text-[#28443F] mb-8 leading-relaxed">
                Express every mood with thousands of kaomoji. Explore pre-made
                faces or craft your own unique text expressions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/generator"
                  className="inline-block bg-[#28443F] text-[#F2FD7D] px-8 py-4 rounded-lg font-bold text-lg border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 text-center"
                >
                  &#x2699;&#xFE0F; Try the Generator
                </Link>
                <Link
                  href="#categories"
                  className="inline-block bg-white text-[#28443F] px-8 py-4 rounded-lg font-bold text-lg border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 text-center"
                >
                  Browse Kaomoji
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white border-4 border-black rounded-2xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 text-center">
                <div className="text-8xl mb-4">
                  &#xFF08;&#x25D4;&#x203F;&#x25D4;&#xFF09;
                </div>
                <div className="text-6xl mb-4">
                  &#xFF08;&#x2022;&#x203F;&#x2022;&#xFF09;
                </div>
                <div className="text-7xl">
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
      <section className="bg-[#28443F] border-t-4 border-black py-16 px-4 sm:px-6 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-[#F2FD7D] mb-6">
            Don&#39;t Just Type.
            <span className="italic"> Emote.</span>
          </h2>
          <p className="text-lg text-[#F2FD7D]/90 mb-8 leading-relaxed">
            Access the full library and create your own text faces for free.
          </p>
          <Link
            href="/generator"
            className="inline-block bg-[#F2FD7D] text-[#28443F] px-10 py-5 rounded-lg font-bold text-xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
          >
            Get Started Now - It&#39; s Free!
          </Link>
        </div>
      </section>
    </>
  );
}
