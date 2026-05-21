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
    <div className="relative overflow-hidden bg-black px-4 pb-24 pt-28 sm:px-6 lg:px-16">
      <BackgroundBlobs />

      <div className="relative mx-auto max-w-7xl space-y-16">
        <section>
          <Banner course={course} />

          <div className="mt-10 flex flex-col-reverse items-start justify-between gap-10 lg:flex-row">
            <CourseIntro nam={nam} course={course} />

            <div className="w-full lg:w-[30%]">
              <Pricing course={course} />
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="grid gap-10 xl:grid-cols-[1fr_380px]">
          <InforNav course={course} />

          <ModuleSection course={course} />
        </section>

        {/* TESTIMONIAL */}
        <Testimonials course={course} />
      </div>
    </div>
  );
};

export default CourseDetailsPage;
