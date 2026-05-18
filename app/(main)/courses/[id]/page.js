import { getCourseById } from "@/queries/courses";

import { Suspense } from "react";
import BackgroundBlobs from "./_components/BackgroundBlobs";
import Banner from "./_components/Banner";
import CourseIntro from "./_components/CourseIntro";
import InforNav from "./_components/InforNav";
import ModuleSection from "./_components/ModuleSection";
import Pricing from "./_components/Pricing";
import SkeleBanner from "./_components/skeletons/SkeleBanner";
import SkeleCourseIntro from "./_components/skeletons/SkeleCourseIntro";
import SkeleInforNav from "./_components/skeletons/SkeleInforNav";
import SkeleModuleSection from "./_components/skeletons/SkeleModuleSection";
import SkelePricing from "./_components/skeletons/SkelePricing";
import SkeleTestimonials from "./_components/skeletons/SkeleTestimonial";
import Testimonials from "./_components/Testimonial";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;

  const coursePromise = getCourseById(id);
  const nam = "Coder Guru";

  return (
    <div className="relative overflow-hidden bg-black px-4 pb-24 pt-28 sm:px-6 lg:px-16">
      <BackgroundBlobs />

      <div className="relative mx-auto max-w-7xl space-y-16">
        <section>
          <div>
            <Suspense fallback={<SkeleBanner />}>
              <Banner coursePromise={coursePromise} />
            </Suspense>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-start justify-between mt-10 gap-10">
            <Suspense fallback={<SkeleCourseIntro />}>
              <CourseIntro nam={nam} coursePromise={coursePromise} />
            </Suspense>
            <div className="w-full lg:w-[30%]">
              <Suspense fallback={<SkelePricing />}>
                <Pricing coursePromise={coursePromise} />
              </Suspense>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="grid gap-10 xl:grid-cols-[1fr_380px]">
          <Suspense fallback={<SkeleInforNav />}>
            <InforNav coursePromise={coursePromise} />
          </Suspense>

          <Suspense fallback={<SkeleModuleSection />}>
            <ModuleSection coursePromise={coursePromise} />
          </Suspense>
        </section>

        {/* TESTIMONIAL */}
        <Suspense fallback={<SkeleTestimonials />}>
          <Testimonials coursePromise={coursePromise}/>
        </Suspense>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
