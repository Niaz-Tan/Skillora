import Categorys from "./_components/Categorys";
import Courses from "./_components/Courses";
import Hero from "./_components/Hero";

const Page = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="absolute top-[-200px] left-[-100px] h-[450px] w-[450px] rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute right-[-100px] top-[300px] h-[450px] w-[450px] rounded-full bg-indigo-500/20 blur-3xl" />

      <Hero />
      <Categorys />
      <Courses />
    </div>
  );
};

export default Page;