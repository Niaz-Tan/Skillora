import Image from "next/image";

const CourseIntro = ({ nam, title }) => {
  return (
    <div className="space-y-4 md:w-[50%]">
      {/* title */}
      <div>
        <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>

        <p className="mt-2 text-sm text-gray-400 sm:text-base">
          Javascript & React mastery
        </p>
      </div>

      {/* instructor + updated */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* instructor */}
        <div className="flex items-center gap-3">
          <Image
            unoptimized
            src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${nam}`}
            alt="profile"
            width={45}
            height={45}
            className="rounded-full border border-white/10 bg-white"
          />

          <p className="text-base font-medium sm:text-lg">{nam}</p>
        </div>

        {/* updated */}
        <p className="text-sm text-gray-300 sm:text-base">
          <span className="font-semibold text-green-500">Last Updated:</span>{" "}
          Feb 22, 2022
        </p>
      </div>
    </div>
  );
};

export default CourseIntro;
