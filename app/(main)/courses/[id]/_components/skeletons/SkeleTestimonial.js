const SkeleTestimonials = () => {
  return (
    <div className="space-y-8 animate-pulse">
      <div>
        <div className="h-8 w-44 rounded-lg bg-zinc-800" />
        <div className="mt-3 h-4 w-60 rounded bg-zinc-800" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/5 bg-zinc-900/40 p-6 space-y-4"
          >
            <div className="flex items-center gap-4">
              <div className="h-11.25 w-11.25 rounded-full border border-white/5 bg-zinc-800" />

              <div className="space-y-2">
                <div className="h-4 w-24 rounded bg-zinc-800" />

                <div className="h-3 w-16 rounded bg-zinc-800" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-zinc-800" />
              <div
                className={`h-4 rounded bg-zinc-800 ${
                  i === 1 ? "w-2/3" : i === 2 ? "w-5/6" : "w-1/2"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeleTestimonials;
