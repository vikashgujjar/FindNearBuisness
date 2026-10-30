"use client";
import { RouteLine, SectionHeading } from "../ui/decor";
import { Stagger, StaggerItem } from "../ui/motion";

const chooseData = [
  {
    id: 1,
    title: "Google indexing",
    description: "Fusce imperdiet ullamcorper metus eu fringilla. From around the world from our partners and friends.",
    image: "/img/chooseus/img1.webp",
  },
  {
    id: 2,
    title: "More popular",
    description: "Fusce imperdiet ullamcorper metus eu fringilla. From around the world from our partners and friends.",
    image: "/img/chooseus/img2.webp",
  },
  {
    id: 3,
    title: "Get more leads",
    description: "Fusce imperdiet ullamcorper metus eu fringilla. From around the world from our partners and friends.",
    image: "/img/chooseus/img3.webp",
  },
  {
    id: 4,
    title: "Achieve goals",
    description: "Fusce imperdiet ullamcorper metus eu fringilla. From around the world from our partners and friends.",
    image: "/img/chooseus/img4.webp",
  },
];

const Choose = () => {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Why us"
          title="Why businesses"
          highlight="choose us"
          subtitle="Explore some of the best tips from around the world from our partners and friends. Lacinia viverra lectus."
        />

        <div className="relative mt-12 lg:mt-16">
          {/* the route the four stops sit on (desktop) */}
          <RouteLine
            className="left-0 top-0 z-[5] hidden h-14 w-full overflow-visible lg:block"
            viewBox="0 0 1200 56"
            d="M150 28 Q 300 -14 450 28 Q 600 -14 750 28 Q 900 -14 1050 28"
          />

          <Stagger gap={0.15} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {chooseData.map((item) => (
              <StaggerItem key={item.id} className="relative pt-8">
                <span className="absolute left-1/2 top-0 z-10 grid h-14 w-14 -translate-x-1/2 place-items-center">
                  <span className="absolute inset-0 animate-ping-slow rounded-full bg-brand-500/20" />
                  <span className="relative grid h-11 w-11 place-items-center rounded-full bg-brand-gradient font-display text-lg font-extrabold text-white shadow-glow ring-4 ring-white">
                    {item.id}
                  </span>
                </span>
                <div className="group h-full rounded-3xl bg-white p-6 pt-10 text-center shadow-card ring-1 ring-slate-100 transition duration-300 hover:-translate-y-2 hover:shadow-card-hover">
                  <img src={item.image} alt="" className="mx-auto h-14 w-14 transition duration-500 group-hover:scale-110 group-hover:rotate-6" />
                  <h3 className="mt-4 text-lg font-bold text-night-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
};

export default Choose;
