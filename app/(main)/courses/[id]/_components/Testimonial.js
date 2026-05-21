"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Testimonials = ({ course }) => {
  const { testimonials = [] } = course;
  return (
    <div className="space-y-8">
      {/* heading */}
      <div>
        <h1 className="text-3xl font-bold text-white">Testimonials</h1>
        <p className="mt-2 text-zinc-400">
          What students say about this course
        </p>
      </div>

      {/* grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.length === 0 ? (
          <p className="text-zinc-400">Nothing here</p>
        ) : (
          testimonials.map((t) => {
            const nam = t?.user?.firstName + " " + t?.user?.lastName;
            return (
              <div
                key={t?._id}
                className="rounded-2xl border border-white/10 bg-black/20 p-6"
              >
                <div className="flex items-center gap-4">
                  <Image
                    unoptimized
                    src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${nam}`}
                    alt={t?.name || "User"}
                    width={45}
                    height={45}
                    className="rounded-full border border-white/10 bg-white"
                  />

                  <div>
                    <h3 className="font-semibold text-white">
                      {nam || "Anonymous"}
                    </h3>

                    <div className="flex text-yellow-400">
                      {[...Array(t?.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {t?.content || "No review available"}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Testimonials;
