const DesktopControls = ({
  sort,
  setSort,
  priceFilter,
  setPriceFilter,
}) => {
  return (
    <div className="hidden md:flex items-center justify-between mt-5 gap-4">
      <div className="relative w-[180px]">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full appearance-none cursor-pointer rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 pr-10 text-sm"
        >
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>

        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
          ▾
        </div>
      </div>

      <div className="flex gap-2">
        {["", "free", "paid"].map((type) => (
          <button
            key={type}
            onClick={() => setPriceFilter(type)}
            className={`px-4 py-2 rounded-xl text-sm border ${
              priceFilter === type
                ? "bg-white/10 border-white/20"
                : "border-white/10"
            }`}
          >
            {type === "" ? "All" : type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DesktopControls;