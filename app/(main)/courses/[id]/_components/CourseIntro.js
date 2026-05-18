import { formatMyDate } from "@/lib/date";
import Image from "next/image";
import { use } from "react";

const CourseIntro = ({ nam, coursePromise }) => {
  const { title, instructor, modifiedOn } = use(coursePromise);
  return (
    <section className="space-y-6">
      {/* badge */}
      <div>
        <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-400">
          Web Development
        </span>
      </div>

      {/* title */}
      <div className="space-y-4">
        <h1 className="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        <p className="max-w-3xl text-base leading-7 text-zinc-400">
          Master JavaScript, React, Next.js and modern full stack development by
          building real world projects step by step.
        </p>
      </div>

      {/* meta */}
      <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-zinc-900/40 p-5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
        {/* instructor */}
        <div className="flex items-center gap-4">
          <Image
            unoptimized
            src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${instructor.firstName + instructor.lastName}`}
            alt={instructor.firstName + " " + instructor.lastName}
            width={52}
            height={52}
            className="rounded-full border border-white/10 bg-white"
          />

          <div>
            <p className="text-sm text-zinc-500">Instructor</p>

            <h3 className="text-lg font-semibold text-white">
              {instructor.firstName + " " + instructor.lastName}
            </h3>
          </div>
        </div>

        {/* update */}
        <div>
          <p className="text-sm text-zinc-500">Last Updated</p>

          <h3 className="mt-1 font-medium text-white">
            {formatMyDate(modifiedOn)}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default CourseIntro;
