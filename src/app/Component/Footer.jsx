import Link from "next/link";
import React from "react";

const Footer = () => {
  const countries = [
    { name: "Australia", url: "http://www.domainname.au" },
    { name: "UK", url: "http://www.domainname.uk" },
    { name: "USA", url: "http://www.domainname.usa" },
    { name: "India", url: "http://www.domainname.in" },
    { name: "Germany", url: "http://www.domainname.ge" },
    { name: "China", url: "http://www.domainname.ch" },
    { name: "France", url: "http://www.domainname.fr" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-[#191919] text-white">
      <div className="wed-hom-footer  px-5 md:px-8 xl:px-32  md:text-xs  lg:text-base pt-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center text-center md:justify-center gap-2 md:gap-4 mb-8 border-b-2 border-dotted border-[#ffffff51] pb-4">
            <h2 className="text-sm md:text-base font-bold text-white flex flex-wrap justify-center items-center gap-x-2">
              <span className="text-gray-400">Free support:</span>
              <a href="tel:+917056997000" className="text-white">
                +91-70569 97000
              </a>
              <span className="hidden md:inline text-gray-400">|</span>
              <br className="block md:hidden" />
              <span className="text-gray-400">Email:</span>
              <a
                href="mailto:info@futureittouch.com"
                className="text-white break-all"
              >
                info@futureittouch.com
              </a>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="border-r-2 border-dotted border-[#ffffff51]">
              <h4 className="text-xl font-bold mb-4">Top Category</h4>
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <Link href="/realestate" className="hover:text-gray-400">
                    Digital Products
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-gray-400">
                    Spa and Facial
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-gray-400">
                    Real Estate
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-gray-400">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-gray-400">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-gray-400">
                    Electricals
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-gray-400">
                    Automobiles
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-gray-400">
                    Transportation
                  </Link>
                </li>
              </ul>
            </div>
            <div className="border-r-2 border-dotted border-[#ffffff51]">
              <h4 className="text-xl font-bold mb-4">Trending Category</h4>
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <Link href="/realestate" className="hover:text-gray-400">
                    Hospitals
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-gray-400">
                    Hotels And Resorts
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-gray-400">
                    Automobiles
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-gray-400">
                    Real Estate
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-gray-400">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-gray-400">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="/realestate" className="hover:text-gray-400">
                    Electricals
                  </Link>
                </li>
              </ul>
            </div>
            <div className="border-r-2 border-dotted border-[#ffffff51]">
              <h4 className="text-xl font-bold mb-4">Help & Support</h4>
              <ul className="grid grid-cols-2 gap-4">
                <li>
                  <Link href="/about" className="hover:text-gray-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-gray-400">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="hover:text-gray-400">
                    Feedback
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-400">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-gray-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-gray-400">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8 ">
            <h4 className="text-xl font-bold text-start mb-4">
              Popular Categories
            </h4>
            <ul className="flex flex-wrap gap-4 lg:gap-6">
              <li>
                <Link href="/realestate" className="hover:text-gray-400">
                  Wedding halls in London
                </Link>
              </li>
              <li>
                <Link href="/realestate" className="hover:text-gray-400">
                  Schools in Chennai
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-gray-400">
                  Schools in New York
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-gray-400">
                  Real estate in Illinois
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-gray-400">
                  Real estate in Chennai
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-gray-400">
                  Events in Thailand
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-gray-400">
                  Flat for rent in melborn
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap justify-between gap-8 border-b-2 border-dotted border-[#ffffff51] pb-4">
            <div className="space-y-3">
              <h4 className="text-xl font-bold mb-2">Get In Touch</h4>
              <p>
                Address: Sector 34 A, Near Mukat Hospital, Chandigarh <br />{" "}
                160022
              </p>
              <p>
                Phone:{" "}
                <a href="tel: +91-70569 97000" className="text-white ">
                  +91-70569 97000
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info@futureittouch.com" className="text-white ">
                  mailto:info@futureittouch.com
                </a>
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-bold mb-2">
                Download Our Free Mobile Apps
              </h4>
              <ul className="flex gap-4 ">
                <li>
                  <Link href="/">
                    <img
                      src="/img/fotter/gplay.webp"
                      className="h-[45px] w-full"
                      alt="Google Play"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <img
                      src="/img/fotter/appstore.webp"
                      className="h-[45px] w-full"
                      alt="Apple Store"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-bold mb-2">Follow Us</h4>
              <ul className="flex gap-4">
                <li>
                  <a href="https://www.linkedin.com/feed/">
                    <img src="/img/social/linkdinFuture.webp" alt="Social" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/?lang=en">
                    <img src="/img/social/twitter.webp" alt="Twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/Google">
                    <img src="/img/social/fb.webp" alt="Twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/">
                    <img src="/img/social/google.webp" alt="Twitter" />
                  </a>
                </li>

                <li>
                  <a href="https://www.youtube.com/">
                    <img src="/img/social/youtube.webp" alt="Twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-5">
            <ul className="flex text-base flex-wrap  md:justify-center gap-x-3 md:gap-x-5">
              {countries.map((country, index) => (
                <li
                  key={index}
                  className="md:border-r-2 gap-x-1 md:px-5 border-dotted border-[#5d5b5b]"
                >
                  <a
                    href={country.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {country.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center md:text-xs lg:text-base bg-[#040404] py-2">
        <p>
          Copyright © 2017- {currentYear} . Proudly powered by{" "}
          <a
            href="https://futuretouch.in/"
            target="_blank"
            rel="noopener noreferrer "
            className="text-[#0d6efd] font-semibold"
          >
            Future IT Touch Pvt Lmt
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
