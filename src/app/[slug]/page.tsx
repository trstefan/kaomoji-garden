import { supabase } from "@/lib/supabaseClient";
import EmoticonGrid from "@/components/EmoticonGrid";
import { notFound } from "next/navigation";

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { data: category } = await supabase
    .from("categories")
    .select("id, name, icon, description")
    .eq("slug", params.slug)
    .single();

  if (!category) notFound();

  const { data: emoticons } = await supabase
    .from("emoticons")
    .select("id, symbol")
    .eq("category_id", category.id);

  return (
    <main className="max-w-3xl mx-auto py-8 px-3 sm:px-8">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#28443F] mb-6 leading-tight text-balance text-center">
        {category.name} {category.icon}
      </h1>
      <p className="text-lg sm:text-xl text-[#28443F] mb-8 leading-relaxed text-center">
        {category.description}
      </p>

      <EmoticonGrid emoticons={emoticons ?? []} />
    </main>
  );
}
