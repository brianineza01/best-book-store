import { api, HydrateClient } from "@/trpc/server";

import BooksWithSearch from "./BooksWithSearch";

const page = async () => {
  await api.book.getAll.prefetch();
  return (
    <HydrateClient>
      <BooksWithSearch />
    </HydrateClient>
  );
};

export default page;
