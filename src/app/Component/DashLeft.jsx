"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashLeft() {
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

  return (
    <div>
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
          <Link href="/gallery">
            <h4 className="text-lg lg:text-xl font-bold  mt-2 text-[#03A9F4]">
              Rn53 Themes
            </h4>
          </Link>
          <b className="text-xs text-gray-400">Join on 26, Mar 2021</b>
        </div>
      </div>

      <ul className="list-none  p-1 xl:p-5 ">
        {leftdashbordTabs.map((elm, index) => (
          <li key={index} className="">
            {console.log(elm.href)}
            <Link
              className={`${
                elm.href == lastSegment
                  ? "relative bg-gradient-to-tr from-[#f5f6fa] to-[#e4f1fc] before:absolute before:w-1 before:h-[22px] before:bg-[#03a9f4] before:top-1/2 before:left-0 before:translate-y-[-50%] before:transition-all before:duration-500   "
                  : "bg-transparent"
              }  py-2 px-2  flex items-center gap-x-3 lg:gap-x-5 mt-4 lg:text-nowrap hover:text-[#007bff]  text-gray-600`}
              href={
                elm.title === "Log Out" ? elm.href : getLocationHref(elm.href)
              }
            >
              <img src={elm.icon} alt="" className="w-5 h-5" />
              <h6 className="font-bold t ">{elm.title}</h6>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
