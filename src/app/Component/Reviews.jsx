"use client";
import React, { useState } from "react";
import DashLeft from "./DashLeft";
import DashRight from "./DashRight";
import CommonDashLayout from "./CommonDashLayout";
const receivedReviews = [
  {
    id: 1,
    listingName: "Ocha Thai Cuisine",
    user: "Loki",
    email: "thedirectoryfinder@gmail.com",
    phone: "87654567",
    rating: 5,
    message: "Perfect service",
  },
  {
    id: 2,
    listingName: "Titan Wedding Hall",
    user: "Loki",
    email: "thedirectoryfinder@gmail.com",
    phone: "87654567",
    rating: 5,
    message:
      "Best service provider in wedding hall field... I personally recommend Titan Wedding Hall.",
  },
  {
    id: 3,
    listingName: "Smith Luxury Villas",
    user: "Leland K Cotter",
    email: "cotter@business.com",
    phone: "9255886632",
    rating: 3,
    message: "Good experience overall.",
  },
];

const sentReviews = [
  {
    id: 4,
    listing: "Rolexo Villas in California",
    user: "Rn53 Themes",
    email: "info@futureittouch.com",
    phone: "5522114422",
    city: "Los Angeles",
    rating: 5,
    message:
      "Rolexo Villas is well-known as a premier builder of villas and apartments...",
  },
  {
    id: 5,
    listing: "The Royal Spa Center for Women",
    user: "Rn53 Themes",
    email: "info@futureittouch.com",
    phone: "5522114422",
    city: "Sydney",
    rating: 4,
    message:
      "Perfect facial.. I strongly recommend. Writing great reviews may help others discover the places that are just apt for them...",
  },
];

const Ratings = ({ count }) => {
  return (
    <div className="flex space-x-1 text-yellow-500">
      {[...Array(count)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M12 17l-5.879 3.59L7.72 13.89l-5.23-4.48 6.866-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L12 17z" />
        </svg>
      ))}
    </div>
  );
};

function Reviews() {
  const [activeTab, setActiveTab] = useState("");

  const [deleteConfirmation, setDeleteConfirmation] = useState({
    isOpen: false,
    reviewId: null,
  });

  const handleDelete = (id) => {
    // Open confirmation dialog
    setDeleteConfirmation({
      isOpen: true,
      reviewId: id,
    });
  };

  const handleConfirmation = (confirm) => {
    if (confirm) {
      // Proceed with deletion
      const updatedReceivedReviews = reviewData.received.filter(
        (item) => item.id !== deleteConfirmation.reviewId
      );
      const updatedSentReviews = reviewData.sent.filter(
        (item) => item.id !== deleteConfirmation.reviewId
      );
      setReviewData({
        received: updatedReceivedReviews,
        sent: updatedSentReviews,
      });
    }
    // Close confirmation dialog
    setDeleteConfirmation({
      isOpen: false,
      reviewId: null,
    });
  };

  return (
    <>

      <CommonDashLayout>
          {deleteConfirmation.isOpen && (
          <div className="bg-black/50 h-full hidden  w-full fixed inset-0 z-[40] lg:flex justify-center items-center">
            <div className="confirmation-dialog bg-white py-10 px-5 rounded-md  ">
              <p className="text-lg  font-semibold lg:text-xl">
                Are you sure you want to delete this Review?
              </p>
              <div className="flex items-center justify-center gap-x-4 text-white mt-4">
                <button
                  className="px-5 rounded-sm py-2 bg-green-700 yes-btn"
                  onClick={() => handleConfirmation(true)}
                >
                  Yes
                </button>
                <button
                  className="px-5 rounded-sm py-2 bg-red-700 no-btn"
                  onClick={() => handleConfirmation(false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
          <div >
              <div className="w-full h-2 bg-gradient-to-r from-[#7FCCBB] to-[#588EE3] mb-6 rounded" />

              {/* Title Section */}
              <div className="bg-teal-400 rounded-md text-white text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
                Reviews
              </div>
              <div className="py-8 px-7 overflow-x-auto">
                <h2 className="font-semibold text-base mb-3">
                  All Listings - Review Details
                </h2>

                {/* Tabs Navigation */}
                <div className="flex border-b mb-3">
                  <button
                    className={`p-2 text-sm font-semibold ${
                      activeTab === "Received"
                        ? "border-b-2 border-blue-500 text-blue-500"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("Received")}
                  >
                    All Received Reviews
                  </button>
                  <button
                    className={`p-2 text-sm font-semibold ml-4 ${
                      activeTab === "Sent"
                        ? "border-b-2 border-blue-500 text-blue-500"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("Sent")}
                  >
                    All Sent Reviews
                  </button>
                </div>

                {/* Conditional Rendering for Different Tables */}
                {activeTab === "Received" ? (
                  <div className=" overflow-x-auto w-[310px]  md:w-auto ">
                    <table className=" md:min-w-full   bg-white border-b border-gray-300 mt-3">
                      <thead>
                        <tr className="text-xs md:text-nowrap">
                          <th className="p-3 text-left">No</th>
                          <th className="p-3 text-left">Listing Name</th>
                          <th className="p-3 text-left">User</th>
                          <th className="p-3 text-left">Email</th>
                          <th className="p-3 text-left">Phone</th>
                          <th className="p-3 text-left">Ratings</th>
                          <th className="p-3 text-left">Message</th>
                          <th className="p-3 text-left">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {receivedReviews.map((review, index) => (
                          <tr
                            key={review.id}
                            className="border-b hover:bg-gray-100 text-[13px] text-nowrap"
                          >
                            <td className="p-3">{index + 1}</td>
                            <td className="p-3">{review.listingName}</td>
                            <td className="p-3">{review.user}</td>
                            <td className="p-3">{review.email}</td>
                            <td className="p-3">{review.phone}</td>
                            <td className="p-3">
                              <Ratings count={review.rating} />
                            </td>
                            <td className="p-3">{review.message}</td>
                            <td className="p-3">
                              <a
                                href="/RajpuraTahsil/listing"
                                className="text-[11px] p-1 border border-gray-300"
                              >
                                Delete
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className=" overflow-x-auto w-[310px]  md:w-auto">
                    <table className="min-w-full bg-white border-b border-gray-300 mt-3">
                      <thead>
                        <tr className="text-xs md:text-nowrap">
                          <th className="p-3 text-left">No</th>
                          <th className="p-3 text-left">Listing Name</th>
                          <th className="p-3 text-left">User</th>
                          <th className="p-3 text-left">Email</th>
                          <th className="p-3 text-left">Phone</th>
                          <th className="p-3 text-left">City</th>
                          <th className="p-3 text-left">Ratings</th>
                          <th className="p-3 text-left">Message</th>
                          <th className="p-3 text-left">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sentReviews.map((review, index) => (
                          <tr
                            key={review.id}
                            className="border-b hover:bg-gray-100 text-[13px] text-nowrap"
                          >
                            <td className="p-3">{index + 1}</td>
                            <td className="p-3">{review.listing}</td>
                            <td className="p-3">{review.user}</td>
                            <td className="p-3">{review.email}</td>
                            <td className="p-3">{review.phone}</td>
                            <td className="p-3">{review.city}</td>
                            <td className="p-3">
                              <Ratings count={review.rating} />
                            </td>
                            <td className="p-3">{review.message}</td>
                            <td className="p-3">
                              <button
                                onClick={() => handleDelete(review.id)}
                                className="text-[11px] p-1 border border-gray-300"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
      </CommonDashLayout>


    </>
  );
}

export default Reviews;
