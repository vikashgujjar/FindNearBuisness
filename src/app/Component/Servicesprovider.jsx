import React from "react";
import Link from "next/link";

export default function Servicesprovider({setActiveTab}) {
  return (
    <div className='h-full'>
             <div className=" mx-auto bg-white rounded-md shadow-lg">
            <div className="lg:w-full mx-auto h-2 bg-gradient-to-br from-[#717e9d] to-[#7fccbb] mb-6 rounded" />

            <div className="bg-teal-400 rounded-md text-white text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
              Step 2
            </div>

            <div className="space-y-6 px-6 md:px-8 lg:px-12 py-8">
              <h5 className="text-lg md:text-2xl text-center font-bold text-gray-800">
              Services provide
              </h5>

              <div className="space-y-6">
              <ul>
      {[0, 1].map((index) => (
        <li key={index} className="mb-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 mb-4 md:mb-0 bg-[#FFF8F5] p-2">
              <div className="form-group ">
                <label className="block text-sm font-medium text-gray-700">Service name:</label>
                <input
                  type="text"
                  name={`service_id[${index}]`}
                  className="form-control w-full p-2 border rounded-md"
                  placeholder="Ex: Plumbile"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-[#FFF8F5] p-2">
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700">Choose profile image</label>
                <input
                  type="file"
                  name={`service_image[${index}]`}
                  className="form-control w-full p-2 border rounded-md"
                />
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>

    <div className="flex text-white text-center gap-x-4">
        <button onClick={()=>setActiveTab(1)} className="w-full px-3 py-2 rounded-full bg-blue-400" >Previous</button>
        <button onClick={()=>setActiveTab(3)} className="w-full px-3 py-2 rounded-full bg-blue-400" >Next</button>
    </div>
    <hr />
    <div className='text-center text-lg uppercase'>
                <Link  href="/realestate">Skip This &gt;&gt;</Link>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}
