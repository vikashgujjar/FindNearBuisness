import React from "react";

export default function Service() {
  const services = [
    {
      title: "Real Estate 23",
      link: "/realestate",
      image: "/img/service/servicefooter1.webp",
      subcategories: [
        { name: "Villas", count: 87, link: "/Sonipat/realestate" },
        { name: "Independent House", count: 45, link: "/Sonipat/realestate" },
        { name: "Plots and Lands", count: 80, link: "/Sonipat/realestate" },
      ],
    },
    {
      title: "Hotels And Resorts 987",
      link: "/hotels-resorts",
      image: "/img/service/servicefooter2.webp",
      subcategories: [
        { name: "Street Food", count: 23, link: "/Sonipat/hotels-resorts" },
        { name: "Coffee Shop", count: 234, link: "/Sonipat/hotels-resorts" },
        { name: "Food Hotel", count: 423, link: "/Sonipat/hotels-resorts" },
        { name: "Beach Resort", count: 52, link: "/Sonipat/hotels-resorts" },
        { name: "Resort", count: 86, link: "/Sonipat/hotels-resorts" },
        { name: "Hotels", count: 33, link: "/Sonipat/hotels-resorts" },
      ],
    },
    {
      title: "Travel & Tourism 456",
      link: "/travel",
      image: "/img/service/servicefooter4.webp",
      subcategories: [
        { name: "Adventure", count: 120, link: "/Sonipat/travel" },
        { name: "Pilgrimage", count: 78, link: "/Sonipat/travel" },
        { name: "Luxury Travel", count: 65, link: "/Sonipat/travel" },
      ],
    },
    {
      title: "Healthcare Services 312",
      link: "/healthcare",
      image: "/img/service/servicefooter5.webp",
      subcategories: [
        { name: "Hospitals", count: 95, link: "/Sonipat/healthcare" },
        { name: "Clinics", count: 110, link: "/Sonipat/healthcare" },
        { name: "Pharmacies", count: 75, link: "/Sonipat/healthcare" },
      ],
    },
    {
      title: "Education & Training 654",
      link: "/education",
      image: "/img/service/servicefooter6.webp",
      subcategories: [
        { name: "Schools", count: 180, link: "/Sonipat/education" },
        { name: "Colleges", count: 120, link: "/Sonipat/education" },
        { name: "Coaching Centers", count: 90, link: "/Sonipat/education" },
      ],
    },
    {
      title: "Automobiles & Services 410",
      link: "/automobiles",
      image: "/img/service/servicefooter7.webp",
      subcategories: [
        { name: "Car Rentals", count: 60, link: "/Sonipat/automobiles" },
        { name: "Bike Rentals", count: 40, link: "/Sonipat/automobiles" },
        { name: "Mechanic Shops", count: 85, link: "/Sonipat/automobiles" },
      ],
    },
    {
      title: "IT & Software Solutions 520",
      link: "/it-software",
      image: "/img/service/servicefooter8.webp",
      subcategories: [
        { name: "Web Development", count: 150, link: "/Sonipat/it-software" },
        {
          name: "Mobile App Development",
          count: 100,
          link: "/Sonipat/it-software",
        },
        { name: "Cloud Services", count: 70, link: "/Sonipat/it-software" },
      ],
    },
    {
      title: "Automobiles & Services 610",
      link: "/automobiles",
      image: "/img/service/servicefooter9.webp",
      subcategories: [
        { name: "Car Rentals", count: 60, link: "/Sonipat/automobiles" },
        { name: "Bike Rentals", count: 40, link: "/Sonipat/automobiles" },
        { name: "Mechanic Shops", count: 85, link: "/Sonipat/automobiles" },
      ],
    },
  ];

  return (
    <div>
      {/* Banner Section */}
      <div className="banner h-[40vh] relative">
        <img
          src="/img/community/community.webp"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 coomunitybg" />
        <div className="absolute z-40 inset-0 flex justify-center items-center">
          <div className="space-y-3 flex flex-col items-center w-full px-4 md:px-0">
            <h6 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-center">
              All Service
            </h6>
            <p className="text-sm sm:text-base md:text-lg text-center">
              Here post your events, seminar, webinar, festivals and more
            </p>
            <input
              type="text"
              placeholder="Search event in your city"
              className="w-full py-3 max-w-md px-6 rounded-full md:w-[80%] lg:px-10 text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-4 sm:px-6 md:px-8 xl:px-32 pb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-start bg-white shadow-lg p-4 md:p-5 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow"
          >
            {/* Image */}
            <div className="w-full lg:w-52 lg:h-36 flex-shrink-0 mb-4 md:mb-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Content */}
            <div className="lg:ml-6 w-full">
              <h2 className="text-lg md:text-xl font-semibold text-[#0A58CA] leading-tight">
                <a href={service.link} className="hover:underline">
                  {service.title}
                </a>
              </h2>

              {/* Subcategories */}
              <div className="mt-3 flex flex-wrap gap-3">
                {service.subcategories.map((subcategory, subIndex) => (
                  <a
                    key={subIndex}
                    href={subcategory.link}
                    className="text-xs sm:text-sm text-nowrap text-[#0A58CA] border border-gray-300 px-3 py-1 rounded-md transition hover:bg-[#0A58CA] hover:text-white"
                  >
                    {subcategory.name}:{" "}
                    <span className="font-medium text-gray-700">
                      {subcategory.count}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
