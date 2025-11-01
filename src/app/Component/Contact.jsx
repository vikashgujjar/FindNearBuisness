import React from "react";

const Contact = () => {
  return (
    <section className="px-5 md:px-8 xl:px-32 py-8 xl:py-16 bg-gray-50">
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-extrabold mb-6">
            What service do you need? <br />
            <span className="text-[#5b4ad8]">Future Touch</span>
          </h2>
          <p className="mb-8 text-gray-700 text-sm md:text-base leading-relaxed">
            Share your requirements with us, and we’ll connect you with the
            right service providers to fulfill your needs effectively.
          </p>
          <ul className="space-y-6">
            {[
              {
                imgSrc: "/img/contactimg/blog.webp",
                alt: "Blog",
                title: "Tell us more about your requirements",
                description:
                  "Imagine making your presence known online through a local directory. Your competitors are already...",
              },
              {
                imgSrc: "/img/contactimg/shield.webp",
                alt: "Shield",
                title: "We connect with the right service provider",
                description:
                  "Advertising your business to local audiences opens up numerous opportunities...",
              },
              {
                imgSrc: "/img/contactimg/general.webp",
                alt: "General",
                title: "Happy with our service",
                description:
                  "Even local businesses need brand management and a strong image. Build yours effectively...",
              },
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-semibold text-lg md:text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="bg-white p-5 sm:p-8 rounded-xl shadow-lg">
          <form className="space-y-3" role="form" aria-label="Contact Form">
            <h3 className="text-2xl text-nowrap xl:text-3xl font-bold text-center mb-6 text-gray-800">
              What Are You Looking For?
            </h3>
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                aria-label="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                aria-label="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="service"
                className="block text-gray-700 font-medium mb-2"
              >
                Service Required
              </label>
              <select
                id="service"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                aria-label="Select a service"
              >
                <option value="" disabled selected>
                  Select a service
                </option>
                <option value="web-development">Web Development</option>
                <option value="seo">SEO</option>
                <option value="graphic-design">Graphic Design</option>
                <option value="app-development">App Development</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Enter your message"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                aria-label="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#5b4ad8] text-white font-semibold py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 hover:bg-pink-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
