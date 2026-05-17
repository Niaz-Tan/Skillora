const BackgroundBlobs = () => {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] opacity-[0.03] [background-size:24px_24px]" />

      <div className="absolute left-[-120px] top-[-120px] h-[350px] w-[350px] rounded-full bg-fuchsia-500/20 blur-3xl" />

      <div className="absolute right-[-120px] top-[200px] h-[350px] w-[350px] rounded-full bg-violet-500/20 blur-3xl" />
    </>
  );
};

export default BackgroundBlobs;
