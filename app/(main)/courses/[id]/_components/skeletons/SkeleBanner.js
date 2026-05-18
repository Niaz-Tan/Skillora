const SkeleBanner = () => {
  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/50 backdrop-blur-md">
      <div className="absolute inset-0 animate-pulse bg-zinc-800/80" />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ring-1 ring-inset ring-white/10" />
    </div>
  );
};

export default SkeleBanner;
