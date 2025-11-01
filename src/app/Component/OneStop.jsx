import React from "react";
import Link from "next/link";
export default function OneStop({ loc }) {
  const service = [
    {
      label: "b2b",
      desc: "Future IT Touch Pvt Ltd provides cutting-edge B2B solutions tailored to your business needs. Connect with verified vendors, explore enterprise-grade IT services, and leverage seamless integration tools to streamline your business operations.",
    },
    {
      label: "All india",
      desc: "Expand your business reach across India with our digital IT solutions. From lead generation to product promotion, Future IT Touch empowers businesses with robust online platforms, data-driven insights, and cloud-based management systems.",
    },
    {
      icon: "",
      label: "packers and movers",
      desc: "Enhance your logistics and supply chain efficiency with our technology-driven solutions for packers and movers. Track shipments, manage inventory, and optimize routes with our advanced tracking and automation tools.",
    },
    {
      label: "Order Food Online",
      desc: "Our innovative online ordering systems enable restaurants and food businesses to scale. Future IT Touch Pvt Ltd provides seamless food ordering platforms, payment integrations, and AI-driven recommendation engines.",
    },
    {
      label: "jobs",
      desc: "Simplify hiring and job searching with our AI-powered job portals. Whether you're an employer looking for top talent or a job seeker searching for the right opportunity, our digital recruitment solutions offer the best match.",
    },
    {
      icon: "",
      label: "movies",
      desc: "Streamline movie ticket bookings and entertainment experiences with our digital solutions. Future IT Touch Pvt Ltd provides secure and scalable online booking platforms, payment gateways, and real-time updates for cinemas.",
    },
    {
      label: "spa & salon",
      desc: "Revolutionize the wellness industry with our IT solutions for spas and salons. Enable online appointment bookings, manage customer relationships, and enhance customer experiences with smart scheduling software.",
    },
    {
      label: "repair & servive",
      desc: "Our technology-driven solutions help service providers in repair and maintenance industries streamline customer requests, manage bookings, and optimize workflows efficiently.",
    },
    {
      icon: "",
      label: "Doctor Appointment",
      desc: "Digitize healthcare with our online appointment booking systems. Future IT Touch Pvt Ltd offers secure telemedicine platforms, automated scheduling, and real-time patient-doctor interactions.",
    },
    {
      label: "Real Estate Agents",
      desc: "Enhance property management and real estate searches with our intelligent digital platforms. Connect with trusted agents, explore rental and sale options, and stay updated on new real estate trends.",
    },
    {
      label: "online Recharge & bill payment",
      desc: "Future IT Touch Pvt Ltd offers seamless online recharge and bill payment solutions, ensuring smooth transactions for utilities such as electricity, gas, DTH, and mobile services.",
    },
  ];

  const getLocationHref = (cate) => {
    const location =
      loc?.county || (loc?.Name === "NA" ? loc?.State : loc?.Name);
    return `${location?.replace(/\s+/g, "") || "default-location"}/${cate
      .toLowerCase()
      .split(" ")
      .join("-")}`;
  };

  return (
    <div className=" one-stop px-5 md:px-8 xl:px-32">
      <div>
        <h6 className="font-bold text-lg lg:text-xl">
          One-Stop Solution for All IT Services, Digital Solutions & Business
          Needs Across India
        </h6>
        <div className="text-base text-justify space-y-4 mt-4 text-gray-500">
          <p>
            Welcome to Future IT Touch, your trusted partner for all IT and
            digital solutions, helping businesses streamline operations, enhance
            online presence, and drive growth. We take pride in our commitment
            to delivering cutting-edge technology solutions tailored to your
            unique business needs.
          </p>
          <p>
            Our services range from software development, website design, and
            digital marketing to cloud computing, cybersecurity, and IT
            consulting. We cater to businesses of all sizes, from startups to
            enterprises, providing expert solutions across various industries,
            including e-commerce, healthcare, education, real estate, and more.
          </p>
          <p>
            Our 'Free Consultation' feature allows businesses to explore
            customized IT strategies. With seamless support via phone, email,
            web, and mobile app, we ensure hassle-free service delivery. Our
            'Customer Reviews' and 'Exclusive IT Deals' sections help you make
            informed decisions and access the best offers in the industry.
          </p>
        </div>
      </div>

      <div className="mt-4 lg:mt-8">
        <h6 className="font-bold text-lg lg:text-xl">
          Some of our services that will prove useful to you on a day-to-day
          basis are :
        </h6>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 lg:mt-10">
          {service.map((elm, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-5 flex flex-col min-h-[250px] transition-all hover:shadow-xl"
            >
              <div className="flex items-center gap-x-4 mb-3">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                  <img
                    src={`/img/homeservice/${index + 1}.svg`}
                    alt={elm.label}
                    className="w-8 h-8"
                  />
                </div>
                <h6 className="font-semibold text-gray-700 hover:text-blue-900 capitalize text-lg">
                  <Link href={getLocationHref(elm.label)}>{elm.label}</Link>
                </h6>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed ">
                {elm.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-gray-600 text-sm leading-relaxed  mt-4 lg:mt-8">
          Future IT Touch Pvt Ltd brings you a variety of essential services
          designed for your leisure, health, and home convenience. Whether
          you're looking for Pest Control, Skin Care Clinics, Painters, Laundry
          Services, Interior Designers, Mobile Phone Repair, Vaccination
          Centres, Internet Service Providers, or more – we've got you covered!
          With an extensive range of solutions under one roof, Future IT Touch
          Pvt Ltd is your "One-Stop Destination" for all your needs, ensuring
          seamless access to reliable and top-quality services.
        </p>
      </div>
    </div>
  );
}
