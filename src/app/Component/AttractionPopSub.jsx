"use client";
import React, { useState, useEffect, useRef } from "react";

export default function AttractionPopSub({ categories = [], onClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const popupRef = useRef();

  const filtered = categories.filter((cat) =>
    cat.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 z-[9999] w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div
        ref={popupRef}
        className="w-full max-w-2xl bg-white shadow-xl p-6 rounded-md overflow-y-auto max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Search All Category</h2>
          <button
            className="text-gray-500 text-2xl font-bold hover:text-red-500"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Filtered Categories */}
        <ul className="space-y-3">
          {filtered.length > 0 ? (
            filtered.map((item, index) => (
              <li
                key={index}
                className="p-3 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer transition"
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.title}
              </li>
            ))
          ) : (
            <li className="text-gray-500 text-center">No categories found.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
