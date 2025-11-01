import React from 'react'

export default function ForgatAccountForm() {
  return (
    <div>
          <form className="space-y-4">
             
              <div>
                <input
                  type="email"
                  placeholder="Enter Email*"
                  className="w-full px-4 py-2 border placeholder:text-gray-500 font-semibold border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c7af1]"
                />
              </div>
             
              <div className="text-center mt-6">
                <button className="w-full bg-gradient-to-br from-[#51C0FF] to-[#4c7af1] text-white font-semibold py-2 px-4 rounded-full hover:opacity-90 transition">
                 Submit
                </button>
              </div>
             
            </form>
    </div>
  )
}
