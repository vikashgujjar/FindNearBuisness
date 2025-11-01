"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdClose, MdOutlineMenu } from "react-icons/md";

export default function DashLeftOpen() {
  const [loc, setLoc] = useState();

  useEffect(() => {
    const loc = localStorage.getItem("location");
    console.log(JSON.parse(loc));
    setLoc(JSON.parse(loc));
    console.log(JSON.parse(loc));
  }, []);

  const getLocationHref = (linkVal) => {
    const location =
      loc?.county || (loc?.Name === "NA" ? loc?.State : loc?.Name);
    return `/${location?.replace(/\s+/g, "") || "default-location"}/${linkVal
      ?.toLowerCase()
      .split(" ")
      .join("-")}`;
  };

  const pathName = usePathname();
  const [curentPath, setCurentPath] = useState();

  const splitPath = pathName.split("/").filter(Boolean);
  const lastSegment = `${splitPath[splitPath.length - 1]}`;

  console.log(lastSegment, "splitpath");

  const leftdashbordTabs = [
    {
      title: "My Dashboard",
      href: "dashboard",
      icon: "/img/dashboard/lefttab1.webp",
      tab: "mydashboard",
    },
    {
      title: "All Listings",
      href: "listing",
      icon: "/img/dashboard/lefttab2.webp",
      tab: "alllisting",
    },
    {
      title: "Add New Listing",
      href: "newlisting",
      icon: "/img/dashboard/lefttab3.webp",
      tab: null,
    },
    {
      title: "Lead enquiry",
      href: "lead",
      icon: "/img/dashboard/lefttab4.webp",
      tab: "leadenquiry",
    },
    {
      title: "Blog posts",
      href: "blog",
      icon: "/img/dashboard/lefttab5.webp",
      tab: "blogposts",
    },
    {
      title: "Reviews",
      href: "reviews",
      icon: "/img/dashboard/lefttab6.webp",
      tab: "reviews",
    },
    {
      title: "My Profile",
      href: "profile",
      icon: "/img/dashboard/lefttab7.webp",
      tab: "profile",
    },
    {
      title: "Liked Listings",
      href: "liked",
      icon: "/img/dashboard/lefttab8.webp",
      tab: "likedlisting",
    },
    {
      title: "Ad Summary",
      href: "summary",
      icon: "/img/dashboard/lefttab9.webp",
      tab: "adsummary",
    },
    {
      title: "Payment & plan",
      href: "payment",
      icon: "/img/dashboard/lefttab10.webp",
      tab: "paymentplan",
    },
    {
      title: "Payment invoice",
      href: "invoice",
      icon: "/img/dashboard/lefttab11.webp",
      tab: "paymentinvoice",
    },
    {
      title: "Notifications",
      href: "notification",
      icon: "/img/dashboard/lefttab13.webp",
      tab: "Notification",
    },
    {
      title: "How to's",
      href: "how",
      icon: "/img/dashboard/lefttab14.webp",
      tab: null,
    },
    {
      title: "Setting",
      href: "setting",
      icon: "/img/dashboard/lefttab15.webp",
      tab: "setting",
    },
    {
      title: "Log Out",
      href: "/logout",

      icon: "/img/dashboard/lefttab17.webp",
      tab: null,
    },
  ];

  const [leftOpen, setLeftOpen] = useState(false);

  return (
    <div
      className={`${
        leftOpen ? "w-[240px] " : "w-[50px]"
      }   z-40  left-0 bg-white rounded-2xl text-black  shadow-2xl group transition-all duration-300 overflow-hidden`}
    >
     <button
        onClick={() => setLeftOpen(!leftOpen)}
        className="text-2xl mx-auto p-2 rounded-full ms-2 m-3 bg-gray-200 hover:bg-gray-100 transition group "
        aria-label="Toggle Sidebar"
      >
        {leftOpen ? <MdClose /> : <MdOutlineMenu />}
      </button>
      {/* Profile Section */}
      <div className="bg-white rounded-md shadow-md shadow-gray-300 mb-4 overflow-hidden pb-4 relative text-center w-full">
        <div className="relative w-full h-full">
          <img
            src="/img/dashboard/dashbordleft2.webp"
            alt="Rn53 Themes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Profile Info */}
        {leftOpen && <div className="relative -mt-20  transition-opacity duration-300">
          <img
            src="/img/dashboard/dashbordleft.webp"
            alt="Rn53 Themes"
            className="w-24 h-24 rounded-full mx-auto"
          />
          <Link href="/gallery">
            <h4 className="text-sm font-bold mt-2 text-[#03A9F4]">
              Rn53 Themes
            </h4>
          </Link>
          <b className="text-xs text-gray-400">Join on 26, Mar 2021</b>
        </div>}
        
      </div>

      {/* Sidebar Links */}
   <ul className="list-none p-1 xl:p-5">
  {leftdashbordTabs.map((elm, index) => (
    <li key={index} className="group">
      <Link
        href={elm.title === "Log Out" ? elm.href : getLocationHref(elm.href)}
        className={`flex items-center gap-x-3 px-2 py-2 mt-2 text-gray-600 hover:text-[#007bff] 
          transition-all duration-200 ${
            elm.href == lastSegment
              ? "relative bg-gradient-to-tr from-[#f5f6fa] to-[#e4f1fc] before:absolute before:w-1 before:h-[22px] before:bg-[#03a9f4] before:top-1/2 before:left-0 before:translate-y-[-50%]"
              : "bg-transparent"
          }`}
      >
        <img src={elm.icon} alt={elm.title} className="w-5 h-5" />
        {leftOpen && (
          <h6 className="font-semibold text-sm whitespace-nowrap">
            {elm.title}
          </h6>
        )}
      </Link>
    </li>
  ))}
</ul>

    </div>
  );
}
