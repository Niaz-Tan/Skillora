const BackgroundBlobs = () => {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="absolute top-[-200px] left-[-100px] h-[400px] w-[400px] rounded-full bg-pink-500/20 blur-3xl" />

      <div className="absolute right-[-100px] top-[250px] h-[400px] w-[400px] rounded-full bg-violet-500/20 blur-3xl" />
    </>
  );
};

export default BackgroundBlobs;
