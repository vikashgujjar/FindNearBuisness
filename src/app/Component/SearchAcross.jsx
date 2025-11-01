"use client";
import React, { useState, useEffect } from "react";

export default function SearchAcross() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSwapped, setIsSwapped] = useState(false);
  const [value, setValue] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [index, setIndex] = useState(0);

  const list = ["Products & Services", "Business Listings"];

  // Swap placeholder text every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwapped((prevState) => !prevState);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Typing and deleting effect
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < list[index].length) {
        // Typing
        setCharIndex((prev) => prev + 1);
        setValue(list[index].slice(0, charIndex + 1));
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setCharIndex((prev) => prev - 1);
        setValue(list[index].slice(0, charIndex - 1));
      } else if (!isDeleting && charIndex === list[index].length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        // Move to the next word
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % list.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, list]);

  return (
    <div className="lg:hidden px-5 md:px-8 xl:px-32 py-3 md:py-5 space-y-3">
      <div className="flex flex-wrap font-bold text-2xl md:text-3xl items-center">
        <h3>Search across&nbsp;</h3>
        <p className="text-xl md:text-2xl font-bold text-[#0355ffe6]">
          {value}
        </p>
      </div>
      <form className="relative flex md:hidden lg:flex items-center">
        <input
          type="text"
          placeholder={`${
            isSwapped ? "3.3 Crore+' Products & Services" : "4 Crore+' Business"
          }`}
          className="py-2 pl-2 pr-4 rounded-md border border-black text-black bg-white focus:outline-none w-full transition duration-300 ease-in-out hover:ring-2 hover:ring-blue-500"
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
  );
}
