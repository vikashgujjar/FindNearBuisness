"use client";
import React from "react";
import {
  FaRankingStar, FaCircleCheck, FaStar, FaMagnifyingGlassChart, FaBullseye, FaShareNodes, FaPhone, FaChartLine,
  FaComments, FaTags, FaPalette, FaGoogle, FaStarHalfStroke, FaMobileScreen, FaHeadset, FaCartShopping,
  FaFileInvoiceDollar, FaRobot, FaPager, FaEnvelopesBulk, FaCalendarCheck, FaMapLocationDot, FaQrcode,
  FaBullhorn, FaWhatsapp, FaGift, FaReply, FaVideo,
} from "react-icons/fa6";
import { SectionHeading } from "../ui/decor";
import { Stagger, StaggerItem } from "../ui/motion";

const features = [
  ["Premium Listing", "Boost your business visibility with priority placement.", FaRankingStar],
  ["Verified Badge", "Gain customer trust with a verified business profile.", FaCircleCheck],
  ["Customer Reviews", "Showcase authentic customer feedback and testimonials.", FaStar],
  ["SEO Optimization", "Improve search rankings and attract more visitors.", FaMagnifyingGlassChart],
  ["Lead Generation", "Get high-quality leads directly from potential customers.", FaBullseye],
  ["Social Media Integration", "Connect your business with popular social media platforms.", FaShareNodes],
  ["Call Tracking", "Monitor customer calls and track business inquiries.", FaPhone],
  ["Real-time Analytics", "Get insights into customer engagement and performance.", FaChartLine],
  ["Instant Chat Support", "Engage with customers through real-time chat assistance.", FaComments],
  ["Business Promotions", "Launch exclusive offers and promotions to attract customers.", FaTags],
  ["Custom Branding", "Personalize your business profile with a unique brand identity.", FaPalette],
  ["Google My Business Sync", "Sync your listing with Google for better reach.", FaGoogle],
  ["Business Ratings", "Get star ratings to enhance credibility and reputation.", FaStarHalfStroke],
  ["Mobile Optimization", "Ensure your business profile looks great on all devices.", FaMobileScreen],
  ["24/7 Customer Support", "Access round-the-clock assistance for any queries.", FaHeadset],
  ["E-commerce Integration", "Sell products directly from your business listing.", FaCartShopping],
  ["Automated Invoicing", "Generate and manage invoices for smooth transactions.", FaFileInvoiceDollar],
  ["AI-Powered Recommendations", "Get personalized suggestions to optimize your business listing.", FaRobot],
  ["Customizable Business Page", "Create a tailored business page with images and descriptions.", FaPager],
  ["Email Marketing Tools", "Reach out to customers with targeted email campaigns.", FaEnvelopesBulk],
  ["Online Appointment Scheduling", "Let customers book appointments seamlessly online.", FaCalendarCheck],
  ["Multi-location Management", "Manage multiple business locations from a single dashboard.", FaMapLocationDot],
  ["QR Code Integration", "Generate QR codes to share your business details easily.", FaQrcode],
  ["Advertisement Boost", "Increase exposure with targeted ad campaigns.", FaBullhorn],
  ["WhatsApp Business Integration", "Allow customers to chat with you via WhatsApp directly.", FaWhatsapp],
  ["Loyalty Program", "Reward loyal customers with exclusive discounts and offers.", FaGift],
  ["Automated Replies", "Set up auto-responses for common customer queries.", FaReply],
  ["Video Listing", "Enhance your business profile with a promotional video.", FaVideo],
];

const tints = ["from-brand-500 to-magenta-500", "from-cyan-400 to-brand-500", "from-magenta-500 to-pin-500", "from-pin-400 to-magenta-500"];

export default function Features() {
  return (
    <section id="Features" className="scroll-mt-20 bg-mist py-16 sm:py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Features" title="Everything you need to" highlight="win customers" subtitle="28 tools that work together to put your business in front of the right people." />
        <Stagger gap={0.03} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map(([heading, desc, Icon], i) => (
            <StaggerItem key={heading} className="group panel p-5 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <span className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${tints[i % tints.length]} text-white transition duration-300 group-hover:rotate-6 group-hover:scale-110`}>
                <Icon />
              </span>
              <h3 className="mt-4 font-bold text-night-900">{heading}</h3>
              <p className="mt-1 text-sm text-slate-500">{desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-6 text-center text-xs text-slate-500">
          * To activate the Trust/Verified badge, the business must have its KYC verified and be rated at an average of 3.8+ stars.
        </p>
      </div>
    </section>
  );
}
