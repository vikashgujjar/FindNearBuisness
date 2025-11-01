"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import DashLeft from "./DashLeft";
import DashRight from "./DashRight";
import CommonDashLayout from "./CommonDashLayout";


function Notifications() {
  const notifications = [
    {
      profile: "John Doe",
      enquiry: "Send you an enquiry from your listing",
      listing: "Sample Listing 1",
      time: "7:27 AM on 26, Apr 2020",
      review: null,
    },
    {
      profile: "Jane Smith",
      enquiry: "Write Link review on your listing",
      listing: "Sample Listing 2",
      time: "10:58 PM on 12, Mar 2021",
      review: "Great experience, highly recommended!",
    },
    {
      profile: "Alice Johnson",
      enquiry: "liked your listing",
      listing: null,
      time: "11:24 AM on 07, Jan 2020",
      review: null,
    },
    {
      profile: "Bob Brown",
      enquiry: "Send you an enquiry from your listing",
      listing: "Sample Listing 3",
      time: "9:15 AM on 15, Jul 2020",
      review: null,
    },
    {
      profile: "Eve Williams",
      enquiry: "Write Link review on your listing",
      listing: "Sample Listing 4",
      time: "3:30 PM on 21, Sep 2020",
      review: "Excellent service, will come back again!",
    },
    {
      profile: "Charlie Davis",
      enquiry: "liked your listing",
      listing: null,
      time: "5:45 PM on 03, Feb 2021",
      review: null,
    },
    {
      profile: "Grace Garcia",
      enquiry: "Send you an enquiry from your listing",
      listing: "Sample Listing 5",
      time: "10:10 AM on 19, Dec 2020",
      review: null,
    },
    {
      profile: "Alex Martinez",
      enquiry: "Write Link review on your listing",
      listing: "Sample Listing 6",
      time: "8:20 PM on 05, May 2021",
      review: "Fantastic service, exceeded my expectations!",
    },
    {
      profile: "Sophia Rodriguez",
      enquiry: "liked your listing",
      listing: null,
      time: "2:55 PM on 30, Nov 2020",
      review: null,
    },
    {
      profile: "Michael Lee",
      enquiry: "Send you an enquiry from your listing",
      listing: "Sample Listing 7",
      time: "4:45 PM on 10, Oct 2020",
      review: null,
    },
  ];


  const pathName=usePathname()

  return (
  
 <CommonDashLayout>
      <div>
    <div className="w-full h-2 bg-gradient-to-br from-[#717e9d] to-[#7fccbb] mb-6 rounded" />

    {/* Title Section */}
    <div className="bg-teal-400 rounded-md text-white text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
      notifications
    </div>
    <div className="px-4 py-6">
      <h2 className="text-base font-semibold">All Notifications</h2>
      <div className="bg-white rounded-lg mt-6">
        <ul className="">
          {notifications.map((notification, index) => (
           <li  key={index} className="border-b p-4 ">
           <li className=" text-sm hover:translate-x-10 duration-300">
              <div>
                <a
                  href={`/RajpuraTahsil/notification/profile/${notification.profile}`}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  {notification.profile}
                </a>{" "}
                {notification.enquiry}{" "}
                {notification.listing && (
                  <a
                    href={`/RajpuraTahsil/notification/listing/${notification.listing}`}
                    className="text-blue-500 hover:underline"
                  >
                    {notification.listing}
                  </a>
                )}
              </div>
              {notification.review && (
                <p className="mt-2 text-gray-700">
                  {notification.review}
                </p>
              )}
              <span className="text-xs text-gray-500">
                {notification.time}
              </span>
            </li>
           </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
 </CommonDashLayout>



  
  );
}

export default Notifications;
