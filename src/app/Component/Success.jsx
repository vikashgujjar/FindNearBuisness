import React from 'react'

export default function Success() {
  return (
    <div className='h-full'>
    <div className=" mx-auto bg-white rounded-md shadow-lg">
   <div className="lg:w-full mx-auto h-2 bg-gradient-to-br from-[#717e9d] to-[#7fccbb] mb-6 rounded" />

   <div className="bg-teal-400 rounded-md text-white text-xs font-medium tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
     Step 6
   </div>

   <div className="space-y-6 px-6 md:px-8 lg:px-12 py-8">
     <h5 className="text-lg md:text-2xl text-center font-bold text-gray-800">
     Success
     </h5>

     <div className="space-y-6">
    

<div className="flex text-white text-center gap-x-4">
<a className="w-full px-3 py-2 rounded-full bg-blue-400" href="">Previous</a>
<a className="w-full px-3 py-2 rounded-full bg-blue-400" href="">Next</a>
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
