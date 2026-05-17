import { getCourseById } from "@/queries/courses";

import BackgroundBlobs from "./_components/BackgroundBlobs";
import Banner from "./_components/Banner";
import CourseIntro from "./_components/CourseIntro";
import InforNav from "./_components/InforNav";
import ModuleSection from "./_components/ModuleSection";
import Pricing from "./_components/Pricing";
import Testimonials from "./_components/Testimonial";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const course = await getCourseById(id);
  const nam = "Coder Guru";

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black px-6 pt-28 pb-24 md:px-10 lg:px-24">
      <BackgroundBlobs />

      <div className="relative grid items-start gap-14 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <Banner title={course.title} />

          <div>
            <Pricing price={course.price} />
          </div>
        </div>

        {/* RIGHT */}
        <ModuleSection modules={course.modules} />
      </div>
      <div className="mt-10">
        {/* category */}
        <span className="bg-green-500 text-sm px-3 py-1 rounded-xl text-black font-bold">
          Development
        </span>
        <CourseIntro nam={nam} title={course.title} />
        {/* navigation */}
        <InforNav nam={nam} />

        {/* testimonial */}
        <Testimonials />
      </div>
    </div>
  );
};

export default CourseDetailsPage;
