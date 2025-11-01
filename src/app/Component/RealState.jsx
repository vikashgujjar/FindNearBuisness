"use client";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { HiCheck } from "react-icons/hi";
import Link from "next/link";
function RealState() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [showLocation, setShowLocation] = useState(null);

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const column = [
    {
      label: "Filter",
      check: true,
    },
    {
      label: "Categories",
      check: false,
    },
    {
      label: "Sub-Categories",
      check: false,
    },
    {
      label: "Features",
      check: false,
    },
    {
      label: "Rating",
      check: false,
    },
  ];

  const [topFilters, setTopFilters] = useState(column);
  const handleClick = (label) => {
    setTopFilters((prev) =>
      prev.map((elm) =>
        elm.label === label ? { ...elm, check: !elm.check } : elm
      )
    );
  };

  const data = [
    {
      title: "Rolexo Villas in California",
      image: "/img/realestate/card.webp",
      address: "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
      phone: "7904462944",
      email: "thedirectoryfinder@gmail.com",
      verified: "/img/realestate//verify.webp",
      heartIcon: "/img/realestate/heart.svg",
      whatsappIcon: "/img/realestate//whatsapp.webp",
    },
    {
      title: "Rolexo Villas in California",
      image: "/img/realestate/card.webp",
      address: "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
      phone: "7904462944",
      email: "thedirectoryfinder@gmail.com",
      verified: "/img/realestate//verify.webp",
      heartIcon: "/img/realestate/heart.svg",
      whatsappIcon: "/img/realestate//whatsapp.webp",
    },
    {
      title: "Rolexo Villas in California",
      image: "/img/realestate/card.webp",
      address: "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
      phone: "7904462944",
      email: "thedirectoryfinder@gmail.com",
      verified: "/img/realestate//verify.webp",
      heartIcon: "/img/realestate/heart.svg",
      whatsappIcon: "/img/realestate//whatsapp.webp",
    },
    {
      title: "Rolexo Villas in California",
      image: "/img/realestate/card.webp",
      address: "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
      phone: "7904462944",
      email: "thedirectoryfinder@gmail.com",
      verified: "/img/realestate//verify.webp",
      heartIcon: "/img/realestate/heart.svg",
      whatsappIcon: "/img/realestate//whatsapp.webp",
    },
    {
      title: "Rolexo Villas in California",
      image: "/img/realestate/card.webp",
      address: "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
      phone: "7904462944",
      email: "thedirectoryfinder@gmail.com",
      verified: "/img/realestate//verify.webp",
      heartIcon: "/img/realestate/heart.svg",
      whatsappIcon: "/img/realestate//whatsapp.webp",
    },
    {
      title: "Rolexo Villas in California",
      image: "/img/realestate/card.webp",
      address: "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
      phone: "7904462944",
      email: "thedirectoryfinder@gmail.com",
      verified: "/img/realestate//verify.webp",
      heartIcon: "/img/realestate/heart.svg",
      whatsappIcon: "/img/realestate//whatsapp.webp",
    },
    {
      title: "Rolexo Villas in California",
      image: "/img/realestate/card.webp",
      address: "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
      phone: "7904462944",
      email: "thedirectoryfinder@gmail.com",
      verified: "/img/realestate//verify.webp",
      heartIcon: "/img/realestate/heart.svg",
      whatsappIcon: "/img/realestate//whatsapp.webp",
    },
  ];

  const estate = [
    {
      name: "Core real estates",
      address: "City: No:2, 4th Avenue, Newyork,USA, Near to Airport",
      rate: "5.0",
      image: "/img/realestate/img1.webp",
    },
    {
      name: "Rolexo Villas in California",
      address: "City: No:2, 4th Avenue, Newyork,USA, Near to Airport",
      rate: "4.0",
      image: "/img/realestate/bg2.webp",
    },
    {
      name: "Orange pet shop",
      address: "City: No:2, 4th Avenue, Newyork,USA, Near to Airport",
      rate: "5.0",
      image: "/img/realestate/bg2.webp",
    },
    {
      name: "Best villas near you",
      address: "City: No:2, 4th Avenue, Newyork,USA, Near to Airport",
      rate: "5.0",
      image: "/img/realestate/bg2.webp",
    },
  ];

  const leftSticky = topFilters.some((elm) => elm.check);

  return (
    <div className="">
      <div className="w-full h-auto bg-[url('/img/realestate/bg.webp')] bg-center bg-cover text-white py-20 xl:py-28 px-5 lg:px-16 xl:px-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#866a05d6] to-[#00000038] opacity-90"></div>
        <div className="relative">
          <h1 className="font-medium text-2xl lg:text-3xl mb-1 heading">
            Real Estate
          </h1>
          <ul className="flex items-center gap-1 text-xs ">
            <li>Home</li>
            <li>
              <MdKeyboardArrowRight />
            </li>
            <li>All Category</li>
            <li>
              <MdKeyboardArrowRight />
            </li>
            <li>Washing Machines</li>
          </ul>
        </div>
      </div>

      <div className="rounded-md  md:px-5 lg:px-10 xl:px-32 -mt-12 xl:-mt-20">
        <div className="bg-slate-50 py-5 relative z-20 overflow-x-auto">
          <table className="w-full text-center text-xs md:text-sm border-separate border-spacing-2">
            <tbody>
              <tr className="space-x-10 ">
                {topFilters.map((item, index) => (
                  <td
                    key={index}
                    onClick={() => handleClick(item.label)}
                    className={`relative  text-nowrap py-2 px-5 cursor-pointer rounded-lg border border-slate-300 
              text-sm font-semibold transition-all duration-300 ease-in-out 
              shadow-md transform hover:scale-105 hover:shadow-lg 
              ${
                item.check
                  ? "bg-gradient-to-r from-green-500 to-green-700 text-white"
                  : "bg-white hover:bg-gray-100 text-nowrap"
              }`}
                  >
                    {item.label}

                    <input type="checkbox" className="hidden" />

                    {item.check && (
                      <span className="absolute -top-2 -right-2 bg-green-700 p-1 rounded-full shadow">
                        <HiCheck className="text-white font-bold text-sm" />
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col lg:flex-row">
          {leftSticky && (
            <div className="w-full  lg:w-[25%] hidden md:block top-0 lg:sticky z-10  h-full">
              {topFilters[0].check && (
                <div className="">
                  <div className="bg-[#20344c] text-white text-sm font-semibold py-4 px-4 lg:px-6">
                    <h4>Top Service Providers</h4>
                  </div>
                  <div className="pb-4 px-4 pr-3 lg:px-3 xl:px-6 bg-white shadow-lg">
                    {estate.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 xl:gap-3 border-b border-b-gray-300 py-4"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-9 h-9 rounded-full"
                        />
                        <div className="text-[13px] w-[70%]">
                          <h5 className="font-semibold  mb-1">{item.name}</h5>

                          <p className="truncate text-[12px] text-gray-500 font-semibold">
                            {item.address}
                          </p>
                        </div>

                        <span className="bg-[#7dc34a] text-xs py-[2px] px-[3px] rounded-sm text-white">
                          {item.rate}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div
                className={`${
                  leftSticky &&
                  "pb-4 px-4 pr-3 lg:px-3 xl:px-6 bg-white shadow-lg"
                } `}
              >
                {topFilters[1].check && (
                  <div className="py-4">
                    <div className="flex items-center gap-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        className="text-xl text-gray-400"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20.0833 10.4998L21.2854 11.2211C21.5221 11.3632 21.5989 11.6703 21.4569 11.9071C21.4146 11.9774 21.3557 12.0363 21.2854 12.0786L11.9999 17.6498L2.71451 12.0786C2.47772 11.9365 2.40093 11.6294 2.54301 11.3926C2.58523 11.3222 2.64413 11.2633 2.71451 11.2211L3.9166 10.4998L11.9999 15.3498L20.0833 10.4998ZM20.0833 15.1998L21.2854 15.9211C21.5221 16.0632 21.5989 16.3703 21.4569 16.6071C21.4146 16.6774 21.3557 16.7363 21.2854 16.7786L12.5144 22.0411C12.1977 22.2311 11.8021 22.2311 11.4854 22.0411L2.71451 16.7786C2.47772 16.6365 2.40093 16.3294 2.54301 16.0926C2.58523 16.0222 2.64413 15.9633 2.71451 15.9211L3.9166 15.1998L11.9999 20.0498L20.0833 15.1998ZM12.5144 1.30852L21.2854 6.57108C21.5221 6.71315 21.5989 7.02028 21.4569 7.25707C21.4146 7.32745 21.3557 7.38635 21.2854 7.42857L11.9999 12.9998L2.71451 7.42857C2.47772 7.2865 2.40093 6.97937 2.54301 6.74258C2.58523 6.6722 2.64413 6.6133 2.71451 6.57108L11.4854 1.30852C11.8021 1.11851 12.1977 1.11851 12.5144 1.30852Z"></path>
                      </svg>
                      <h4 className="font-semibold">Categories</h4>
                    </div>
                    <div className="w-full max-w-xs">
                      <label
                        className="block text-white text-sm font-normal tracking-wide"
                        htmlFor="category"
                      >
                        Select Category:
                      </label>
                      <select
                        id="category"
                        value={selectedOption}
                        onChange={handleSelectChange}
                        className="w-full bg-slate-200 text-black font-semibold tracking-wide py-3 px-4 rounded-md text-sm"
                      >
                        <option value="">Select Category</option>
                        <option value="Automobiles">Automobiles</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Wedding halls">Wedding halls</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Sports">Sports</option>
                        <option value="Education">Education</option>
                        <option value="Hotels and Resorts">
                          Hotels and Resorts
                        </option>
                        <option value="Spa and Facial">Spa and Facial</option>
                        <option value="Hospitals">Hospitals</option>
                        <option value="Electricals">Electricals</option>
                      </select>
                    </div>
                  </div>
                )}

                {topFilters[2].check && (
                  <div className="">
                    <div className="flex items-center gap-2 ">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="text-xl text-gray-400"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM16.4524 8.22183L11.5019 13.1709L8.67421 10.3431L7.25999 11.7574L11.5026 16L17.8666 9.63604L16.4524 8.22183Z"></path>
                      </svg>
                      <h4 className="font-semibold">Sub Category</h4>
                    </div>

                    <div className="ps-1 py-3">
                      <label className="leading-8 text-[#585e6b] text-sm font-semibold tracking-normal ">
                        <input
                          type="checkbox"
                          name="fruits"
                          value="villas"
                          className="mr-2"
                        />
                        Villas
                      </label>
                      <br />
                      <label className="leading-8 text-[#585e6b] text-sm font-semibold tracking-normal">
                        <input
                          type="checkbox"
                          name="fruits"
                          value="independent house"
                          className="mr-2"
                        />
                        Independent house
                      </label>
                      <br />
                      <label className="leading-8 text-[#585e6b] text-sm font-semibold tracking-normal">
                        <input
                          type="checkbox"
                          name="fruits"
                          value="plots and lands"
                          className="mr-2"
                        />
                        Plots and Lands
                      </label>
                      <br />
                    </div>
                  </div>
                )}

                {topFilters[3].check && (
                  <div className="">
                    <div className="flex items-center gap-2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="text-xl text-gray-400"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM16.4524 8.22183L11.5019 13.1709L8.67421 10.3431L7.25999 11.7574L11.5026 16L17.8666 9.63604L16.4524 8.22183Z"></path>
                      </svg>
                      <h4 className="font-semibold">Features</h4>
                    </div>

                    <div className="ps-1 py-3">
                      <label className="leading-8 text-[#585e6b] text-sm font-semibold tracking-normal">
                        <input
                          type="checkbox"
                          name="services"
                          value="trusted-services"
                          className="mr-2"
                        />
                        Trusted services provider
                      </label>
                      <br />
                      <label className="leading-8 text-[#585e6b] text-sm font-semibold tracking-normal">
                        <input
                          type="checkbox"
                          name="services"
                          value="premium-services"
                          className="mr-2"
                        />
                        Premium services
                      </label>
                      <br />
                      <label className="leading-8 text-[#585e6b] text-sm font-semibold tracking-normal">
                        <input
                          type="checkbox"
                          name="services"
                          value="verified-services"
                          className="mr-2"
                        />
                        Verified services
                      </label>
                      <br />
                      <label className="leading-8 text-[#585e6b] text-sm font-semibold tracking-normal">
                        <input
                          type="checkbox"
                          name="services"
                          value="trending-services"
                          className="mr-2"
                        />
                        Trending services
                      </label>
                      <br />
                      <label className="leading-8 text-[#585e6b] text-sm font-semibold tracking-normal">
                        <input
                          type="checkbox"
                          name="services"
                          value="offers-discounts"
                          className="mr-2"
                        />
                        Offers and discounts
                      </label>
                      <br />
                      <label className="leading-8 text-[#585e6b] text-sm font-semibold tracking-normal">
                        <input
                          type="checkbox"
                          name="services"
                          value="latest-updated"
                          className="mr-2"
                        />
                        Latest updated
                      </label>
                      <br />
                      <label className="leading-8 text-[#585e6b] text-sm font-semibold tracking-normal">
                        <input
                          type="checkbox"
                          name="services"
                          value="most-likes"
                          className="mr-2"
                        />
                        Most likes
                      </label>
                      <br />
                    </div>
                  </div>
                )}

                {topFilters[4].check && (
                  <div>
                    <div className="flex items-center gap-2 py-4 ">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="text-xl text-gray-400"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM12 13.5L14.9389 15.0451L14.3776 11.7725L16.7553 9.45492L13.4695 8.97746L12 6L10.5305 8.97746L7.24472 9.45492L9.62236 11.7725L9.06107 15.0451L12 13.5Z"></path>
                      </svg>
                      <h4 className="font-semibold">Ratings</h4>
                    </div>
                    <form action="/action_page.php" className="py-4">
                      <div className="mb-2 flex items-center gap-2">
                        <input
                          type="radio"
                          id="html"
                          name="fav_language"
                          value="HTML"
                          className="mr-2"
                          onChange={() => handleRatingChange("HTML")}
                        />
                        <label className="flex items-center gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              className={`bg-slate-100 p-1  ${
                                selectedRating === "HTML" ? "bg-[#ffe500]" : ""
                              }`}
                            >
                              <IoStar />
                            </span>
                          ))}
                        </label>
                      </div>

                      <div className="mb-2 flex items-center gap-2">
                        <input
                          type="radio"
                          id="css"
                          name="fav_language"
                          value="CSS"
                          className="mr-2"
                          onChange={() => handleRatingChange("CSS")}
                        />
                        <label className="flex items-center gap-2">
                          {[1, 2, 3, 4, 5].map((star, index) => (
                            <span
                              key={star}
                              className={`bg-slate-100 p-1 ${
                                selectedRating === "CSS" ? "bg-[#ffe500]" : ""
                              }`} // Apply yellow background for the selected rating
                            >
                              {index === 4 ? <IoStarOutline /> : <IoStar />}{" "}
                              {/* Conditional rendering of the star */}
                            </span>
                          ))}
                        </label>
                      </div>

                      <div className="mb-2 flex items-center gap-2">
                        <input
                          type="radio"
                          id="javascript"
                          name="fav_language"
                          value="JavaScript"
                          className="mr-2"
                          onChange={() => handleRatingChange("JavaScript")}
                        />
                        <label className="flex items-center gap-2">
                          {[1, 2, 3, 4, 5].map((star, index) => (
                            <span
                              key={star}
                              className={`bg-slate-100 p-1  ${
                                selectedRating === "JavaScript"
                                  ? "bg-[#ffe500]"
                                  : ""
                              }`}
                            >
                              {index > 2 ? <IoStarOutline /> : <IoStar />}
                            </span>
                          ))}
                        </label>
                      </div>

                      <div className="mb-2 flex items-center gap-2">
                        <input
                          type="radio"
                          id="another"
                          name="fav_language"
                          value="Another"
                          className="mr-2"
                          onChange={() => handleRatingChange("Another")} // Set to another label when this radio is selected
                        />
                        <label className="flex items-center gap-2">
                          {[1, 2, 3, 4, 5].map((star, index) => (
                            <span
                              key={star}
                              className={`bg-slate-100 p-1 ${
                                selectedRating === "Another"
                                  ? "bg-[#ffe500]"
                                  : ""
                              }`}
                            >
                              {index > 1 ? <IoStarOutline /> : <IoStar />}
                            </span>
                          ))}
                        </label>
                      </div>

                      <div className="mb-2 flex items-center gap-2">
                        <input
                          type="radio"
                          id="another"
                          name="fav_language"
                          value="star"
                          className="mr-2"
                          onChange={() => handleRatingChange("Star")} // Set to another label when this radio is selected
                        />
                        <label className="flex items-center gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              className={`bg-slate-100 p-1 ${
                                selectedRating === "Star" ? "bg-[#ffe500]" : ""
                              }`}
                            >
                              <IoStarOutline />
                            </span>
                          ))}
                        </label>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          )}

          <div
            className={`w-full ${
              leftSticky ? "lg:w-[85%]" : "lg:w-full"
            }  bg-slate-100 py-4 lg:py-0 md:px-3 lg:px-8 z-[99]`}
          >
            {data.map((entry, index) => (
              <div
                key={index}
                className="eve-box p-4 px-5 bg-white border rounded-lg shadow-lg md:hidden mb-4"
              >
                <div className="al-img relative">
                  <span className="open-stat absolute top-2 left-2 bg-[#4caf50] text-white px-2 py-[3px] rounded text-xs">
                    open
                  </span>
                  <i className="li-veri inline-block bg-red-100 px-2 top-2 right-2 rounded-full absolute">
                    <img
                      src={entry.heartIcon}
                      alt="wait"
                      className="inline w-3 h-3 -mt-1"
                    />
                  </i>
                  <a href="/RajpuraTahsil/all">
                    <img
                      src={entry.image}
                      alt="no"
                      className="w-full h-auto rounded-lg"
                    />
                  </a>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-1">
                    <h4 className="text-lg font-semibold">
                      <a
                        href="/RajpuraTahsil/all"
                        className="hover:text-blue-500"
                      >
                        {entry.title}
                      </a>
                    </h4>
                    <img
                      src={entry.verified}
                      alt={entry.title}
                      className="w-3 h-3"
                    />
                  </div>
                  <div className="flex items-center mt-1 text-lg text-[#ff9800]">
                    <IoStar />
                    <IoStar />
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                  </div>

                  <span className="flex items-center text-[#333] my-2 font-medium text-[13px] xl:text-sm">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 mr-2 text-[#9d9a98]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path>
                    </svg>
                    {entry.address}
                  </span>

                  <span className="flex items-center text-[#333] font-medium text-[12px] lg:text-[13px] xl:text-sm">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 mr-2 text-[#9d9a98]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                    </svg>
                    {entry.phone}
                  </span>

                  <span className="flex items-center text-[#333] my-2 font-medium text-[13px] xl:text-sm">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 mr-2 text-[#9d9a98]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                    </svg>
                    {entry.email}
                  </span>

                  <div className="flex space-x-2 mt-2 lg:mt-4 text-[10px]  pt-4 lg:text-xs font-semibold">
                    <a
                      data-toggle="modal"
                      data-target="#quote"
                      className="text-white bg-[#f44336] hover:bg-yellow-400 hover:text-black py-1 px-4 rounded-sm"
                      href="/undefined/realestate"
                    >
                      Get quote
                    </a>

                    <a
                      href={`Tel:${entry.phone}`}
                      className="text-gray-600 border border-slate-300 py-1 px-4 rounded-sm"
                    >
                      Call Now
                    </a>
                    <a
                      className="text-gray-600 border border-slate-300 py-1 px-4 rounded-sm flex items-center gap-2"
                      href={`https://wa.me/${entry.phone}`}
                      target="_blank"
                    >
                      <img
                        src={entry.whatsappIcon}
                        className="w-4 h-4"
                        alt="whatsapp"
                      />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <div className="hidden md:block">
              <div>
                {data.map((entry, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 my-3 flex items-start gap-5"
                  >
                    <Link href="/all" className="relative bg-red-400">
                      <span className="bg-green-500 top-2 left-2 text-white absolute  z-40 px-2 rounded py-1 text-xs">
                        open
                      </span>
                      <img
                        src={entry.image}
                        alt="card"
                        className="w-64 lg:w-56 h-32 lg:h-40"
                      />
                    </Link>
                    <div>
                      <div className="flex items-center justify-between py-1 lg:py-3 gap-12 lg:gap-28 xl:gap-72">
                        <div className="flex items-center gap-1">
                          <Link
                            href="/all"
                            className="font-semibold text-[17px] text-nowrap"
                          >
                            {entry.title}
                          </Link>
                          <img
                            src={entry.verified}
                            alt="verify  "
                            className="w-4 h-4"
                          />
                        </div>

                        <div className="flex items-center gap-1">
                          <div className="flex items-center text-lg text-[#ff9800]">
                            <IoStar />
                            <IoStar />
                            <IoStarOutline />
                            <IoStarOutline />
                            <IoStarOutline />
                          </div>
                          <div className="bg-red-100 p-1 rounded-full">
                            <img
                              src={entry.heartIcon}
                              alt="heart"
                              className="w-3 h-3"
                            />
                          </div>
                        </div>
                      </div>
                      <span className="flex items-center text-[#333] font-medium text-[13px] xl:text-sm">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          className="w-4 h-4 mr-2 text-[#9d9a98]"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path>
                        </svg>
                        {entry.address}
                      </span>

                      <div className="flex items-center space-x-20 mt-2">
                        <span className="flex items-center text-[#333] font-medium text-[12px] lg:text-[13px] xl:text-sm">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            className="w-4 h-4 mr-2 text-[#9d9a98]"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                          </svg>
                          {entry.phone}
                        </span>

                        <span className="flex items-center text-[#333] font-medium text-[13px] xl:text-sm">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            className="w-4 h-4 mr-2 text-[#9d9a98]"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                          </svg>
                          {entry.email}
                        </span>
                      </div>

                      <div className="flex space-x-2 mt-2 lg:mt-4 text-[10px] lg:text-xs font-semibold">
                        <a
                          data-toggle="modal"
                          data-target="#quote"
                          className="text-white bg-[#f44336] hover:bg-yellow-400 hover:text-black py-1 px-4 rounded-sm"
                          href="/undefined/realestate"
                        >
                          Get quote
                        </a>
                        <a
                          className="text-gray-600 border border-slate-300 py-1 px-4 rounded-sm"
                          href="/undefined/realestate"
                        >
                          View more
                        </a>
                        <a
                          href={`Tel:${entry.phone}`}
                          className="text-gray-600 border border-slate-300 py-1 px-4 rounded-sm"
                        >
                          Call Now
                        </a>
                        <a
                          className="text-gray-600 border border-slate-300 py-1 px-4 rounded-sm flex items-center gap-2"
                          href={`https://wa.me/${entry.phone}`}
                          target="_blank"
                        >
                          <img
                            src={entry.whatsappIcon}
                            className="w-4 h-4"
                            alt="whatsapp"
                          />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealState;
