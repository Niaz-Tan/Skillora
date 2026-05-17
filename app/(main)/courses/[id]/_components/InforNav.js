const InforNav = () => {
  return (
    <div className="mt-8 flex">
      <nav>
        <ul className=" flex items-center gap-2 p-2 rounded-lg bg-zinc-900">
          <li className="px-5 md:px-20 bg-zinc-950 py-1 rounded">Overview</li>
          <li className="px-5 md:px-20 bg-zinc-950 py-1 rounded">Carriculum</li>
          <li className="px-5 md:px-20 bg-zinc-950 py-1 rounded">Instructor</li>
        </ul>
      </nav>
    </div>
  );
};

export default InforNav;
