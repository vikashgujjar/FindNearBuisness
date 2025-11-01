"use client";

import { useState } from "react";
import { throttle } from "lodash";
import Link from "next/link";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
export default function EventInner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

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

  const otherPosts = [
    {
      title: "SPA and facial for free",
      link: "/blog-inner",
    },
    {
      title: "Full body massage",
      link: "/blog-inner",
    },
    {
      title: "50% offer today",
      link: "/blog-inner",
    },
    {
      title: "Benefits of massage",
      link: "/blog-inner",
    },
    {
      title: "Advantages of daily workout",
      link: "/blog-inner",
    },
    {
      title: "SPA and facial for free",
      link: "/blog-inner",
    },
    {
      title: "Full body massage",
      link: "/blog-inner",
    },
    {
      title: "50% offer today",
      link: "/blog-inner",
    },
    {
      title: "Benefits of massage",
      link: "/blog-inner",
    },
    {
      title: "Advantages of daily workout",
      link: "/blog-inner",
    },
    {
      title: "SPA and facial for free",
      link: "/blog-inner",
    },
    {
      title: "Full body massage",
      link: "/blog-inner",
    },
    {
      title: "50% offer today",
      link: "/blog-inner",
    },
    {
      title: "Benefits of massage",
      link: "/blog-inner",
    },
    {
      title: "Advantages of daily workout",
      link: "/blog-inner",
    },
    {
      title: "Advantages of daily workout",
      link: "/blog-inner",
    },
    {
      title: "Advantages of daily workout",
      link: "/blog-inner",
    },
    {
      title: "Advantages of daily workout",
      link: "/blog-inner",
    },
    {
      title: "Advantages of daily workout",
      link: "/blog-inner",
    },
    {
      title: "Advantages of daily workout",
      link: "/blog-inner",
    },
  ];

  const [search, setSearch] = useState("");
  const throttledSearch = throttle((e) => {
    setSearch(e.target.value);
  }, 4000);
  return (
    <>
      <div className="px-5 md:px-8 xl:px-32 py-5 md:py-10 bg-gradient-to-b from-[#E4F4FF] via-slate-50 to-transparent">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 lg
        gap-x-5"
        >
          <div className="lg:col-span-2">
            <div className="sticky top-0">
              <div className="relative h-[45vh] md:h-[70vh] w-full rounded-lg overflow-hidden">
                {/* Background Image with Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/img/blogInner/event-inner.webp')",
                  }}
                ></div>

                {/* Content Section */}
                <div className="absolute bottom-6 left-4 sm:left-6 md:bottom-10 md:left-10 text-white">
                  <h6 className="text-base sm:text-lg md:text-xl text-black bg-[#F6FF7F] w-fit font-bold px-3 md:px-4 py-1 md:py-2 rounded-full shadow-md">
                    Jan 07
                  </h6>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-2 md:mt-3">
                    Lunar New Year 2020
                  </p>
                </div>
              </div>

              <div className="mt-3 space-y-4">
                <p className="text-justify xl:text-start">
                  Celebrate as the sights, sounds and aromas of Asia come alive
                  during this local San Diego festival that’s fit for the whole
                  family happening weekends January 11, 2020 - February 2, 2020
                  (to include Monday, January 20, 2020.)
                </p>
                <p className="text-justify xl:text-start">
                  You won’t want to miss SeaWorld San Diego’s one-of-Link-kind
                  Lunar New Year celebration, featuring an incredible Chinese
                  acrobats show, local performers, and delicious culinary
                  delights. Dig into the Asian-inspired offerings of Ramen, Lo
                  Mein, Bao Buns, Dim Sum, rice dishes and more.
                </p>
                <p className="text-justify xl:text-start"></p>
                <p className="text-justify xl:text-start">
                  It is Link long established fact that Link reader will be
                  distracted by the readable content of Link page when looking
                  at its layout. The point of using Lorem Ipsum is that it has
                  Link more-or-less normal distribution of letters, as opposed
                  to using 'Content here, content here', making it look like
                  readable English. Many desktop publishing packages and web
                  page editors now use Lorem Ipsum as their default model text,
                  and Link search for 'lorem ipsum' will uncover many web sites
                  still in their infancy. Various versions have evolved over the
                  years, sometimes by accident, sometimes on purpose (injected
                  humour and the like).
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="space-y-5 ">
              <div className="bg-white">
                <h3 className="text-xl font-semibold text-center  bg-[#20334C] text-white py-3 rounded-t-2xl">
                  Register Now
                </h3>
                <div className="max-w-lg mx-auto  p-6 rounded-lg shadow-lg">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div className="relative">
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter name*"
                        className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                        title="Invalid email address"
                        placeholder="Enter email*"
                        className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Mobile Number Field */}
                    <div className="relative">
                      <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        pattern="[7-9]{1}[0-9]{9}"
                        title="Phone number should start with 7-9 and contain 10 digits"
                        placeholder="Enter mobile number*"
                        className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Message Field */}
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your query or message"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="3"
                    ></textarea>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-[#F44336] text-white p-2 rounded-2xl hover:bg-[#ec4c40] transition"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>

              <div className=" p-6 bg-white  rounded-lg shadow-lg">
                <h2 className="text-lg font-bold pb-4">Event information:</h2>

                <ul className="space-y-2">
                  <li>
                    <b className="text-gray-700 dark:text-gray-300">Name:</b>{" "}
                    <span className="text-gray-900 dark:text-white">
                      Lunar New Year 2020
                    </span>
                  </li>
                  <li>
                    <b className="text-gray-700 dark:text-gray-300">Date:</b>{" "}
                    <span className="text-gray-900 dark:text-white">
                      07, Jan 2020
                    </span>
                  </li>
                  <li>
                    <b className="text-gray-700 dark:text-gray-300">Time:</b>{" "}
                    <span className="text-gray-900 dark:text-white">
                      12:00AM
                    </span>
                  </li>
                  <li>
                    <b className="text-gray-700 dark:text-gray-300">Address:</b>{" "}
                    <span className="text-gray-900 dark:text-white">
                      3738 Grim Avenue, California
                    </span>
                  </li>
                  <li>
                    <b className="text-gray-700 dark:text-gray-300">
                      Contact Person:
                    </b>{" "}
                    <span className="text-gray-900 dark:text-white">
                      Rebecca G Torres
                    </span>
                  </li>
                  <li>
                    <b className="text-gray-700 dark:text-gray-300">Phone:</b>{" "}
                    <span className="text-gray-900 dark:text-white">
                      987654855
                    </span>
                  </li>
                  <li>
                    <b className="text-gray-700 dark:text-gray-300">Email:</b>{" "}
                    <span className="text-blue-500 hover:underline">
                      rebecca@business.com
                    </span>
                  </li>
                  <li>
                    <b className="text-gray-700 dark:text-gray-300">Website:</b>{" "}
                    <a
                      href="/events-inner/www.rebecca.com"
                      className="text-blue-500 hover:underline"
                    >
                      www.rebecca.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="px-2 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold  py-6">Location </h2>

                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1548773.41947498!2d-73.979506!3d40.69714100000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1740026389098!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="w-full"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <Link
                href="/gallery"
                className="relative rounded-md  shadow-md pb-4"
              >
                <div className="w-full h-[16vh] relative">
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="w-full h-full bg-[url('/img/dashboard/dashbordleft2.webp')] bg-contain rounded-md"></div>
                </div>
                <div className="flex flex-col items-center -mt-10 relative">
                  <img
                    src="/img/blogInner/blogInner.webp "
                    alt="product"
                    className="w-24 h-24 lg:h-32 lg:w-32 rounded-full"
                  />
                  <h4 className="text-blue-400 font-bold mt-3">
                    Claude D Dial
                  </h4>
                  <p className="text-xs mt-3">Joined on Jan 2020</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 border-red-500 flex flex-col items-center py-5 md:py-8 space-y-6">
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
