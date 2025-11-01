import React from 'react';

export default function StillQuestion() {
  return (
    <div className="bg-[#CEE9FF] px-4 sm:px-6 md:px-12 xl:px-32 py-8 md:py-14 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
      
      {/* TextArea Section */}
      <div className="w-full lg:w-1/2">
        <h5 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-4 text-center lg:text-left">
          Still Having Questions?
        </h5>

        <div className="relative">
          <textarea
            className="w-full h-40 sm:h-48 md:h-52 resize-none p-4 pr-24 rounded-xl shadow-sm text-sm md:text-base placeholder:text-gray-500"
            placeholder="Write your query here and we’ll get back to you within 2 working days..."
          />

          <button
            className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-1.5 sm:px-5 sm:py-2 text-sm sm:text-base transition-all duration-200 shadow-md"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/img/Advertise/3.svg"
          alt="still-question"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
