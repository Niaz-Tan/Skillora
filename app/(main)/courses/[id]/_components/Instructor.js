import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaRegMessage, FaTv } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";

const Instructor = ({ nam }) => {
  return (
    <div className="space-y-8">
      {/* top */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <Image
          unoptimized
          src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${nam}`}
          alt={nam}
          width={220}
          height={220}
          className="w-full max-w-65 rounded-2xl border border-white/10 bg-white object-cover"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white">{nam}</h1>

          <p className="mt-2 text-zinc-400">
            Senior Software Engineer & Instructor
          </p>

          {/* stats */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 text-zinc-300">
              <FaTv className="text-lg text-zinc-400" />
              10+ Courses
            </div>

            <div className="flex items-center gap-3 text-zinc-300">
              <MdPeopleAlt className="text-lg text-zinc-400" />
              2k+ Students
            </div>

            <div className="flex items-center gap-3 text-zinc-300">
              <FaRegMessage className="text-lg text-zinc-400" />
              1500+ Reviews
            </div>

            <div className="flex items-center gap-3 text-zinc-300">
              <CiStar className="text-lg text-emerald-400" />
              4.9 Rating
            </div>
          </div>
        </div>
      </div>

      {/* description */}
      <p className="text-base leading-8 text-zinc-400">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour or
        randomised words which do not look even slightly believable.
      </p>
    </div>
  );
};

export default Instructor;
