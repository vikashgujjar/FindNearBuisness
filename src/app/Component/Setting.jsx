"use client";
import React, { useState } from "react";
import DashLeft from "./DashLeft";
import DashRight from "./DashRight";
import { usePathname } from "next/navigation";
import CommonDashLayout from "./CommonDashLayout";

function Setting() {
  const [accountStatus, setAccountStatus] = useState(0);
  const [reviewStatus, setReviewStatus] = useState(0);
  const [shareStatus, setShareStatus] = useState(0);
  const [profileStatus, setProfileStatus] = useState(0);

  const settings = [
    {
      label: "Account status",
      name: "setting_user_status",
      value: accountStatus,
      options: [
        { label: "Active", value: 0 },
        { label: "In-Active", value: 1 },
        { label: "Close account", value: 2 },
      ],
      onChange: (e) => setAccountStatus(e.target.value),
    },
    {
      label: "Listing reviews",
      name: "setting_review",
      value: reviewStatus,
      options: [
        { label: "Active", value: 0 },
        { label: "In-Active", value: 1 },
      ],
      onChange: (e) => setReviewStatus(e.target.value),
    },
    {
      label: "Listing share",
      name: "setting_share",
      value: shareStatus,
      options: [
        { label: "Active", value: 0 },
        { label: "In-Active", value: 1 },
      ],
      onChange: (e) => setShareStatus(e.target.value),
    },
    {
      label: "Show my profile on listing page",
      name: "setting_profile_show",
      value: profileStatus,
      options: [
        { label: "Active", value: 0 },
        { label: "In-Active", value: 1 },
      ],
      onChange: (e) => setProfileStatus(e.target.value),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  const pathName = usePathname();

  return (
    <CommonDashLayout>
      <div>
        <div className="w-full h-2 bg-gradient-to-br from-[#717e9d] to-[#7fccbb] mb-6 rounded" />

        {/* Title Section */}
        <div className="bg-teal-400 rounded-md text-white text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
          setting
        </div>
        <div className="p-6 bg-white rounded-lg">
          <h2 className="text-base font-semibold mb-6">Profile Setting</h2>
          <form
            id="setting_update"
            name="setting_update"
            action=""
            method="post"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div className="text-red-600 mb-4" style={{ display: "none" }}>
              <p className="delete-message-box">
                Close Account will Delete your account permanently!! Think
                before submitting!!
              </p>
            </div>
            <div className="w-auto overflow-x-auto  ">
              <table className="w-full table-auto border-collapse ">
                <tbody>
                  {settings.map(({ label, name, value, options, onChange }) => (
                    <tr key={name}>
                      <td className="px-4 py-2 sm:px-2 font-medium">{label}</td>
                      <td className="px-4 py-2 sm:px-2">:</td>
                      <td className="px-4 py-2 sm:px-2">
                        <select
                          name={name}
                          value={value}
                          onChange={onChange}
                          className="w-full p-2 border border-[#e7e7e7] bg-[#f6f6f6] rounded text-[#495057]"
                        >
                          {options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="3" className="px-4 py-1">
                      <button
                        type="submit"
                        name="setting_update_submit"
                        className="bg-[#51c0ff] text-white py-2 px-4 rounded-3xl hover:bg-blue-600 w-full sm:w-auto"
                      >
                        Save changes
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    </CommonDashLayout>
  );
}

export default Setting;
