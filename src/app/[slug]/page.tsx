import { supabase } from "@/lib/supabaseClient";
import EmoticonGrid from "@/components/EmoticonGrid";

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

  if (!category) return <p>Category not found</p>;

  const { data: emoticons } = await supabase
    .from("emoticons")
    .select("id, symbol")
    .eq("category_id", category.id);

  return (
    <main className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-4">
        {category.name} {category.icon}
      </h1>
      <p className="text-center mb-8 text-neutral-500">
        {category.description}
      </p>

      <EmoticonGrid emoticons={emoticons ?? []} />
    </main>
  );
}
