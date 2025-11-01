import Link from 'next/link';
import React from 'react'

export default function FixedFooterLinks() {
    const navLinks = [
        {
          href: "/",
          imgSrc: "/img/FixedFooterLink/footerPhone1.webp",
          alt: "Home",
          label: "Home",
        },
        {
          href: "/service",
          imgSrc: "/img/FixedFooterLink/footerPhone2.webp",
          alt: "Services",
          label: "Services",
        },
        {
          href: "/user-login/sign",
          imgSrc: "/img/FixedFooterLink/leads.webp",
          alt: "Events",
          label: "Leads",
        },
        {
          href: "/products",
          imgSrc: "/img/FixedFooterLink/footerPhone4.webp",
          alt: "Products",
          label: "Products",
        },
        {
          href: "/Sonipat/blogs",
          imgSrc: "/img/FixedFooterLink/footerPhone5.webp",
          alt: "Blogs",
          label: "Blogs",
        },
      ];
  return (
    <div className='px-5 py-1  flex  justify-center fixed w-full bottom-0 z-40 md:hidden bg-[#191919]'>
        <ul className='flex items-center w-full justify-between '>
        {navLinks.map((elm,ind)=>(
            <li key={ind}>
                <Link href={elm.href} className='flex flex-col justify-center items-center'>
                <img src={elm.imgSrc} alt={elm.label} className='w-7 h-7' />
                    <p className='text-white text-base font-semibold'>{elm.label}</p>
                </Link>
            </li>
        ))}
        </ul>
        
    </div>
  )
}
