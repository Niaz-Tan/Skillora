import { FaChevronDown } from "react-icons/fa6";

const ModuleSection = ({ course }) => {
  const { modules } = course;
  return (
    <div className="h-fit rounded-3xl border border-white/10 bg-zinc-900/30 p-6 backdrop-blur-md">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Course Content</h2>

        <p className="mt-2 text-sm text-zinc-500">
          {modules.length} modules included
        </p>
      </div>

      <div className="space-y-4">
        {modules.map((module, index) => (
          <details
            key={module._id}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-black/20"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 transition hover:bg-white/3">
              <div>
                <p className="text-sm text-zinc-500">Module {index + 1}</p>

                <h3 className="mt-1 font-medium text-white">{module.title}</h3>
              </div>

              <FaChevronDown className="text-zinc-500 transition duration-300 group-open:rotate-180" />
            </summary>
          </details>
        ))}
      </div>
    </div>
  );
};

export default ModuleSection;
