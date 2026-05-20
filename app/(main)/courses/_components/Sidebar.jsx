const Sidebar = ({ categories, selectedCategories, toggleCategory }) => {
  return (
    <aside className="hidden lg:block space-y-6">
      <div className="rounded-2xl border border-white/10 bg-white/3 p-5 backdrop-blur-xl">
        <h2 className="text-sm font-semibold mb-4">Categories</h2>

        <div className="space-y-2">
          {categories.map((cat) => {
            const active = selectedCategories.includes(cat.title);

            return (
              <label
                key={cat._id}
                className={`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer border transition
                ${
                  active
                    ? "bg-white/10 border-white/20"
                    : "border-white/10 hover:bg-white/5"
                }
              `}
              >
                <span className="text-sm text-zinc-300">{cat.title}</span>

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
    </aside>
  );
};

export default Sidebar;
