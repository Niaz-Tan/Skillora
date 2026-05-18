// ================================
// CourseDetailsPage.jsx
// ================================

import { getCourseById } from "@/queries/courses";

import { Suspense } from "react";
import BackgroundBlobs from "./_components/BackgroundBlobs";
import SkeleBanner from "./_components/skeletons/SkeleBanner";
import SkeleCourseIntro from "./_components/skeletons/SkeleCourseIntro";
import SkeleInforNav from "./_components/skeletons/SkeleInforNav";
import SkeleModuleSection from "./_components/skeletons/SkeleModuleSection";
import SkelePricing from "./_components/skeletons/SkelePricing";
import SkeleTestimonials from "./_components/skeletons/SkeleTestimonial";
// import CourseIntro from "./_components/CourseIntro";
// import InforNav from "./_components/InforNav";
// import ModuleSection from "./_components/ModuleSection";
// import Pricing from "./_components/Pricing";
// import Testimonials from "./_components/Testimonial";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;

  const coursePromise = getCourseById(id);
  // console.log(coursePromise);

  const nam = "Coder Guru";

  return (
    <div className="relative overflow-hidden bg-black px-4 pb-24 pt-28 sm:px-6 lg:px-16">
      <BackgroundBlobs />

      <div className="relative mx-auto max-w-7xl space-y-16">
        <section className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
          <div className="space-y-6">
            <Suspense fallback={<div>Loading...</div>}>
              {/* <Banner coursePromise={coursePromise} /> */}
              <SkeleBanner />
            </Suspense>

            {/* <CourseIntro nam={nam} title={course.title} /> */}
            <Suspense fallback={<div>Loading...</div>}>
              {/* <Banner coursePromise={coursePromise} /> */}
              <SkeleCourseIntro />
            </Suspense>
          </div>

          <div className="lg:sticky lg:top-24">
            {/* <Pricing price={course.price} /> */}
            <Suspense fallback={<div>Loading...</div>}>
              {/* <Banner coursePromise={coursePromise} /> */}
              <SkelePricing />
            </Suspense>
          </div>
        </section>

        {/* CONTENT */}
        <section className="grid gap-10 xl:grid-cols-[1fr_380px]">
          {/* <InforNav nam={nam} /> */}
          <Suspense fallback={<div>Loading...</div>}>
            {/* <Banner coursePromise={coursePromise} /> */}
            <SkeleInforNav />
          </Suspense>

          {/* <ModuleSection modules={course.modules} /> */}
          <Suspense fallback={<div>Loading...</div>}>
            {/* <Banner coursePromise={coursePromise} /> */}
            <SkeleModuleSection />
          </Suspense>
        </section>

        {/* TESTIMONIAL */}
        {/* <Testimonials /> */}
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Banner coursePromise={coursePromise} /> */}
          <SkeleTestimonials />
        </Suspense>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
