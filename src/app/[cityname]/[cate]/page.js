import React from "react";
import RealState from "@/app/Component/RealState";
import PinLocation from "@/app/Component/PinLocation";
import BusinessDirectory from "@/app/Component/BuinessDirectory";

// With `output: 'export'` every category page must be listed up front.
// These are the categories the site links to (navbar, home category grid, services).
const categories = [
  "Hotel", "Spa", "Astrologer", "Education", "Packer & Mover", "Wedding", "Hospital", "Real Estate", "AC Service",
  "Body Massage Centers", "Beauty Spa", "Car Hire", "Caterers", "Chartered Accountant", "Computer Training Institutes",
  "Courier Services", "Computer & Laptop Repair & Services", "Car Repair & Services", "Dermatologists", "Dentists",
  "Electricians", "Event Organizer", "Fabricators", "Furniture Repair Services", "House keeping Services", "Hobbies",
  "Interior Designers", "Internet Website Designers", "Jewellery Showrooms", "Lawyers", "Transporters", "Photographers",
  "Nursing Services", "Printing & Publishing Services", "Placement Services", "Pest Control Services",
  "Painting Contractors", "Packers & Movers", "Scrap Dealers", "Scrap Buyers", "Registration Consultants",
  "Security System", "Coaching", "Vocational training",
  "Wedding halls", "Hotel & Food", "Pet shop", "Digital Products", "Spa And Facial", "Sports", "Electricals",
  "Automobiles", "Transportation", "Hospitals", "Hotel And Resorts", "Technology", "Wedding Halls", "Pet Shop",
  "Restaurants", "Spa and Facial",
  "b2b", "All india", "packers and movers", "Order Food Online", "jobs", "movies", "spa & salon", "repair & service",
  "Doctor Appointment", "Real Estate Agents", "online Recharge & bill payment",
];

export function generateStaticParams() {
  const slugs = new Set(categories.map((c) => c.toLowerCase().trim().split(/\s+/).join("-")));
  return [...slugs].map((cate) => ({ cate }));
}

export default function page() {
  return (
    <>
      <PinLocation />
      <RealState />
      <BusinessDirectory />
    </>
  );
}
