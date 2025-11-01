'use client'
import React, { useState } from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import PopUpForm from './TalkPop';
import HaveAnAccount from './HaveAnAccount';
import Link from 'next/link';

export default function AdvertiseNav() {
    const menuItems = [
        { title: 'Success Stories', href:"#Success" },
        { title: 'Benefits', href:"#Benefits"  },
        { title: 'Plans',href:"#Plans" },
        { title: 'Features', href:"#Features" },
        { title: 'FAQs' ,href:"#FAQs"}
    ];

    const [mobileBar, setMobileBar] = useState(false);

    const [talkPop,setTalkPop] = useState(false)

    const [haveAccountCheck,setHaveAccountCheck] = useState(false)
    
    const [losginPop,setLoginPop] = useState(false)

    return (
      <header className='bg-white shadow-md px-5 md:px-12 xl:px-32 sticky z-50 w-full top-0'>
          <nav className='container mx-auto    py-4 flex justify-between items-center relative  '>
            <div className='flex items-center gap-6'>
                    <Link href="/">
                <img 
                    src="/img/logo/logo.webp" 
                  
                    alt="img" 
                    className='h-auto w-[120px] lg:w-[180px]' 
                />
                </Link>

                <ul className='hidden absolute lg:left-[50%] xl:left-[60%] top-[50%] lg:-translate-x-[50%] xl:-translate-x-[90%] -translate-y-[50%] lg:flex xl:gap-x-4 text-[15px]  font-medium'>
                    {menuItems.map((item, index) => (
                        <li key={index} className='hover:bg-gray-100 px-2 py-2 rounded-md transition duration-300'>
                           <Link href={item.href}>{item.title}</Link> 
                        </li>
                    ))}
                </ul>
            </div>

            <div className='flex gap-5 items-center'>
                <button onClick={()=>setTalkPop(!talkPop)} className='flex lg:hidden xl:flex items-center gap-2 bg-blue-600 px-5 py-2 rounded-full text-white font-semibold text-md shadow-md transition duration-300 hover:bg-blue-700'>
                    <FaPhoneVolume />
                    <span>Talk to Us</span>
                </button>

                <button onClick={() => setMobileBar(!mobileBar)} className='lg:hidden text-2xl'>
                    {mobileBar ? <IoMdClose /> : <IoMdMenu />}
                </button>

                <div className='hidden lg:flex items-center gap-3'>
                    <button onClick={()=>setHaveAccountCheck(true)} className='font-medium text-sm'>Have an Account?</button>
                    <button onClick={()=>setLoginPop(true)} className='text-blue-600 font-semibold hover:underline'>Login</button>
                </div>
            </div>

            {mobileBar && (
                <ul className='absolute top-full left-0 w-full bg-white shadow-lg flex flex-col gap-4 py-5 px-6 text-[15px] font-medium lg:hidden z-50'>
                    {menuItems.map((item, index) => (
                        <li key={index} className='hover:bg-gray-100 px-4 py-2 rounded-md transition duration-300'>
                            {item.title}
                        </li>
                    ))}
                    <button onClick={()=>setHaveAccountCheck(true)} className='w-fit lg:hidden xl:flex items-center gap-2 bg-blue-600 px-5 py-2 rounded-full text-white font-semibold text-md shadow-md transition duration-300 hover:bg-blue-700'>Have an Account?</button>
                    <button onClick={()=>setLoginPop(true)} className='w-fit lg:hidden xl:flex items-center gap-2 bg-blue-600 px-5 py-2 rounded-full text-white font-semibold text-md shadow-md transition duration-300 hover:bg-blue-700'>Login</button>
                </ul>
            )}
        </nav>
        

            {talkPop && <PopUpForm setTalkPop={setTalkPop}/>}
            {haveAccountCheck && <HaveAnAccount setHaveAccountCheck={setHaveAccountCheck} />}
            
            {losginPop && <HaveAnAccount setHaveAccountCheck={setLoginPop} />}

      </header>
    );
}
