import React from "react";
import Choose from "../Component/Choose";
import BusinessDirectory from "../Component/BuinessDirectory";

export default function Page() {
  const teamMembers = [
    {
      name: "John Smith",
      imgSrc: "/img/about/aboutTeam1.webp",
      description:
        "Fusce imperdiet ullamcorper metus eu fringilla. From around the world from our partners and friends.",
    },
    {
      name: "Lusia Ann",
      imgSrc: "/img/about/aboutTeam2.webp",
      description:
        "Fusce imperdiet ullamcorper metus eu fringilla. From around the world from our partners and friends.",
    },
    {
      name: "Mark Luberk",
      imgSrc: "/img/about/aboutTeam2.webp",
      description:
        "Fusce imperdiet ullamcorper metus eu fringilla. From around the world from our partners and friends.",
    },
    {
      name: "Anjalena Juley",
      imgSrc: "/img/about/aboutTeam3.webp",
      description:
        "Fusce imperdiet ullamcorper metus eu fringilla. From around the world from our partners and friends.",
    },
  ];

  return (
    <div>
      {/* Banner */}
      <div className="relative text-center bg-[url(/img/about/about1.webp)] bg-cover bg-center h-[30vh] md:h-[40vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-[#067ddee0]" />
        <div className="relative z-10 px-4">
          <h3 className="text-2xl md:text-4xl font-bold mb-2">About Us</h3>
          <p className="text-sm md:text-lg">
            Injected humour—There are many variations of passages of Lorem Ipsum
            available
          </p>
        </div>
      </div>

      {/* About Text */}
      <section className="px-5 md:px-8 xl:px-32 py-10 space-y-6">
        <div className="text-justify md:text-center text-sm md:text-base leading-relaxed space-y-4 text-gray-700">
          <p>
            The digital landscape is evolving rapidly, and businesses need
            innovative solutions to stay ahead. At [Your IT Company Name], we
            specialize in delivering cutting-edge technology services that
            empower organizations to streamline operations and grow sustainably.
          </p>
          <p>
            With a customer-centric approach, we tailor solutions to meet the
            unique needs of each client. Our commitment to quality and industry
            expertise positions us as a trusted partner in the digital
            transformation journey.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <div className="-mt-10 xl:-mt-16">
        <Choose />
      </div>

      {/* Our Team Section */}
      <section className="px-5 md:px-8 xl:px-32 py-10">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-3xl font-bold text-black">Our Team</h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Explore some of the best tips from around the world from our{" "}
            <br className="hidden sm:block" />
            partners and friends. Lacinia viverra lectus.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <li key={index} className="text-center">
              <div className="p-5 bg-white shadow-md rounded-xl transition hover:shadow-lg">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                />
                <h4 className="text-lg font-semibold mb-2">{member.name}</h4>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Business Directory */}
      <BusinessDirectory />
    </div>
  );
}
