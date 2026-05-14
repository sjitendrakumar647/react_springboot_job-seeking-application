import { Carousel } from "@mantine/carousel";
import { jobCategories } from "../Data/Data";

const JobCategory = () => {
  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1.45fr_0.9fr] lg:items-end">
          <div className="space-y-5">
            <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-200">
              Browse job categories
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Explore top career paths with curated opportunities.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Find jobs from product design to engineering, marketing, and support — each category built to help you discover the perfect next role.
            </p>
          </div>
          <div className="rounded-4xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/30">
            <div className="space-y-4">
              <div className="text-sm uppercase tracking-[0.24em] text-sky-300">
                Featured insight
              </div>
              <div className="text-3xl font-semibold text-white">
                2.8k+ opportunities posted this week
              </div>
              <p className="text-slate-400">
                Every category includes fresh listings from verified employers, so you can apply quickly and confidently.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-4xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/40">
          <Carousel
            slideSize="33%"
            
            slideGap="xl"
            controlsOffset="md"
            controlSize={30}
            withControls
            withIndicators={false}
            emblaOptions={{ loop: true, dragFree: false, align: "center" }}
          >
            {jobCategories.map((category) => (
              <Carousel.Slide key={category.id}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-white/5 bg-slate-950/95 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-slate-900/95">
                  <div className="absolute inset-x-0 top-0 mx-auto h-32 w-32 -translate-y-1/2 overflow-hidden rounded-full bg-sky-500/10 ring-1 ring-sky-400/15" />
                  <div className="relative mt-10 flex justify-center">
                    <img src={category.image} alt={category.name} className="h-24 w-24 object-contain" />
                  </div>

                  <div className="mt-8 space-y-4">
                    <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
                    <p className="text-sm leading-6 text-slate-400">{category.description}</p>
                  </div>

                  <div className="mt-6 flex flex-col gap-3">
                    <span className="inline-flex items-center justify-center rounded-full bg-slate-900/90 px-4 py-2 text-sm font-medium text-slate-200 ring-1 ring-white/5">
                      {category.jobCount}+ new jobs posted
                    </span>
                    {/* <button className="mx-auto rounded-full bg-sky-400 px-6 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
                      Browse {category.name}
                    </button> */}
                  </div>
                </div>
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default JobCategory;
