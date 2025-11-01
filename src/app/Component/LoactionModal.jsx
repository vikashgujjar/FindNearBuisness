"use client"
import React, { useState } from "react";

function LocationModal({ pin, setPin, handleSubmit, error }) {
  const [localPin, setLocalPin] = useState(pin);
  const [isOpen, setIsOpen] = useState(true); // State to control the modal visibility

  // Function to toggle modal visibility
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) return null; // If modal is not open, don't render it

  return (
    <div className="fixed   inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-[9999999]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm relative">
        {/* Close Icon (X) */}
        <button
          type="button"
          onClick={togglePopup} // Close the modal by toggling the state
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Enter PIN code"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Submit
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="button"
            onClick={togglePopup} // Close the modal by toggling the state
            className="w-full p-3 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default LocationModal;
