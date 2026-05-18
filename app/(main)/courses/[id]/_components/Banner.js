import Image from "next/image";
import { use } from "react";

const Banner = ({ coursePromise }) => {
  const course = use(coursePromise);

  return (
    <div className="group relative aspect-video overflow-hidden rounded-3xl border border-white/10">
      <Image
        src={`https://picsum.photos/seed/${course.title}/1200/700`}
        alt={course.title}
        fill
        unoptimized
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
    </div>
  );
};

export default Banner;
