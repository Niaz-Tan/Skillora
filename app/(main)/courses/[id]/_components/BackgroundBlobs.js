const BackgroundBlobs = () => {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-[0.03] bg-size-[24px_24px]" />

      <div className="absolute -left-30 -top-30 h-87.5 w-87.5 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <div className="absolute -right-30 top-50 h-87.5 w-87.5 rounded-full bg-violet-500/20 blur-3xl" />
    </>
  );
};

export default BackgroundBlobs;
