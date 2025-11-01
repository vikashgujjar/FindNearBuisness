import { list } from 'postcss'
import React from 'react'
import Link from 'next/link';

export default function WeddingBeautySpa({loc}) {
    const getLocationHref = () => {
        const location = loc?.county || (loc?.Name === "NA" ? loc?.State : loc?.Name);
        return `${location?.replace(/\s+/g, "") || 'default-location'}/realestate`;
    };
    
    const data=[
        {
            heading:"Wedding Requisites",
            list:[
                {   
                    label:"Banquet Halls",
                    src:"/img/WeddingBeautySpa/1.webp"
                },
                {   
                    label:"Bridal Requisite",
                    src:"/img/WeddingBeautySpa/2.webp"
                },
                {   
                    label:"Caterers",
                    src:"/img/WeddingBeautySpa/3.webp"
                },
            ]
        },
        {
            heading:"Beauty & Spa",
            list:[
                {   
                    label:"Beauty Parlours",
                    src:"/img/WeddingBeautySpa/4.avif"
                },
                {   
                    label:"Spa & Massages",
                    src:"/img/WeddingBeautySpa/5.webp"
                },
                {   
                    label:"Salons",
                    src:"/img/WeddingBeautySpa/6.avif"
                },
            ]
        },
        {
            heading:"Repairs & Services",
            list:[
                {   
                    label:"AC Service",
                    src:"/img/WeddingBeautySpa/7.avif"
                },
                {   
                    label:"Car Service",
                    src:"/img/WeddingBeautySpa/8.webp"
                },
                {   
                    label:"Bike Service",
                    src:"/img/WeddingBeautySpa/9.webp"
                },
            ]
        },
        {
            heading:"Daily Needs",
            list:[
                {   
                    label:"movies",
                    src:"/img/WeddingBeautySpa/10.webp"
                },
                {   
                    label:"groceery",
                    src:"/img/WeddingBeautySpa/11.avif"
                },
                {   
                    label:"electricain",
                    src:"/img/WeddingBeautySpa/12.webp"
                },
            ]
        },
    ]
  return (
    <div className='px-5 md:px-12 xl:px-32 py-5 md:py-10 lg:py-12 grid lg:gap-x-5 lg:gap-y-5 grid-cols-1 gap-y-5 xl:grid-cols-2'>

            {data.map((elm,indx)=>(
                <div key={indx} className='border p-4 rounded-2xl  shadow-2xl'>
            <h5 className='font-semibold text-xl lg:text-xl text-center md:text-start'>{elm.heading}</h5>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5 lg:gap-x-8 mt-4 lg:mt-4'>
                   {elm.list.map((elm,index)=>(
                        <Link href={getLocationHref()} key={index} className='flex flex-col items-center gap-y-4'>
                            <img src={elm.src} alt={elm.label} />
                            <p className='text-gray-700 font-serif text-base font-semibold'>{elm.label}</p>
                        </Link>
                   ))} 
            </div>
            <div>

            </div>
        </div>
            ))}
       
    </div>
  )
}
