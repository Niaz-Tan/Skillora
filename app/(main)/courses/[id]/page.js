// ================================
// CourseDetailsPage.jsx
// ================================

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
  console.log(course)

  const nam = "Coder Guru";

  return (
    <div className="relative overflow-hidden bg-black px-4 pb-24 pt-28 sm:px-6 lg:px-16">
      <BackgroundBlobs />

      <div className="relative mx-auto max-w-7xl space-y-16">
        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
          <div className="space-y-6">
            <Banner title={course.title} />

            <CourseIntro nam={nam} title={course.title} />
          </div>

          <div className="lg:sticky lg:top-24">
            <Pricing price={course.price} />
          </div>
        </section>

        {/* CONTENT */}
        <section className="grid gap-10 xl:grid-cols-[1fr_380px]">
          <InforNav nam={nam} />

          <ModuleSection modules={course.modules} />
        </section>

        {/* TESTIMONIAL */}
        <Testimonials />
      </div>
    </div>
  );
};

export default CourseDetailsPage;