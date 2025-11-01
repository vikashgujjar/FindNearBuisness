import React from "react";
import Link from "next/link";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
export default function Events() {
  const eventData = [
    {
      imageUrl: "/img/events/1.webp",
      date: "Dec 28",
      eventName: "New year celebration 2020",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      phone: "98765498465",
      hostImage: "/img/dashboard/dashbordleft.webp",
      hostName: "Directory Finder",
    },
    {
      imageUrl: "/img/events/2.webp",
      date: "Dec 28",
      eventName: "Online Marketers Meet-Up",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      phone: "98765498465",
      hostImage: "/img/dashboard/dashbordleft.webp",
      hostName: "Directory Finder",
    },
    {
      imageUrl: "/img/events/2.webp",
      date: "Dec 28",
      eventName: "Lunar New Year 2020",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      phone: "98765498465",
      hostImage: "/img/dashboard/dashbordleft.webp",
      hostName: "Directory Finder",
    },
    {
      imageUrl: "/img/events/2.webp",
      date: "Dec 28",
      eventName: "Poway Winter Festival",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      phone: "98765498465",
      hostImage: "/img/dashboard/dashbordleft.webp",
      hostName: "Directory Finder",
    },
    {
      imageUrl: "/img/events/2.webp",
      date: "Dec 28",
      eventName: "Car Fest 2020",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      phone: "98765498465",
      hostImage: "/img/dashboard/dashbordleft.webp",
      hostName: "Directory Finder",
    },
    {
      imageUrl: "/img/events/2.webp",
      date: "Dec 28",
      eventName: "Toyota Cars 20% Offer",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      phone: "98765498465",
      hostImage: "/img/dashboard/dashbordleft.webp",
      hostName: "Directory Finder",
    },
    {
      imageUrl: "/img/events/2.webp",
      date: "Dec 28",
      eventName: "Electrical Energy Saving Methods",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      phone: "98765498465",
      hostImage: "/img/dashboard/dashbordleft.webp",
      hostName: "Directory Finder",
    },
    {
      imageUrl: "/img/events/2.webp",
      date: "Dec 28",
      eventName: "States Soccer World Cup 2022",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      phone: "98765498465",
      hostImage: "/img/dashboard/dashbordleft.webp",
      hostName: "Directory Finder",
    },
    {
      imageUrl: "/img/events/2.webp",
      date: "Dec 28",
      eventName: "Art Exhibition: Nature's Beauty",
      address: "Art Gallery, Downtown Street, Los Angeles, USA",
      phone: "98765498465",
      hostImage: "/img/dashboard/dashbordleft.webp",
      hostName: "Artistic Creations",
    },
    {
      imageUrl: "/img/events/2.webp",
      date: "Dec 28",
      eventName: "Tech Summit 2022",
      address: "Convention Center, Silicon Valley, California, USA",
      phone: "98765498465",
      hostImage: "/img/dashboard/dashbordleft.webp",
      hostName: "Tech Innovations Inc.",
    },
    {
      imageUrl: "/img/events/2.webp",
      date: "Dec 28",
      eventName: "Gaming Expo 2022",
      address: "Exhibition Hall, Downtown Street, San Francisco, USA",
      phone: "98765498465",
      hostImage: "/img/dashboard/dashbordleft.webp",
      hostName: "GameZone Entertainment",
    },
    {
      imageUrl: "/img/events/2.webp",
      date: "Dec 28",
      eventName: "Food Fest: Taste of the World",
      address: "City Park, Downtown Avenue, Chicago, USA",
      phone: "98765498465",
      hostImage: "/img/dashboard/dashbordleft.webp",
      hostName: "Foodie Delights LLC",
    },
    {
      imageUrl: "/img/events/2.webp",
      date: "Dec 28",
      eventName: "Fashion Show: Glamour & Style",
      address: "Fashion Arena, Rodeo Drive, Beverly Hills, USA",
      phone: "98765498465",
      hostImage: "/img/dashboard/dashbordleft.webp",
      hostName: "Style Creations Inc.",
    },
    {
      imageUrl: "/img/events/2.webp",
      date: "Dec 28",
      eventName: "Music Concert: Melodies Unplugged",
      address: "Amphitheater, Central Park, Newyork, USA",
      phone: "98765498465",
      hostImage: "/img/dashboard/dashbordleft.webp",
      hostName: "Harmony Productions",
    },
    {
      imageUrl: "/img/events/2.webp",
      date: "Dec 28",
      eventName: "Fitness Expo: Health & Wellness",
      address: "Fitness Center, Main Street, Miami, USA",
      phone: "98765498465",
      hostImage: "/img/dashboard/dashbordleft.webp",
      hostName: "FitLife Enterprises",
    },
  ];
  return (
    <div>
      {/* Banner Section */}
      <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] w-full">
        <img
          src="/img/events/event-banner.webp"
          alt="Event Banner"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute z-40 inset-0 flex justify-center items-center px-4 text-center">
          <div className="space-y-3 max-w-2xl">
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white">
              Events
            </h1>
            <p className="text-base md:text-lg text-gray-200">
              Here post your events, seminar, webinar, festivals and more
            </p>
            <input
              type="text"
              placeholder="Search event in your city"
              className="w-full py-3 px-6 rounded-full md:w-[80%] lg:px-10 text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Event Cards */}
      <div className="px-5 md:px-8 xl:px-32 py-10 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventData.map((event, index) => (
            <Link href="/events-inner" key={index} className="block">
              <div className="bg-white shadow-xl hover:shadow-2xl transition rounded-xl overflow-hidden">
                <div className="relative h-[200px] md:h-[220px]">
                  <img
                    src={event.imageUrl}
                    alt={event.eventName}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-br-lg">
                    {event.date}
                  </span>
                </div>
                <div className="p-4 space-y-3">
                  <h5 className="text-lg md:text-xl font-semibold text-gray-800">
                    {event.eventName}
                  </h5>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <FaLocationPin className="text-xs mt-0.5" />
                    {event.address}
                  </p>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <FaPhone className="text-xs mt-0.5" />
                    {event.phone}
                  </p>
                  <hr className="my-2" />
                  <div className="flex items-center gap-3">
                    <img
                      src={event.hostImage}
                      alt={event.hostName}
                      className="w-10 h-10 object-cover rounded-full"
                    />
                    <div>
                      <p className="text-xs text-red-500">Hosted By</p>
                      <p className="text-sm font-medium">{event.hostName}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
