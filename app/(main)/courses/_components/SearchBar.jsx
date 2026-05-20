import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 px-4 py-3 backdrop-blur-xl">
      <FaSearch className="text-zinc-400" />

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search courses..."
        className="w-full bg-transparent outline-none text-sm"
      />
    </div>
  );
};

export default SearchBar;
