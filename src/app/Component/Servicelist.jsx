import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import Link from "next/link";
const Servicelist = ({ loc }) => {
  const getLocationHref = () => {
    const location =
      loc?.county || (loc?.Name === "NA" ? loc?.State : loc?.Name);
    return `${location?.replace(/\s+/g, "") || "default-location"}/realestate`;
  };
  const getLocationHref2 = () => {
    const location =
      loc?.county || (loc?.Name === "NA" ? loc?.State : loc?.Name);
    return `${location?.replace(/\s+/g, "") || "default-location"}/all`;
  };

  const services = [
    {
      title: "Autombiles",
      image: "/img/Servicelist/serviceList3.webp",
      rating: 3.0,
      reviews: 4,
      listings: 9,
    },
    {
      title: "wedding halls",
      image: "/img/Servicelist/serviceList4.webp",
      rating: 3.0,
      reviews: 2,
      listings: 6,
    },
    {
      title: "Digital Prodcuts",
      image: "/img/Servicelist/serviceList5.webp",
      rating: 3.0,
      reviews: 3,
      listings: 23,
    },
    {
      title: "Real Estate",
      image: "/img/Servicelist/serviceList6.webp",
      rating: 3.0,
      reviews: 2,
      listings: 23,
    },
  ];

  const serviseList2 = [
    {
      title: "Titan Wedding Hall",
      category: "Wedding halls",
      description: "Titan wedding happ, North street, No 2, Neyyork, USA",
      rating: "5.0",
      img: "/img/Servicelist/img1.webp",
    },
    {
      title: "IPM Business Software",
      category: "Digital Products",
      description: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      img: "/img/Servicelist/serviceList3.webp",
    },
    {
      title: "Gill Automobiles and Services",
      category: "Automobiles",
      description: "North street, No 2, Newyork, USA",
      img: "/img/Servicelist/serviceListn1.webp",
    },
    {
      title: "Rachel Taj Hotels",
      category: "Hotels And Resorts",
      description: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      rating: "3.0",
      img: "/img/Servicelist/serviceListn2.webp",
    },
    {
      title: "Rolexo Villas in California",
      category: "Real Estate",
      description:
        "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
      rating: "5.0",
      img: "/img/Servicelist/serviceListn6.webp",
    },
    {
      title: "Joseph Multispeciality Hospital",
      category: "Hospitals",
      description: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      img: "/img/Servicelist/serviceListn7.webp",
    },
    {
      title: "The Spa at Mandarin Oriental",
      category: "Spa",
      description: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      rating: "4.0",
      img: "/img/Servicelist/serviceListn8.webp",
    },
    {
      title: "Green Healthcare Hospital",
      category: "Hospitals",
      description: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      rating: "3.0",
      img: "/img/Servicelist/serviceListn9.webp",
    },
  ];
  return (
    <>
      <section className="py-5 md:py-10 xl:py-16 relative  px-5 md:px-8 xl:px-32 space-y-10 ">
        <div className="text-center space-y-3 ">
          <h5 className="text-xl md:text-3xl font-bold">
            Explore City Category
          </h5>
          <p>
            lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
            fringilla.
          </p>
        </div>
        <div className="grid grid-cols-1 space-y-5 md:space-y-0 md:grid-cols-2 md:gap-4 lg:gap-6 xl:gap-8  min:h-[400px]">
          <Link
            href={getLocationHref()}
            className="relative hover:-translate-y-1 duration-200 hover:shadow-lg "
          >
            <img
              src="/img/Servicelist/serviceList2.webp"
              alt=""
              className="object-cover h-full w-full rounded-lg shadow-lg"
            />

            <div className="absolute inset-0 bg-[rgba(0,0,0,0.28)] rounded-lg">
              <div className="h-full gap-y-2 flex flex-col justify-end w-full text-white p-3">
                <h5 className="capitalize font-bold text-xl md:text-base xl:text-2xl">
                  Hotel and resort
                </h5>
                <div className="flex items-center gap-x-1">
                  <div className="w-fit text-white bg-[#FF9800] font-semibold px-[4px] py-[2px] rounded-sm text-sm md:text-xs lg:text-base">
                    3.0
                  </div>
                  <div className="text-2xl md:text-xs xl:text-2xl flex items-center gap-x-1">
                    <IoStarSharp className="text-[#FF9800]" />
                    <IoStarSharp className="text-[#FF9800]" />
                    <IoStarSharp className="text-[#FF9800]" />
                    <IoStarSharp className="" />
                    <IoStarSharp className="" />
                  </div>
                  <div className="text-sm md:text-base">2 Reviews</div>
                </div>
                <div className="text-sm md:text-base">9 Listings</div>
              </div>
            </div>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-5">
            {services.map((elm, index) => (
              <Link
                href={getLocationHref()}
                key={index}
                className="relative  hover:-translate-y-1 duration-200  hover:shadow-lg"
              >
                <img
                  src={elm.image}
                  alt=""
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                />
                <div className="absolute  inset-0 bg-[rgba(0,0,0,0.28)] rounded-lg">
                  <div className="h-full gap-y-2 md:gap-y-0 flex flex-col justify-end w-full text-white p-3">
                    <h5 className="capitalize font-bold text-xl md:text-base xl:text-2xl">
                      {elm.title}
                    </h5>
                    <div className="flex flex-wrap items-center gap-x-1">
                      <div className="w-fit text-white bg-[#FF9800] font-semibold px-[4px] py-[2px] rounded-sm text-sm  md:text-xs lg:text-base">
                        3.0
                      </div>
                      <div className="text-2xl md:text-xs xl:text-2xl flex items-center gap-x-1">
                        <IoStarSharp className="text-[#FF9800]" />
                        <IoStarSharp className="text-[#FF9800]" />
                        <IoStarSharp className="text-[#FF9800]" />
                        <IoStarSharp className="" />
                        <IoStarSharp className="" />
                      </div>
                      <div className="text-sm  md:text-xs lg:text-base">
                        4 Reviews
                      </div>
                    </div>
                    <div className="text-sm md:text-xs lg:text-base">
                      9 Listings
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-6 relative  md:mt-0 px-5 md:px-8 font-[500] xl:px-32  space-y-10 xl:space-y-16  ">
        <div className="text-center space-y-3 ">
          <h2 className="text-xl md:text-3xl font-bold">
            <span>Explore City</span>
            <span> Category</span>
          </h2>
          <p className="px-4 text-gray-600">
            Discover the best services in your city, handpicked for you. Explore
            now and find what you need!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
  {serviseList2.map((service, index) => (
    <Link
      href={getLocationHref2()}
      key={index}
      className="group flex flex-col lg:flex-row items-start bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-gray-200 p-4"
    >
      {/* Image */}
      <div className="w-full lg:w-[140px] h-[180px] lg:h-[120px] flex-shrink-0 overflow-hidden rounded-lg">
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="mt-4 lg:mt-0 lg:ml-5 flex flex-col justify-between flex-grow space-y-2">
        <div className="flex justify-between items-start">
          <h2 className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-green-600">
            {service.title}
          </h2>
          {service.rating && (
            <span className="text-white text-xs bg-green-600 px-2 py-0.5 rounded ml-2">
              {service.rating}
            </span>
          )}
        </div>
        <h3 className="text-sm text-gray-700 font-medium">{service.category}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{service.description}</p>
      </div>
    </Link>
  ))}
</div>

      </section>
    </>
  );
};

export default Servicelist;
