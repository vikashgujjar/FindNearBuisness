import React from "react";
import BusinessDirectory from "../Component/BuinessDirectory";

export default function page() {
  return (
    <>
      <div className="banner-feedback h-[280px]">
        <img
          src="/img/feedback/feedback.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="-mt-28 lg:-mt-40 px-5 md:px-8 xl:px-32 py-5 md:py-16 space-y-5">
        <div className="flex lg:w-[90%] mx-auto flex-wrap shadow-2xl rounded-lg lg:flex-nowrap bg-gray-100">
          {/* Left Section */}
          <div className="w-full rounded-l-lg bg-white p-6 lg:w-1/2 lg:pr-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Send your feedbacks
            </h3>
            <form>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Your Name*"
                  name="feedback_name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Email Address*"
                  name="feedback_email"
                  pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                  title="Invalid email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Mobile Number*"
                  name="feedback_mobile"
                  pattern="[7-9]{1}[0-9]{9}"
                  title="Phone number must start with 7-9 and have 10 digits"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <textarea
                  name="feedback_message"
                  id="feedback_message"
                  placeholder="Write your feedback here*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="2"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#04B1FF] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
              >
                Submit Feedback
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="w-full rounded-r-lg lg:w-1/2 lg:pl-8 p-6 mt-6 lg:mt-0 bg-blue-50">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Your feedback
            </h2>
            <p className="text-gray-700 mb-6">
              Your feedback is most important for us. There are many variations
              of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour
            </p>
            <ul className="flex space-x-4 mb-6">
              <li>
                <a href="/feedback">
                  <img
                    src="/img/social/fb.webp"
                    alt="Facebook"
                    className="w-8 h-8 hover:opacity-80 transition duration-200"
                  />
                </a>
              </li>
              <li>
                <a href="/feedback">
                  <img
                    src="/img/social/linkdinFuture.webp"
                    alt="LinkedIn"
                    className="w-8 h-8 hover:opacity-80 transition duration-200"
                  />
                </a>
              </li>
              <li>
                <a href="/feedback">
                  <img
                    src="/img/social/twitter.webp"
                    alt="Twitter"
                    className="w-8 h-8 hover:opacity-80 transition duration-200"
                  />
                </a>
              </li>
              <li>
                <a href="/feedback">
                  <img
                    src="/img/social/whatsapp.webp"
                    alt="WhatsApp"
                    className="w-8 h-8 hover:opacity-80 transition duration-200"
                  />
                </a>
              </li>
            </ul>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Why send feedback?
            </h4>
            <p className="text-gray-700 mb-2">✅ Useful for feature updates</p>
            <p className="text-gray-700">
              ✅ Helps us understand customer needs
            </p>
          </div>
        </div>
      </div>

      <BusinessDirectory />
    </>
  );
}
