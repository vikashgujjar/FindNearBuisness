import Link from "next/link";
import React from "react";

export default function Blog() {
  const blogData = [
    {
      id: 1,
      imageSrc: "/img/blog/blog1.webp",
      date: "10, Dec 2019",
      title: "Source and URL tracking",
    },
    {
      id: 2,
      imageSrc: "/img/blog/blog1.webp",
      date: "10, Dec 2019",
      title: "Source and URL tracking",
    },
    {
      id: 3,
      imageSrc: "/img/blog/blog1.webp",
      date: "10, Dec 2019",
      title: "Source and URL tracking",
    },
    {
      id: 4,
      imageSrc: "/img/blog/blog1.webp",
      date: "10, Dec 2019",
      title: "Source and URL tracking",
    },
    {
      id: 5,
      imageSrc: "/img/blog/blog1.webp",
      date: "10, Dec 2019",
      title: "Source and URL tracking",
    },
    {
      id: 6,
      imageSrc: "/img/blog/blog1.webp",
      date: "10, Dec 2019",
      title: "Source and URL tracking",
    },
    {
      id: 7,
      imageSrc: "/img/blog/blog1.webp",
      date: "10, Dec 2019",
      title: "Source and URL tracking",
    },
    {
      id: 8,
      imageSrc: "/img/blog/blog1.webp",
      date: "10, Dec 2019",
      title: "Source and URL tracking",
    },
  ];

  return (
    <div>
      <div className="banner h-[40vh] md relative">
        <img
          src="/img/community/community.webp"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 coomunitybg" />
        <div className="absolute z-40 inset-0  flex justify-center items-center">
          <div className="space-y-3 flex flex-col items-center ">
            <h6 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center">
              Blogs{" "}
            </h6>
            <p className="text-xl text-center">
              Here post your events, seminar, webinar, fetivals and more
            </p>
            <input
              type="text"
              placeholder="Search event in your city"
              className="py-4 rounded-full m:w-[80%]  mx-auto w-[95%] px-4 lg:px-16 focus:outline-0 "
            />
          </div>
        </div>
      </div>
      <div className="px-5 md:px-8 xl:px-32 py-5 lg:py-2">
        <ul className="grid grid-cols-1 md:grid-cols-3  xl:grid-cols-4 lg:p-10 gap-4 ">
          {blogData.map((blog) => (
            <li key={blog.id} className="shadow-2xl rounded relative">
              <div className="">
                <div className="">
                  <Link href="/blog-inner">
                    {" "}
                    <img src={blog.imageSrc} alt="" />
                  </Link>
                </div>
                <div className="blog-text p-2 bg-white">
                  <p className="bg-[#3AA372] px-2 py-1 w-fit text-white text-xs rounded-full absolute bottom-14">
                    {blog.date}
                  </p>
                  <h2>{blog.title}</h2>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
