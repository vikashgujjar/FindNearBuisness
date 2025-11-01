import React from "react";

export default function Features() {
    const features = [
        {
            heading: "Premium Listing",
            desc: "Boost your business visibility with priority placement.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/SearchVisibility_f.svg",
        },
        {
            heading: "Verified Badge",
            desc: "Gain customer trust with a verified business profile.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/VerifiedBadge_f.svg",
        },
        {
            heading: "Customer Reviews",
            desc: "Showcase authentic customer feedback and testimonials.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/Reviews_f.svg",
        },
        {
            heading: "SEO Optimization",
            desc: "Improve search rankings and attract more visitors.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/SEO_f.svg",
        },
        {
            heading: "Lead Generation",
            desc: "Get high-quality leads directly from potential customers.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/Leads_f.svg",
        },
        {
            heading: "Social Media Integration",
            desc: "Connect your business with popular social media platforms.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/SocialMedia_f.svg",
        },
        {
            heading: "Call Tracking",
            desc: "Monitor customer calls and track business inquiries.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/CallTracking_f.svg",
        },
        {
            heading: "Real-time Analytics",
            desc: "Get insights into customer engagement and performance.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/Analytics_f.svg",
        },
        {
            heading: "Instant Chat Support",
            desc: "Engage with customers through real-time chat assistance.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/ChatSupport_f.svg",
        },
        {
            heading: "Business Promotions",
            desc: "Launch exclusive offers and promotions to attract customers.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/Promotions_f.svg",
        },
        {
            heading: "Custom Branding",
            desc: "Personalize your business profile with a unique brand identity.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/Branding_f.svg",
        },
        {
            heading: "Google My Business Sync",
            desc: "Sync your listing with Google for better reach.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/GoogleSync_f.svg",
        },
        {
            heading: "Business Ratings",
            desc: "Get star ratings to enhance credibility and reputation.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/Ratings_f.svg",
        },
        {
            heading: "Mobile Optimization",
            desc: "Ensure your business profile looks great on all devices.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/Mobile_f.svg",
        },
        {
            heading: "24/7 Customer Support",
            desc: "Access round-the-clock assistance for any queries.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/Support_f.svg",
        },
        {
            heading: "E-commerce Integration",
            desc: "Sell products directly from your business listing.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/Ecommerce_f.svg",
        },
        {
            heading: "Automated Invoicing",
            desc: "Generate and manage invoices for smooth transactions.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/Invoicing_f.svg",
        },
        {
            heading: "AI-Powered Recommendations",
            desc: "Get personalized suggestions to optimize your business listing.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/AI_f.svg",
        },
        {
            heading: "Customizable Business Page",
            desc: "Create a tailored business page with images and descriptions.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/CustomPage_f.svg",
        },
        {
            heading: "Email Marketing Tools",
            desc: "Reach out to customers with targeted email campaigns.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/EmailMarketing_f.svg",
        },
        {
            heading: "Online Appointment Scheduling",
            desc: "Let customers book appointments seamlessly online.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/Appointment_f.svg",
        },
        {
            heading: "Multi-location Management",
            desc: "Manage multiple business locations from a single dashboard.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/MultiLocation_f.svg",
        },
        {
            heading: "QR Code Integration",
            desc: "Generate QR codes to share your business details easily.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/QRCode_f.svg",
        },
        {
            heading: "Advertisement Boost",
            desc: "Increase exposure with targeted ad campaigns.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/AdsBoost_f.svg",
        },
        {
            heading: "WhatsApp Business Integration",
            desc: "Allow customers to chat with you via WhatsApp directly.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/WhatsApp_f.svg",
        },
        {
            heading: "Loyalty Program",
            desc: "Reward loyal customers with exclusive discounts and offers.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/Loyalty_f.svg",
        },
        {
            heading: "Automated Replies",
            desc: "Set up auto-responses for common customer queries.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/AutoReply_f.svg",
        },
        {
            heading: "Video Listing",
            desc: "Enhance your business profile with a promotional video.",
            Icon: "https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/Video_f.svg",
        }
    ];
    
  return (
    <div id="Features" className="px-5 md:px-12 xl:px-32 py-5 md:py-10 ">
      <h5 className="font-bold text-xl md:text-2xl lg:text-3xl">Features</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {[...features].map((item, index) => (
          <div key={index} className="flex  items-center gap-x-4  shadow-md rounded-lg">
           <div>
           <img src="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/SearchVisibility_f.svg" alt="Features" className="mt-8 " />
           </div>
           <div>
           <h6 className="text-lg font-bold">{item.heading}</h6>
           <p className="text-gray-700">{item.desc}</p>
           </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-600 mt-4">* To activate the JD Trust/Verified badge, the business must have its KYC verified and be rated at an average of 3.8+ stars.</p>
    </div>
  );
}
