"use client";

const Choose = () => {
  const chooseData = [
    {
      id: 1,
      title: "Google indexing",
      description:
        "Fusce imperdiet ullamcorper metus eu fringilla. From around the world from our partners and friends.",
      image: "/img/chooseus/img1.webp",
    },
    {
      id: 2,
      title: "More popular",
      description:
        "Fusce imperdiet ullamcorper metus eu fringilla. From around the world from our partners and friends.",
      image: "/img/chooseus/img2.webp",
    },
    {
      id: 3,
      title: "Get more leads",
      description:
        "Fusce imperdiet ullamcorper metus eu fringilla. From around the world from our partners and friends.",
      image: "/img/chooseus/img3.webp",
    },
    {
      id: 4,
      title: "Archive goals",
      description:
        "Fusce imperdiet ullamcorper metus eu fringilla. From around the world from our partners and friends.",
      image: "/img/chooseus/img4.webp",
    },
  ];

  return (
    <div className="py-10 md:py-16 ">
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="text-black">Why Choose Us</span>
        </h2>
        <p className="mt-4 text-gray-600 text-md">
          Explore some of the best tips from around the world from our <br />
          partners and friends. Lacinia viverra lectus.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-5 md:px-8 xl:px-32">
        {chooseData.map((item) => (
          <div
            key={item.id}
            className="relative bg-white p-6 shadow-lg rounded-md text-center border border-black-100 backdrop-blur-lg hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            <span className="absolute bg-blue-600 text-white top-[-20px] left-1/2 transform -translate-x-1/2 text-xl font-bold border border-blue-600 rounded-full w-8 h-8 flex items-center justify-center">
              {item.id}
            </span>
            <div className="my-4">
              <img
                src={item.image}
                alt={item.title}
                className="mx-auto h-16 w-16"
              />
            </div>
            <h4 className="text-xl font-bold text-gray-800">{item.title}</h4>
            <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
