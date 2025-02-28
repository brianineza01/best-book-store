import { Input } from "@/components/ui/input";

const SearchInput = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}) => {
  return (
    <Input
      type="text"
      placeholder="Search for a book"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchInput;
