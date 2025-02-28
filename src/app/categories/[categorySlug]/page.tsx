import { api, HydrateClient } from "@/trpc/server";
import { notFound } from "next/navigation";
import { CategoryBooks } from "./CategoryBooks";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;

  if (!categorySlug) {
    return notFound();
  }

  const reqOb = {
    categorySlug,
    page: 1,
    limit: 100,
  };

  const [data] = await Promise.all([
    api.category.getBooksByCategory(reqOb),
    api.category.getBooksByCategory.prefetch(reqOb),
  ]);

  return (
    <HydrateClient>
      <div className="container px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">{data.name}</h1>
        <CategoryBooks categorySlug={categorySlug} />
      </div>
    </HydrateClient>
  );
}
