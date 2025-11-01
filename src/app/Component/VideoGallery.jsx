
import Link from 'next/link'
import React from 'react'

export default function VideoGallery({setActiveTab}) {
  return (
    <div className='h-full'>
    <div className=" mx-auto bg-white rounded-md shadow-lg">
   <div className="lg:w-[90%]   mx-auto h-2 bg-gradient-to-br from-[#717e9d] to-[#7fccbb] mb-6 rounded" />

   <div className="bg-teal-400 rounded-md text-white text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
     Step 4
   </div>

   <div className="space-y-6 px-6 md:px-8 lg:px-12 py-8">
     

     <div className="space-y-6">
    <div>
    <h5 className="text-lg md:text-2xl text-center font-bold text-gray-800">
     Video Gallery
     </h5>
     <div className="mt-4">
      <textarea
        id="listing_video"
        name="listing_video[]"
        className="w-full p-3 border rounded-md focus:ring focus:ring-blue-200"
        placeholder="Paste Your YouTube iframe Code here"
        rows="2"
        cols="60"
      ></textarea>
    </div>
    </div>
    <div>
    <h5 className="text-lg md:text-2xl text-center font-bold text-gray-800">
    Map and 360 view
    </h5>
     <div className="mt-4">
      <textarea
        id="listing_video"
        name="listing_video[]"
        className="w-full p-3 border rounded-md focus:ring focus:ring-blue-200"
        placeholder="Shop location"
        rows="2"
        cols="60"
      ></textarea>
    </div>
     <div className="mt-4">
      <textarea
        id="listing_video"
        name="listing_video[]"
        className="w-full p-3 border rounded-md focus:ring focus:ring-blue-200"
        placeholder="360 View"
        rows="2"
        cols="60"
      ></textarea>
    </div>
    </div>

    <div>
    <h5 className="text-lg md:text-2xl text-center font-bold text-gray-800">
    Photo gallery
    </h5>
     <div className="mt-4 flex items-center">
     <input type="file"  />
     <input type="file"  />
    </div>
    </div>

<div className="flex text-white text-center gap-x-4">
<button onClick={()=>setActiveTab(3)} className="w-full px-3 py-2 rounded-full bg-blue-400" >Previous</button>
<button onClick={()=>setActiveTab(5)} className="w-full px-3 py-2 rounded-full bg-blue-400" >Next</button>
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
