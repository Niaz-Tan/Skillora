import BackgroundBlobs from "./_components/BackgroundBlobs";
import SkeleBanner from "./_components/skeletons/SkeleBanner";
import SkeleCourseIntro from "./_components/skeletons/SkeleCourseIntro";
import SkeleInforNav from "./_components/skeletons/SkeleInforNav";
import SkeleModuleSection from "./_components/skeletons/SkeleModuleSection";
import SkelePricing from "./_components/skeletons/SkelePricing";
import SkeleTestimonials from "./_components/skeletons/SkeleTestimonial";

const loading = () => {
  return (
    <div className="relative overflow-hidden bg-black px-4 pb-24 pt-28 sm:px-6 lg:px-16">
      <BackgroundBlobs />

      <div className="relative mx-auto max-w-7xl space-y-16">
        <section>
          <div>
            <SkeleBanner />
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-start justify-between mt-10 gap-10">
            <SkeleCourseIntro />
            <div className="w-full lg:w-[30%]">
              <SkelePricing />
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="grid gap-10 xl:grid-cols-[1fr_380px]">
          <SkeleInforNav />

          <SkeleModuleSection />
        </section>

        {/* TESTIMONIAL */}
        <SkeleTestimonials />
      </div>
    </div>
  );
};

export default loading;
