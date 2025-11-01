"use client";

import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import LocationModal from "./LoactionModal";
function PinLocation() {
  const list = [
    "4 Crore+ Product & Service",
    "4 Crore Service",
    "Best Deals Available",
    "Exclusive Offers for You",
    "Quality You Can Trust",
    "Affordable Prices Guaranteed",
    "Your Satisfaction, Our Priority",
    "Top-Rated Services",
    "Discover the Best Products",
    "Trusted by Millions",
  ];

  const [location, setLocation] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [error, setError] = useState("");
  const [pin, setPin] = useState("");

  // Toggle location modal
  const togglePopup = () => setIsPopupOpen(!isPopupOpen);
  // Set location from localStorage on component mount
  useEffect(() => {
    const locData = localStorage.getItem("location");
    setLocation(locData ? JSON.parse(locData) : null);
  }, []);

  // Handle PIN code submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pin}`
      );

      const data = await response.json();

      console.log(pin);
      if (
        data &&
        data.length > 0 &&
        data[0].PostOffice &&
        data[0].PostOffice.length > 0
      ) {
        const postOfficeData = data[0].PostOffice[0];
        setPostcode(postOfficeData.Pincode);
        setLocation(postOfficeData);
        localStorage.setItem("location", JSON.stringify(postOfficeData));
        setIsPopupOpen(false);
        setPin("");
        window.location.reload(); // Reload page after successful location update
      } else {
        setError("No city found for the given PIN code");
      }
    } catch (error) {
      setError("Failed to fetch city details. Please try again.");
    }
  };

  // Detect user's current location via Geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const data = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const address = data.data.address;
            localStorage.setItem("location", JSON.stringify(address));
            setLocation(address);
          } catch (error) {
            console.error("Error fetching location:", error);
          }
        },
        (error) => console.error("Error getting location:", error)
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  // form search

  const [searchTerm, setSearchTerm] = useState("");
  const [isSwapped, setIsSwapped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwapped((prevState) => !prevState);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="">
        <div className="relative flex justify-between lg:hidden items-center bg-[#405ce2] px-5 md:px-8 py-3 text-white">
          <div className="flex items-center ">
            <FaLocationDot />

            <span
              className="text-sm font-medium cursor-pointer pl-2  text-white transition duration-200"
              onClick={togglePopup}
            >
              {location?.county || location?.Name === "NA"
                ? location?.State
                : location?.Name}{" "}
              {location?.postcode || location?.Pincode}
              <p className="text-xs md:text-sm ">Update location ⌵</p>
            </span>
          </div>
          <div>
            <form className="relative hidden md:flex lg:hidden items-center">
              <input
                type="text"
                placeholder={`${
                  isSwapped
                    ? "3.3 Crore+' Products & Services"
                    : "4 Crore+' Business"
                }`}
                className="py-2 pl-2 pr-4 rounded-md border border-black text-black bg-white focus:outline-none w-full transition duration-300 ease-in-out hover:ring-2 hover:ring-blue-500 min-w-[350px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <img
                src="/img/navbar/search.webp"
                alt="search"
                className="w-5 h-5 absolute right-3 text-gray-500"
              />
            </form>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <LocationModal
          pin={pin}
          setPin={setPin}
          handleSubmit={handleSubmit}
          error={error}
          togglePopup={togglePopup}
        />
      )}
    </>
  );
}

export default PinLocation;
