"use client";
import React, { useState } from "react";
import Link from "next/link";
import CommonDashLayout from "./CommonDashLayout";

function Profile({ isEdit=true, setIsEdit }) {
  const profileData = [
    { label: "Profile Expiry (Listing exp)", value: "8 June 2025" },
    { label: "Name", value: "Rn53 Themes" },
    { label: "Email Id", value: "info@futureittouch.com" },
    { label: "Profile Password", value: "*********" },
    { label: "Mobile Number", value: "5522114422" },
    { label: "Profile Picture", value: <input type="file" className="text-xs" /> },
    { label: "City", value: "Sydney" },
    { label: "Join Date", value: "26, Mar 2021" },
    { label: "Verified", value: "Yes" },
    { label: "Premium Service Provider", value: "Yes" },
    {
      label: "Profile Link",
      value: (
        <Link href="/RajpuraTahsil/profile" className="text-blue-500 hover:underline">
          profile.html
        </Link>
      ),
    },
    {
      label: "Facebook",
      value: (
        <a href="https://www.facebook.com/53themes" target="_blank" className="text-blue-500 hover:underline" rel="noreferrer">
          https://www.facebook.com/53themes
        </a>
      ),
    },
    {
      label: "Twitter",
      value: (
        <a href="https://twitter.com/53themes" target="_blank" className="text-blue-500 hover:underline" rel="noreferrer">
          https://twitter.com/53themes
        </a>
      ),
    },
    {
      label: "Youtube",
      value: (
        <a href="https://www.youtube.com/channel/UC3wN3O2GXTt7ZZniIoMZumg" target="_blank" className="text-blue-500 hover:underline" rel="noreferrer">
          https://www.youtube.com/channel/UC3wN3O2GXTt7ZZniIoMZumg
        </a>
      ),
    },
    {
      label: "Website",
      value: (
        <a href="https://www.rn53themes.net" target="_blank" className="text-blue-500 hover:underline" rel="noreferrer">
          www.rn53themes.net
        </a>
      ),
    },
  ];

  return (
    <CommonDashLayout>
      <div className="mx-auto bg-white rounded-lg px-4 sm:px-6 md:px-8 py-6">
        {/* Top bar gradient */}
        <div className="w-full h-2 bg-gradient-to-r from-[#7FCCBB] to-[#588EE3] mb-6 rounded" />

        {/* Title */}
        <div className="bg-teal-400 rounded-md text-white text-xs sm:text-sm font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit text-center">
          {isEdit ? "Edit User Profile" : "User Profile"}
        </div>

        {/* Profile Section */}
        <div className="mt-6">
          {/* Header + Buttons */}
          {!isEdit && (
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
              <h2 className="text-base sm:text-lg font-semibold">Profile Details</h2>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <Link
                  href="/payment"
                  className="bg-gradient-to-t from-[#697480] to-[#9ba3ab] text-white px-3 py-2 text-xs font-semibold rounded text-center"
                >
                  Upgrade
                </Link>
                <Link
                  href="/edit-profile"
                  className="bg-gradient-to-t from-[#697480] to-[#9ba3ab] text-white px-3 py-2 text-xs font-semibold rounded text-center"
                >
                  Edit Profile Page
                </Link>
              </div>
            </div>
          )}

          {/* Profile Info Table */}
          <div className="overflow-x-auto w-[300px] md:w-auto rounded-md border border-gray-200">
            <table className="min-w-[600px] w-full border-collapse text-sm sm:text-base">
              <tbody>
                {profileData.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-700">
                      {item.label}
                    </td>
                    <td className="p-3 text-xs sm:text-sm text-gray-600">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3 text-sm">
            {isEdit ? (
              <>
                <button className="bg-[#51c0ff] text-white px-4 py-2 rounded-3xl hover:bg-[#f18b54] w-full sm:w-auto">
                  Save Changes
                </button>
                <Link
                  href="/realestate"
                  className="bg-[#51c0ff] text-white px-4 py-2 rounded-3xl hover:bg-[#f18b54] w-full sm:w-auto text-center"
                >
                  Upgrade
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/edit-profile"
                  className="bg-[#51c0ff] text-white px-4 py-2 rounded-3xl hover:bg-[#f18b54] w-full sm:w-auto text-center"
                >
                  Edit Profile Page
                </Link>
                <Link
                  href="/payment"
                  className="bg-[#51c0ff] text-white px-4 py-2 rounded-3xl hover:bg-[#f18b54] w-full sm:w-auto text-center"
                >
                  Upgrade
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </CommonDashLayout>
  );
}

export default Profile;
