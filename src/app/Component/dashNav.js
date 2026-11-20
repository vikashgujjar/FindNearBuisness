"use client";

import { cityHref } from "@/app/context/LocationContext";
import { useAuth } from "@/app/context/AuthContext";
let dashTabs = [
  {
    title: "My Dashboard",
    href: "dashboard",
    icon: "/img/dashboard/lefttab1.webp",
  },
  {
    title: "All Listings",
    href: "listing",
    icon: "/img/dashboard/lefttab2.webp",
    business: true,
  },
  {
    title: "Add New Listing",
    href: "newlisting",
    icon: "/img/dashboard/lefttab3.webp",
    business: true,
  },
  {
    title: "Products",
    href: "my-products",
    icon: "/img/dashboard/lefttab12.webp",
    business: true,
  },
  {
    title: "Offers",
    href: "my-offers",
    icon: "/img/dashboard/lefttab9.webp",
    business: true,
  },
  {
    title: "Events",
    href: "my-events",
    icon: "/img/dashboard/lefttab5.webp",
    business: true,
  },
  {
    title: "Lead enquiry",
    href: "lead",
    icon: "/img/dashboard/lefttab4.webp",
  },
  {
    title: "Blog posts",
    href: "blog",
    icon: "/img/dashboard/lefttab5.webp",
    business: true,
  },
  {
    title: "Reviews",
    href: "reviews",
    icon: "/img/dashboard/lefttab6.webp",
  },
  {
    title: "My Profile",
    href: "profile",
    icon: "/img/dashboard/lefttab7.webp",
  },
  {
    title: "Business Profile",
    href: "business-profile",
    icon: "/img/dashboard/lefttab2.webp",
    business: true,
  },
  {
    title: "List your business",
    href: "/become-vendor",
    icon: "/img/dashboard/lefttab3.webp",
    absolute: true,
    customerOnly: true,
  },
  {
    title: "Liked Listings",
    href: "liked",
    icon: "/img/dashboard/lefttab8.webp",
  },
  {
    title: "Ad Summary",
    href: "summary",
    icon: "/img/dashboard/lefttab9.webp",
    business: true,
  },
  {
    title: "Payment & plan",
    href: "payment",
    icon: "/img/dashboard/lefttab10.webp",
    business: true,
  },
  {
    title: "Payment invoice",
    href: "invoice",
    icon: "/img/dashboard/lefttab11.webp",
    business: true,
  },
  {
    title: "Notifications",
    href: "notification",
    icon: "/img/dashboard/lefttab13.webp",
  },
  {
    title: "How to's",
    href: "how",
    icon: "/img/dashboard/lefttab14.webp",
  },
  {
    title: "Setting",
    href: "setting",
    icon: "/img/dashboard/lefttab15.webp",
  },
  {
    title: "Log Out",
    href: "/logout",
    icon: "/img/dashboard/lefttab17.webp",
    absolute: true,
  },
];
function useDashTabs() {
  let { user } = useAuth();
  return user?.role === "vendor"
    ? dashTabs.filter((e) => !e.customerOnly)
    : dashTabs
        .filter((t) => !t.business && (!t.customerOnly || user?.role === "customer"))
        .map((e) =>
          "lead" === e.href
            ? {
                ...e,
                title: "My enquiries",
              }
            : e,
        );
}
let dashHref = (e, t) => (t.absolute ? t.href : cityHref(e, t.href));
let isActiveTab = (e, t) => (e || "").split("/").filter(Boolean).pop() === t.href.replace(/^\//, "");
export { dashTabs, isActiveTab, useDashTabs, dashHref };
