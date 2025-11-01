import React from 'react'

export default function CreateLogin() {
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted");


    localStorage.setItem("userName","manshu")
  
    window.location.href = '/dashboard';
  };
  
  return (
    <div>
        <form className="space-y-4">
             
             <div>
               <input
                 type="email"
                 placeholder="Enter email*"
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c7af1]"
               />
             </div>
             <div>
               <input
                 type="password"
                 placeholder="Enter Password"
                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4c7af1]"
               />
             </div>
             
            
             <div onClick={()=>handleLoginSubmit()} className="text-center mt-6">
               <button className="w-full bg-[#51C0FF] text-white font-semibold py-2 px-4 rounded-full hover:opacity-90 transition">
              Sign in
               </button>
             </div>
            
           </form>
    </div>
  )
}
