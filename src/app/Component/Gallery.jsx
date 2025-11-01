"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Gallery() {
  const tabs = [
    {
      name: "all",
      tabMove: "#all",
    },
    {
      name: "listings",
      tabMove: "#listings",
    },
    {
      name: "Blog Posts",
      tabMove: "#BlogPosts",
    },
    {
      name: "Events",
      tabMove: "#Events",
    },
    {
      name: "Followers",
      tabMove: "#Followers",
    },
  ];

  const [tab, setTab] = useState(tabs[0]);

  const listings = [
    {
      id: 1,
      title: "Sony Musics 2",
      image: "/img/gallery/gallerListing1.webp",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      galleryLink: "/gallery",
      quoteLink: "/all",
    },
    {
      id: 2,
      title: "Sony Music",
      image: "/img/gallery/gallerListing1.webp",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      galleryLink: "/gallery",
      quoteLink: "/all",
    },
    {
      id: 3,
      title: "IPM Business Software",
      image: "/img/gallery/gallerListing1.webp",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      galleryLink: "/gallery",
      quoteLink: "/all",
    },
    {
      id: 4,
      title: "Royal Real Estates",
      image: "/img/gallery/gallerListing1.webp",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      galleryLink: "/gallery",
      quoteLink: "/all",
    },
    {
      id: 5,
      title: "Appers Premium Independent Houses",
      image: "/img/gallery/gallerListing1.webp",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      galleryLink: "/gallery",
      quoteLink: "/all",
    },
    {
      id: 6,
      title: "Capital five star hotels",
      image: "/img/gallery/gallerListing1.webp",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      galleryLink: "/gallery",
      quoteLink: "/all",
    },
    {
      id: 7,
      title: "Hard Rocks Hotels",
      image: "/img/gallery/gallerListing1.webp",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      galleryLink: "/gallery",
      quoteLink: "/all",
    },
  ];

  const blogPosts = [
    {
      title: "12 Days Fitness Challenge",
      date: "07, Jan 2020",
      image: "/img/gallery/galleryblog.webp",
      alt: "12 Days Fitness Challenge",
      link: "/blogs",
    },
    {
      title: "Bike Racing Techniques",
      date: "07, Jan 2020",
      image: "/img/gallery/galleryblog.webp",
      alt: "Bike Racing Techniques",
      link: "/blogs",
    },
    {
      title: "Best Island In The World",
      date: "07, Jan 2020",
      image: "/img/gallery/galleryblog.webp",
      alt: "Best Island In The World",
      link: "/blogs",
    },
    {
      title: "Online Marketing 2020",
      date: "07, Jan 2020",
      image: "/img/gallery/galleryblog.webp",
      alt: "Online Marketing 2020",
      link: "/blogs",
    },
    {
      title: "Home Interior Design Trends",
      date: "07, Jan 2020",
      image: "/img/gallery/galleryblog.webp",
      alt: "Home Interior Design Trends",
      link: "/blogs",
    },
    {
      title: "Home Interior Design Trends",
      date: "07, Jan 2020",
      image: "/img/gallery/galleryblog.webp",
      alt: "Home Interior Design Trends",
      link: "/blogs",
    },
  ];

  const events = [
    {
      title: "Surfing Competition Hawaii",
      date: "18 Mar",
      image: "/img/gallery/galleryblog.webp",
      alt: "Surfing Competition Hawaii",
      location: "4754 Grove Avenue, Hawaii",
      link: "/events",
    },
    {
      title: "Food eating challenge",
      date: "18 Jan",
      image: "/img/gallery/galleryblog.webp",
      alt: "Food eating challenge",
      location: "1297 Stuart Street, Pennsylvania",
      link: "/events",
    },
    {
      title: "College Volley Ball Tournaments 2021",
      date: "18 Jan",
      image: "/img/gallery/galleryblog.webp",
      alt: "College Volley Ball Tournaments 2021",
      location: "Lynn B Morgan, Garden City, New York",
      link: "/events",
    },
    {
      title: "States Soccer World Cup 2022",
      date: "25 Jan",
      image: "/img/gallery/galleryblog.webp",
      alt: "States Soccer World Cup 2022",
      location: "2826 Lamberts Branch Road, Miami, Florida",
      link: "/events",
    },
  ];

  const socialLinks = [
    {
      href: "/gallery",
      icon: <FaFacebookF />,
      label: "Facebook",
      bgColor: "bg-blue-600",
    },
    {
      href: "/gallery",
      icon: <FaTwitter />,
      label: "Twitter",
      bgColor: "bg-sky-500",
    },
    {
      href: "/gallery",
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      bgColor: "bg-green-500",
    },
    {
      href: "/gallery",
      icon: <FaLinkedinIn />,
      label: "LinkedIn",
      bgColor: "bg-blue-800",
    },
  ];

  return (
    <>
      <div className="relative bg-[url('/img/gallery/dashbordleft2.webp')] bg-center md:min-h-[40vh]">
        <div className="absolute inset-0 bg-[#293a5ce0]" />

        <div className="relative w-[90%] md:w-[80%] lg:w-[60%] mx-auto flex flex-col md:flex-row bg-white shadow-xl overflow-hidden">
          {/* Left Section - Profile Card */}
          <div className="w-full md:w-[40%] bg-white flex flex-col items-center p-6 space-y-3">
            <img
              src="/img/gallery/galllerpic.webp"
              alt="Profile"
              className="rounded-full w-24 h-24 border-4 border-gray-300 shadow-md"
            />
            <h5 className="font-bold text-lg md:text-xl text-gray-800">
              Claude D Dial
            </h5>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">City:</span> 07, Jan 2000
            </p>

            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 mt-3 transition transform hover:scale-105">
              Unfollow
            </button>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-2 mt-4 text-xs md:text-sm text-gray-700">
              {["9 Listings", "6 Blogs", "4 Events", "6 Following"].map(
                (item, index) => (
                  <span key={index} className="bg-gray-100 px-3 py-1 shadow-sm">
                    {item}
                  </span>
                )
              )}
            </div>

            {/* Social Icons */}
            <div className="border-t w-full flex justify-center mt-4 pt-3">
              <ul className="flex gap-3">
                {[
                  {
                    link: "https://www.linkedin.com/feed/",
                    img: "linkdinFuture.webp",
                    alt: "LinkedIn",
                  },
                  {
                    link: "https://x.com/?lang=en",
                    img: "twitter.webp",
                    alt: "Twitter",
                  },
                  {
                    link: "https://twitter.com/Google",
                    img: "fb.webp",
                    alt: "Facebook",
                  },
                  {
                    link: "https://www.facebook.com/",
                    img: "google.webp",
                    alt: "Google",
                  },
                  {
                    link: "https://www.youtube.com/",
                    img: "youtube.webp",
                    alt: "YouTube",
                  },
                ].map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={`/img/social/${social.img}`}
                        alt={social.alt}
                        className="w-7 h-7 transition transform hover:scale-110"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full md:w-[60%]">
            <img
              src="/img/gallery/dashboardRight1.webp"
              alt="Gallery"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="px-5 md:px-8 xl:px-32 mt-5 md:mt-10">
        <ul className="flex text-nowrap overflow-x-auto items-center border-b pb-4  font-bold gap-x-5 uppercase  justify-center">
          {tabs.map((elm, index) => (
            <li
              key={index}
              className={`${
                elm == tab ? "text-blue-500" : "text-black"
              } duration-200 cursor-pointer`}
            >
              <a href={elm.tabMove}>{elm.name}</a>
            </li>
          ))}
        </ul>

        {/* all listings  */}
        <div id="all" className="mt-5 md:mt-10">
          <h3 id="listings" className="font-bold text-2xl mb-5">
            All Listings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <Link
                href={listing.galleryLink}
                key={listing.id}
                className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="h-[180px] w-full object-cover"
                />
                <div className="p-4">
                  <h5 className="text-lg font-semibold">{listing.title}</h5>
                  <p className="text-gray-600 text-sm">{listing.address}</p>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <Link
                    href={listing.quoteLink}
                    className="bg-[#0B253A] uppercase text-center font-bold w-full text-white px-4 py-2 text-sm  hover:bg-blue-600 transition"
                  >
                    Get Quote
                  </Link>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* blog posts  */}
        <div id="BlogPosts" className="mt-5 md:mt-10">
          <h3 className="font-bold text-2xl mb-5">Blog posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <a
                key={index}
                href={post.link}
                className="block relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-52 object-cover"
                />
                <span className="text-gray-500 text-sm absolute right-5 top-5 bg-yellow-400 font-bold px-5 py-2 rounded-full">
                  {post.date}
                </span>

                <div className="p-4">
                  <h2 className="text-lg font-semibold mt-2">{post.title}</h2>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* events  */}

        <div id="Events" className="mt-5 md:mt-10">
          <h3 className="font-bold text-2xl mb-5">Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((post, index) => (
              <a
                key={index}
                href={post.link}
                className="block relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
              >
                <img src={post.image} alt="gallery" />
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute z-20 inset-0 w-full h-full flex flex-col justify-end p-5 ">
                  <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl  text-yellow-500">
                    {post.date}
                  </h3>
                  <p className="font-bold text-white text-xl">{post.title}</p>
                  <p className="text-gray-100">{post.location}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* followers  */}
        <div id="Followers" className="mt-5 md:mt-10 mb-10">
          <h3 className="font-bold text-2xl mb-5">Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="hover:bg-[#fffaea] hover:shadow-[0_10px_10px_-10px_rgba(0,0,0,0.68)]  transition-all duration-500 flex items-center gap-x-4 px-4 py-2 rounded-full">
              <img
                src="/img/gallery/galleryProfile.webp"
                alt="gallery"
                className="rounded-full h-16 w-16"
              />

              <div className="flex  flex-col ">
                <h5>Rachel</h5>
                <p className="text-gray-800">
                  City: <span className="font-bold text-black">Airzona</span>
                </p>
              </div>
            </div>
            <div className="hover:bg-[#fffaea] hover:shadow-[0_10px_10px_-10px_rgba(0,0,0,0.68)]  transition-all duration-500 flex items-center gap-x-4 px-4 py-2 rounded-full">
              <img
                src="/img/gallery/galleryProfile.webp"
                alt="gallery"
                className="rounded-full h-16 w-16"
              />

              <div className="flex  flex-col ">
                <h5>Rachel</h5>
                <p className="text-gray-800">
                  City: <span className="font-bold text-black">Airzona</span>
                </p>
              </div>
            </div>
            <div className="hover:bg-[#fffaea] hover:shadow-[0_10px_10px_-10px_rgba(0,0,0,0.68)]  transition-all duration-500 flex items-center gap-x-4 px-4 py-2 rounded-full">
              <img
                src="/img/gallery/galleryProfile.webp"
                alt="gallery"
                className="rounded-full h-16 w-16"
              />

              <div className="flex  flex-col ">
                <h5>Rachel</h5>
                <p className="text-gray-800">
                  City: <span className="font-bold text-black">Airzona</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* share this profile  */}

        <div className="border-t border-red-500 flex flex-col items-center py-5 md:py-10 space-y-6">
          <h5 className="text-xl font-bold text-center text-gray-700">
            Share this profile
          </h5>

          <ul className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-32 px-4 py-2 text-white rounded-full transition-all hover:scale-105 ${link.bgColor}`}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
