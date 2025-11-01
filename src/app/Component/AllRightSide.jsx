"use client";

import React from "react";
import { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
export default function AllRightSide({move}) {
  const [formData, setFormData] = useState({
    enquiry_name: "Rn53 Themes",
    enquiry_email: "info@futureittouch.com",
    enquiry_mobile: "5522114422",
    enquiry_message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };
  return (
    <div className="lg:px-6 space-y-8 md:space-y-8 mt-8 lg:mt-0">
      <div id={move} className="bg-white shadow-2xl rounded-lg">
        <h3  className="text-xl text-white font-semibold mb-4 bg-[#20334C] rounded-t-2xl py-2 text-center">
          Get Quote
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4 px-6">
          <input type="hidden" name="listing_id" value="385" />
          <input type="hidden" name="listing_user_id" value="325" />
          <input type="hidden" name="enquiry_sender_id" value="37" />
          <input type="hidden" name="enquiry_source" value="Website" />

          <div className="flex items-center border px-2 rounded-2xl bg-white">
            <input
              type="text"
              name="enquiry_name"
              required
              placeholder="Enter name*"
              value={formData.enquiry_name}
              onChange={handleChange}
              className="w-full p-2 outline-none"
            />
          </div>

          <div className="flex items-center border px-2 rounded-md bg-white">
            <input
              type="email"
              name="enquiry_email"
              required
              placeholder="Enter email*"
              value={formData.enquiry_email}
              onChange={handleChange}
              className="w-full p-2 outline-none"
            />
          </div>

          <div className="flex items-center border px-2 rounded-md bg-white">
            <input
              type="text"
              name="enquiry_mobile"
              required
              placeholder="Enter mobile number *"
              value={formData.enquiry_mobile}
              pattern="[7-9]{1}[0-9]{9}"
              onChange={handleChange}
              className="w-full p-2 outline-none"
            />
          </div>

          <textarea
            name="enquiry_message"
            rows="3"
            placeholder="Enter your query or message"
            value={formData.enquiry_message}
            onChange={handleChange}
            className="w-full p-2 border rounded-md bg-white outline-none"
          ></textarea>

          <div className="pb-4">
            <button
              type="submit"
              className="w-full bg-[#F44336] font-bold  text-white py-2 rounded-3xl  transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white shadow-2xl rounded-lg">
        <h3 className="text-xl uppercase text-white font-semibold mb-4 bg-[#20334C] rounded-t-2xl py-2 text-start px-6">
          <span className="text-gray-400">claim</span> Listing
        </h3>
        <div className="flex items-center gap-5 px-6 pb-4">
          <img src="/img/dashboard/all5.webp" alt="" />
          <div className="py-2">
            <h6>calm the business s</h6>
            <Link
              href="/edit-business"
              className="bg-[#F44336] text-white px-2 py-1 rounded-md font-bold  text-xs"
            >
              Suggest an edit
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full   ">
        {/* Background Section */}
        <div className="relative rounded-2xl  shadow-lg  bg-[url(/img/dashboard/alllistRight.webp)] bg-center bg-cover  over flex flex-col items-center justify-center px-4">
          <div className="absolute inset-0 bg-gradient-to-t from-[#60e3f7] via-[#1e44a2cc] opacity-90"></div>

          <div className="relative  flex flex-col items-center text-center space-y-3">
            {/* Profile Tag */}
            <button className="text-white bg-[#43A463] px-3 py-1 text-xs uppercase rounded-md">
              Business Profile
            </button>

            {/* Profile Image */}
            <img
              src="/img/dashboard/dashbordleft.webp"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white shadow-md"
            />

            {/* Profile Info */}
            <h5 className="text-lg font-semibold text-white">
              Rn53 Themes net
            </h5>
            <p className="text-xs text-white">
              28800 Orchard Lake Road, Suite 180, Farmington Hills, U.S.A
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-x-4 text-xl p-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-white hover:text-blue-400 transition duration-200" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-white hover:text-blue-300 transition duration-200" />
              </a>
              <a
                href="https://wa.me/917508575015"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-white hover:text-green-400 transition duration-200" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-white hover:text-blue-500 transition duration-200" />
              </a>
            </div>

            {/* Profile Button */}
            <Link
              href="/view-business"
              className="bg-[#56CAFF]  !-mb-[15px]  text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-[#42b4e8] transition duration-200"
            >
              View Profile
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="p-7 bg-white text-center text-gray-500 font-semibold border-t">
          Get in touch with us
        </div>
      </div>

      <div className="bg-white shadow-2xl rounded-lg">
        <h3 className="text-xl uppercase text-white font-semibold bg-[#20334C] rounded-t-2xl py-2 text-start px-6">
          <span className="text-gray-400">Our</span> Location
        </h3>
        <div className="w-full h-[250px]  rounded-b-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d403760.5698387298!2d-122.43759999999999!3d37.7577!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1738742039223!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="bg-white shadow-2xl rounded-lg">
        <h3 className="text-xl uppercase text-white font-semibold mb-4 bg-[#20334C] rounded-t-2xl py-2 text-start px-6">
          <span className="text-gray-400">Company </span> Info
        </h3>
        <div className="bg-white shadow-md rounded-t-lg p-5">
          <ul className="space-y-3 text-gray-700">
            {[
              { label: "Available Villas", value: "12" },
              { label: "Booking Advance", value: "$500" },
              { label: "Contact Number", value: "986516876516" },
              { label: "WhatsApp", value: "65468764879" },
              { label: "Email ID", value: "booking@rolex.com" },
              { label: "Contact Name", value: "Bruce Mecho" },
              { label: "Website", value: "www.relexovillas.com" },
              { label: "Available Plots", value: "32" },
              { label: "Next Project Location", value: "Los Angeles" },
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between border-b border-gray-200 pb-2 last:border-none"
              >
                <span className="font-medium">{item.label}</span>
                <span className="text-gray-500">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        href="/gallery"
        className="rounded-lg bg-white shadow-xl overflow-hidden"
      >
        <div className="h-[150px] relative bg-[url(/img/dashboard/dashbordleft2.webp)] bg-center bg-contain">
          <div className="absolute inset-0 bg-[#51D1B8] opacity-80"></div>
          <div className="relative inset-0 flex justify-center items-start ">
            <h5 className="bg-green-800 rounded-md text-xs text-white px-3 py-1">
              Created At
            </h5>
            <div className="bg-yellow-200 p-1 text-black absolute right-4 top-4">
              4.2
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/img/dashboard/dashbordleft.webp"
            alt="loading"
            className="w-24 h-24 z-20  -mt-16 md rounded-full"
          />
          <div className="text-center py-4">
            <h5 className="font-semibold text-lg lg:font-bold">Loki</h5>
            <p className="text-xs text-gray-400">Member Since Feb 2021</p>
          </div>
        </div>
      </Link>

      <div className="h-[150px] relative bg-cover bg-center bg-white shadow-md rounded-lg p-4  bg-[url(/img/dashboard/allright2.webp)] text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 "></div>
        <div className="relative h-full flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold mb-3">Who all are like this</h3>
        </div>
      </div>
    </div>
  );
}
