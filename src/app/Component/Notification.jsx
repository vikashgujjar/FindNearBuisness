"use client";
import React from 'react'

import Link from "next/link";
export default function Notification() {
    const notifications = [
        {
          name: "John Doe",
          action: "sent you an enquiry from your listing",
          listing: "Sample Listing 1",
          listingUrl: "/Sonipat/notification/listing/Sample%20Listing%201",
          profileUrl: "/Sonipat/notification/profile/John%20Doe",
          time: "7:27 AM on 26, Apr 2020",
        },
        {
          name: "Jane Smith",
          action: "wrote a review on your listing",
          listing: "Sample Listing 2",
          listingUrl: "/Sonipat/notification/listing/Sample%20Listing%202",
          profileUrl: "/Sonipat/notification/profile/Jane%20Smith",
          review: "Great experience, highly recommended!",
          time: "10:58 PM on 12, Mar 2021",
        },
        {
          name: "Alice Johnson",
          action: "liked your listing",
          profileUrl: "/Sonipat/notification/profile/Alice%20Johnson",
          time: "11:24 AM on 07, Jan 2020",
        },
        {
          name: "Bob Brown",
          action: "sent you an enquiry from your listing",
          listing: "Sample Listing 3",
          listingUrl: "/Sonipat/notification/listing/Sample%20Listing%203",
          profileUrl: "/Sonipat/notification/profile/Bob%20Brown",
          time: "9:15 AM on 15, Jul 2020",
        },
        {
          name: "Charlie Davis",
          action: "shared your listing",
          listing: "Sample Listing 4",
          listingUrl: "/Sonipat/notification/listing/Sample%20Listing%204",
          profileUrl: "/Sonipat/notification/profile/Charlie%20Davis",
          time: "5:45 PM on 20, Feb 2022",
        },
        {
          name: "Emma Wilson",
          action: "commented on your review",
          profileUrl: "/Sonipat/notification/profile/Emma%20Wilson",
          comment: "I completely agree with your review!",
          time: "3:10 PM on 05, May 2021",
        },
        {
          name: "Liam Martinez",
          action: "followed you",
          profileUrl: "/Sonipat/notification/profile/Liam%20Martinez",
          time: "8:30 AM on 14, Aug 2022",
        },
        {
          name: "Sophia Lopez",
          action: "updated their review on your listing",
          listing: "Sample Listing 5",
          listingUrl: "/Sonipat/notification/listing/Sample%20Listing%205",
          profileUrl: "/Sonipat/notification/profile/Sophia%20Lopez",
          review: "The service has improved significantly!",
          time: "9:50 PM on 21, Nov 2023",
        },
        {
          name: "Daniel Harris",
          action: "added your listing to favorites",
          listing: "Sample Listing 6",
          listingUrl: "/Sonipat/notification/listing/Sample%20Listing%206",
          profileUrl: "/Sonipat/notification/profile/Daniel%20Harris",
          time: "12:15 PM on 10, Jun 2021",
        },
        {
          name: "Olivia Clark",
          action: "sent you a message",
          profileUrl: "/Sonipat/notification/profile/Olivia%20Clark",
          message: "Hello, I have a question about your listing.",
          time: "6:35 PM on 18, Sep 2022",
        },
        {
          name: "Ethan Baker",
          action: "reported an issue with your listing",
          listing: "Sample Listing 7",
          listingUrl: "/Sonipat/notification/listing/Sample%20Listing%207",
          profileUrl: "/Sonipat/notification/profile/Ethan%20Baker",
          issue: "Incorrect contact details.",
          time: "4:20 AM on 30, Dec 2023",
        },
        {
          name: "Mia Rodriguez",
          action: "invited you to connect",
          profileUrl: "/Sonipat/notification/profile/Mia%20Rodriguez",
          time: "11:00 AM on 25, Oct 2023",
        },
      ];
      
  return (
    <div className="container mx-auto  bg-white shadow-2xl  rounded-md p-6">
    <div className="w-full h-2 bg-gradient-to-br from-[#78C1C2] to-[#598FE3] mb-6 rounded" />

    {/* Title Section */}
    <div className="bg-teal-400 rounded-md text-white text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
    Notifications
    </div>
    <div className="p-4  overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-bold">All Notifications </h2>
       
      </div>
        <ul className="space-y-4">
          {notifications.map((notification, index) => (
            <li key={index} className="p-4 hover:translate-x-10 duration-300  rounded-lg border border-gray-200">
              <div className="text-gray-800">
                <Link href={notification.profileUrl} className="text-blue-600 font-semibold hover:underline">
                  {notification.name}
                </Link>{" "}
                {notification.action}
                {notification.listing && (
                  <Link href={notification.listingUrl} className="text-blue-600 font-semibold hover:underline">
                    {" "}
                    {notification.listing}
                  </Link>
                )}
              </div>
              {notification.review && <p className="text-gray-600 mt-1">{notification.review}</p>}
              <span className="text-sm text-gray-500 block mt-2">{notification.time}</span>
            </li>
          ))}
        </ul>

     
        </div>
</div>
  )
}
