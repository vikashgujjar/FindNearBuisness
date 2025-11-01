"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import PaymentStatus from "./PaymentStatus";
import MyDashboard from "./MyDashboard";
import AllListing from "./AllListing";
import LeadEnquiry from "./LeadEnquiry";
import BlogPosts from "./BlogPosts";
import Reviews from "./Reviews";
import Profile from "./Profile";
import LikedListing from "./LikedListing";
import AdSummary from "./AdSummary";
import PaymentInvoice from "./PaymentInvoice";
import { usePathname } from "next/navigation";

export default function DashboardCopytry() {
  const pathName = usePathname();

  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count < 60) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(timer);
      }
    }, 60);

    return () => clearInterval(timer);
  }, [count]);

  const leftdashbordTabs = [
    {
      title: "My Dashboard",
      href: null,
      icon: "/img/dashboard/lefttab1.webp",
      tab: "mydashboard",
    },
    {
      title: "All Listings",
      href: null,
      icon: "/img/dashboard/lefttab2.webp",
      tab: "alllisting",
    },
    {
      title: "Add New Listing",
      href: "/newlisting",
      icon: "/img/dashboard/lefttab3.webp",
      tab: null,
    },
    {
      title: "Lead enquiry",
      href: null,
      icon: "/img/dashboard/lefttab4.webp",
      tab: "leadenquiry",
    },
    {
      title: "Blog posts",
      href: null,
      icon: "/img/dashboard/lefttab5.webp",
      tab: "blogposts",
    },
    {
      title: "Reviews",
      href: null,
      icon: "/img/dashboard/lefttab6.webp",
      tab: "reviews",
    },
    {
      title: "My Profile",
      href: null,
      icon: "/img/dashboard/lefttab7.webp",
      tab: "profile",
    },
    {
      title: "Liked Listings",
      href: null,
      icon: "/img/dashboard/lefttab8.webp",
      tab: "likedlisting",
    },
    {
      title: "Ad Summary",
      href: null,
      icon: "/img/dashboard/lefttab9.webp",
      tab: "adsummary",
    },
    {
      title: "Payment & plan",
      href: null,
      icon: "/img/dashboard/lefttab10.webp",
      tab: "paymentplan",
    },
    {
      title: "Payment invoice",
      href: null,
      icon: "/img/dashboard/lefttab11.webp",
      tab: "paymentinvoice",
    },
    {
      title: "Notifications",
      href: null,
      icon: "/img/dashboard/lefttab13.webp",
      tab: "Notification",
    },
    {
      title: "How to's",
      href: "/how",
      icon: "/img/dashboard/lefttab14.webp",
      tab: null,
    },
    {
      title: "Setting",
      href: null,
      icon: "/img/dashboard/lefttab15.webp",
      tab: "setting",
    },
    {
      title: "Log Out",
      href: "/",

      icon: "/img/dashboard/lefttab17.webp",
      tab: null,
    },
  ];

  const [activeTab, setActiveTab] = useState("mydashboard");
  console.log("check val", activeTab);

  const tabHandler = (tab) => {
    setActiveTab((preTab) => (preTab == tab ? null : tab));
  };

  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <div
        className={`${
          activeTab === "leadenquiry" ? "px-10 py-10" : "px-5 md:px-8  py-10"
        } bg-[#F5F6FA]`}
      >
        <div className="grid md:grid-cols-2 gap-y-10 gap-x-4  lg:grid-cols-4">
          <div className="hidden md:block md:order-2 lg:order-[0] lg:block lg:col-span-1   p-2 xl:p-5">
            <div className="bg-white  rounded-md shadow-md shadow-gray-300  mb-4 overflow-hidden pb-4 relative text-center w-full">
              <div className="relative w-full h-full">
                <img
                  src="/img/dashboard/dashbordleft2.webp"
                  alt="Rn53 Themes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>

              <div className="relative -mt-20  ">
                <img
                  src="/img/dashboard/dashbordleft.webp"
                  alt="Rn53 Themes"
                  className="w-36 h-36 rounded-full mx-auto "
                />
                <a href="/gallery">
                  <h4 className="text-lg lg:text-xl font-bold  mt-2 text-[#03A9F4]">
                    Rn53 Themes
                  </h4>
                </a>
                <b className="text-xs text-gray-400">Join on 26, Mar 2021</b>
              </div>
            </div>

            <ul className="list-none  p-1 xl:p-5 ">
              {leftdashbordTabs.map((elm, index) => (
                <li key={index} className="">
                  {elm.href ? (
                    <Link
                      className={`${
                        elm.href == pathName ? "bg-sky-100" : "bg-transparent"
                      }  py-2 px-2  flex items-center gap-x-3 lg:gap-x-5 mt-4 lg:text-nowrap hover:text-blue-700 text-gray-600 `}
                      href={elm.href}
                    >
                      <img src={elm.icon} alt="" className="w-5 h-5" />
                      <h6 className="font-bold t ">{elm.title}</h6>
                    </Link>
                  ) : (
                    <div
                      onClick={() => {
                        setActiveTab(elm.tab);
                        setIsEdit(false);
                      }}
                      className={`${
                        elm.tab == activeTab
                          ? "bg-sky-100 rounded"
                          : "bg-transparent"
                      }  py-2 px-2 hover:text-blue-700 text-gray-600 flex cursor-pointer items-center gap-x-5 mt-4 lg:text-nowrap`}
                      href={elm.href}
                    >
                      <img src={elm.icon} alt="" className="w-5 h-5" />
                      <h6 className="font-bold ">{elm.title}</h6>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`border  ${
              activeTab === "leadenquiry"
                ? "md:col-span-2 lg:col-span-3"
                : "md:col-span-2 lg:col-span-3 xl:col-span-2"
            }`}
          >
            {activeTab == "paynow" && <PaymentStatus />}
            {activeTab == "mydashboard" && (
              <MyDashboard setActiveTab={setActiveTab} setIsEdit={setIsEdit} />
            )}
            {activeTab == "alllisting" && <AllListing />}
            {activeTab == "leadenquiry" && <LeadEnquiry />}
            {activeTab == "blogposts" && <BlogPosts />}
            {activeTab == "reviews" && <Reviews />}
            {activeTab == "profile" && (
              <Profile isEdit={isEdit} setIsEdit={setIsEdit} />
            )}
            {activeTab == "likedlisting" && <LikedListing />}
            {activeTab == "adsummary" && <AdSummary />}
            {activeTab == "paymentplan" && <PaymentStatus />}
            {activeTab == "paymentinvoice" && <PaymentInvoice />}
          </div>

          {activeTab !== "leadenquiry" && (
            <div className=" lg:hidden  xl:block xl:col-span-1   bg-[#F5F6FA] p-5">
              {/* right side  */}
              <div className="space-y-5   mb-4 overflow-hidden  relative text-center w-full">
                <div className="promote-business overflow-hidden relative w-full h-full group  rounded-md shadow-md shadow-gray-300 ">
                  <img
                    src="/img/dashboard/dashboardRight1.webp"
                    alt="Rn53 Themes"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0  bg-[#cac42680]"></div>

                  <div className="text-white absolute inset-0 z-30 a p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold  mb-2">
                      Promote my business
                    </h3>
                    <p className=" mb-4">
                      Your listing shows on the top of the respective category
                      page
                    </p>
                    <Link
                      href="/start-now"
                      className="inline-block bg-[#d7d006] text-white text-sm font-semibold px-4 py-2 rounded-lg group-hover:bg-[#ff9800]"
                    >
                      Start now
                    </Link>
                  </div>
                </div>

                <div className="your-points bg-white rounded-md shadow-md shadow-gray-300">
                  <div className="w-full h-56 mx-auto relative">
                    <img
                      src="/img/dashboard/dashboardRight2.webp"
                      alt="your-points"
                      className="h-full w-full object-cover object-right"
                    />
                    <div className="absolute text-center top-[41%] left-[30%] md:top-[40%] md:left-[32%]">
                      <h6 className="font-bold text-2xl">Your point</h6>
                      <p className="text-5xl xl:text-3xl font-bold">{count}</p>
                    </div>
                  </div>
                  <div className=" p-6 space-y-4  text-xs">
                    <h6 className="font-semibold">Earn more credit points</h6>
                    <p>
                      Use this points to promote your listing.{" "}
                      <span className="text-blue-400 font-semibold cursor-pointer">
                        Click here
                      </span>{" "}
                      for demo
                    </p>
                    <div>
                      <Link
                        href="/buy-point"
                        className="bg-[#E75772]  px-5 py-2 rounded-full text-white"
                      >
                        BUY POINTS
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="payment-info bg-white rounded-lg shadow-lg shadow-gray-200">
                  <div className="bg-blue-500 text-white px-6 py-4 rounded-t-lg">
                    <h6 className="text-sm text-start font-semibold">
                      Payment Information
                    </h6>
                  </div>
                  <div className="p-6 grid grid-cols-2 gap-4 text-gray-700">
                    <ul className="text-left space-y-3 font-medium">
                      <li className="whitespace-nowrap">Plan Name:</li>
                      <li className="whitespace-nowrap">Start Date:</li>
                      <li className="whitespace-nowrap">Expiry Date:</li>
                      <li className="whitespace-nowrap">Duration:</li>
                      <li className="whitespace-nowrap">Remaining Days:</li>
                      <li className="whitespace-nowrap">Checkout Cost:</li>
                      <li className="whitespace-nowrap">Payment Status:</li>
                    </ul>
                    <ul className="text-left space-y-3 text-gray-600">
                      <li className="whitespace-nowrap">Premium Plus</li>
                      <li className="whitespace-nowrap">26, Mar 2021</li>
                      <li className="whitespace-nowrap">26, Mar 2031</li>
                      <li className="whitespace-nowrap">10 years</li>
                      <li className="whitespace-nowrap">3638</li>
                      <li className="whitespace-nowrap">$20</li>
                      <li className="whitespace-nowrap font-bold text-red-500">
                        PENDING
                      </li>
                    </ul>
                    <button
                      onClick={() => tabHandler("paynow")}
                      className="bg-[#4CAF50] px-2 py-1   text-white"
                    >
                      Pay Now{" "}
                    </button>
                  </div>
                </div>

                <div className="Last-week bg-white rounded-lg shadow-lg shadow-gray-200">
                  <div className="bg-blue-500 text-white px-6 py-4 rounded-t-lg">
                    <h6 className="text-sm text-start font-semibold">
                      Last week report
                    </h6>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-3 ">
                      <div className="border-r border-b p-4">
                        <span className="text-xs text-gray-400">ENQUIRY</span>
                        <h6 className="text-lg font-bold">00</h6>
                        <span className="text-xs text-gray-400">Leads</span>
                      </div>
                      <div className="border-r border-b p-4">
                        <span className="text-xs text-gray-400">VIEWS</span>
                        <h6 className="text-lg font-bold">02</h6>
                        <span className="text-xs text-gray-400">Listings</span>
                      </div>
                      <div className="border-r border-b p-4">
                        <span className="text-xs text-gray-400">VIEWS</span>
                        <h6 className="text-lg font-bold">00</h6>
                        <span className="text-xs text-gray-400">Events</span>
                      </div>
                      <div className="border-r p-4">
                        <span className="text-xs text-gray-400">VIEWS</span>
                        <h6 className="text-lg font-bold">01</h6>
                        <span className="text-xs text-gray-400">Blogs</span>
                      </div>
                      <div className="border-r p-4">
                        <span className="text-xs text-gray-400">VIEWS</span>
                        <h6 className="text-lg font-bold">00</h6>
                        <span className="text-xs text-gray-400">Products</span>
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-gray-400">MESSAGES</span>
                        <h6 className="text-lg font-bold">00</h6>
                        <span className="text-xs text-gray-400">Inbox</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="promote-business overflow-hidden relative w-full h-full group  rounded-md shadow-md shadow-gray-300 ">
                  <img
                    src="/img/dashboard/dashboardRight1.webp"
                    alt="Rn53 Themes"
                    className="w-full h-[220px] object-cover"
                  />
                  <div className="absolute inset-0  bg-[#3f51b5d9]"></div>

                  <div className="text-white absolute inset-0 z-30 a p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold  mb-2">
                      Community members
                    </h3>
                    <p className=" mb-4">
                      Follow your favorite business users and grow your online
                      business now.
                    </p>
                    <Link
                      href="/community"
                      className="inline-block bg-[#03A9F4] text-white text-sm font-semibold px-4 py-2 rounded-lg group-hover:bg-[#ff9800]"
                    >
                      Community
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
