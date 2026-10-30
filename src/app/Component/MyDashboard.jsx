"use client";
import Link from "next/link";
import { FaListUl, FaEnvelopeOpenText, FaHeart, FaArrowRight, FaPen } from "react-icons/fa6";
import CommonDashLayout from "./CommonDashLayout";
import { CountUp, Reveal, Stagger, StaggerItem } from "../ui/motion";
import { Glow, MapGrid } from "../ui/decor";

const blogPosts = [
  "The Future of AI",
  "Web Development Trends",
  "The Rise of No-Code Platforms",
  "How to Improve UI/UX Design",
  "JavaScript Best Practices",
  "Cybersecurity in 2024",
  "Next.js vs React: Which One to Choose?",
  "SEO Strategies for 2024",
  "The Power of Digital Marketing",
  "Understanding Cloud Computing",
  "The Impact of Blockchain Technology",
  "Mobile App Development Trends",
].map((name) => ({ name, img: "/img/dashboard/dashbordblog.webp", createDate: "12, March, 2021" }));

const stats = [
  { count: 21, title: "All Listings", link: "/listing", total: "Total no of listing", icon: FaListUl, color: "from-brand-500 to-magenta-500" },
  { count: 13, title: "Enquiries", link: "/newlisting", total: "Total no of enquiry", icon: FaEnvelopeOpenText, color: "from-cyan-400 to-brand-500" },
  { count: 18, title: "Liked Listings", link: "/liked", total: "Total no of Liked Listing", icon: FaHeart, color: "from-magenta-500 to-pin-500" },
];

function ProfileCard({ title, editHref, editLabel, viewHref, viewLabel, name, rows }) {
  return (
    <Reveal className="panel overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <h5 className="font-bold text-night-900">{title}</h5>
        <Link href={editHref} className="btn-ghost btn-sm"><FaPen className="text-[10px]" /> {editLabel}</Link>
      </div>
      <div className="p-5">
        <Link href={viewHref} className="group relative block overflow-hidden rounded-2xl">
          <img src="/img/dashboard/dashbordleft2.webp" alt="" className="h-24 w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-night-950/80 to-transparent" />
          <div className="absolute inset-0 flex items-center gap-3 p-4">
            <img src="/img/dashboard/dashbordleft.webp" alt="" className="h-14 w-14 rounded-full object-cover ring-2 ring-white" />
            <div className="text-white">
              <h4 className="font-bold">{name}</h4>
              <p className="text-xs text-slate-300">Member since 26, Mar 2021</p>
            </div>
          </div>
        </Link>
        <dl className="mt-4 divide-y divide-slate-100 text-sm">
          {rows.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-3 py-2">
              <dt className="text-slate-500">{k}</dt>
              <dd className="truncate font-semibold text-night-900">{v}</dd>
            </div>
          ))}
        </dl>
        <Link href={viewHref} className="btn-dark mt-4 w-full">{viewLabel}</Link>
      </div>
    </Reveal>
  );
}

const MyDashboard = () => {
  return (
    <CommonDashLayout>
      {/* welcome banner */}
      <Reveal className="relative overflow-hidden rounded-3xl bg-night-950 p-6 text-white sm:p-8">
        <MapGrid opacity={0.5} />
        <Glow className="-right-10 -top-10 h-48 w-48" color="bg-magenta-500/40" />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
          <img src="/img/dashboard/mydashboard.webp" alt="" className="h-16 w-16 rounded-2xl object-cover ring-2 ring-white/20" />
          <div>
            <span className="eyebrow-dark">User dashboard</span>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Welcome back, <span className="text-gradient-cool">Rn53 Themes</span></h2>
            <p className="mt-1 text-sm text-slate-300">Stay up to date with reports on your listings, products, events, and blog reports here.</p>
          </div>
        </div>
      </Reveal>

      <Stagger gap={0.1} className="grid gap-4 sm:grid-cols-3">
        {stats.map(({ count, title, link, total, icon: Icon, color }) => (
          <StaggerItem key={title}>
            <Link href={link} className="group panel flex h-full flex-col p-5 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover">
              <span className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${color} text-white`}><Icon /></span>
              <span className="mt-4 font-display text-4xl font-extrabold text-night-900"><CountUp to={count} duration={1.2} /></span>
              <h4 className="font-bold text-night-900">{title}</h4>
              <p className="text-xs text-slate-500">{total}</p>
              <FaArrowRight className="mt-3 text-xs text-slate-300 transition group-hover:translate-x-1 group-hover:text-brand-500" />
            </Link>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="grid gap-5 lg:grid-cols-2">
        <ProfileCard
          title="Profile Page"
          editHref="/edit-profile"
          editLabel="Edit Profile page"
          viewHref="/gallery"
          viewLabel="Visit My Profile Page"
          name="Rn53 Themes"
          rows={[["Name", "Rn53 Thems"], ["Followers", "07"], ["City", "sydney"], ["Email", "info@futureittouch.com"]]}
        />
        <ProfileCard
          title="Business Page"
          editHref="/edit-business"
          editLabel="Edit business page"
          viewHref="/view-business"
          viewLabel="View Business page"
          name="Rn53 Themes net"
          rows={[["Name", "Rn53 Thems net"], ["Page View", "07"]]}
        />
      </div>

      <Reveal className="panel p-5 sm:p-6">
        <div className="mb-5 flex items-center justify-between">
          <h5 className="font-bold text-night-900">Blog posts</h5>
          <Link href="/blog-form" className="btn-primary btn-sm">Add new post</Link>
        </div>
        <Stagger gap={0.04} className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {blogPosts.map((elm) => (
            <StaggerItem key={elm.name}>
              <Link href="/blogs" className="group block overflow-hidden rounded-2xl bg-mist">
                <div className="relative overflow-hidden">
                  <img src={elm.img} alt="" className="aspect-video w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="chip absolute left-2 top-2 bg-white/90 text-night-900">{elm.createDate}</span>
                </div>
                <h3 className="line-clamp-2 p-3 text-sm font-semibold text-night-900 group-hover:text-brand-600">{elm.name}</h3>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Reveal>
    </CommonDashLayout>
  );
};

export default MyDashboard;
