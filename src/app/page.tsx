import { HydrateClient } from "@/trpc/server";
import { api } from "@/trpc/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HomeCategories } from "./HomeCategories";
import { BookSearch } from "@/components/BookSearch";

export default async function Home() {
  // Prefetch categories with books for the homepage
  await api.category.getAllWithBooks.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col">
        <section className="from-slate-gray-400 to-outer-space-500 relative flex h-[500px] w-full items-center justify-center overflow-hidden bg-gradient-to-r">
          <div className="absolute inset-0 z-0 bg-[url('/pattern.svg')] opacity-10" />
          <div className="text-seasalt z-10 flex flex-col items-center justify-center space-y-6 px-4 text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Welcome to the Best Book Store
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl">
              Discover your next favorite book from our extensive collection of
              titles across various genres.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/books">
                <Button
                  size="lg"
                  className="bg-seasalt text-outer-space hover:bg-anti-flash-white"
                >
                  Browse All Books
                </Button>
              </Link>
              <Link href="/categories">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-seasalt text-seasalt hover:bg-seasalt hover:text-outer-space"
                >
                  Explore Categories
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-anti-flash-white w-full py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-center text-3xl font-bold">
              Find Your Next Book
            </h2>
            <div className="mx-auto max-w-2xl">
              <BookSearch />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Featured Categories
          </h2>
          <HomeCategories />
        </section>
      </main>
    </HydrateClient>
  );
}
