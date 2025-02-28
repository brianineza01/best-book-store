import { api, HydrateClient } from "@/trpc/server";
import { CategoryRowSkeleton } from "./CategoryRowSkeleton";
import { Suspense } from "react";
import { AddCategoryPopup } from "@/components/AddCategory/Popup";
import { CategoriesRender } from "./CategoriesRender";

export default async function CategoryPage() {
  await api.category.getAllWithBooks.prefetch();

  return (
    <HydrateClient>
      <div className="container flex flex-col gap-4 py-8 sm:gap-6 md:gap-8">
        <div className="flex items-center justify-between">
          <h1 className="mb-4 text-center text-3xl font-bold sm:mb-6 md:mb-8">
            Book Categories
          </h1>
          <AddCategoryPopup />
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          <Suspense fallback={<CategoryRowSkeleton />}>
            <CategoriesRender />
          </Suspense>
        </div>
      </div>
    </HydrateClient>
  );
}
