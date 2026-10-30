import React from "react";
import { FaLocationDot, FaPhoneVolume, FaEnvelope, FaGlobe, FaFacebookF, FaTwitter } from "react-icons/fa6";
import BusinessDirectory from "../Component/BuinessDirectory";
import PinLocation from "../Component/PinLocation";
import { PageHero } from "../ui/page";
import { Reveal, Stagger, StaggerItem } from "../ui/motion";

export default function page() {
  return (
    <>
      <PinLocation />
      <PageHero
        eyebrow="Get in touch"
        title="Contact"
        highlight="Us"
        subtitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        waveFill="#F4F5FB"
      />

      <div className="bg-mist pb-4">
        <Stagger gap={0.1} className="container-x grid gap-5 md:grid-cols-3">
          <StaggerItem className="panel p-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow"><FaLocationDot /></span>
            <h2 className="mt-4 text-lg font-bold text-night-900">Address</h2>
            <h3 className="mt-3 text-sm font-semibold text-night-900">United States</h3>
            <p className="text-sm text-slate-500">28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</p>
            <h3 className="mt-3 text-sm font-semibold text-night-900">India</h3>
            <p className="text-sm text-slate-500">28800 Orchard Lake Road, Suite 180 Farmington, Chennai, India</p>
          </StaggerItem>
          <StaggerItem className="panel p-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cool-gradient text-white"><FaPhoneVolume /></span>
            <h2 className="mt-4 text-lg font-bold text-night-900">Contact Info</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-500">
              <li><b className="text-night-900">Support:</b> <a href="tel:+01254146354" className="hover:text-brand-600">+01 25414 6354</a></li>
              <li><b className="text-night-900">Enquiry:</b> <a href="tel:+0198674326" className="hover:text-brand-600">+01 9867 4326</a></li>
              <li className="flex items-center gap-2"><FaEnvelope className="text-brand-500" /> <a href="mailto:support@company.com" className="hover:text-brand-600">support@company.com</a></li>
            </ul>
          </StaggerItem>
          <StaggerItem className="panel p-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-magenta-500 to-pin-500 text-white"><FaGlobe /></span>
            <h2 className="mt-4 text-lg font-bold text-night-900">Website & Social Media</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="/contact" className="flex items-center gap-2 text-brand-600 hover:underline"><FaGlobe /> www.website.com</a></li>
              <li><a href="/contact" className="flex items-center gap-2 text-brand-600 hover:underline"><FaFacebookF /> Facebook</a></li>
              <li><a href="/contact" className="flex items-center gap-2 text-brand-600 hover:underline"><FaTwitter /> Twitter</a></li>
            </ul>
          </StaggerItem>
        </Stagger>

        <Reveal className="container-x mt-8">
          <div className="panel overflow-hidden p-2">
            <iframe
              title="Office location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d50266302.99089794!2d-89.26650700000002!3d39.739389!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b2d386f6e2619%3A0x7f15825064115956!2sIllinois%2C%20USA!5e0!3m2!1sen!2sin!4v1737005160216!5m2!1sen!2sin"
              className="h-72 w-full rounded-[1.25rem] border-0 sm:h-96 md:h-[450px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
      <BusinessDirectory />
    </>
  );
}
