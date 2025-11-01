import Link from "next/link";

const cardData = [
  {
    imageUrl: "/img/cardimg/img1.webp",
    heading: "24 Million Business",
    paragraph:
      "Choose from a collection of handpicked luxury villas & apartments",
  },
  {
    imageUrl: "/img/cardimg/img2.webp",
    heading: "1,200 Services Offered",
    paragraph:
      "Choose from a collection of handpicked luxury villas & apartments",
  },
  {
    imageUrl: "/img/cardimg/img3.webp",
    heading: "05 Million Visitors",
    paragraph:
      "Choose from a collection of handpicked luxury villas & apartments",
  },
  {
    imageUrl: "/img/cardimg/img4.webp",
    heading: "2k+ Premium Users",
    paragraph:
      "Choose from a collection of handpicked luxury villas & apartments",
  },
];

const CardSection = ({ loc }) => {
  // Return null for mobile devices or empty cardData
  // if (isMobile || !cardData || cardData.length === 0) return null;

  const getLocationHref = () => {
    const location =
      loc?.county || (loc?.Name === "NA" ? loc?.State : loc?.Name);
    return `${location?.replace(/\s+/g, "") || "default-location"}/realestate`;
  };

  return (
    <div className="md:m-4 grid gap-3 grid-cols-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  md:gap-8 px-5 md:px-8 xl:px-32 my-9 md:my-[40px] lg:my-[80px]">
      {cardData.map((card, index) => (
        <section
          className="bg-white  shadow-lg flex flex-col p-2 md:p-0 justify-between  overflow-hidden rounded-lg transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
          key={index}
        >
          {card.imageUrl ? (
            <div className="w-full  h-8  md:h-12  xl:h-16 flex justify-center items-center ">
              <img
                src={card.imageUrl}
                alt="Card"
                className="object-cover max-w-full max-h-full rounded-t-lg"
              />
            </div>
          ) : (
            <div className="w-full h-40 bg-gray-200 rounded-t-lg"></div> // fallback for empty image
          )}
          <Link href={getLocationHref()} className=" md:p-6 text-center">
            <h2 className="text-[10px] md:text-lg font-semibold text-gray-800">
              {card.heading}
            </h2>
            <p className="text-gray-600 hidden md:block mt-2 text-sm leading-relaxed">
              {card.paragraph}
            </p>
            <div className="hidden md:flex justify-center items-center">
              <Link href={getLocationHref()}>
                <button className="mt-4 mx-auto hidden md:inline-block px-2 outline outline-3 outline-black py-2 bg-[#333] text-white font-medium rounded-full border-2 border-dotted border-white  transition duration-300 ease-in-out text-sm">
                  Explore Now
                </button>
              </Link>
            </div>
          </Link>
        </section>
      ))}
    </div>
  );
};

export default CardSection;
