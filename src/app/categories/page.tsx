import { api, HydrateClient } from "@/trpc/server";
import { CategoryRow } from "./CategoryRow";
import { CategoryRowSkeleton } from "./CategoryRowSkeleton";
import { Suspense } from "react";
import { AddCategoryPopup } from "@/components/AddCategory/Popup";

export default async function CategoryPage() {
  const categories = await api.category.getAllWithBooks();

  return (
    <HydrateClient>
      <div className="container flex flex-col gap-4 px-4 py-8">
        <div className="flex items-center justify-between">
          <h1 className="mb-8 text-center text-3xl font-bold">
            Book Categories
          </h1>
          <AddCategoryPopup />
        </div>
        <div className="h-full w-full">
          <Suspense fallback={<CategoryRowSkeleton />}>
            {categories.map((category) => (
              <CategoryRow
                key={category.id}
                categoryName={category.name}
                books={category.books}
                categorySlug={category.slug}
              />
            ))}
          </Suspense>
        </div>
      </div>
    </HydrateClient>
  );
}
