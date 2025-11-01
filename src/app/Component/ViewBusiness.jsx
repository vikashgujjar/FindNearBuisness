"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaCheckCircle,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function ViewBusiness() {
  const [formData, setFormData] = useState({
    enquiry_name: "",
    enquiry_email: "",
    enquiry_mobile: "",
    enquiry_message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with actual form submission logic
  };

  return (
    <>
      <div className="banner h-[40vh]">
        <img
          src="/img/viewBusiness/business.webp"
          alt="business"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="px-5 md:px-8 xl:px-32  lg:-mt-16 z-10 relative">
        <div className="bg-white shadow-2xl rounded-lg p-6 flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Logo Section */}
          <div className="w-full lg:w-[20%] flex justify-center">
            <img
              src="/img/viewBusiness/rn.webp"
              alt="Business Logo"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-lg shadow-md"
            />
          </div>

          {/* Business Info Section */}
          <div className="w-full lg:w-[60%] flex justify-center md:justify-start">
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold flex items-center gap-2">
                Rn53 Themes Net
              </h1>

              <ul className="space-y-3 mt-3 text-base text-gray-700">
                <li className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500" />
                  <span>
                    28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A
                  </span>
                </li>
                <div className="grid grid-cols-2 gap-3 text-gray-500">
                  <li>
                    <a
                      href="tel:8765768675"
                      className="flex items-center gap-2 hover:text-black transition"
                    >
                      <FaPhone className="text-gray-600" /> 8765768675
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@futureittouch.com"
                      className="flex items-center gap-2 hover:text-black transition"
                    >
                      <FaEnvelope className="text-gray-600" />{" "}
                      info@futureittouch.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="/view-business/www.rn53themes.net"
                      target="_blank"
                      className="flex items-center gap-2 hover:text-black transition"
                    >
                      <FaGlobe className="text-gray-600" /> www.rn53themes.net
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaGlobe className="text-gray-600" /> Tax no: TX6543 HYG76
                  </li>
                </div>
              </ul>

              {/* Social Media Icons */}
              <ul className="flex mt-4 space-x-4">
                <li>
                  <a
                    href="https://www.facebook.com/53themes"
                    target="_blank"
                    className="hover:scale-110 transition"
                  >
                    <FaFacebookF className="w-6 h-6 text-blue-600" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/53themes"
                    target="_blank"
                    className="hover:scale-110 transition"
                  >
                    <FaTwitter className="w-6 h-6 text-blue-400" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/98769876987"
                    target="_blank"
                    className="hover:scale-110 transition"
                  >
                    <FaWhatsapp className="w-6 h-6 text-green-500" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UC3wN3O2GXTt7ZZniIoMZumg"
                    target="_blank"
                    className="hover:scale-110 transition"
                  >
                    <FaYoutube className="w-6 h-6 text-red-600" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="w-full lg:w-[20%] flex flex-col gap-3">
            <a
              href="#home_enquiry_form"
              className="bg-[#F44336] text-white px-4 py-2 rounded-md text-center hover:bg-red-700 transition"
            >
              Get Quote
            </a>
            <a
              href="tel:8765768675"
              className="bg-[#5A6A7B] text-white px-4 py-2 rounded-md text-center hover:bg-gray-700 transition"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/98769876987"
              target="_blank"
              className="bg-[#37B30E] text-white px-4 py-2 rounded-md text-center hover:bg-green-700 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-4 mt-5  py-8 ">
          <div className="lg:col-span-2">
            <div className="container mx-auto lg:px-4">
              {/* About Company Section */}
              <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  About Company
                </h2>
                <h1 className="text-xl font-bold md:text-2xl text-gray-600 mb-2">
                  Feel the professional Rn53 Themes - Easy to build your web
                  presence
                </h1>
                <p className="text-gray-600">
                  Official website of Rn53 Themes, Affiliated to&nbsp;
                  <Link
                    href="/view-business"
                    className="text-blue-500 hover:underline"
                  >
                    Themeforest
                  </Link>
                  . We provide the best HTML and&nbsp;
                  <Link
                    href="/view-business"
                    className="text-blue-500 hover:underline"
                  >
                    fully functional website
                  </Link>
                  &nbsp;templates. Our services include template customization,
                  custom template design, directory PHP template, HTML to PHP
                  conversions, and more. We are one of the best web development
                  team we always interesting to develop beautiful websites.
                </p>

                <div className="grid md:grid-cols-1 gap-6 mt-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-700">
                      Classified Templates
                    </h3>
                    <p className="text-gray-600">
                      Kick start your online presence with Bizbook Classified
                      Templates. Template includes Classified ads, listing,
                      products, events, blogs & community. Try it today!
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-700">
                      HTML Templates
                    </h3>
                    <p className="text-gray-600">
                      We design most beautiful website templates with the latest
                      trend and user-friendly websites.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-700">
                      Custom Websites
                    </h3>
                    <p className="text-gray-600">
                      We are the leading custom website developers and custom
                      HTML websites are usually the most important thing about
                      an online presence.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-700">
                      Template Customization
                    </h3>
                    <p className="text-gray-600">
                      We offer professional website template customization for
                      the templates we built and released here at styleshout.
                      Choose Link template and submit to us the customization
                      requirements and we will work on the design until the
                      desired result is achieved.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-700">
                      Available for freelance
                    </h3>
                    <p className="text-gray-600">
                      Finibus Bonorum et Malorum" (The Extremes of Good and
                      Evil) by Cicero, written in 45 BC.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-700">
                      Custom Directory Template
                    </h3>
                    <p className="text-gray-600">
                      We have to directory templates "The Directory" and "Future
                      Touch Directory Template", If you are interested in our
                      directory template and need any template related
                      customization or addition work we will help you to
                      integrate this.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-700">
                      Website re-design
                    </h3>
                    <p className="text-gray-600">
                      Are you looking for Link website redesign? Our expert web
                      designers can build attractive and wonderful websites for
                      sustainable brands.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {/* Products Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Products
                  </h2>
                  <Link href="/products-inner">
                    <div className="bg-white rounded-lg shadow-md p-4 max-w-xs border border-gray-200 hover:shadow-xl transition duration-300">
                      <img
                        src="/img/viewBusiness/product1.webp"
                        width={150}
                        height={100}
                        alt="Product"
                        className="rounded-md w-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="mt-3">
                        <h4 className="text-lg font-semibold text-gray-800">
                          8 x 4 Metal Trailer - Exc Tyres
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-green-600 font-bold text-lg">
                            $400
                          </span>
                          <span className="text-red-500 text-sm line-through">
                            $500
                          </span>
                          <span className="text-red-500 text-sm font-medium">
                            20% off
                          </span>
                        </div>
                        <Link
                          href="/products-inner"
                          className="block mt-3 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Events Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Events
                  </h2>
                  <Link
                    href="/events-inner"
                    className="block bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-xl transition duration-300 max-w-xs"
                  >
                    <img
                      src="/img/viewBusiness/product2.webp"
                      width={200}
                      height={120}
                      alt="Event"
                      className="rounded-md w-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="mt-3">
                      <h4 className="text-lg font-semibold text-gray-800">
                        Digital Marketing Seminar 2020
                      </h4>
                    </div>
                  </Link>
                </div>

                {/* Blogs Section */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Blogs
                  </h2>
                  <Link
                    href="/blog-inner"
                    className="block bg-white rounded-lg shadow-md border border-gray-200 p-4 hover:shadow-xl transition duration-300 max-w-xs"
                  >
                    <img
                      src="/img/viewBusiness/product3.webp"
                      width={200}
                      height={120}
                      alt="Blog"
                      className="rounded-md w-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="mt-3">
                      <h4 className="text-lg font-semibold text-gray-800">
                        Digital Marketing
                      </h4>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white shadow-lg rounded-xl   pb-8 sticky top-0">
              {/* Heading */}
              <div className="mb-4 hot-page2-hom-pre-head  relative bg-[#0291D2] text-white text-center py-2 rounded-t-xl  overflow-hidden">
                <h4 className="text-base font-semibold">Send Enquiry</h4>
              </div>

              <form
                name="home_enquiry_form"
                id="home_enquiry_form"
                method="post"
                onSubmit={handleSubmit}
                className="space-y-4 lg:px-6"
              >
                <input type="hidden" name="listing_id" value="0" />
                <input type="hidden" name="listing_user_id" value="0" />
                <input type="hidden" name="enquiry_sender_id" value="" />
                <input type="hidden" name="enquiry_source" value="Website" />

                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    name="enquiry_name"
                    required
                    placeholder="Enter name*"
                    value={formData.enquiry_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="enquiry_email"
                    required
                    placeholder="Enter email*"
                    pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                    title="Invalid email address"
                    value={formData.enquiry_email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* Mobile Number Input */}
                <div>
                  <input
                    type="text"
                    name="enquiry_mobile"
                    required
                    placeholder="Enter mobile number *"
                    pattern="[7-9]{1}[0-9]{9}"
                    title="Phone number must start with 7-9 and be 10 digits long"
                    value={formData.enquiry_mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    name="enquiry_message"
                    rows="3"
                    placeholder="Enter your query or message"
                    value={formData.enquiry_message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
