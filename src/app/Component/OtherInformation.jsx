import Link from 'next/link'
import React from 'react'

export default function OtherInformation({setActiveTab}) {
  return (
    <div className='h-full'>
    <div className="max-w-lg mx-auto bg-white rounded-md shadow-lg">
   <div className="lg:w-[90%]   mx-auto h-2 bg-gradient-to-br from-[#717e9d] to-[#7fccbb] mb-6 rounded" />

   <div className="bg-teal-400 rounded-md text-white text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
     Step 5
   </div>

   <div className="space-y-6 px-6 md:px-8 lg:px-12 py-8">
     
    <h3 className='text-center font-bold text-2xl '>Other Information</h3>

     <div className="space-y-6">
     <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Experience"
                  disabled
                  className="w-full px-4 py-2 bg-gray-100 rounded-md border border-gray-300 text-gray-500 cursor-not-allowed"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="20 Years"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
            </div>

<div className="flex text-white text-center gap-x-4">
<button onClick={()=>setActiveTab(4)} className="w-full px-3 py-2 rounded-full bg-blue-400" href="/">Previous</button>
<button onClick={()=>setActiveTab(6)} className="w-full px-3 py-2 rounded-full bg-blue-400" href="/">Finish</button>
</div>

     </div>
   </div>
 </div>
</div>
  )
}
