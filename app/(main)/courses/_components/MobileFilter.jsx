import { FaTimes } from "react-icons/fa";

const MobileFilter = ({
  filterOpen,
  setFilterOpen,
  categories,
  selectedCategories,
  toggleCategory,
}) => {
  if (!filterOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-end md:hidden">
      <div className="w-full max-h-[70vh] bg-zinc-900 rounded-t-2xl p-5 overflow-y-auto">
        <button onClick={() => setFilterOpen(false)}>
          <FaTimes />
        </button>

        <h2 className="mt-4 font-semibold">Categories</h2>

        <div className="space-y-2 mt-3">
          {categories.map((cat) => {
            const active = selectedCategories.includes(cat.title);

            return (
              <label
                key={cat._id}
                className={`flex justify-between items-center px-3 py-2 rounded-xl border transition
                ${active ? "bg-white/10 border-white/20" : "border-white/10"}
              `}
              >
                <span>{cat.title}</span>

                <input
                  type="checkbox"
                  checked={active}
                  onChange={() => toggleCategory(cat.title)}
                  className="accent-white"
                />
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileFilter;
