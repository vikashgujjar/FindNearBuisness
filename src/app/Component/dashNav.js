import { cityHref } from "../context/LocationContext";

// Single source for every dashboard navigation (sidebar, rail, mobile tabs, navbar drawer).
export const dashTabs = [
  { title: "My Dashboard", href: "dashboard", icon: "/img/dashboard/lefttab1.webp" },
  { title: "All Listings", href: "listing", icon: "/img/dashboard/lefttab2.webp" },
  { title: "Add New Listing", href: "newlisting", icon: "/img/dashboard/lefttab3.webp" },
  { title: "Lead enquiry", href: "lead", icon: "/img/dashboard/lefttab4.webp" },
  { title: "Blog posts", href: "blog", icon: "/img/dashboard/lefttab5.webp" },
  { title: "Reviews", href: "reviews", icon: "/img/dashboard/lefttab6.webp" },
  { title: "My Profile", href: "profile", icon: "/img/dashboard/lefttab7.webp" },
  { title: "Liked Listings", href: "liked", icon: "/img/dashboard/lefttab8.webp" },
  { title: "Ad Summary", href: "summary", icon: "/img/dashboard/lefttab9.webp" },
  { title: "Payment & plan", href: "payment", icon: "/img/dashboard/lefttab10.webp" },
  { title: "Payment invoice", href: "invoice", icon: "/img/dashboard/lefttab11.webp" },
  { title: "Notifications", href: "notification", icon: "/img/dashboard/lefttab13.webp" },
  { title: "How to's", href: "how", icon: "/img/dashboard/lefttab14.webp" },
  { title: "Setting", href: "setting", icon: "/img/dashboard/lefttab15.webp" },
  { title: "Log Out", href: "/logout", icon: "/img/dashboard/lefttab17.webp", absolute: true },
];

export const dashHref = (loc, tab) => (tab.absolute ? tab.href : cityHref(loc, tab.href));

export const isActiveTab = (pathname, tab) => {
  const last = (pathname || "").split("/").filter(Boolean).pop();
  return last === tab.href;
};
