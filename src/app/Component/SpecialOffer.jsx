import React from 'react'
import Link from 'next/link'
export default function SpecialOffer({setActiveTab}) {
  return (
    <div className='h-full'>
    <div className=" mx-auto bg-white rounded-md shadow-lg">
   <div className="lg:w-full mx-auto h-2 bg-gradient-to-br from-[#717e9d] to-[#7fccbb] mb-6 rounded" />

   <div className="bg-teal-400 rounded-md text-white text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
     Step 3
   </div>

   <div className="space-y-6 px-6 md:px-8 lg:px-12 py-8">
     <h5 className="text-lg md:text-2xl text-center font-bold text-gray-800">
     Special offers
     </h5>

     <div className="space-y-6">
     <ul className='bg-[#FEFAF7] p-2'>
      <li className="mb-6 border-b pb-4">
        <div className="flex  gap-4">
          {/* Offer Name */}
          <div className="form-group">
              <input
                type="text"
                name="service_0_name"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
                placeholder="Offer name*"
              />
            </div>

          {/* Price */}
          <div className="form-group">
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
                placeholder="Price"
              />
            </div>
        </div>

        {/* Offer Details */}
        <div className="mt-4">
          <div className="form-group">
            <textarea
              name="service_0_detail"
              className="w-full  p-2 border rounded-md focus:ring focus:ring-blue-200"
              placeholder="Details about this offer"
              rows="5"

            ></textarea>
          </div>
        </div>

        {/* Offer Image Upload */}
        <div className="mt-4">
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Choose offer image</label>
            <input
              type="file"
              name="service_0_image"
              className="w-full p-2 bg-white border rounded-md focus:ring focus:ring-blue-200"
            />
          </div>
        </div>

        {/* View More Link */}
        <div className="mt-4">
          <div className="form-group">
            <input
              type="text"
              name="service_0_view_more"
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
              placeholder="View More Link"
            />
          </div>
        </div>
      </li>
    </ul>


<div className="flex text-white text-center gap-x-4">
<button onClick={()=>setActiveTab(2)} className="w-full px-3 py-2 rounded-full bg-blue-400" >Previous</button>
<button onClick={()=>setActiveTab(4)} className="w-full px-3 py-2 rounded-full bg-blue-400" >Next</button>
</div>
<hr />
<div className='text-center text-lg uppercase'>
       <Link  href="/realestate">Skip This &gt;&gt;</Link>
       </div>
     </div>
   </div>
 </div>
</div>
  )
}
