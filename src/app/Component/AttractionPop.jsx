// AttractionPop.jsx
"use client";
import Link from "next/link";


const AttractionPop = ({
  filteredAttractions,
  onClose,
  searchTerm,
  setSearchTerm,
  getLocationHref,
    handlePopupOpen,

}) => {
  return (
    <div className="fixed top-0 right-0 h-full w-full max-w-3xl bg-white z-[999] shadow-lg p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">All Categories</h2>
        <button
          onClick={onClose}
          className="text-gray-600 text-2xl font-bold hover:text-red-500"
        >
          &times;
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009dff]"
        />
      </div>

    <div className="grid grid-cols-2 gap-4">
  {filteredAttractions.length > 0 ? (
    filteredAttractions.map((item) =>
      item.subCategory ? (
        <div
          key={item.id}
          onClick={() => handlePopupOpen(item.subCategory)}
          className="flex flex-col md:flex-row items-center gap-4 bg-slate-100 p-3 rounded-lg hover:bg-slate-200 transition cursor-pointer"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-10 h-10 rounded-md object-cover"
          />
          <div>
            <h4 className="font-semibold text-center md:text-start text-sm">
              {item.name}
            </h4>
            <span className="text-xs hidden md:block text-gray-500">
              1 Listings
            </span>
          </div>
        </div>
      ) : (
        <Link
          href={getLocationHref(item.name)}
          key={item.id}
          className="flex flex-col md:flex-row items-center gap-4 bg-slate-100 p-3 rounded-lg hover:bg-slate-200 transition"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-10 h-10 rounded-md object-cover"
          />
          <div>
            <h4 className="font-semibold text-center md:text-start text-sm">
              {item.name}
            </h4>
            <span className="text-xs hidden md:block text-gray-500">
              1 Listings
            </span>
          </div>
        </Link>
      )
    )
  ) : (
    <p className="text-gray-500 col-span-2 text-center">
      No categories found.
    </p>
  )}
</div>

    </div>
  );
};

export default AttractionPop;
