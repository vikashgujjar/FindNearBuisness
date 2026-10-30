"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "../ui/decor";

export default function PopularCategories() {
  const Accommodation = () => {
    const services = [
      "AC Lodging Services",
      "Beach Resorts",
      "Bungalows On Hire",
      "Cottages On Hire",
      "Dharamshalas",
      "Farm House",
      "Farm House On Hire",
      "Government Hostels",
      "Guest House",
      "Hostels",
      "Hostels For Men",
      "Hostels For Women",
      "Hostels For Working Men",
      "Hostels For Working Women",
      "Hotels",
      "Hotels (Rs 500 & Below)",
      "Lodging Services",
      "Resorts",
      "Dormitory Services",
      "Home Stay",
      "Hostel For Girl Students",
      "3 Star Hotels",
      "5 Star Hotels",
      "2 Star Hotels",
      "4 Star Hotels",
      "Villas",
      "Villas On Hire",
      "Rooms On Hire",
      "AC Dormitory Services",
      "Pet Friendly Resorts",
      "Hostel For Boy Students",
      "Village Resorts",
      "AC Guest House",
      "Paying Guest Accommodations For Women",
      "Water Park Resorts",
      "Hostel For Students",
      "Couple Friendly Hotels",
      "Paying Guest Accommodations for Student",
      "Government Hostels for Women",
      "AC Paying Guest Accommodations",
      "AC Paying Guest Accommodations For Men",
      "AC Paying Guest Accommodations for Women",
      "Paying Guest Accommodations For Men",
      "Paying Guest Accommodations For Girl Student",
      "Unisex Paying Guest Accommodations",
      "Single Occupancy Paying Guest Accommodations",
      "Mansions",
      "Couple Paying Guest Accommodations",
    ];

    const trendingSearches = [
      "Hotels",
      "Real Estate Agents",
      "Work From Home Jobs",
      "Internet Service Providers",
      "B Ed Colleges",
      "Air Ticketing Agents",
      "News Channels",
      "Education Consultants",
      "CBSE Tutorials",
      "Income Tax Consultants",
      "Electronic Goods Repair & Services",
      "Battery Operated Scooter Dealers-OLA",
      "Blood Test Home Visit",
      "Fire Extinguisher Dealers",
      "Android Application Developers",
      "Tnpsc Tutorials",
      "DTH TV Broadcast Service Providers-Sun Direct",
      "Transporters For Hyderabad",
      "Mobile Phone Simcard Dealers-Jio",
      "Tour Packages For Goa",
      "Kite Dealers",
      "Transporters For Gujarat",
      "Sex Education Centres",
      "Bitcoin Services",
      "News Agencies",
      "Microsoft Excel Advanced Training Institutes",
      "Ibps Bank Exam Tutorials",
      "Transporters For Chennai",
      "Tutorials For UGC Net Exam",
      "Online Tutorials",
      "Rbse Schools",
      "MCA Institutes",
      "Tutorials For Ctet",
      "3 Tesla MRI Scanning Centres",
      "Insurance Agents-Star Health",
      "Water Suppliers (More Than 5000 Litres)",
      "Mata Ki Chowki Organisers",
      "Event Organisers For Navratri",
      "Matrimonial Bureaus For Telugu",
      "Commercial Vehicle Dealers-Tata Motors",
      "Demat Account Services",
      "GST Return Filing Services",
      "Lawyers For Income Tax",
      "Internet Payment Gateway Solution Providers",
      "Wrist Watch Dealers-Rolex",
      "Housing Society Management Services",
      "Property Tax Consultants",
      "Tutorials For DSSSB",
      "ID Card Printer Dealers",
      "Dairy Product Retailers-Amul",
    ];

    const dealsAndOffers = [
      "Kotak Mahindra Banks",
      "INOX Cinemas",
      "Canara Banks",
      "Ratnakar Banks",
      "PVR Cinemas",
      "ICICI Banks",
      "HDFC Banks",
      "AU Small Finance Bank",
      "Bank Of Maharashtra",
      "Bank Of India",
      "Axis Banks",
      "IDFC First Banks",
      "Maharashtra Gramin Banks",
      "Catholic Syrian Banks",
      "Saraswat Co Operative Banks",
      "Punjab & Sind Banks",
      "State Bank Of India",
      "Union Bank Of India",
      "Punjab National Banks",
      "Bank Of Baroda",
      "Lifestyle Stores",
      "Behrouz Biryani",
      "Fastrack",
      "The Good Bowl",
      "Sony",
      "Yes Banks",
      "Croma",
      "Dell Exclusive Stores",
      "Beverly Hills Polo Club",
      "Joyalukkas Jewellery",
      "Kalyan Jewellers",
      "Flying Machine",
      "Lenovo Exclusive Store",
      "Reliance Digital",
      "Vijay Sales",
      "Duroflex",
      "Anytime Fitness",
      "Kromakay Salons",
      "Toni&Guy Salons",
      "Bakingo",
      "Barbeque Nation Restaurants",
      "McDonalds",
      "Sweet Truth Cake Shops",
      "ALDO Stores",
      "Helios",
      "Inglot Stores",
      "LEE Stores",
      "Max Stores",
      "US Polo Assn",
      "Wrangler",
      "Levi's",
      "Apple Store",
      "IFB Point",
      "LGOppo Exclusive Showroom",
      "Federal Banks",
      "IDBI Banks",
      "Bandhan Banks",
      "DBS Banks",
      "Karur Vysya Banks",
      "Indusind Banks",
      "Central Bank Of India",
    ];

    const futureTocuhCollection = [
      "Travel & Tourism",
      "Beauty & Fashion",
      "Health & Fitness",
      "Food & Beverage",
      "Finance",
      "On demand Services",
      "Home & Living",
      "Education & Career",
      "Recreation",
      "Jd Business Guide",
    ];

    const popularCities = [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Ahmedabad",
      "Kolkata",
      "Jaipur",
      "Chandigarh",
      "Coimbatore",
      "Lucknow",
      "Surat",
      "Indore",
      "Patna",
      "Nagpur",
      "Ernakulam",
      "Bhopal",
      "Vadodara",
      "Ludhiana",
      "Kanpur",
      "Nashik",
      "Varanasi",
      "Visakhapatnam",
      "Rajkot",
      "Raipur-Chhattisgarh",
      "Vijayawada",
      "Madurai",
      "Ranchi",
      "Goa",
      "Thiruvananthapuram",
      "Bhubaneshwar",
      "Allahabad",
      "Aurangabad-Maharashtra",
      "Dehradun",
      "Mysore",
      "Trichy",
      "Guwahati",
      "Agra",
      "Kozhikode",
      "Jodhpur",
      "Thrissur",
      "Kolhapur",
      "Salem",
      "Meerut",
      "Mangalore",
      "Gorakhpur",
      "Jabalpur",
      "Jalandhar",
      "Gwalior",
    ];

    return (
      <div className="space-y-8">
        <div className="mt-3 flex flex-wrap gap-x-2">
          {services.map((elm, i) => (
              <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
          ))}
        </div>

        <div className="">
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Trending Searches
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {trendingSearches.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Deals and Offers
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {dealsAndOffers.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Explore Future Tocuh Collections
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {futureTocuhCollection.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Popular Cities
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {popularCities.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const Astrology = () => {
    const services = [
      "Astrologers",
      "Astrologers On Phone",
      "Chinese Astrologers",
      "Computerised Horoscope",
      "Gemmologists",
      "Nameology",
      "Numerologists",
      "Palmists",
      "Pandits",
      "Pandits For Havan",
      "Pandits For Marriage",
      "Pandits For Puja",
      "Vastu Shastra Consultants",
      "Online Astrologers",
      "Medical Astrologers",
      "Spiritual Astrologers",
      "Kp Astrologers",
      "Vastu Shastra Consultants For Residence",
      "Spiritual Healing Services",
      "Pandits For Pind Daan",
      "Tantriks",
      "Reiki Consultants",
      "24 Hours Astrologers",
      "Astrologers For Love Problem",
      "Financial Astrologers",
      "Tamil Pandits",
      "Lal Kitab Experts",
      "Paranormal Experts",
      "Horary Astrologers",
      "Pandits For Kaal Sarp",
      "Pandits For Pitru Dosh Nivaran",
      "Telugu Pandits",
      "North Indian Pandits",
      "Bengali Pandits",
      "Face Reading Services",
      "Vedic Astrologers",
      "Nameologists",
      "Nadi Astrologers",
      "Islamic Astrologers",
      "Black Magic Remedy Astrologers",
      "Astrologers For Kundali Matching",
      "Tarot Reading Services",
      "Jyothishalayam",
      "Priests",
      "Parrot Astrologers",
      "Online Palmistry",
      "Celebrity Astrologers",
      "Tamil Astrologers",
      "Malayalam Astrologers",
    ];

    const trendingSearches = [
      "Hotels",
      "Real Estate Agents",
      "Work From Home Jobs",
      "Internet Service Providers",
      "B Ed Colleges",
      "Air Ticketing Agents",
      "News Channels",
      "Education Consultants",
      "CBSE Tutorials",
      "Income Tax Consultants",
      "Electronic Goods Repair & Services",
      "Battery Operated Scooter Dealers-OLA",
      "Blood Test Home Visit",
      "Fire Extinguisher Dealers",
      "Android Application Developers",
      "Tnpsc Tutorials",
      "DTH TV Broadcast Service Providers-Sun Direct",
      "Transporters For Hyderabad",
      "Mobile Phone Simcard Dealers-Jio",
      "Tour Packages For Goa",
      "Kite Dealers",
      "Transporters For Gujarat",
      "Sex Education Centres",
      "Bitcoin Services",
      "News Agencies",
      "Microsoft Excel Advanced Training Institutes",
      "Ibps Bank Exam Tutorials",
      "Transporters For Chennai",
      "Tutorials For UGC Net Exam",
      "Online Tutorials",
      "Rbse Schools",
      "MCA Institutes",
      "Tutorials For Ctet",
      "3 Tesla MRI Scanning Centres",
      "Insurance Agents-Star Health",
      "Water Suppliers (More Than 5000 Litres)",
      "Mata Ki Chowki Organisers",
      "Event Organisers For Navratri",
      "Matrimonial Bureaus For Telugu",
      "Commercial Vehicle Dealers-Tata Motors",
      "Demat Account Services",
      "GST Return Filing Services",
      "Lawyers For Income Tax",
      "Internet Payment Gateway Solution Providers",
      "Wrist Watch Dealers-Rolex",
      "Housing Society Management Services",
      "Property Tax Consultants",
      "Tutorials For DSSSB",
      "ID Card Printer Dealers",
      "Dairy Product Retailers-Amul",
    ];

    const dealsAndOffers = [
      "Kotak Mahindra Banks",
      "INOX Cinemas",
      "Canara Banks",
      "Ratnakar Banks",
      "PVR Cinemas",
      "ICICI Banks",
      "HDFC Banks",
      "AU Small Finance Bank",
      "Bank Of Maharashtra",
      "Bank Of India",
      "Axis Banks",
      "IDFC First Banks",
      "Maharashtra Gramin Banks",
      "Catholic Syrian Banks",
      "Saraswat Co Operative Banks",
      "Punjab & Sind Banks",
      "State Bank Of India",
      "Union Bank Of India",
      "Punjab National Banks",
      "Bank Of Baroda",
      "Lifestyle Stores",
      "Behrouz Biryani",
      "Fastrack",
      "The Good Bowl",
      "Sony",
      "Yes Banks",
      "Croma",
      "Dell Exclusive Stores",
      "Beverly Hills Polo Club",
      "Joyalukkas Jewellery",
      "Kalyan Jewellers",
      "Flying Machine",
      "Lenovo Exclusive Store",
      "Reliance Digital",
      "Vijay Sales",
      "Duroflex",
      "Anytime Fitness",
      "Kromakay Salons",
      "Toni&Guy Salons",
      "Bakingo",
      "Barbeque Nation Restaurants",
      "McDonalds",
      "Sweet Truth Cake Shops",
      "ALDO Stores",
      "Helios",
      "Inglot Stores",
      "LEE Stores",
      "Max Stores",
      "US Polo Assn",
      "Wrangler",
      "Levi's",
      "Apple Store",
      "IFB Point",
      "LG",
      "Oppo Exclusive Showroom",
      "Federal Banks",
      "IDBI Banks",
      "Bandhan Banks",
      "DBS Banks",
      "Karur Vysya Banks",
      "Indusind Banks",
      "Central Bank Of India",
    ];
    const futureTocuhCollection = [
      "Travel & Tourism",
      "Beauty & Fashion",
      "Health & Fitness",
      "Food & Beverage",
      "Finance",
      "On Demand Services",
      "Home & Living",
      "Education & Career",
      "Recreation",
      "JD Business Guide",
    ];

    const popularCities = [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Ahmedabad",
      "Kolkata",
      "Jaipur",
      "Chandigarh",
      "Coimbatore",
      "Lucknow",
      "Surat",
      "Indore",
      "Patna",
      "Nagpur",
      "Ernakulam",
      "Bhopal",
      "Vadodara",
      "Ludhiana",
      "Kanpur",
      "Nashik",
      "Varanasi",
      "Visakhapatnam",
      "Rajkot",
      "Raipur-Chhattisgarh",
      "Vijayawada",
      "Madurai",
      "Ranchi",
      "Goa",
      "Thiruvananthapuram",
      "Bhubaneshwar",
      "Allahabad",
      "Aurangabad-Maharashtra",
      "Dehradun",
      "Mysore",
      "Trichy",
      "Guwahati",
      "Agra",
      "Kozhikode",
      "Jodhpur",
      "Thrissur",
      "Kolhapur",
      "Salem",
      "Meerut",
      "Mangalore",
      "Gorakhpur",
      "Jabalpur",
      "Jalandhar",
      "Gwalior",
    ];

    return (
      <div className="space-y-8">
        <div className="mt-3 flex flex-wrap gap-x-2">
          {services.map((elm, i) => (
              <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
          ))}
        </div>

        <div className="">
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Trending Searches
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {trendingSearches.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Deals and Offers
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {dealsAndOffers.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Explore Future Tocuh Collections
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {futureTocuhCollection.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Popular Cities
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {popularCities.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  const Automobiles = () => {
    const services = [
      "24 Hours Towing Services",
      "Automobile Consultants",
      "Breakdown Services",
      "Bus Body Builders",
      "Car AC Repair & Services",
      "Car Break Down Services",
      "Car Coating Services",
      "Car Dealers",
      "Car Denting Services",
      "Car Interior Decorators",
      "Car Painting Services",
      "Car Polishing Services",
      "Car Scanning Services",
      "Car Washing Services",
      "Driving License Consultants",
      "Garages",
      "Motor Training Schools",
      "Motorcycle Dealers",
      "RTO Consultants",
      "Scooter Dealers",
      "Towing Services",
      "Tyre Puncture Repair",
      "Wheel Alignment Services",
      "Valet Parking Services",
      "Car Washing Services At Home",
      "Car Cleaning Services",
      "Flatbed Towing Services",
      "Emission Testing Centres",
      "Honda Car Repair Services",
      "Motorcycle Repair & Services",
      "Heavy Vehicle Towing Services",
      "Car Towing Services",
      "Car Repair & Services",
      "Car Detailing Services",
      "Hyundai Car Repair Services",
      "CNG Cylinder Testing Services",
      "Car Cleaning Services At Home",
      "Automobile Detailing Services",
      "PUC Centres",
      "Automobile Towing Services",
    ];

    const trendingSearches = [
      "Hotels",
      "Real Estate Agents",
      "Work From Home Jobs",
      "Internet Service Providers",
      "B Ed Colleges",
      "Air Ticketing Agents",
      "News Channels",
      "Education Consultants",
      "CBSE Tutorials",
      "Income Tax Consultants",
      "Electronic Goods Repair & Services",
      "Battery Operated Scooter Dealers-OLA",
      "Blood Test Home Visit",
      "Fire Extinguisher Dealers",
      "Android Application Developers",
      "Tnpsc Tutorials",
      "DTH TV Broadcast Service Providers-Sun Direct",
      "Transporters For Hyderabad",
      "Mobile Phone Simcard Dealers-Jio",
      "Tour Packages For Goa",
      "Kite Dealers",
      "Transporters For Gujarat",
      "Sex Education Centres",
      "Bitcoin Services",
      "News Agencies",
      "Microsoft Excel Advanced Training Institutes",
      "Ibps Bank Exam Tutorials",
      "Transporters For Chennai",
      "Tutorials For UGC Net Exam",
      "Online Tutorials",
      "Rbse Schools",
      "MCA Institutes",
      "Tutorials For Ctet",
      "3 Tesla MRI Scanning Centres",
      "Insurance Agents-Star Health",
      "Water Suppliers (More Than 5000 Litres)",
      "Mata Ki Chowki Organisers",
      "Event Organisers For Navratri",
      "Matrimonial Bureaus For Telugu",
      "Commercial Vehicle Dealers-Tata Motors",
      "Demat Account Services",
      "GST Return Filing Services",
      "Lawyers For Income Tax",
      "Internet Payment Gateway Solution Providers",
      "Wrist Watch Dealers-Rolex",
      "Housing Society Management Services",
      "Property Tax Consultants",
      "Tutorials For DSSSB",
      "ID Card Printer Dealers",
      "Dairy Product Retailers-Amul",
    ];

    const dealsAndOffers = [
      "Kotak Mahindra Banks",
      "INOX Cinemas",
      "Canara Banks",
      "Ratnakar Banks",
      "PVR Cinemas",
      "ICICI Banks",
      "HDFC Banks",
      "AU Small Finance Bank",
      "Bank Of Maharashtra",
      "Bank Of India",
      "Axis Banks",
      "IDFC First Banks",
      "Maharashtra Gramin Banks",
      "Catholic Syrian Banks",
      "Saraswat Co Operative Banks",
      "Punjab & Sind Banks",
      "State Bank Of India",
      "Union Bank Of India",
      "Punjab National Banks",
      "Bank Of Baroda",
      "Lifestyle Stores",
      "Behrouz Biryani",
      "Fastrack",
      "The Good Bowl",
      "Sony",
      "Yes Banks",
      "Croma",
      "Dell Exclusive Stores",
      "Beverly Hills Polo Club",
      "Joyalukkas Jewellery",
      "Kalyan Jewellers",
      "Flying Machine",
      "Lenovo Exclusive Store",
      "Reliance Digital",
      "Vijay Sales",
      "Duroflex",
      "Anytime Fitness",
      "Kromakay Salons",
      "Toni&Guy Salons",
      "Bakingo",
      "Barbeque Nation Restaurants",
      "McDonalds",
      "Sweet Truth Cake Shops",
      "ALDO Stores",
      "Helios",
      "Inglot Stores",
      "LEE Stores",
      "Max Stores",
      "US Polo Assn",
      "Wrangler",
      "Levi's",
      "Apple Store",
      "IFB Point",
      "LG",
      "Oppo Exclusive Showroom",
      "Federal Banks",
      "IDBI Banks",
      "Bandhan Banks",
      "DBS Banks",
      "Karur Vysya Banks",
      "Indusind Banks",
      "Central Bank Of India",
    ];
    const futureTocuhCollection = [
      "Travel & Tourism",
      "Beauty & Fashion",
      "Health & Fitness",
      "Food & Beverage",
      "Finance",
      "On Demand Services",
      "Home & Living",
      "Education & Career",
      "Recreation",
      "JD Business Guide",
    ];

    const popularCities = [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Ahmedabad",
      "Kolkata",
      "Jaipur",
      "Chandigarh",
      "Coimbatore",
      "Lucknow",
      "Surat",
      "Indore",
      "Patna",
      "Nagpur",
      "Ernakulam",
      "Bhopal",
      "Vadodara",
      "Ludhiana",
      "Kanpur",
      "Nashik",
      "Varanasi",
      "Visakhapatnam",
      "Rajkot",
      "Raipur-Chhattisgarh",
      "Vijayawada",
      "Madurai",
      "Ranchi",
      "Goa",
      "Thiruvananthapuram",
      "Bhubaneshwar",
      "Allahabad",
      "Aurangabad-Maharashtra",
      "Dehradun",
      "Mysore",
      "Trichy",
      "Guwahati",
      "Agra",
      "Kozhikode",
      "Jodhpur",
      "Thrissur",
      "Kolhapur",
      "Salem",
      "Meerut",
      "Mangalore",
      "Gorakhpur",
      "Jabalpur",
      "Jalandhar",
      "Gwalior",
    ];

    return (
      <div className="space-y-8">
        <div className="mt-3 flex flex-wrap gap-x-2">
          {services.map((elm, i) => (
              <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
          ))}
        </div>

        <div className="">
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Trending Searches
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {trendingSearches.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Deals and Offers
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {dealsAndOffers.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Explore Future Tocuh Collections
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {futureTocuhCollection.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Popular Cities
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {popularCities.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  const Beauty = () => {
    const services = [
      "Adventure Sports",
      "Badminton Courts",
      "Beauticians",
      "Beauty Parlour Classes",
      "Beauty Parlours",
      "Beauty Parlours At Home",
      "Beauty Parlours For Bridal",
      "Beauty Salons",
      "Body Massage Centres",
      "Boxing Classes",
      "Fitness Centres",
      "Hair Stylists",
      "Health Clubs",
      "Karate Classes",
      "Mehandi Classes",
      "Salons",
      "Sports Clubs",
      "Sports Ground",
      "Swimming Classes",
      "Tattoo Artists",
      "Yoga Classes",
      "Zumba Classes",
      "Meditation Centres",
      "Football Clubs",
      "Nail Art At Home",
      "Mehendi Artists",
      "Lawn Tennis Courts",
      "Beauty Shops",
      "Unisex Salons",
      "Bridal Makeup Artists",
      "Cricket Clubs",
      "Makeup Artists",
      "Beautician Services At Home",
      "Nail Artists",
      "Online Yoga Classes",
      "Unisex Spas",
      "Gyms",
      "Unisex Gyms",
      "Salon Services At Home",
      "Volleyball Courts",
      "Indoor Badminton Courts",
      "Crossfit Gyms",
      "Cricket Coach",
      "Body Massage Services At Home",
      "Hair Spas",
      "Thai Spas",
      "Jawed Habib",
      "Women Gyms",
      "Personal Gym Trainers",
      "Tattoo For Lips",
      "Online Zumba Classes",
    ];

    const trendingSearches = [
      "Hotels",
      "Real Estate Agents",
      "Work From Home Jobs",
      "Internet Service Providers",
      "B Ed Colleges",
      "Air Ticketing Agents",
      "News Channels",
      "Education Consultants",
      "CBSE Tutorials",
      "Income Tax Consultants",
      "Electronic Goods Repair & Services",
      "Battery Operated Scooter Dealers-OLA",
      "Blood Test Home Visit",
      "Fire Extinguisher Dealers",
      "Android Application Developers",
      "Tnpsc Tutorials",
      "DTH TV Broadcast Service Providers-Sun Direct",
      "Transporters For Hyderabad",
      "Mobile Phone Simcard Dealers-Jio",
      "Tour Packages For Goa",
      "Kite Dealers",
      "Transporters For Gujarat",
      "Sex Education Centres",
      "Bitcoin Services",
      "News Agencies",
      "Microsoft Excel Advanced Training Institutes",
      "Ibps Bank Exam Tutorials",
      "Transporters For Chennai",
      "Tutorials For UGC Net Exam",
      "Online Tutorials",
      "Rbse Schools",
      "MCA Institutes",
      "Tutorials For Ctet",
      "3 Tesla MRI Scanning Centres",
      "Insurance Agents-Star Health",
      "Water Suppliers (More Than 5000 Litres)",
      "Mata Ki Chowki Organisers",
      "Event Organisers For Navratri",
      "Matrimonial Bureaus For Telugu",
      "Commercial Vehicle Dealers-Tata Motors",
      "Demat Account Services",
      "GST Return Filing Services",
      "Lawyers For Income Tax",
      "Internet Payment Gateway Solution Providers",
      "Wrist Watch Dealers-Rolex",
      "Housing Society Management Services",
      "Property Tax Consultants",
      "Tutorials For DSSSB",
      "ID Card Printer Dealers",
      "Dairy Product Retailers-Amul",
    ];

    const dealsAndOffers = [
      "Kotak Mahindra Banks",
      "INOX Cinemas",
      "Canara Banks",
      "Ratnakar Banks",
      "PVR Cinemas",
      "ICICI Banks",
      "HDFC Banks",
      "AU Small Finance Bank",
      "Bank Of Maharashtra",
      "Bank Of India",
      "Axis Banks",
      "IDFC First Banks",
      "Maharashtra Gramin Banks",
      "Catholic Syrian Banks",
      "Saraswat Co Operative Banks",
      "Punjab & Sind Banks",
      "State Bank Of India",
      "Union Bank Of India",
      "Punjab National Banks",
      "Bank Of Baroda",
      "Lifestyle Stores",
      "Behrouz Biryani",
      "Fastrack",
      "The Good Bowl",
      "Sony",
      "Yes Banks",
      "Croma",
      "Dell Exclusive Stores",
      "Beverly Hills Polo Club",
      "Joyalukkas Jewellery",
      "Kalyan Jewellers",
      "Flying Machine",
      "Lenovo Exclusive Store",
      "Reliance Digital",
      "Vijay Sales",
      "Duroflex",
      "Anytime Fitness",
      "Kromakay Salons",
      "Toni&Guy Salons",
      "Bakingo",
      "Barbeque Nation Restaurants",
      "McDonalds",
      "Sweet Truth Cake Shops",
      "ALDO Stores",
      "Helios",
      "Inglot Stores",
      "LEE Stores",
      "Max Stores",
      "US Polo Assn",
      "Wrangler",
      "Levi's",
      "Apple Store",
      "IFB Point",
      "LG",
      "Oppo Exclusive Showroom",
      "Federal Banks",
      "IDBI Banks",
      "Bandhan Banks",
      "DBS Banks",
      "Karur Vysya Banks",
      "Indusind Banks",
      "Central Bank Of India",
    ];
    const futureTocuhCollection = [
      "Travel & Tourism",
      "Beauty & Fashion",
      "Health & Fitness",
      "Food & Beverage",
      "Finance",
      "On Demand Services",
      "Home & Living",
      "Education & Career",
      "Recreation",
      "JD Business Guide",
    ];

    const popularCities = [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Ahmedabad",
      "Kolkata",
      "Jaipur",
      "Chandigarh",
      "Coimbatore",
      "Lucknow",
      "Surat",
      "Indore",
      "Patna",
      "Nagpur",
      "Ernakulam",
      "Bhopal",
      "Vadodara",
      "Ludhiana",
      "Kanpur",
      "Nashik",
      "Varanasi",
      "Visakhapatnam",
      "Rajkot",
      "Raipur-Chhattisgarh",
      "Vijayawada",
      "Madurai",
      "Ranchi",
      "Goa",
      "Thiruvananthapuram",
      "Bhubaneshwar",
      "Allahabad",
      "Aurangabad-Maharashtra",
      "Dehradun",
      "Mysore",
      "Trichy",
      "Guwahati",
      "Agra",
      "Kozhikode",
      "Jodhpur",
      "Thrissur",
      "Kolhapur",
      "Salem",
      "Meerut",
      "Mangalore",
      "Gorakhpur",
      "Jabalpur",
      "Jalandhar",
      "Gwalior",
    ];

    return (
      <div className="space-y-8">
        <div className="mt-3 flex flex-wrap gap-x-2">
          {services.map((elm, i) => (
              <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
          ))}
        </div>

        <div className="">
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Trending Searches
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {trendingSearches.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Deals and Offers
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {dealsAndOffers.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Explore Future Tocuh Collections
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {futureTocuhCollection.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Popular Cities
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {popularCities.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  const Business = () => {
    const services = [
      "Accountants",
      "ATM",
      "Banks",
      "CA",
      "Car Loans",
      "Finance Companies",
      "Home Loans",
      "Insurance Companies",
      "Lawyers",
      "Loans",
      "Personal Loans",
      "Second Hand Car Loans",
      "Security Services",
      "Stock Brokers",
      "Tax Consultants",
      "Online Translators",
      "Mortgage Loans",
      "Cooperative Banks",
      "IIFL",
      "Union Bank Of India",
      "State Bank Of India",
      "CitiBank",
      "Central Bank Of India",
      "Bank Of India",
      "Bank Of Baroda",
      "Yes Banks",
      "Punjab National Banks",
      "Indusind Banks",
      "IDBI Banks",
      "HDFC Banks",
      "Canara Banks",
      "Axis Banks",
      "Union Bank Of India ATMs",
      "ICICI Banks",
      "Kotak Mahindra Banks",
      "IDFC First Banks",
    ];

    const trendingSearches = [
      "Hotels",
      "Real Estate Agents",
      "Work From Home Jobs",
      "Internet Service Providers",
      "B Ed Colleges",
      "Air Ticketing Agents",
      "News Channels",
      "Education Consultants",
      "CBSE Tutorials",
      "Income Tax Consultants",
      "Electronic Goods Repair & Services",
      "Battery Operated Scooter Dealers-OLA",
      "Blood Test Home Visit",
      "Fire Extinguisher Dealers",
      "Android Application Developers",
      "Tnpsc Tutorials",
      "DTH TV Broadcast Service Providers-Sun Direct",
      "Transporters For Hyderabad",
      "Mobile Phone Simcard Dealers-Jio",
      "Tour Packages For Goa",
      "Kite Dealers",
      "Transporters For Gujarat",
      "Sex Education Centres",
      "Bitcoin Services",
      "News Agencies",
      "Microsoft Excel Advanced Training Institutes",
      "Ibps Bank Exam Tutorials",
      "Transporters For Chennai",
      "Tutorials For UGC Net Exam",
      "Online Tutorials",
      "Rbse Schools",
      "MCA Institutes",
      "Tutorials For Ctet",
      "3 Tesla MRI Scanning Centres",
      "Insurance Agents-Star Health",
      "Water Suppliers (More Than 5000 Litres)",
      "Mata Ki Chowki Organisers",
      "Event Organisers For Navratri",
      "Matrimonial Bureaus For Telugu",
      "Commercial Vehicle Dealers-Tata Motors",
      "Demat Account Services",
      "GST Return Filing Services",
      "Lawyers For Income Tax",
      "Internet Payment Gateway Solution Providers",
      "Wrist Watch Dealers-Rolex",
      "Housing Society Management Services",
      "Property Tax Consultants",
      "Tutorials For DSSSB",
      "ID Card Printer Dealers",
      "Dairy Product Retailers-Amul",
    ];

    const dealsAndOffers = [
      "Kotak Mahindra Banks",
      "INOX Cinemas",
      "Canara Banks",
      "Ratnakar Banks",
      "PVR Cinemas",
      "ICICI Banks",
      "HDFC Banks",
      "AU Small Finance Bank",
      "Bank Of Maharashtra",
      "Bank Of India",
      "Axis Banks",
      "IDFC First Banks",
      "Maharashtra Gramin Banks",
      "Catholic Syrian Banks",
      "Saraswat Co Operative Banks",
      "Punjab & Sind Banks",
      "State Bank Of India",
      "Union Bank Of India",
      "Punjab National Banks",
      "Bank Of Baroda",
      "Lifestyle Stores",
      "Behrouz Biryani",
      "Fastrack",
      "The Good Bowl",
      "Sony",
      "Yes Banks",
      "Croma",
      "Dell Exclusive Stores",
      "Beverly Hills Polo Club",
      "Joyalukkas Jewellery",
      "Kalyan Jewellers",
      "Flying Machine",
      "Lenovo Exclusive Store",
      "Reliance Digital",
      "Vijay Sales",
      "Duroflex",
      "Anytime Fitness",
      "Kromakay Salons",
      "Toni&Guy Salons",
      "Bakingo",
      "Barbeque Nation Restaurants",
      "McDonalds",
      "Sweet Truth Cake Shops",
      "ALDO Stores",
      "Helios",
      "Inglot Stores",
      "LEE Stores",
      "Max Stores",
      "US Polo Assn",
      "Wrangler",
      "Levi's",
      "Apple Store",
      "IFB Point",
      "LG",
      "Oppo Exclusive Showroom",
      "Federal Banks",
      "IDBI Banks",
      "Bandhan Banks",
      "DBS Banks",
      "Karur Vysya Banks",
      "Indusind Banks",
      "Central Bank Of India",
    ];
    const futureTocuhCollection = [
      "Travel & Tourism",
      "Beauty & Fashion",
      "Health & Fitness",
      "Food & Beverage",
      "Finance",
      "On Demand Services",
      "Home & Living",
      "Education & Career",
      "Recreation",
      "JD Business Guide",
    ];

    const popularCities = [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Ahmedabad",
      "Kolkata",
      "Jaipur",
      "Chandigarh",
      "Coimbatore",
      "Lucknow",
      "Surat",
      "Indore",
      "Patna",
      "Nagpur",
      "Ernakulam",
      "Bhopal",
      "Vadodara",
      "Ludhiana",
      "Kanpur",
      "Nashik",
      "Varanasi",
      "Visakhapatnam",
      "Rajkot",
      "Raipur-Chhattisgarh",
      "Vijayawada",
      "Madurai",
      "Ranchi",
      "Goa",
      "Thiruvananthapuram",
      "Bhubaneshwar",
      "Allahabad",
      "Aurangabad-Maharashtra",
      "Dehradun",
      "Mysore",
      "Trichy",
      "Guwahati",
      "Agra",
      "Kozhikode",
      "Jodhpur",
      "Thrissur",
      "Kolhapur",
      "Salem",
      "Meerut",
      "Mangalore",
      "Gorakhpur",
      "Jabalpur",
      "Jalandhar",
      "Gwalior",
    ];

    return (
      <div className="space-y-8">
        <div className="mt-3 flex flex-wrap gap-x-2">
          {services.map((elm, i) => (
              <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
          ))}
        </div>

        <div className="">
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Trending Searches
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {trendingSearches.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Deals and Offers
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {dealsAndOffers.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Explore Future Tocuh Collections
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {futureTocuhCollection.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Popular Cities
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {popularCities.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  const Education = () => {
    const services = [
      "Abacus Classes",
      "Boarding Schools",
      "CBSE Schools",
      "Colleges",
      "Convent Schools",
      "Dance Classes",
      "Diploma Courses",
      "Drawing Classes",
      "Educational Institutes",
      "Engineering Colleges",
      "English Medium Schools",
      "Institutes",
      "Kindergartens",
      "Law Colleges",
      "Libraries",
      "MBA Colleges",
      "Medical Colleges",
      "Montessori Schools",
      "Music Classes",
      "Nursery Schools",
      "Open Schools",
      "Open University",
      "Personality Development",
      "Project Work",
      "Schools",
      "Tutorials",
      "Universities",
      "Video Editing Classes",
      "Home Tutors",
      "Junior Colleges",
      "Nursing Colleges",
      "Primary Schools",
      "Arts Colleges",
      "Commerce Colleges",
      "Science Colleges",
      "Polytechnic Colleges",
      "Public Schools",
      "Air Hostess Training Institutes",
      "CS Tutorials",
      "B Ed Colleges",
      "Military Schools",
      "Government Colleges",
      "Veterinary Colleges",
      "Agricultural Colleges",
      "Senior Secondary Schools",
      "Digital Marketing Courses",
      "Online Training For Python",
      "Public Libraries",
      "Degree Colleges",
      "Secondary Schools",
    ];

    const trendingSearches = [
      "Hotels",
      "Real Estate Agents",
      "Work From Home Jobs",
      "Internet Service Providers",
      "B Ed Colleges",
      "Air Ticketing Agents",
      "News Channels",
      "Education Consultants",
      "CBSE Tutorials",
      "Income Tax Consultants",
      "Electronic Goods Repair & Services",
      "Battery Operated Scooter Dealers-OLA",
      "Blood Test Home Visit",
      "Fire Extinguisher Dealers",
      "Android Application Developers",
      "Tnpsc Tutorials",
      "DTH TV Broadcast Service Providers-Sun Direct",
      "Transporters For Hyderabad",
      "Mobile Phone Simcard Dealers-Jio",
      "Tour Packages For Goa",
      "Kite Dealers",
      "Transporters For Gujarat",
      "Sex Education Centres",
      "Bitcoin Services",
      "News Agencies",
      "Microsoft Excel Advanced Training Institutes",
      "Ibps Bank Exam Tutorials",
      "Transporters For Chennai",
      "Tutorials For UGC Net Exam",
      "Online Tutorials",
      "Rbse Schools",
      "MCA Institutes",
      "Tutorials For Ctet",
      "3 Tesla MRI Scanning Centres",
      "Insurance Agents-Star Health",
      "Water Suppliers (More Than 5000 Litres)",
      "Mata Ki Chowki Organisers",
      "Event Organisers For Navratri",
      "Matrimonial Bureaus For Telugu",
      "Commercial Vehicle Dealers-Tata Motors",
      "Demat Account Services",
      "GST Return Filing Services",
      "Lawyers For Income Tax",
      "Internet Payment Gateway Solution Providers",
      "Wrist Watch Dealers-Rolex",
      "Housing Society Management Services",
      "Property Tax Consultants",
      "Tutorials For DSSSB",
      "ID Card Printer Dealers",
      "Dairy Product Retailers-Amul",
    ];

    const dealsAndOffers = [
      "Kotak Mahindra Banks",
      "INOX Cinemas",
      "Canara Banks",
      "Ratnakar Banks",
      "PVR Cinemas",
      "ICICI Banks",
      "HDFC Banks",
      "AU Small Finance Bank",
      "Bank Of Maharashtra",
      "Bank Of India",
      "Axis Banks",
      "IDFC First Banks",
      "Maharashtra Gramin Banks",
      "Catholic Syrian Banks",
      "Saraswat Co Operative Banks",
      "Punjab & Sind Banks",
      "State Bank Of India",
      "Union Bank Of India",
      "Punjab National Banks",
      "Bank Of Baroda",
      "Lifestyle Stores",
      "Behrouz Biryani",
      "Fastrack",
      "The Good Bowl",
      "Sony",
      "Yes Banks",
      "Croma",
      "Dell Exclusive Stores",
      "Beverly Hills Polo Club",
      "Joyalukkas Jewellery",
      "Kalyan Jewellers",
      "Flying Machine",
      "Lenovo Exclusive Store",
      "Reliance Digital",
      "Vijay Sales",
      "Duroflex",
      "Anytime Fitness",
      "Kromakay Salons",
      "Toni&Guy Salons",
      "Bakingo",
      "Barbeque Nation Restaurants",
      "McDonalds",
      "Sweet Truth Cake Shops",
      "ALDO Stores",
      "Helios",
      "Inglot Stores",
      "LEE Stores",
      "Max Stores",
      "US Polo Assn",
      "Wrangler",
      "Levi's",
      "Apple Store",
      "IFB Point",
      "LG",
      "Oppo Exclusive Showroom",
      "Federal Banks",
      "IDBI Banks",
      "Bandhan Banks",
      "DBS Banks",
      "Karur Vysya Banks",
      "Indusind Banks",
      "Central Bank Of India",
    ];
    const futureTocuhCollection = [
      "Travel & Tourism",
      "Beauty & Fashion",
      "Health & Fitness",
      "Food & Beverage",
      "Finance",
      "On Demand Services",
      "Home & Living",
      "Education & Career",
      "Recreation",
      "JD Business Guide",
    ];

    const popularCities = [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Ahmedabad",
      "Kolkata",
      "Jaipur",
      "Chandigarh",
      "Coimbatore",
      "Lucknow",
      "Surat",
      "Indore",
      "Patna",
      "Nagpur",
      "Ernakulam",
      "Bhopal",
      "Vadodara",
      "Ludhiana",
      "Kanpur",
      "Nashik",
      "Varanasi",
      "Visakhapatnam",
      "Rajkot",
      "Raipur-Chhattisgarh",
      "Vijayawada",
      "Madurai",
      "Ranchi",
      "Goa",
      "Thiruvananthapuram",
      "Bhubaneshwar",
      "Allahabad",
      "Aurangabad-Maharashtra",
      "Dehradun",
      "Mysore",
      "Trichy",
      "Guwahati",
      "Agra",
      "Kozhikode",
      "Jodhpur",
      "Thrissur",
      "Kolhapur",
      "Salem",
      "Meerut",
      "Mangalore",
      "Gorakhpur",
      "Jabalpur",
      "Jalandhar",
      "Gwalior",
    ];

    return (
      <div className="space-y-8">
        <div className="mt-3 flex flex-wrap gap-x-2">
          {services.map((elm, i) => (
              <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
          ))}
        </div>

        <div className="">
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Trending Searches
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {trendingSearches.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Deals and Offers
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {dealsAndOffers.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Explore Future Tocuh Collections
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {futureTocuhCollection.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Popular Cities
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {popularCities.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  const EventsWeddings = () => {
    const services = [
      "Artists",
      "Auditoriums",
      "Bands",
      "Banquet Halls",
      "Caterers",
      "Conference Halls",
      "Convention Halls",
      "Decorators",
      "Disc Jockey",
      "Event Management Companies",
      "Event Organisers",
      "Florists",
      "Kalyana Mandapams",
      "Magicians",
      "Mandap Decorators",
      "Matrimonial Websites",
      "Musicians",
      "Photo Studios",
      "Photographers",
      "Playback Singers",
      "Summer Camps",
      "Tent House",
      "Wedding Bands",
      "Marriage Lawns",
      "Wedding Mandap Decorators",
      "Wildlife Photographers",
      "Car Decorators",
      "Balloon Decorators",
      "Video Editing Services",
      "Wedding Decorators",
      "Pandal Decorators",
      "Birthday Party Decorators",
      "Wedding Photographers",
      "Rock Bands",
      "Event Organisers For Wedding",
      "Comedians",
      "Candid Photographers",
      "Pipe Bands",
      "Jugglers",
      "Saxophone Players",
      "Aerial Photographers",
      "Brass Bands",
      "Voice Over Artists",
      "Drone On Rent",
      "Pre Wedding Photographers",
      "Singers",
      "Event Venues",
      "Tent Decorators",
      "Room Decorators",
    ];

    const trendingSearches = [
      "Hotels",
      "Real Estate Agents",
      "Work From Home Jobs",
      "Internet Service Providers",
      "B Ed Colleges",
      "Air Ticketing Agents",
      "News Channels",
      "Education Consultants",
      "CBSE Tutorials",
      "Income Tax Consultants",
      "Electronic Goods Repair & Services",
      "Battery Operated Scooter Dealers-OLA",
      "Blood Test Home Visit",
      "Fire Extinguisher Dealers",
      "Android Application Developers",
      "Tnpsc Tutorials",
      "DTH TV Broadcast Service Providers-Sun Direct",
      "Transporters For Hyderabad",
      "Mobile Phone Simcard Dealers-Jio",
      "Tour Packages For Goa",
      "Kite Dealers",
      "Transporters For Gujarat",
      "Sex Education Centres",
      "Bitcoin Services",
      "News Agencies",
      "Microsoft Excel Advanced Training Institutes",
      "Ibps Bank Exam Tutorials",
      "Transporters For Chennai",
      "Tutorials For UGC Net Exam",
      "Online Tutorials",
      "Rbse Schools",
      "MCA Institutes",
      "Tutorials For Ctet",
      "3 Tesla MRI Scanning Centres",
      "Insurance Agents-Star Health",
      "Water Suppliers (More Than 5000 Litres)",
      "Mata Ki Chowki Organisers",
      "Event Organisers For Navratri",
      "Matrimonial Bureaus For Telugu",
      "Commercial Vehicle Dealers-Tata Motors",
      "Demat Account Services",
      "GST Return Filing Services",
      "Lawyers For Income Tax",
      "Internet Payment Gateway Solution Providers",
      "Wrist Watch Dealers-Rolex",
      "Housing Society Management Services",
      "Property Tax Consultants",
      "Tutorials For DSSSB",
      "ID Card Printer Dealers",
      "Dairy Product Retailers-Amul",
    ];

    const dealsAndOffers = [
      "Kotak Mahindra Banks",
      "INOX Cinemas",
      "Canara Banks",
      "Ratnakar Banks",
      "PVR Cinemas",
      "ICICI Banks",
      "HDFC Banks",
      "AU Small Finance Bank",
      "Bank Of Maharashtra",
      "Bank Of India",
      "Axis Banks",
      "IDFC First Banks",
      "Maharashtra Gramin Banks",
      "Catholic Syrian Banks",
      "Saraswat Co Operative Banks",
      "Punjab & Sind Banks",
      "State Bank Of India",
      "Union Bank Of India",
      "Punjab National Banks",
      "Bank Of Baroda",
      "Lifestyle Stores",
      "Behrouz Biryani",
      "Fastrack",
      "The Good Bowl",
      "Sony",
      "Yes Banks",
      "Croma",
      "Dell Exclusive Stores",
      "Beverly Hills Polo Club",
      "Joyalukkas Jewellery",
      "Kalyan Jewellers",
      "Flying Machine",
      "Lenovo Exclusive Store",
      "Reliance Digital",
      "Vijay Sales",
      "Duroflex",
      "Anytime Fitness",
      "Kromakay Salons",
      "Toni&Guy Salons",
      "Bakingo",
      "Barbeque Nation Restaurants",
      "McDonalds",
      "Sweet Truth Cake Shops",
      "ALDO Stores",
      "Helios",
      "Inglot Stores",
      "LEE Stores",
      "Max Stores",
      "US Polo Assn",
      "Wrangler",
      "Levi's",
      "Apple Store",
      "IFB Point",
      "LG",
      "Oppo Exclusive Showroom",
      "Federal Banks",
      "IDBI Banks",
      "Bandhan Banks",
      "DBS Banks",
      "Karur Vysya Banks",
      "Indusind Banks",
      "Central Bank Of India",
    ];
    const futureTocuhCollection = [
      "Travel & Tourism",
      "Beauty & Fashion",
      "Health & Fitness",
      "Food & Beverage",
      "Finance",
      "On Demand Services",
      "Home & Living",
      "Education & Career",
      "Recreation",
      "JD Business Guide",
    ];

    const popularCities = [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Ahmedabad",
      "Kolkata",
      "Jaipur",
      "Chandigarh",
      "Coimbatore",
      "Lucknow",
      "Surat",
      "Indore",
      "Patna",
      "Nagpur",
      "Ernakulam",
      "Bhopal",
      "Vadodara",
      "Ludhiana",
      "Kanpur",
      "Nashik",
      "Varanasi",
      "Visakhapatnam",
      "Rajkot",
      "Raipur-Chhattisgarh",
      "Vijayawada",
      "Madurai",
      "Ranchi",
      "Goa",
      "Thiruvananthapuram",
      "Bhubaneshwar",
      "Allahabad",
      "Aurangabad-Maharashtra",
      "Dehradun",
      "Mysore",
      "Trichy",
      "Guwahati",
      "Agra",
      "Kozhikode",
      "Jodhpur",
      "Thrissur",
      "Kolhapur",
      "Salem",
      "Meerut",
      "Mangalore",
      "Gorakhpur",
      "Jabalpur",
      "Jalandhar",
      "Gwalior",
    ];

    return (
      <div className="space-y-8">
        <div className="mt-3 flex flex-wrap gap-x-2">
          {services.map((elm, i) => (
              <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
          ))}
        </div>

        <div className="">
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Trending Searches
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {trendingSearches.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Deals and Offers
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {dealsAndOffers.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Explore Future Tocuh Collections
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {futureTocuhCollection.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Popular Cities
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {popularCities.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  const FoodRestaurant = () => {
    const services = [
      "Arabic Restaurants",
      "Bakeries",
      "Barbeque Restaurants",
      "Bengali Restaurants",
      "Biryani Restaurants",
      "Buffet Restaurants",
      "Cake Shops",
      "Chettinad Restaurants",
      "Chinese Restaurants",
      "Coffee Shops",
      "Continental Restaurants",
      "Dhaba Restaurants",
      "Discotheques",
      "Fast Food",
      "Gujarati Restaurants",
      "Ice Cream Parlours",
      "Indian Restaurants",
      "Juice Centres",
      "Kathiyawadi Restaurants",
      "Lounge Bars",
      "Maharashtrian Restaurants",
      "Mess",
      "Mughlai Restaurants",
      "Multicuisine Restaurants",
      "Night Clubs",
      "Non Veg Restaurants",
      "North Indian Restaurants",
      "Open Air Restaurants",
      "Pubs",
      "Punjabi Restaurants",
      "Pure Veg Restaurants",
      "Rajasthani Restaurants",
      "Restaurants",
      "Restaurants With Candle Light Dinner",
      "Restaurants With Live Music",
      "Sea Food Restaurants",
      "Snacks Bar",
      "South Indian Restaurants",
      "Sweet Shops",
      "Tandoori Restaurants",
      "Thali Restaurants",
      "Tiffin Services",
      "Tiffin Services For Veg Food",
      "Tea Stalls",
      "Street Food",
      "Food Delivery In Trains",
      "Chaat Corners",
      "Food Trucks",
      "Tiffin Home Delivery Services",
      "Breakfast Restaurants",
    ];

    const trendingSearches = [
      "Hotels",
      "Real Estate Agents",
      "Work From Home Jobs",
      "Internet Service Providers",
      "B Ed Colleges",
      "Air Ticketing Agents",
      "News Channels",
      "Education Consultants",
      "CBSE Tutorials",
      "Income Tax Consultants",
      "Electronic Goods Repair & Services",
      "Battery Operated Scooter Dealers-OLA",
      "Blood Test Home Visit",
      "Fire Extinguisher Dealers",
      "Android Application Developers",
      "Tnpsc Tutorials",
      "DTH TV Broadcast Service Providers-Sun Direct",
      "Transporters For Hyderabad",
      "Mobile Phone Simcard Dealers-Jio",
      "Tour Packages For Goa",
      "Kite Dealers",
      "Transporters For Gujarat",
      "Sex Education Centres",
      "Bitcoin Services",
      "News Agencies",
      "Microsoft Excel Advanced Training Institutes",
      "Ibps Bank Exam Tutorials",
      "Transporters For Chennai",
      "Tutorials For UGC Net Exam",
      "Online Tutorials",
      "Rbse Schools",
      "MCA Institutes",
      "Tutorials For Ctet",
      "3 Tesla MRI Scanning Centres",
      "Insurance Agents-Star Health",
      "Water Suppliers (More Than 5000 Litres)",
      "Mata Ki Chowki Organisers",
      "Event Organisers For Navratri",
      "Matrimonial Bureaus For Telugu",
      "Commercial Vehicle Dealers-Tata Motors",
      "Demat Account Services",
      "GST Return Filing Services",
      "Lawyers For Income Tax",
      "Internet Payment Gateway Solution Providers",
      "Wrist Watch Dealers-Rolex",
      "Housing Society Management Services",
      "Property Tax Consultants",
      "Tutorials For DSSSB",
      "ID Card Printer Dealers",
      "Dairy Product Retailers-Amul",
    ];

    const dealsAndOffers = [
      "Kotak Mahindra Banks",
      "INOX Cinemas",
      "Canara Banks",
      "Ratnakar Banks",
      "PVR Cinemas",
      "ICICI Banks",
      "HDFC Banks",
      "AU Small Finance Bank",
      "Bank Of Maharashtra",
      "Bank Of India",
      "Axis Banks",
      "IDFC First Banks",
      "Maharashtra Gramin Banks",
      "Catholic Syrian Banks",
      "Saraswat Co Operative Banks",
      "Punjab & Sind Banks",
      "State Bank Of India",
      "Union Bank Of India",
      "Punjab National Banks",
      "Bank Of Baroda",
      "Lifestyle Stores",
      "Behrouz Biryani",
      "Fastrack",
      "The Good Bowl",
      "Sony",
      "Yes Banks",
      "Croma",
      "Dell Exclusive Stores",
      "Beverly Hills Polo Club",
      "Joyalukkas Jewellery",
      "Kalyan Jewellers",
      "Flying Machine",
      "Lenovo Exclusive Store",
      "Reliance Digital",
      "Vijay Sales",
      "Duroflex",
      "Anytime Fitness",
      "Kromakay Salons",
      "Toni&Guy Salons",
      "Bakingo",
      "Barbeque Nation Restaurants",
      "McDonalds",
      "Sweet Truth Cake Shops",
      "ALDO Stores",
      "Helios",
      "Inglot Stores",
      "LEE Stores",
      "Max Stores",
      "US Polo Assn",
      "Wrangler",
      "Levi's",
      "Apple Store",
      "IFB Point",
      "LG",
      "Oppo Exclusive Showroom",
      "Federal Banks",
      "IDBI Banks",
      "Bandhan Banks",
      "DBS Banks",
      "Karur Vysya Banks",
      "Indusind Banks",
      "Central Bank Of India",
    ];
    const futureTocuhCollection = [
      "Travel & Tourism",
      "Beauty & Fashion",
      "Health & Fitness",
      "Food & Beverage",
      "Finance",
      "On Demand Services",
      "Home & Living",
      "Education & Career",
      "Recreation",
      "JD Business Guide",
    ];

    const popularCities = [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Ahmedabad",
      "Kolkata",
      "Jaipur",
      "Chandigarh",
      "Coimbatore",
      "Lucknow",
      "Surat",
      "Indore",
      "Patna",
      "Nagpur",
      "Ernakulam",
      "Bhopal",
      "Vadodara",
      "Ludhiana",
      "Kanpur",
      "Nashik",
      "Varanasi",
      "Visakhapatnam",
      "Rajkot",
      "Raipur-Chhattisgarh",
      "Vijayawada",
      "Madurai",
      "Ranchi",
      "Goa",
      "Thiruvananthapuram",
      "Bhubaneshwar",
      "Allahabad",
      "Aurangabad-Maharashtra",
      "Dehradun",
      "Mysore",
      "Trichy",
      "Guwahati",
      "Agra",
      "Kozhikode",
      "Jodhpur",
      "Thrissur",
      "Kolhapur",
      "Salem",
      "Meerut",
      "Mangalore",
      "Gorakhpur",
      "Jabalpur",
      "Jalandhar",
      "Gwalior",
    ];

    return (
      <div className="space-y-8">
        <div className="mt-3 flex flex-wrap gap-x-2">
          {services.map((elm, i) => (
              <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
          ))}
        </div>

        <div className="">
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Trending Searches
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {trendingSearches.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Deals and Offers
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {dealsAndOffers.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Explore Future Tocuh Collections
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {futureTocuhCollection.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Popular Cities
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {popularCities.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  const HealthMedical = () => {
    const services = [
      "2D Echo",
      "Ambulance Services",
      "Ayurvedic Hospitals",
      "Blood Banks",
      "Cardiologists",
      "Chemists",
      "Clinics",
      "Creche",
      "Dentists",
      "Dermatologists",
      "Diagnostic Centres",
      "Dietitians",
      "Endocrinologists",
      "ENT Doctors",
      "ENT Hospitals",
      "Esis Hospitals",
      "Eye Clinics",
      "Eye Hospitals",
      "Gastroenterologists",
      "Hip Replacement Surgeons",
      "Homeopathic Clinics",
      "Hospitals",
      "Hypnotherapists",
      "ICU",
      "Mental Hospitals",
      "Nephrologists",
      "Neurologists",
      "Neurosurgeons",
      "NICU",
      "Oncologists",
      "Ophthalmologists",
      "Opticians",
      "Physiotherapists",
      "Plastic Surgeons",
      "Psychiatrists",
      "Rehabilitation Centres",
      "Skin Care Clinics",
      "Speech Therapists",
      "Stress Management",
      "Veterinary Doctors",
      "Veterinary Hospitals",
      "Podiatrist Doctors",
      "Trauma Centres",
      "Anesthesiologists",
      "Dental Hospitals",
      "Nutritionists",
      "Treatments For Back Pain",
      "Knee Pain Treatment",
      "Jan Aushadhi Kendra",
    ];

    const trendingSearches = [
      "Hotels",
      "Real Estate Agents",
      "Work From Home Jobs",
      "Internet Service Providers",
      "B Ed Colleges",
      "Air Ticketing Agents",
      "News Channels",
      "Education Consultants",
      "CBSE Tutorials",
      "Income Tax Consultants",
      "Electronic Goods Repair & Services",
      "Battery Operated Scooter Dealers-OLA",
      "Blood Test Home Visit",
      "Fire Extinguisher Dealers",
      "Android Application Developers",
      "Tnpsc Tutorials",
      "DTH TV Broadcast Service Providers-Sun Direct",
      "Transporters For Hyderabad",
      "Mobile Phone Simcard Dealers-Jio",
      "Tour Packages For Goa",
      "Kite Dealers",
      "Transporters For Gujarat",
      "Sex Education Centres",
      "Bitcoin Services",
      "News Agencies",
      "Microsoft Excel Advanced Training Institutes",
      "Ibps Bank Exam Tutorials",
      "Transporters For Chennai",
      "Tutorials For UGC Net Exam",
      "Online Tutorials",
      "Rbse Schools",
      "MCA Institutes",
      "Tutorials For Ctet",
      "3 Tesla MRI Scanning Centres",
      "Insurance Agents-Star Health",
      "Water Suppliers (More Than 5000 Litres)",
      "Mata Ki Chowki Organisers",
      "Event Organisers For Navratri",
      "Matrimonial Bureaus For Telugu",
      "Commercial Vehicle Dealers-Tata Motors",
      "Demat Account Services",
      "GST Return Filing Services",
      "Lawyers For Income Tax",
      "Internet Payment Gateway Solution Providers",
      "Wrist Watch Dealers-Rolex",
      "Housing Society Management Services",
      "Property Tax Consultants",
      "Tutorials For DSSSB",
      "ID Card Printer Dealers",
      "Dairy Product Retailers-Amul",
    ];

    const dealsAndOffers = [
      "Kotak Mahindra Banks",
      "INOX Cinemas",
      "Canara Banks",
      "Ratnakar Banks",
      "PVR Cinemas",
      "ICICI Banks",
      "HDFC Banks",
      "AU Small Finance Bank",
      "Bank Of Maharashtra",
      "Bank Of India",
      "Axis Banks",
      "IDFC First Banks",
      "Maharashtra Gramin Banks",
      "Catholic Syrian Banks",
      "Saraswat Co Operative Banks",
      "Punjab & Sind Banks",
      "State Bank Of India",
      "Union Bank Of India",
      "Punjab National Banks",
      "Bank Of Baroda",
      "Lifestyle Stores",
      "Behrouz Biryani",
      "Fastrack",
      "The Good Bowl",
      "Sony",
      "Yes Banks",
      "Croma",
      "Dell Exclusive Stores",
      "Beverly Hills Polo Club",
      "Joyalukkas Jewellery",
      "Kalyan Jewellers",
      "Flying Machine",
      "Lenovo Exclusive Store",
      "Reliance Digital",
      "Vijay Sales",
      "Duroflex",
      "Anytime Fitness",
      "Kromakay Salons",
      "Toni&Guy Salons",
      "Bakingo",
      "Barbeque Nation Restaurants",
      "McDonalds",
      "Sweet Truth Cake Shops",
      "ALDO Stores",
      "Helios",
      "Inglot Stores",
      "LEE Stores",
      "Max Stores",
      "US Polo Assn",
      "Wrangler",
      "Levi's",
      "Apple Store",
      "IFB Point",
      "LG",
      "Oppo Exclusive Showroom",
      "Federal Banks",
      "IDBI Banks",
      "Bandhan Banks",
      "DBS Banks",
      "Karur Vysya Banks",
      "Indusind Banks",
      "Central Bank Of India",
    ];
    const futureTocuhCollection = [
      "Travel & Tourism",
      "Beauty & Fashion",
      "Health & Fitness",
      "Food & Beverage",
      "Finance",
      "On Demand Services",
      "Home & Living",
      "Education & Career",
      "Recreation",
      "JD Business Guide",
    ];

    const popularCities = [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Ahmedabad",
      "Kolkata",
      "Jaipur",
      "Chandigarh",
      "Coimbatore",
      "Lucknow",
      "Surat",
      "Indore",
      "Patna",
      "Nagpur",
      "Ernakulam",
      "Bhopal",
      "Vadodara",
      "Ludhiana",
      "Kanpur",
      "Nashik",
      "Varanasi",
      "Visakhapatnam",
      "Rajkot",
      "Raipur-Chhattisgarh",
      "Vijayawada",
      "Madurai",
      "Ranchi",
      "Goa",
      "Thiruvananthapuram",
      "Bhubaneshwar",
      "Allahabad",
      "Aurangabad-Maharashtra",
      "Dehradun",
      "Mysore",
      "Trichy",
      "Guwahati",
      "Agra",
      "Kozhikode",
      "Jodhpur",
      "Thrissur",
      "Kolhapur",
      "Salem",
      "Meerut",
      "Mangalore",
      "Gorakhpur",
      "Jabalpur",
      "Jalandhar",
      "Gwalior",
    ];

    return (
      <div className="space-y-8">
        <div className="mt-3 flex flex-wrap gap-x-2">
          {services.map((elm, i) => (
              <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
          ))}
        </div>

        <div className="">
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Trending Searches
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {trendingSearches.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Deals and Offers
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {dealsAndOffers.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Explore Future Tocuh Collections
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {futureTocuhCollection.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Popular Cities
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {popularCities.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  const HomeService = () => {
    const services = [
      "Beds On Rent",
      "Carpenters",
      "Carpentry Contractors",
      "Chicken Home Delivery",
      "Cleaning Services",
      "Cleaning Services For Drainage",
      "Computerised Duplicate Key Makers",
      "Dry Cleaners",
      "Duplicate Key Makers",
      "Electricians",
      "Facility Management Services",
      "Furnitures On Hire",
      "Grocery Home Delivery Services",
      "Housekeeping Services",
      "Laundry Services",
      "Painting Contractors",
      "Pest Control Services",
      "Plumbers",
      "Plumbing Contractors",
      "Residential Pest Control Services",
      "Sofas On Rent",
      "Vegetable Home Delivery Services",
      "Water Tank Cleaning Services",
      "24 Hours Duplicate Key Makers",
      "Carpet Cleaning Services",
      "Sofa Cleaning Services",
      "Chair Repair & Services",
      "Bathroom Cleaning Services",
      "Home Decor Dealers",
      "Carpet Shampooing Services",
      "Sofa Set Repair & Services",
      "Toilet Cleaning Services",
      "Residential Cleaning Services",
      "Furniture Repair & Services",
      "Sewage Cleaning Services",
      "24 Hours Water Suppliers",
      "Mattress On Rent",
      "House Painters",
      "Sofa Repair & Services",
      "Septic Tank Cleaning Services",
      "Electricians For Residence",
      "Milk Home Delivery Services",
      "Pest Control Services For Termite",
      "24 Hours Electricians",
      "Supermarkets Home Delivery",
      "Deep Cleaning Services",
      "Pest Control Services For Bed Bugs",
      "Shoe Laundry Services",
      "Home Delivery Laundry Services",
      "Kitchen Cleaning Services",
    ];

    const trendingSearches = [
      "Hotels",
      "Real Estate Agents",
      "Work From Home Jobs",
      "Internet Service Providers",
      "B Ed Colleges",
      "Air Ticketing Agents",
      "News Channels",
      "Education Consultants",
      "CBSE Tutorials",
      "Income Tax Consultants",
      "Electronic Goods Repair & Services",
      "Battery Operated Scooter Dealers-OLA",
      "Blood Test Home Visit",
      "Fire Extinguisher Dealers",
      "Android Application Developers",
      "Tnpsc Tutorials",
      "DTH TV Broadcast Service Providers-Sun Direct",
      "Transporters For Hyderabad",
      "Mobile Phone Simcard Dealers-Jio",
      "Tour Packages For Goa",
      "Kite Dealers",
      "Transporters For Gujarat",
      "Sex Education Centres",
      "Bitcoin Services",
      "News Agencies",
      "Microsoft Excel Advanced Training Institutes",
      "Ibps Bank Exam Tutorials",
      "Transporters For Chennai",
      "Tutorials For UGC Net Exam",
      "Online Tutorials",
      "Rbse Schools",
      "MCA Institutes",
      "Tutorials For Ctet",
      "3 Tesla MRI Scanning Centres",
      "Insurance Agents-Star Health",
      "Water Suppliers (More Than 5000 Litres)",
      "Mata Ki Chowki Organisers",
      "Event Organisers For Navratri",
      "Matrimonial Bureaus For Telugu",
      "Commercial Vehicle Dealers-Tata Motors",
      "Demat Account Services",
      "GST Return Filing Services",
      "Lawyers For Income Tax",
      "Internet Payment Gateway Solution Providers",
      "Wrist Watch Dealers-Rolex",
      "Housing Society Management Services",
      "Property Tax Consultants",
      "Tutorials For DSSSB",
      "ID Card Printer Dealers",
      "Dairy Product Retailers-Amul",
    ];

    const dealsAndOffers = [
      "Kotak Mahindra Banks",
      "INOX Cinemas",
      "Canara Banks",
      "Ratnakar Banks",
      "PVR Cinemas",
      "ICICI Banks",
      "HDFC Banks",
      "AU Small Finance Bank",
      "Bank Of Maharashtra",
      "Bank Of India",
      "Axis Banks",
      "IDFC First Banks",
      "Maharashtra Gramin Banks",
      "Catholic Syrian Banks",
      "Saraswat Co Operative Banks",
      "Punjab & Sind Banks",
      "State Bank Of India",
      "Union Bank Of India",
      "Punjab National Banks",
      "Bank Of Baroda",
      "Lifestyle Stores",
      "Behrouz Biryani",
      "Fastrack",
      "The Good Bowl",
      "Sony",
      "Yes Banks",
      "Croma",
      "Dell Exclusive Stores",
      "Beverly Hills Polo Club",
      "Joyalukkas Jewellery",
      "Kalyan Jewellers",
      "Flying Machine",
      "Lenovo Exclusive Store",
      "Reliance Digital",
      "Vijay Sales",
      "Duroflex",
      "Anytime Fitness",
      "Kromakay Salons",
      "Toni&Guy Salons",
      "Bakingo",
      "Barbeque Nation Restaurants",
      "McDonalds",
      "Sweet Truth Cake Shops",
      "ALDO Stores",
      "Helios",
      "Inglot Stores",
      "LEE Stores",
      "Max Stores",
      "US Polo Assn",
      "Wrangler",
      "Levi's",
      "Apple Store",
      "IFB Point",
      "LG",
      "Oppo Exclusive Showroom",
      "Federal Banks",
      "IDBI Banks",
      "Bandhan Banks",
      "DBS Banks",
      "Karur Vysya Banks",
      "Indusind Banks",
      "Central Bank Of India",
    ];
    const futureTocuhCollection = [
      "Travel & Tourism",
      "Beauty & Fashion",
      "Health & Fitness",
      "Food & Beverage",
      "Finance",
      "On Demand Services",
      "Home & Living",
      "Education & Career",
      "Recreation",
      "JD Business Guide",
    ];

    const popularCities = [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Ahmedabad",
      "Kolkata",
      "Jaipur",
      "Chandigarh",
      "Coimbatore",
      "Lucknow",
      "Surat",
      "Indore",
      "Patna",
      "Nagpur",
      "Ernakulam",
      "Bhopal",
      "Vadodara",
      "Ludhiana",
      "Kanpur",
      "Nashik",
      "Varanasi",
      "Visakhapatnam",
      "Rajkot",
      "Raipur-Chhattisgarh",
      "Vijayawada",
      "Madurai",
      "Ranchi",
      "Goa",
      "Thiruvananthapuram",
      "Bhubaneshwar",
      "Allahabad",
      "Aurangabad-Maharashtra",
      "Dehradun",
      "Mysore",
      "Trichy",
      "Guwahati",
      "Agra",
      "Kozhikode",
      "Jodhpur",
      "Thrissur",
      "Kolhapur",
      "Salem",
      "Meerut",
      "Mangalore",
      "Gorakhpur",
      "Jabalpur",
      "Jalandhar",
      "Gwalior",
    ];

    return (
      <div className="space-y-8">
        <div className="mt-3 flex flex-wrap gap-x-2">
          {services.map((elm, i) => (
              <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
          ))}
        </div>

        <div className="">
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Trending Searches
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {trendingSearches.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Deals and Offers
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {dealsAndOffers.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Explore Future Tocuh Collections
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {futureTocuhCollection.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Popular Cities
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {popularCities.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  const Others = () => {
    const services = [
      "Ayurvedic Doctors",
      "Beauty Spas",
      "Bicycle Dealers",
      "Book Shops",
      "Cinema Halls",
      "Consultants",
      "Departmental Stores",
      "Dog Trainers",
      "Drug De Addiction Centres",
      "Estate Agents",
      "Flour Mills",
      "Flower Shops",
      "General Stores",
      "Gift Shops",
      "Grocery Stores",
      "Homeopathic Doctors",
      "Interior Designers",
      "Jewellery Showrooms",
      "Machinery Manufacturers",
      "Malls",
      "Music Shops",
      "Office Supplies",
      "Orthopaedic Doctors",
      "Paediatricians",
      "Pathology Labs",
      "Pet Shops",
      "Provision Stores",
      "Shoe Dealers",
      "Sonography Centres",
      "Sports Goods Dealers",
      "Stationery Shops",
      "Supermarkets",
      "Toy Shops",
      "Gynaecologist & Obstetrician Doctors",
      "Electrical Shops",
      "Printing Services",
      "AC Repair & Services",
      "Sexologist Doctors",
      "General Physician Doctors",
      "Urologist Doctors",
      "Paying Guest Accommodations",
      "Cooks On Hire",
      "Work From Home Jobs",
      "Cowshed",
      "Mobile Phone Dealers",
      "Paan Shops",
      "D Mart",
      "Smart Watch Dealers",
    ];

    const trendingSearches = [
      "Hotels",
      "Real Estate Agents",
      "Work From Home Jobs",
      "Internet Service Providers",
      "B Ed Colleges",
      "Air Ticketing Agents",
      "News Channels",
      "Education Consultants",
      "CBSE Tutorials",
      "Income Tax Consultants",
      "Electronic Goods Repair & Services",
      "Battery Operated Scooter Dealers-OLA",
      "Blood Test Home Visit",
      "Fire Extinguisher Dealers",
      "Android Application Developers",
      "Tnpsc Tutorials",
      "DTH TV Broadcast Service Providers-Sun Direct",
      "Transporters For Hyderabad",
      "Mobile Phone Simcard Dealers-Jio",
      "Tour Packages For Goa",
      "Kite Dealers",
      "Transporters For Gujarat",
      "Sex Education Centres",
      "Bitcoin Services",
      "News Agencies",
      "Microsoft Excel Advanced Training Institutes",
      "Ibps Bank Exam Tutorials",
      "Transporters For Chennai",
      "Tutorials For UGC Net Exam",
      "Online Tutorials",
      "Rbse Schools",
      "MCA Institutes",
      "Tutorials For Ctet",
      "3 Tesla MRI Scanning Centres",
      "Insurance Agents-Star Health",
      "Water Suppliers (More Than 5000 Litres)",
      "Mata Ki Chowki Organisers",
      "Event Organisers For Navratri",
      "Matrimonial Bureaus For Telugu",
      "Commercial Vehicle Dealers-Tata Motors",
      "Demat Account Services",
      "GST Return Filing Services",
      "Lawyers For Income Tax",
      "Internet Payment Gateway Solution Providers",
      "Wrist Watch Dealers-Rolex",
      "Housing Society Management Services",
      "Property Tax Consultants",
      "Tutorials For DSSSB",
      "ID Card Printer Dealers",
      "Dairy Product Retailers-Amul",
    ];

    const dealsAndOffers = [
      "Kotak Mahindra Banks",
      "INOX Cinemas",
      "Canara Banks",
      "Ratnakar Banks",
      "PVR Cinemas",
      "ICICI Banks",
      "HDFC Banks",
      "AU Small Finance Bank",
      "Bank Of Maharashtra",
      "Bank Of India",
      "Axis Banks",
      "IDFC First Banks",
      "Maharashtra Gramin Banks",
      "Catholic Syrian Banks",
      "Saraswat Co Operative Banks",
      "Punjab & Sind Banks",
      "State Bank Of India",
      "Union Bank Of India",
      "Punjab National Banks",
      "Bank Of Baroda",
      "Lifestyle Stores",
      "Behrouz Biryani",
      "Fastrack",
      "The Good Bowl",
      "Sony",
      "Yes Banks",
      "Croma",
      "Dell Exclusive Stores",
      "Beverly Hills Polo Club",
      "Joyalukkas Jewellery",
      "Kalyan Jewellers",
      "Flying Machine",
      "Lenovo Exclusive Store",
      "Reliance Digital",
      "Vijay Sales",
      "Duroflex",
      "Anytime Fitness",
      "Kromakay Salons",
      "Toni&Guy Salons",
      "Bakingo",
      "Barbeque Nation Restaurants",
      "McDonalds",
      "Sweet Truth Cake Shops",
      "ALDO Stores",
      "Helios",
      "Inglot Stores",
      "LEE Stores",
      "Max Stores",
      "US Polo Assn",
      "Wrangler",
      "Levi's",
      "Apple Store",
      "IFB Point",
      "LG",
      "Oppo Exclusive Showroom",
      "Federal Banks",
      "IDBI Banks",
      "Bandhan Banks",
      "DBS Banks",
      "Karur Vysya Banks",
      "Indusind Banks",
      "Central Bank Of India",
    ];
    const futureTocuhCollection = [
      "Travel & Tourism",
      "Beauty & Fashion",
      "Health & Fitness",
      "Food & Beverage",
      "Finance",
      "On Demand Services",
      "Home & Living",
      "Education & Career",
      "Recreation",
      "JD Business Guide",
    ];

    const popularCities = [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Ahmedabad",
      "Kolkata",
      "Jaipur",
      "Chandigarh",
      "Coimbatore",
      "Lucknow",
      "Surat",
      "Indore",
      "Patna",
      "Nagpur",
      "Ernakulam",
      "Bhopal",
      "Vadodara",
      "Ludhiana",
      "Kanpur",
      "Nashik",
      "Varanasi",
      "Visakhapatnam",
      "Rajkot",
      "Raipur-Chhattisgarh",
      "Vijayawada",
      "Madurai",
      "Ranchi",
      "Goa",
      "Thiruvananthapuram",
      "Bhubaneshwar",
      "Allahabad",
      "Aurangabad-Maharashtra",
      "Dehradun",
      "Mysore",
      "Trichy",
      "Guwahati",
      "Agra",
      "Kozhikode",
      "Jodhpur",
      "Thrissur",
      "Kolhapur",
      "Salem",
      "Meerut",
      "Mangalore",
      "Gorakhpur",
      "Jabalpur",
      "Jalandhar",
      "Gwalior",
    ];

    return (
      <div className="space-y-8">
        <div className="mt-3 flex flex-wrap gap-x-2">
          {services.map((elm, i) => (
              <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
          ))}
        </div>

        <div className="">
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Trending Searches
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {trendingSearches.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Deals and Offers
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {dealsAndOffers.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Explore Future Tocuh Collections
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {futureTocuhCollection.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Popular Cities
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {popularCities.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  const TransportationShipping = () => {
    const services = [
      "Courier Services",
      "Courier Services For Delhi",
      "Courier Services For Mumbai",
      "Courier Services Blue Dart",
      "Courier Services DTDC",
      "Packers And Movers",
      "Railway Parcel Services",
      "International Courier Services",
      "Courier Services Delhivery",
      "VRL Logistics",
      "Packers And Movers For Chennai",
      "Agarwal Packers And Movers",
      "DTDC Express",
      "DHL Express",
      "FedEx Express",
      "Delhivery",
      "DPD",
      "Flyking Courier",
      "Gati",
      "Trackon Couriers",
      "Ecom Express",
      "First Flight Courier",
      "Blue Dart Express",
      "Professional Couriers",
      "Legend",
      "TEJ Courier",
      "Skyline",
      "Pushpak Courier",
      "Safexpress",
      "Airways Courier",
      "Xpressbees",
      "Shree Anjani Courier",
      "Shree Maruti Courier",
      "Madhur Courier",
      "Shree Nandan Courier",
      "Garudavega Courier",
      "Akash Ganga Courier",
      "Shree Tirupati Courier",
      "Skyking Courier",
      "Kerry Indev Express",
      "TCI Express",
      "Navata Road Transport",
      "ACPL",
      "Shipping Corporation of India",
    ];

    const trendingSearches = [
      "Hotels",
      "Real Estate Agents",
      "Work From Home Jobs",
      "Internet Service Providers",
      "B Ed Colleges",
      "Air Ticketing Agents",
      "News Channels",
      "Education Consultants",
      "CBSE Tutorials",
      "Income Tax Consultants",
      "Electronic Goods Repair & Services",
      "Battery Operated Scooter Dealers-OLA",
      "Blood Test Home Visit",
      "Fire Extinguisher Dealers",
      "Android Application Developers",
      "Tnpsc Tutorials",
      "DTH TV Broadcast Service Providers-Sun Direct",
      "Transporters For Hyderabad",
      "Mobile Phone Simcard Dealers-Jio",
      "Tour Packages For Goa",
      "Kite Dealers",
      "Transporters For Gujarat",
      "Sex Education Centres",
      "Bitcoin Services",
      "News Agencies",
      "Microsoft Excel Advanced Training Institutes",
      "Ibps Bank Exam Tutorials",
      "Transporters For Chennai",
      "Tutorials For UGC Net Exam",
      "Online Tutorials",
      "Rbse Schools",
      "MCA Institutes",
      "Tutorials For Ctet",
      "3 Tesla MRI Scanning Centres",
      "Insurance Agents-Star Health",
      "Water Suppliers (More Than 5000 Litres)",
      "Mata Ki Chowki Organisers",
      "Event Organisers For Navratri",
      "Matrimonial Bureaus For Telugu",
      "Commercial Vehicle Dealers-Tata Motors",
      "Demat Account Services",
      "GST Return Filing Services",
      "Lawyers For Income Tax",
      "Internet Payment Gateway Solution Providers",
      "Wrist Watch Dealers-Rolex",
      "Housing Society Management Services",
      "Property Tax Consultants",
      "Tutorials For DSSSB",
      "ID Card Printer Dealers",
      "Dairy Product Retailers-Amul",
    ];

    const dealsAndOffers = [
      "Kotak Mahindra Banks",
      "INOX Cinemas",
      "Canara Banks",
      "Ratnakar Banks",
      "PVR Cinemas",
      "ICICI Banks",
      "HDFC Banks",
      "AU Small Finance Bank",
      "Bank Of Maharashtra",
      "Bank Of India",
      "Axis Banks",
      "IDFC First Banks",
      "Maharashtra Gramin Banks",
      "Catholic Syrian Banks",
      "Saraswat Co Operative Banks",
      "Punjab & Sind Banks",
      "State Bank Of India",
      "Union Bank Of India",
      "Punjab National Banks",
      "Bank Of Baroda",
      "Lifestyle Stores",
      "Behrouz Biryani",
      "Fastrack",
      "The Good Bowl",
      "Sony",
      "Yes Banks",
      "Croma",
      "Dell Exclusive Stores",
      "Beverly Hills Polo Club",
      "Joyalukkas Jewellery",
      "Kalyan Jewellers",
      "Flying Machine",
      "Lenovo Exclusive Store",
      "Reliance Digital",
      "Vijay Sales",
      "Duroflex",
      "Anytime Fitness",
      "Kromakay Salons",
      "Toni&Guy Salons",
      "Bakingo",
      "Barbeque Nation Restaurants",
      "McDonalds",
      "Sweet Truth Cake Shops",
      "ALDO Stores",
      "Helios",
      "Inglot Stores",
      "LEE Stores",
      "Max Stores",
      "US Polo Assn",
      "Wrangler",
      "Levi's",
      "Apple Store",
      "IFB Point",
      "LG",
      "Oppo Exclusive Showroom",
      "Federal Banks",
      "IDBI Banks",
      "Bandhan Banks",
      "DBS Banks",
      "Karur Vysya Banks",
      "Indusind Banks",
      "Central Bank Of India",
    ];
    const futureTocuhCollection = [
      "Travel & Tourism",
      "Beauty & Fashion",
      "Health & Fitness",
      "Food & Beverage",
      "Finance",
      "On Demand Services",
      "Home & Living",
      "Education & Career",
      "Recreation",
      "JD Business Guide",
    ];

    const popularCities = [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Ahmedabad",
      "Kolkata",
      "Jaipur",
      "Chandigarh",
      "Coimbatore",
      "Lucknow",
      "Surat",
      "Indore",
      "Patna",
      "Nagpur",
      "Ernakulam",
      "Bhopal",
      "Vadodara",
      "Ludhiana",
      "Kanpur",
      "Nashik",
      "Varanasi",
      "Visakhapatnam",
      "Rajkot",
      "Raipur-Chhattisgarh",
      "Vijayawada",
      "Madurai",
      "Ranchi",
      "Goa",
      "Thiruvananthapuram",
      "Bhubaneshwar",
      "Allahabad",
      "Aurangabad-Maharashtra",
      "Dehradun",
      "Mysore",
      "Trichy",
      "Guwahati",
      "Agra",
      "Kozhikode",
      "Jodhpur",
      "Thrissur",
      "Kolhapur",
      "Salem",
      "Meerut",
      "Mangalore",
      "Gorakhpur",
      "Jabalpur",
      "Jalandhar",
      "Gwalior",
    ];

    return (
      <div className="space-y-8">
        <div className="mt-3 flex flex-wrap gap-x-2">
          {services.map((elm, i) => (
              <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
          ))}
        </div>

        <div className="">
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Trending Searches
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {trendingSearches.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Deals and Offers
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {dealsAndOffers.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Explore Future Tocuh Collections
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {futureTocuhCollection.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Popular Cities
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {popularCities.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  const Travel = () => {
    const services = [
      "Bike On Rent",
      "Bus Services",
      "Bus Ticketing Agents",
      "Car Rental",
      "Car Rental For Outstation",
      "Car Rental For Wedding",
      "Immigration Consultants",
      "Railway Ticketing Agents",
      "Taxi Services",
      "Tour Operators",
      "Tour Packages",
      "Tour Packages For Andaman",
      "Tour Packages For Bali",
      "Tour Packages For Goa",
      "Tour Packages For Kashmir",
      "Tour Packages For Kerala",
      "Tour Packages For Ladakh",
      "Tour Packages For Leh",
      "Tour Packages For Manali",
      "Tour Packages For Ooty",
      "Tourism",
      "Travel Agents",
      "Domestic Tour Packages",
      "Mini Bus On Hire",
      "Bus On Hire",
      "Caravan On Rent",
      "International Tour Packages",
      "Tempo Travellers On Hire",
      "Scooters On Rent",
      "Car Rental For Self Driven",
      "Vintage Car Rental",
      "Luxury Car Rental",
      "Bicycle On Rent",
    ];

    const trendingSearches = [
      "Hotels",
      "Real Estate Agents",
      "Work From Home Jobs",
      "Internet Service Providers",
      "B Ed Colleges",
      "Air Ticketing Agents",
      "News Channels",
      "Education Consultants",
      "CBSE Tutorials",
      "Income Tax Consultants",
      "Electronic Goods Repair & Services",
      "Battery Operated Scooter Dealers-OLA",
      "Blood Test Home Visit",
      "Fire Extinguisher Dealers",
      "Android Application Developers",
      "Tnpsc Tutorials",
      "DTH TV Broadcast Service Providers-Sun Direct",
      "Transporters For Hyderabad",
      "Mobile Phone Simcard Dealers-Jio",
      "Tour Packages For Goa",
      "Kite Dealers",
      "Transporters For Gujarat",
      "Sex Education Centres",
      "Bitcoin Services",
      "News Agencies",
      "Microsoft Excel Advanced Training Institutes",
      "Ibps Bank Exam Tutorials",
      "Transporters For Chennai",
      "Tutorials For UGC Net Exam",
      "Online Tutorials",
      "Rbse Schools",
      "MCA Institutes",
      "Tutorials For Ctet",
      "3 Tesla MRI Scanning Centres",
      "Insurance Agents-Star Health",
      "Water Suppliers (More Than 5000 Litres)",
      "Mata Ki Chowki Organisers",
      "Event Organisers For Navratri",
      "Matrimonial Bureaus For Telugu",
      "Commercial Vehicle Dealers-Tata Motors",
      "Demat Account Services",
      "GST Return Filing Services",
      "Lawyers For Income Tax",
      "Internet Payment Gateway Solution Providers",
      "Wrist Watch Dealers-Rolex",
      "Housing Society Management Services",
      "Property Tax Consultants",
      "Tutorials For DSSSB",
      "ID Card Printer Dealers",
      "Dairy Product Retailers-Amul",
    ];

    const dealsAndOffers = [
      "Kotak Mahindra Banks",
      "INOX Cinemas",
      "Canara Banks",
      "Ratnakar Banks",
      "PVR Cinemas",
      "ICICI Banks",
      "HDFC Banks",
      "AU Small Finance Bank",
      "Bank Of Maharashtra",
      "Bank Of India",
      "Axis Banks",
      "IDFC First Banks",
      "Maharashtra Gramin Banks",
      "Catholic Syrian Banks",
      "Saraswat Co Operative Banks",
      "Punjab & Sind Banks",
      "State Bank Of India",
      "Union Bank Of India",
      "Punjab National Banks",
      "Bank Of Baroda",
      "Lifestyle Stores",
      "Behrouz Biryani",
      "Fastrack",
      "The Good Bowl",
      "Sony",
      "Yes Banks",
      "Croma",
      "Dell Exclusive Stores",
      "Beverly Hills Polo Club",
      "Joyalukkas Jewellery",
      "Kalyan Jewellers",
      "Flying Machine",
      "Lenovo Exclusive Store",
      "Reliance Digital",
      "Vijay Sales",
      "Duroflex",
      "Anytime Fitness",
      "Kromakay Salons",
      "Toni&Guy Salons",
      "Bakingo",
      "Barbeque Nation Restaurants",
      "McDonalds",
      "Sweet Truth Cake Shops",
      "ALDO Stores",
      "Helios",
      "Inglot Stores",
      "LEE Stores",
      "Max Stores",
      "US Polo Assn",
      "Wrangler",
      "Levi's",
      "Apple Store",
      "IFB Point",
      "LG",
      "Oppo Exclusive Showroom",
      "Federal Banks",
      "IDBI Banks",
      "Bandhan Banks",
      "DBS Banks",
      "Karur Vysya Banks",
      "Indusind Banks",
      "Central Bank Of India",
    ];
    const futureTocuhCollection = [
      "Travel & Tourism",
      "Beauty & Fashion",
      "Health & Fitness",
      "Food & Beverage",
      "Finance",
      "On Demand Services",
      "Home & Living",
      "Education & Career",
      "Recreation",
      "JD Business Guide",
    ];

    const popularCities = [
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Pune",
      "Ahmedabad",
      "Kolkata",
      "Jaipur",
      "Chandigarh",
      "Coimbatore",
      "Lucknow",
      "Surat",
      "Indore",
      "Patna",
      "Nagpur",
      "Ernakulam",
      "Bhopal",
      "Vadodara",
      "Ludhiana",
      "Kanpur",
      "Nashik",
      "Varanasi",
      "Visakhapatnam",
      "Rajkot",
      "Raipur-Chhattisgarh",
      "Vijayawada",
      "Madurai",
      "Ranchi",
      "Goa",
      "Thiruvananthapuram",
      "Bhubaneshwar",
      "Allahabad",
      "Aurangabad-Maharashtra",
      "Dehradun",
      "Mysore",
      "Trichy",
      "Guwahati",
      "Agra",
      "Kozhikode",
      "Jodhpur",
      "Thrissur",
      "Kolhapur",
      "Salem",
      "Meerut",
      "Mangalore",
      "Gorakhpur",
      "Jabalpur",
      "Jalandhar",
      "Gwalior",
    ];

    return (
      <div className="space-y-8">
        <div className="mt-3 flex flex-wrap gap-x-2">
          {services.map((elm, i) => (
              <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
          ))}
        </div>

        <div className="">
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Trending Searches
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {trendingSearches.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Deals and Offers
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {dealsAndOffers.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Explore Future Tocuh Collections
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {futureTocuhCollection.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-display text-base font-bold capitalize text-night-900">
            Popular Cities
          </h6>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {popularCities.map((elm, i) => (
                <span key={i} className="flex items-center gap-2 text-sm leading-7 text-slate-500 transition hover:text-brand-600">{elm}<span aria-hidden className="h-1 w-1 rounded-full bg-slate-300" /></span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const footerTabs = [
    { tab: <Accommodation />, tabval: "Accommodation" },
    { tab: <Astrology />, tabval: "Astrology" },
    { tab: <Automobiles />, tabval: "Automobiles & Two Wheelers" },
    { tab: <Beauty />, tabval: "Beauty, Fitness & Sports" },
    { tab: <Business />, tabval: "Business & Legal" },
    { tab: <Education />, tabval: "Education" },
    { tab: <EventsWeddings />, tabval: "Events & Weddings" },
    { tab: <FoodRestaurant />, tabval: "Food & Restaurants" },
    { tab: <HealthMedical />, tabval: "Health & Medical" },
    { tab: <HomeService />, tabval: "Home Services" },
    { tab: <Others />, tabval: "Others" },
    { tab: <TransportationShipping />, tabval: "Transportation & Shipping" },
    { tab: <Travel />, tabval: "Travel" },
  ];
  const [currentTab, setCurrentTab] = useState("Accommodation");
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="relative bg-mist py-14 sm:py-20">
      <div className="container-x">
        <SectionHeading
          align="left"
          eyebrow="Directory"
          title="Popular"
          highlight="categories"
          subtitle="Browse the most searched services, deals and cities."
        />

        <div className="no-scrollbar -mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0" role="tablist">
          {footerTabs.map((elm) => {
            const active = elm.tabval == currentTab;
            return (
              <button
                key={elm.tabval}
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setCurrentTab(elm.tabval);
                  setShowAll(false);
                }}
                className={`relative shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active ? "text-white" : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-brand-600"
                }`}
              >
                {active && (
                  <motion.span layoutId="popular-tab" className="absolute inset-0 rounded-full bg-night-900" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                )}
                <span className="relative">{elm.tabval}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="relative mt-6 rounded-3xl bg-white p-5 shadow-card sm:p-8"
            role="tabpanel"
          >
            <div className={`overflow-hidden transition-[max-height] duration-500 ${showAll ? "max-h-[9999px]" : "max-h-[420px] sm:max-h-[520px]"}`}>
              {footerTabs.find((elm) => elm.tabval == currentTab)?.tab}
            </div>

            <div className="mt-4 flex justify-center">
              <button type="button" onClick={() => setShowAll((v) => !v)} aria-expanded={showAll} className="btn-ghost">
                {showAll ? "Show less" : "Show all"}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
