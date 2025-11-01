"use client";
import React from "react";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import {
  FaUser,
  FaConciergeBell,
  FaImages,
  FaGift,
  FaGlobe,
  FaStar,
  FaRegCommentDots,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import { FaMessage, FaWhatsapp } from "react-icons/fa6";
import { IoIosThumbsUp } from "react-icons/io";
import AllRightSide from "./AllRightSide";

export default function All() {
  const navItems = [
    { id: "ld-abo", label: "About", icon: <FaUser /> },
    { id: "ld-ser", label: "Services", icon: <FaConciergeBell /> },
    { id: "ld-gal", label: "Gallery", icon: <FaImages /> },
    { id: "ld-off", label: "Offers", icon: <FaGift /> },
    { id: "ld-360", label: "360 View", icon: <FaGlobe /> },
    { id: "ld-rev", label: "Write Review", icon: <FaStar /> },
  ];

  const [rating, setRating] = useState(3);
  const [formData, setFormData] = useState({
    reviewName: "Rn53 Themes",
    reviewMobile: "5522114422",
    reviewEmail: "info@futureittouch.com",
    reviewCity: "",
    reviewMessage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review Submitted:", formData);
  };

  const reviews = [
    {
      id: 1,
      name: "Rn53 Themes",
      date: "07,Mar 2021",
      rating: 5,
      image: "/img/dashboard/alll4.webp",
      review:
        "verified_userRolexo Villas is well-known to all as Link premier builder of villas and apartments. Even though they have various departments they stay united in giving the customers the best service. I really had Link good service right from on time delivery, quality of work, perfection in work completion. The relationship does not end in just in hand over but they stand strong in all tuff times for the commitment given. After 3+ years of handover they addressed the compound wall cracks which expanded and in Link week condition. They still respond to any queries / faults on time and track it to closure.",
    },
  ];
  const [overallRating, setOverallRating] = useState(5);

  return (
    <>
      <div>
        <div className="hidden lg:block bg-white  rounded-lg shadow-lg max-w-full">
          <ul className="flex justify-center gap-2 items-center">
            {navItems.map((item) => (
              <li key={item.id} className=" transition-all duration-300">
                <a
                  href={`#${item.id}`}
                  className="flex items-center space-x-3 text-blue-600 hover:bg-[#1a90f6] py-4 border-r-[1px] px-4 hover:text-white text-sm font-medium hover:underline focus:outline-none"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <section className="relative h-full lg:h-[80vh] bg-cover bg-center bg-no-repeat lg:bg-[url(/img/dashboard/all.webp)]">
          <div className="lg:hidden h-[20vh] absolute  w-full bg-black/60 bg-[url('/img/dashboard/all.webp')] bg-cover bg-center bg-blend-overlay" />
          {/* <div className="lg:hidden"></div> */}
          {/* Overlay */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-0" />

          {/* Content */}
          <div className="relative z-10 h-full  pt-24  md:pt-28 lg:pt-0 px-5 md:px-8 xl:px-32 flex flex-col lg:flex-row items-center justify-between text-black lg:text-white">
            {/* Left Content */}
            <div className="max-w-xl flex flex-col gap-4  text-left md:text-center lg:text-left space-y-2 md:space-y-5">
              <img
                src="/img/dashboard/all1.webp"
                alt="Rolexo Villas"
                className="w-24 h-24  rounded-full md:h-auto  md:w-48 lg:w-56 md:rounded-lg shadow-lg mx-auto lg:mx-0"
              />

              <div className="space-y-5">
                <h3 className="text-2xl  text-center md:text-start  md:text-3xl lg:text-4xl font-extrabold leading-snug">
                  Rolexo Villas in California
                </h3>
                {/* Reviews */}
                <div className="flex items-center gap-4 justify-center md:justify-center text-center lg:justify-start text-base">
                  <span className="bg-yellow-500 text-white font-bold px-3 py-1 rounded">
                    5.0
                  </span>
                  <div className="flex text-yellow-400 text-xl">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                  </div>
                  <span className="text-sm text-gray-600 lg:text-gray-300">
                    526 Reviews
                  </span>
                </div>

                {/* Address */}
                <p className="text-sm text-center text-gray-600 lg:text-gray-300">
                  <strong>Address:</strong> 28800 Orchard Lake Road, Suite 180,
                  Farmington Hills, U.S.A.
                </p>

                {/* Contact Info */}
                <div className="flex flex-col text-center items-center lg:flex-row gap-4 justify-center lg:justify-start text-sm font-medium">
                  <p className="flex items-center gap-2 text-gray-600 lg:text-gray-100 cursor-pointer">
                    <FaEnvelope /> thedirectoryfinder@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="w-full lg:w-auto mt-10 lg:mt-0 flex flex-wrap justify-center lg:justify-end gap-4 mb-4 lg:mb-0">
              <button className="flex  text-xl  md:text-sm items-center gap-2 bg-white  text-black font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
                <FaPhoneAlt /> <span className="hidden md:block">Call Now</span>
              </button>
              <button className="flex text-xl  md:text-sm  items-center gap-2 bg-[#D4FFD6]  text-black font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-green-500 hover:text-white transition duration-300">
                <FaWhatsapp /> <span className="hidden md:block">WhatsApp</span>
              </button>
              <button className="flex text-xl  md:text-sm  items-center gap-2 bg-white  text-black font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300">
                <IoIosThumbsUp />{" "}
                <span className="hidden md:block">1 Like</span>
              </button>

              <button className="flex text-xl  md:text-sm  items-center gap-2 bg-[#f44336]  text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-blue-500 transition duration-300">
                <FaRegCommentDots />{" "}
                <span className="hidden md:block">Get Quote</span>
              </button>
            </div>
          </div>
        </section>

        <section className=" bg-slate-100 xl:px-32 lg:-mt-20 relative">
          <div className=" rounded-2xl  grid lg:grid-cols-3 p-4 md:px-8 lg:px-4 lg:rounded-3xl lg:py-10  gap-x-3 ">
            <div className="lg:col-span-2  ">
              <div className="space-y-6">
                {/* About Rolexo Villas */}
                <div id="ld-abo" className="bg-white rounded-lg shadow-lg p-6 ">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold uppercase border-b pb-3 text-center lg:text-left">
                    <span className="text-gray-500">About </span>Rolexo Villas
                    in California
                  </h2>

                  <div className="flex justify-center lg:justify-start gap-6 text-3xl p-4">
                    <FaFacebook className="text-blue-800 hover:text-blue-600 cursor-pointer transition-colors duration-300" />
                    <FaTwitter className="text-blue-400 hover:text-blue-300 cursor-pointer transition-colors duration-300" />
                    <FaWhatsapp className="text-green-400 hover:text-green-300 cursor-pointer transition-colors duration-300" />
                    <FaLinkedin className="text-blue-500 hover:text-blue-400 cursor-pointer transition-colors duration-300" />
                  </div>

                  <p className="text-justify text-base lg:text-lg leading-relaxed text-gray-700">
                    <span className="font-bold  text-gray-900">
                      Rolexo Villas in California
                    </span>{" "}
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially
                    unchanged. It was popularized in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum....
                  </p>
                </div>

                {/* Services Offered */}
                <div id="ld-ser" className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-lg md:text-xl font-bold uppercase border-b pb-2">
                    <span className="text-gray-400">Service</span> Offered
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                    {[1, 2, 3, 4].map((num, index) => (
                      <div
                        key={index}
                        className="relative group w-full h-[180px] rounded-lg overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-black opacity-40 rounded-lg transition-opacity group-hover:opacity-50"></div>
                        <img
                          src={`/img/dashboard/offered${num}.webp`}
                          alt="Service"
                          className="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                        />
                        <h5 className="absolute text-nowrap bottom-16 lg:bottom-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold bg-black bg-opacity-50 px-2 py-1 rounded-md">
                          Villas Plots
                        </h5>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Areas */}
                <div id="ld-ser" className="bg-white rounded-lg shadow-md p-4">
                  <h2 className="text-lg md:text-xl font-bold uppercase border-b pb-2">
                    <span className="text-gray-400">Service</span> Areas
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[
                      "Sablon",
                      "Saco",
                      "Santa Cruz Garden",
                      "Napa County",
                      "Los Angeles County",
                      "Franco County",
                      "Monterey County",
                    ].map((area, index) => (
                      <button
                        key={index}
                        className="bg-[#f2f8fd] text-[#1386d1] px-4 py-2 rounded-md hover:bg-[#1386d1] hover:text-white transition"
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Photo Gallery */}
                <div id="ld-gal" className="bg-white rounded-lg shadow-md p-4">
                  <h2 className="text-lg md:text-xl font-bold uppercase border-b pb-2">
                    <span className="text-gray-400">Photo</span> Gallery
                  </h2>
                  <div className="overflow-hidden">
                    <Swiper
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                      modules={[Autoplay]}
                      className="w-[300px] md:w-[600px] mx-auto lg:w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden"
                    >
                      {[
                        "/img/photoGallery/gallery3.webp",
                        "/img/photoGallery/gallery1.webp",
                        "/img/photoGallery/gallery2.webp",
                      ].map((elm, i) => (
                        <SwiperSlide key={i} className="h-full w-full flex">
                          <img
                            src={elm}
                            alt={`Gallery image ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    {/* 
                    <img
                      src={"/img/photoGallery/gallery3.webp"}
                      alt="Gallery-image"
                      className="h-full w-full object-cover"
                    /> */}
                  </div>
                </div>

                {/* Service offers */}
                <div id="ld-off" className="bg-white rounded-lg shadow-md p-4">
                  <h2 className="text-lg md:text-xl font-bold uppercase border-b pb-2">
                    <span className="text-gray-400">Special</span> Offers
                  </h2>
                  <div className="flex flex-col lg:flex-row items-center  gap-1 mt-4">
                    <div className="w-full lg:w-[40%]">
                      <img
                        src="/img/dashboard/all1.webp"
                        alt="loading"
                        className="w-full"
                      />
                    </div>
                    <div className="w-full lg:w-[60%] bg-white lg:shadow-lg lg:rounded-lg py-2 lg:p-4 relative">
                      <Link href="/all">
                        <h3 className="text-xl font-bold text-gray-600 ">
                          Villa Offer 10%
                        </h3>
                      </Link>
                      <p className="text-gray-600 mt-2 text-base">
                        Special booking March offer. It is a long-established
                        fact that a reader will be distracted by the readable
                        content of a page when looking at its layout.
                      </p>
                      <span className="block  absolute top-0 right-4 text-lg bg-[#FFEDE3] font-semibold text-orange-400 px-3 py-1 mt-3">
                        $5000
                      </span>
                      <div className="flex gap-4 mt-4">
                        <Link href="/all">
                          <button className=" text-black  border hover:text-white px-4 py-1 rounded-md hover:bg-gray-800 ">
                            View More
                          </button>
                        </Link>
                        <a
                          href="#quote"
                          className="bg-red-600 text-white px-4 py-1 rounded-md "
                        >
                          Send Enquiry
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 360 degree review  */}
                <div id="ld-360" className="bg-white rounded-lg shadow-md p-4">
                  <h2 className="text-lg md:text-xl font-bold uppercase border-b pb-2">
                    <span className="text-gray-400">360</span> Degree View
                  </h2>
                  <div>
                    <iframe
                      title="360-degree view"
                      src="https://www.google.com/maps/embed?pb=!4v1615094507523!6m8!1m7!1sCAoSLEFGMVFpcFAxZ0hoalZZU25Wb2xDbVVROWdZNlYxWnc2UGU1YjVDckVjeEYz!2m2!1d37.779626!2d-122.5134699!3f256.26044!4f13.954989999999995!5f0.7820865974627469"
                      width="100%"
                      height="350"
                      style={{ border: "0" }}
                      allowFullScreen={true}
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>

                {/* write your reviewx  */}
                <div id="ld-rev" className="bg-white rounded-lg shadow-md p-4">
                  <h2 className="text-lg md:text-xl font-bold uppercase border-b pb-2">
                    <span className="text-gray-400">Write Your</span> Reviews
                  </h2>
                  <div className="w-full  mx-auto bg-white  p-2">
                    <p className="text-gray-600 text-sm mb-4">
                      Writing great reviews may help others discover the places
                      that are just apt for them. Here are a few tips to write a
                      good review:
                    </p>

                    {/* Star Rating */}
                    <div className="flex items-center space-x-2 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          onClick={() => setRating(star)}
                          className={`w-6 h-6 cursor-pointer ${
                            star <= rating ? "text-yellow-500" : "text-gray-400"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 18.26L4.95 22.2l1.57-7.93-5.93-5.49 8.03-.95L12 .5l2.38 7.34 8.03.95-5.93 5.49 1.57 7.93z" />
                        </svg>
                      ))}
                      <span className="text-gray-600">{rating} Star</span>
                    </div>

                    {/* Review Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          name="reviewName"
                          value={formData.reviewName}
                          readOnly
                          className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                          placeholder="Name"
                        />
                        <input
                          type="text"
                          name="reviewMobile"
                          value={formData.reviewMobile}
                          readOnly
                          className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                          placeholder="Mobile Number"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="email"
                          name="reviewEmail"
                          value={formData.reviewEmail}
                          readOnly
                          className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                          placeholder="Email"
                        />
                        <input
                          type="text"
                          name="reviewCity"
                          value={formData.reviewCity}
                          onChange={handleChange}
                          className="w-full p-2 border border-gray-300 rounded-md"
                          placeholder="City"
                        />
                      </div>
                      <textarea
                        name="reviewMessage"
                        value={formData.reviewMessage}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Write your review"
                        rows="4"
                      />
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                      >
                        Submit Review
                      </button>
                    </form>
                  </div>
                </div>

                {/* user review  */}

                <div className="bg-white rounded-lg shadow-md p-4">
                  <h2 className="text-lg md:text-xl font-bold uppercase border-b pb-2">
                    <span className="text-gray-400">user</span> Reviews
                  </h2>
                  <div className=" bg-white  mx-auto">
                    {/* Rating Summary */}
                    <div className="mb-4">
                      <h5 className="text-lg font-semibold">Overall Ratings</h5>
                      <div className="flex items-center space-x-1 text-yellow-500">
                        {[...Array(overallRating)].map((_, index) => (
                          <FaStar key={index} />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">
                        based on {reviews.length} reviews
                      </p>
                    </div>

                    {/* Rating Categories */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      {[
                        "Excellent",
                        "Good",
                        "Satisfactory",
                        "Below Average",
                        "Poor",
                      ].map((label, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between px-3 py-2 border rounded-lg"
                        >
                          <span>{label}</span>
                          <div className="h-3 w-24 bg-gray-200 rounded-full">
                            <div
                              className={`h-3 rounded-full ${
                                label === "Excellent"
                                  ? "bg-green-500 w-5/5"
                                  : label === "Good"
                                  ? "bg-green-400 w-4/5"
                                  : label === "Satisfactory"
                                  ? "bg-yellow-400 w-3/5"
                                  : label === "Below Average"
                                  ? "bg-orange-400 w-2/5"
                                  : "bg-red-500 w-1/5"
                              }`}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Reviews */}
                    <div>
                      <h5 className="text-lg font-semibold mb-3">Reviews</h5>
                      <ul>
                        {reviews.map((review) => (
                          <li
                            key={review.id}
                            className="flex flex-col gap-y-4 md:flex-row space-x-3 mb-3 border-b pb-3"
                          >
                            <img
                              src={review.image}
                              alt={review.name}
                              className="w-24 h-24 lg:w-10 lg:h-10 mx-auto rounded-full"
                            />
                            <div>
                              <h6 className="font-semibold">{review.name}</h6>
                              <div className="flex text-yellow-500">
                                {[...Array(review.rating)].map((_, index) => (
                                  <FaStar key={index} />
                                ))}
                              </div>
                              <p>{review.date}</p>
                              <p className="text-base text-gray-600">
                                {review.review}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Related listings  */}
                <div className=" lg:p-4">
                  <h2 className="text-lg md:text-xl font-bold capitalize border-b pb-2">
                    {/* <span className="text-gray-400">user</span> Reviews */}
                    Related listings
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 ">
                    <div className=" ">
                      <img
                        src="/img/dashboard/allBottom.webp"
                        alt="Core real estates"
                      />
                      <p className="bg-white p-3 font-semibold ">
                        Core real estates
                      </p>
                    </div>
                    <div className=" ">
                      <img
                        src="/img/dashboard/allBottom.webp"
                        alt="Core real estates"
                      />
                      <p className="bg-white p-3 font-semibold ">
                        Museo Villas and Plots
                      </p>
                    </div>
                    <div className=" ">
                      <img
                        src="/img/dashboard/allBottom.webp"
                        alt="Core real estates"
                      />
                      <p className="bg-white p-3 font-semibold ">ccc</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 ">
              <div className="sticky top-0">
                <AllRightSide move="quote" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
