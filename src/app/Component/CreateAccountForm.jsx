import React from "react";
import Link from "next/link";

export default function CreateAccountForm() {
  return (
    <div>
      <form className="space-y-4">
        {/* Name Field */}
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-md border border-gray-300 font-medium text-gray-800 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4c7af1] text-sm sm:text-base"
          />
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            placeholder="Email ID*"
            className="w-full px-4 py-3 rounded-md border border-gray-300 font-medium text-gray-800 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4c7af1] text-sm sm:text-base"
          />
        </div>

        {/* Password Field */}
        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border border-gray-300 font-medium text-gray-800 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4c7af1] text-sm sm:text-base"
          />
        </div>

        {/* Phone Field */}
        <div>
          <input
            type="tel"
            placeholder="Phone"
            className="w-full px-4 py-3 rounded-md border border-gray-300 font-medium text-gray-800 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#4c7af1] text-sm sm:text-base"
          />
        </div>

        {/* User Type Field */}
        <div className="relative w-full">
          <select
            className="w-full px-4 py-3 pr-12 rounded-md border border-gray-300 font-medium text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#4c7af1] text-sm sm:text-base"
            defaultValue=""
          >
            <option value="" disabled>
              User Type
            </option>
            <option value="General user">General User</option>
            <option value="Service Provider">Service Provider</option>
          </select>
          <Link
            href="/user-type"
            className="absolute right-3 top-3 text-blue-500 text-xs font-semibold hover:underline"
          >
            User Option
          </Link>
        </div>

        {/* Submit Button */}
        <div className="text-center pt-2">
          <button
            type="submit"
            className="w-full bg-gradient-to-br from-[#51C0FF] to-[#4c7af1] text-white font-semibold py-3 px-6 rounded-full text-sm sm:text-base hover:opacity-90 transition"
          >
            Register Now
          </button>
        </div>
      </form>
    </div>
  );
}
