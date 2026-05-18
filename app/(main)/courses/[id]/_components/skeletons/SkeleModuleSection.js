const SkeleModuleSection = () => {
  return (
    <div className="h-fit rounded-3xl border border-white/5 bg-zinc-900/30 p-6 backdrop-blur-md animate-pulse">
      <div className="mb-8 space-y-2">
        <div className="h-8 w-44 rounded-lg bg-zinc-800" />

        <div className="h-4 w-32 rounded bg-zinc-800" />
      </div>

      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-white/5 bg-black/20 px-5 py-4 flex items-center justify-between gap-4"
          >
            <div className="space-y-2 flex-1">
              <div className="h-3.5 w-16 rounded bg-zinc-800" />

              <div
                className={`h-5 rounded bg-zinc-800 ${
                  i % 2 === 0 ? "w-1/2" : "w-2/3"
                }`}
              />
            </div>

            <div className="h-4 w-4 rounded bg-zinc-800 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeleModuleSection;
