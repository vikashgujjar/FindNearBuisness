import React from "react";

import BusinessDirectory from "../Component/BuinessDirectory";
import PinLocation from "../Component/PinLocation";
export default function page() {
  return (
    <>
      <PinLocation />
      <div className="contact-map w-full h-72 sm:h-96 md:h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50266302.99089794!2d-89.26650700000002!3d39.739389!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b2d386f6e2619%3A0x7f15825064115956!2sIllinois%2C%20USA!5e0!3m2!1sen!2sin!4v1737005160216!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className=" md:px-8 xl:px-32 py-5 md:py-16 space-y-5">
        <section className="bg-gray-100 py-10">
          <div className=" px-6">
            {/* Title Section */}
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
            </div>
            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Address Section */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Address:
                </h4>
                <h5 className="text-md font-medium text-gray-700 mb-2">
                  United States:
                </h5>
                <p className="text-gray-600 mb-4">
                  28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.
                </p>
                <h5 className="text-md font-medium text-gray-700 mb-2">
                  India:
                </h5>
                <p className="text-gray-600">
                  28800 Orchard Lake Road, Suite 180 Farmington, Chennai, India
                </p>
              </div>

              {/* Contact Info Section */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Contact Info:
                </h4>
                <ul className="space-y-3">
                  <li className="text-gray-700">
                    <span className="font-medium">Support:</span> +01 25414 6354
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Enquiry:</span> +01 9867 4326
                  </li>
                  <li className="text-gray-700">
                    <span className="font-medium">Email:</span>{" "}
                    support@company.com
                  </li>
                </ul>
              </div>

              {/* Social Media Section */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Website & Social Media:
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/contact"
                      className="text-blue-500 hover:underline"
                    >
                      www.website.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-blue-500 hover:underline"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-blue-500 hover:underline"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <BusinessDirectory />
    </>
  );
}
