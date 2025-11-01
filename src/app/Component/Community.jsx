import React from "react";

export default function Community() {
  const communityData = [
    {
      image: "/img/community/community1.webp",
      name: "Rn53 Themes",
      link: "",
    },
    {
      image: "/img/community/dashbordMickkle.webp",
      name: "Mickle",
      link: "",
    },
    {
      image: "/img/community/community1.webp",
      name: "Jony Deep Themes",
      link: "",
    },
    {
      image: "/img/community/dashbordMickkle.webp",
      name: "Mickle",
      link: "",
    },
    {
      image: "/img/community/community1.webp",
      name: "Jony Deep Themes",
      link: "",
    },
    {
      image: "/img/community/dashbordMickkle.webp",
      name: "Mickle",
      link: "",
    },
    {
      image: "/img/community/community1.webp",
      name: "Jony Deep Themes",
      link: "",
    },
    {
      image: "/img/community/dashbordMickkle.webp",
      name: "Mickle",
      link: "",
    },
    {
      image: "/img/community/community1.webp",
      name: "Jony Deep Themes",
      link: "",
    },
    {
      image: "/img/community/dashbordMickkle.webp",
      name: "Mickle",
      link: "",
    },
    {
      image: "/img/community/community1.webp",
      name: "Jony Deep Themes",
      link: "",
    },
    {
      image: "/img/community/dashbordMickkle.webp",
      name: "Mickle",
      link: "",
    },
    {
      image: "/img/community/community1.webp",
      name: "Jony Deep Themes",
      link: "",
    },
    {
      image: "/img/community/dashbordMickkle.webp",
      name: "Mickle",
      link: "",
    },
    {
      image: "/img/community/community1.webp",
      name: "Jony Deep Themes",
      link: "",
    },
    {
      image: "/img/community/dashbordMickkle.webp",
      name: "Mickle",
      link: "",
    },
    {
      image: "/img/community/community1.webp",
      name: "Jony Deep Themes",
      link: "",
    },
    {
      image: "/img/community/dashbordMickkle.webp",
      name: "Mickle",
      link: "",
    },
    {
      image: "/img/community/community1.webp",
      name: "Jony Deep Themes",
      link: "",
    },
    {
      image: "/img/community/dashbordMickkle.webp",
      name: "Mickle",
      link: "",
    },
    {
      image: "/img/community/community1.webp",
      name: "Jony Deep Themes",
      link: "",
    },
    {
      image: "/img/community/dashbordMickkle.webp",
      name: "Mickle",
      link: "",
    },
    {
      image: "/img/community/community1.webp",
      name: "Jony Deep Themes",
      link: "",
    },
    {
      image: "/img/community/dashbordMickkle.webp",
      name: "Mickle",
      link: "",
    },
  ];
  return (
    <div>
      <div className="relative h-[50vh] w-full">
        <img
          src="/img/community/community.webp"
          alt="community banner"
          className="h-full w-full object-cover"
        />
        {/* Overlay: you can keep this black overlay, or add gradient instead */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-black/40 " />
        {/* Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Community
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-4">
            Post your events, seminars, webinars, festivals, and more
          </p>
          <input
            type="text"
            placeholder="Search event in your city"
            className="w-full max-w-xl px-6 py-3 rounded-full focus:outline-none text-sm text-black"
          />
        </div>
      </div>

      <div className="px-5 md:px-8 xl:px-32">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:grid-cols-6 lg:p-10">
          {communityData.map((elm, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-md rounded-lg space-y-3 text-center"
            >
              <img
                src={elm.image}
                alt="community-loading"
                className="rounded-xl w-full object-cover h-[180px]"
              />
              <h6 className="font-bold text-sm text-gray-800">{elm.name}</h6>
              <button className="bg-[#C7E3FF] text-blue-500 text-xs w-full py-1">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
