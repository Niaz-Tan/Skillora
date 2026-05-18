const SkelePricing = () => {
  return (
    <aside className="rounded-3xl border border-white/5 bg-zinc-900/40 p-6 backdrop-blur-xl animate-pulse">
      <div className="space-y-5">
        <div>
          <div className="h-7 w-32 rounded-full bg-zinc-800" />
        </div>

        <div>
          <div className="h-4 w-20 rounded bg-zinc-800" />

          <div className="mt-3 h-10 w-36 rounded-xl bg-zinc-800" />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <div className="h-13 w-full rounded-2xl bg-zinc-800/80" />

        <div className="h-13 w-full rounded-2xl bg-zinc-800/40 border border-white/5" />
      </div>

      <div className="mt-8 space-y-4 border-t border-white/5 pt-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="h-4 w-16 rounded bg-zinc-800" />

            <div
              className={`h-4 rounded bg-zinc-800 ${
                i === 1 ? "w-16" : i === 2 ? "w-20" : i === 3 ? "w-10" : "w-14"
              }`}
            />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SkelePricing;
