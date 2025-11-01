import React from "react";
import Link from "next/link"; // Ensure you import Link if using Next.js

const cityData = [
  {
    category: "Top Branding Real Estate",
    items: [
      {
        image: "/img/topexplore/topexplore1.webp",
        title: "Royal Real Estates",
        description: "Description of Royal Real Estates",
      },
      {
        image: "/img/topexplore/topexplore2.webp",
        title: "Royal Real Estates",
        description: "Description of Royal Real Estates",
        rating: 3.0,
      },
      {
        image: "/img/topexplore/topexplore3.webp",
        title: "Royal Real Estates",
        description: "Description of Royal Real Estates",
        rating: 3.0,
      },
      {
        image: "/img/topexplore/topexplore4.webp",
        title: "Royal Real Estates",
        description: "Description of Royal Real Estates",
      },
      {
        image: "/img/topexplore/topexplore5.webp",
        title: "Royal Real Estates",
        description: "Description of Royal Real Estates",
      },
    ],
  },
  {
    category: "Top Branding Digital Products",
    items: [
      {
        image: "/img/topexplore/topexplore6.webp",
        title: "BizBookBusiness Directory",
        description: "Description of BizBookBusiness Directory",
      },
      {
        image: "/img/topexplore/topexplore7.webp",
        title: "BizBookBusiness Directory",
        description: "Description of BizBookBusiness Directory",
      },
      {
        image: "/img/topexplore/topexplore8.webp",
        title: "BizBookBusiness Directory",
        description: "Description of BizBookBusiness Directory",
      },
      {
        image: "/img/topexplore/topexplore9.webp",
        title: "BizBookBusiness Directory",
        description: "Description of BizBookBusiness Directory",
        rating: 3.0,
      },
      {
        image: "/img/topexplore/topexplore10.webp",
        title: "BizBookBusiness Directory",
        description: "Description of BizBookBusiness Directory",
        rating: 3.0,
      },
    ],
  },
  {
    category: "Top Branding Hospitals",
    items: [
      {
        image: "/img/topexplore/topexplore11.webp",
        title: "William Chill care Hospital",
        description: "Description of William Chill care Hospital",
      },
      {
        image: "/img/topexplore/topexplore12.webp",

        title: "William Chill care Hospital",
        description: "Description of William Chill care Hospital",
        rating: 3.0,
      },
      {
        image: "/img/topexplore/topexplore13.webp",

        title: "William Chill care Hospital",
        description: "Description of William Chill care Hospital",
      },
      {
        image: "/img/topexplore/topexplore14.webp",

        title: "William Chill care Hospital",
        description: "Description of William Chill care Hospital",
        rating: 3.0,
      },
      {
        image: "/img/topexplore/topexplore15.webp",

        title: "William Chill care Hospital",
        description: "Description of William Chill care Hospital",
        rating: 3.0,
      },
    ],
  },
];

const Citycategoire = ({ loc }) => {
  const getLocationHref = () => {
    const location =
      loc?.county || (loc?.Name === "NA" ? loc?.State : loc?.Name);
    return `${location?.replace(/\s+/g, "") || "default-location"}/all`;
  };

  return (
    <section className="py-5 md:py-10 space-y-10 px-5 md:px-8 xl:px-32">
      <div className="text-center space-y-3 ">
        <h5 className="text-2xl md:text-3xl font-bold">
          Explore City Category
        </h5>
        <p>
          lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
          fringilla.
        </p>
      </div>

      <div className="">
        {/* First Div */}
        <div className="grid grid-cols-1 gap-5  md:grid-cols-2  lg:grid-cols-3  my-5 lg:my-0 mx-auto lg:mx-2  overflow-hidden relative w-full">
          {cityData.map((categoryData, index) => (
            <div key={index} className="shadow-md border rounded-xl">
              <div className="city-head bg-[#0291d2] text-center rounded-t-xl">
                <h4 className="text-white text-lg font-semibold py-3">
                  {categoryData.category}
                </h4>
              </div>
              <div>
                {categoryData.items.map((imageData, i) => (
                  <Link
                    href={getLocationHref()}
                    className="items-center border-b px-4 flex hover:shadow-lg cursor-pointer"
                    key={i}
                  >
                    <div className="city-image">
                      <img
                        src={imageData.image}
                        alt={imageData.title}
                        className="rounded-full h-9 object-cover w-9"
                      />
                    </div>

                    <div className="px-4 w-full ">
                      {imageData.rating && (
                        <span className="text-white mt-5 float-right text-xs bg-green-600 px-2 py-1 rounded">
                          {imageData.rating}
                        </span>
                      )}
                      <h3 className="text-sm font-semibold mb-0 mt-4">
                        {imageData.title}
                      </h3>
                      <p className="text-[#525252] text-nowrap text-xs font-normal mb-5 pt-1">
                        {imageData.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Citycategoire;
