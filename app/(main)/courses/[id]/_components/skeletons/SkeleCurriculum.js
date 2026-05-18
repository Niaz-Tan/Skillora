const SkeleCurriculum = () => {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="flex flex-wrap gap-4 rounded-2xl border border-white/5 bg-zinc-900/40 p-5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-4 w-4 rounded bg-zinc-800" />

            <div className="h-4 w-20 rounded bg-zinc-800" />
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-white/5 bg-zinc-900/40">
          <div className="flex w-full items-center justify-between px-5 py-4">
            <div className="space-y-2">
              <div className="h-3 w-12 rounded bg-zinc-800" />
              <div className="h-5 w-40 rounded bg-zinc-800" />
            </div>

            <div className="h-4 w-4 rounded bg-zinc-800" />
          </div>

          <div className="border-t border-white/5 p-4 space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl px-4 py-3"
              >
                <div className="h-4 w-4 rounded bg-zinc-800" />

                <div
                  className={`h-4 rounded bg-zinc-800 ${
                    i === 1 ? "w-1/3" : i === 2 ? "w-1/2" : "w-1/4"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/5 bg-zinc-900/40">
          <div className="flex w-full items-center justify-between px-5 py-4">
            <div className="space-y-2">
              <div className="h-3 w-12 rounded bg-zinc-800" />
              <div className="h-5 w-48 rounded bg-zinc-800" />
            </div>
            <div className="h-4 w-4 rounded bg-zinc-800" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeleCurriculum;
