"use client"

import React, { useEffect, useState } from 'react'
import Herosection from './Component/Herosection'
import CardSection from './Component/Cardsection'
import Attractions from './Component/Attraction'
import Choose from './Component/Choose'
import Citycategoire from './Component/Citycategoire'
import ServiceList from './Component/Servicelist'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import SearchAcross from './Component/SearchAcross'
import ServiceBanner from './Component/ServiceBanner'
import Testmonial from './Component/Testmonial'
import PinLocation from './Component/PinLocation'
import OneStop from './Component/OneStop'
import PopularCategories from './Component/PopularCategories'
import WeddingBeautySpa from './Component/WeddingBeautySpa'
const page = () => {
  const [loc, setLoc] = useState();

  useEffect(() => {
    const loc = localStorage.getItem("location");
    console.log(JSON.parse(loc));
    //  setLoc = JSON.parse(loc);
    setLoc(JSON.parse(loc));
    console.log(JSON.parse(loc));
  }, []);
  return (
    <>  
    <PinLocation/>

  
    
    <SearchAcross/>
      <div className='md:hidden'><CardSection loc={loc}/></div>
      <Herosection loc={loc}/>  
     <div className='hidden md:block'> <CardSection loc={loc} /></div>
      <Attractions loc={loc}/>
      <ServiceList loc={loc}/>
      
      <ServiceBanner loc={loc}/>
      <Contact/>
      <Citycategoire loc={loc}/>
     
      <Choose />
      <Testmonial/>
      <WeddingBeautySpa loc={loc}/>
      
      <OneStop/>
      <PopularCategories/>

    
   
     
     
    </>
  )
}

export default page








