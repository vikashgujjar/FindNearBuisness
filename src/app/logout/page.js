"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
const page = () => {

    const router=useRouter()



      useEffect(()=>{
        router.push("/")
      },[])
  return (
    <>
      
    </>
  )
}

export default page 


    // localStorage.removeItem("userName");
    //   window.location.href = "/";