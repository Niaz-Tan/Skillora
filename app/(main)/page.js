import Categorys from "./_components/Categorys";
import Courses from "./_components/Courses";
import Hero from "./_components/Hero";

const Page = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="absolute -top-50 -left-25 h-112.5 w-112.5 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute -right-25 top-75 h-112.5 w-112.5 rounded-full bg-indigo-500/20 blur-3xl" />

      <Hero />
      <Categorys />
      <Courses />
    </div>
  );
};

export default Page;
