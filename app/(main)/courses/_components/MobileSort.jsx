import { FaTimes } from "react-icons/fa";

const MobileSort = ({ sortOpen, setSortOpen, sort, setSort }) => {
  if (!sortOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-end md:hidden">
      <div className="w-full bg-zinc-900 rounded-t-2xl p-5">
        <button onClick={() => setSortOpen(false)}>
          <FaTimes />
        </button>

        <h2 className="mt-4 font-semibold">Sort By</h2>

        <div className="space-y-2 mt-3">
          {[
            { label: "Low → High", value: "low" },
            { label: "High → Low", value: "high" },
          ].map((s) => (
            <button
              key={s.value}
              onClick={() => {
                setSort(s.value);
                setSortOpen(false);
              }}
              className={`w-full text-left px-3 py-3 rounded-xl border transition
              ${
                sort === s.value
                  ? "bg-white/10 border-white/20"
                  : "border-white/10"
              }
            `}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileSort;
