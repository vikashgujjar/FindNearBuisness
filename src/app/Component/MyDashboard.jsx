import Link from "next/link";

import CommonDashLayout from "./CommonDashLayout";

const MyDashboard = () => {
  const blogPosts = [
    {
      img: "/img/dashboard/dashbordblog.webp",
      name: "The Future of AI",
      createDate: "12, March, 2021",
    },
    {
      img: "/img/dashboard/dashbordblog.webp",
      name: "Web Development Trends",
      createDate: "12, March, 2021",
    },
    {
      img: "/img/dashboard/dashbordblog.webp",
      name: "The Rise of No-Code Platforms",
      createDate: "12, March, 2021",
    },
    {
      img: "/img/dashboard/dashbordblog.webp",
      name: "How to Improve UI/UX Design",
      createDate: "12, March, 2021",
    },
    {
      img: "/img/dashboard/dashbordblog.webp",
      name: "JavaScript Best Practices",
      createDate: "12, March, 2021",
    },
    {
      img: "/img/dashboard/dashbordblog.webp",
      name: "Cybersecurity in 2024",
      createDate: "12, March, 2021",
    },
    {
      img: "/img/dashboard/dashbordblog.webp",
      name: "Next.js vs React: Which One to Choose?",
      createDate: "12, March, 2021",
    },
    {
      img: "/img/dashboard/dashbordblog.webp",
      name: "SEO Strategies for 2024",
      createDate: "12, March, 2021",
    },
    {
      img: "/img/dashboard/dashbordblog.webp",
      name: "The Power of Digital Marketing",
      createDate: "12, March, 2021",
    },
    {
      img: "/img/dashboard/dashbordblog.webp",
      name: "Understanding Cloud Computing",
      createDate: "12, March, 2021",
    },
    {
      img: "/img/dashboard/dashbordblog.webp",
      name: "The Impact of Blockchain Technology",
      createDate: "12, March, 2021",
    },
    {
      img: "/img/dashboard/dashbordblog.webp",
      name: "Mobile App Development Trends",
      createDate: "12, March, 2021",
    },
  ];

  return (
    <CommonDashLayout>
      <div className="dashboard-center sm:p-6 sm:bg-white mt-4 sm:mt-0">
        <div className="bg-teal-400 font-bold rounded-md text-white text-xs  tracking-wide leading-5 -mt-10 mx-auto py-1 px-4 uppercase w-fit">
          User dashboard
        </div>

        <div className="py-5">
          <div className="text-white bg-gradient-to-r from-[#a5fecb] via-[#429dde] to-[#7b4ffc] rounded-lg shadow-lg p-6 flex flex-col sm:flex-row items-center gap-y-4 sm:gap-y-0 sm:items-start space-x-6">
            <img
              src="/img/dashboard/mydashboard.webp"
              alt="profile"
              className="w-[100px] h-[100px] object-center rounded-full object-cover border-4 border-white"
            />
            <div className="flex-1">
              <h2 className="text-xs=l md:text-2xl font-semibold mb-2">
                Welcome back, <b>Rn53 Themes</b>
              </h2>
              <p className="text-base md:text-lg text-opacity-90">
                Stay up to date with reports on your listings, products, events,
                and blog reports here.
              </p>
            </div>
          </div>

          <div className="md:flex flex-wrap grid lg:grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              {
                count: 21,
                title: "All Listings",
                link: "/listing",
                tab: "alllisting",
                total: "Total no of listing",
              },
              {
                count: 13,
                title: "Enquiries",
                link: "/newlisting",
                tab: "leadenquiry",
                total: "Total no of enquiry",
              },
              {
                count: 18,
                title: "Liked Listings",
                link: "/liked",
                tab: "likedlisting",
                total: "Total no of Linked Listing",
              },
            ].map((item, index) => (
              <Link
                href={item.link}
                onClick={() => setActiveTab(item.tab)}
                key={index}
                className="bg-[#E6F7FF] hover:bg-[#47bff6] p-6 rounded-lg shadow-md text-center"
              >
                <span className="text-2xl mx-auto font-bold bg-blue-400 rounded-full w-12 h-12 flex items-center justify-center text-white">
                  {item.count}
                </span>{" "}
                <h4 className="text-lg font-semibold mt-2">{item.title}</h4>
                <p className="text-gray-500 text-xs">{item.total}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8 bg-white  ">
            <div className="flex items-center justify-between">
              <h5 className="text-lg font-semibold">Profile Page</h5>

              <Link
                href={"/edit-profile"}
                onClick={() => {
                  setActiveTab("profile");
                  setIsEdit(true);
                }}
                className="bg-[#8A939C] text-white text-xs  px-4 py-2 font-semibold rounded-md hover:bg-gray-700"
              >
                Edit Profile page
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 gap-x-5 bg-slate-100 rounded-lg shadow-md p-4">
              <Link href="/gallery" className="bg-white left-box  rounded-md shadow-md shadow-gray-300  mb-4 overflow-hidden pb-4 relative text-center w-full">
                <div className="relative w-full h-[100px]">
                  <img
                    src="/img/dashboard/dashbordleft2.webp"
                    alt="Rn53 Themes"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#2BA894] bg-opacity-80"></div>
                </div>

                <div className="relative -mt-20  ">
                  <img
                    src="/img/dashboard/dashbordleft.webp"
                    alt="Rn53 Themes"
                    className="w-24 h-24 rounded-full mx-auto "
                  />
                  <a href="/gallery">
                    <h4 className="text-lg lg:text-xl font-bold  mt-2 text-[#000]">
                      Rn53 Themes
                    </h4>
                  </a>
                  <b className="text-xs text-gray-400">
                    Member since 26,Mar 2021
                  </b>
                </div>
              </Link>
              <div className=" right-box mt-4 text-gray-600">
                <div>
                  <span className="font-semibold text-black">Name :</span>
                  Rn53 Thems
                </div>
                <div className="text-blue-500 text-lg">
                  <span className="text-xl font-bold  ">Followers:</span>
                  07
                </div>
                <div className="flex justify-between flex-wrap">
                  <h6>
                    <span className="font-semibold">city:</span> sydney
                  </h6>
                  <h6>
                    <span className="font-semibold">Email :</span>{" "}
                    info@futureittouch.com
                  </h6>
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    className="w-full py-1 bg-white shadow-md rounded-md"
                  />
                </div>
                <div className="mt-3">
                  <Link
                    href="/gallery"
                    className="bg-[#2372C8] text-white py-1 rounded-md px-3 text-xs"
                  >
                    Visit My Profile Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-white  ">
            <div className="flex items-center justify-between">
              <h5 className="text-xl font-semibold">Business Page</h5>

              <Link
                href="/edit-business"
                className="bg-[#8A939C] text-white text-xs  px-4 py-2 font-semibold rounded-md hover:bg-gray-700"
              >
                Edit business page
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 gap-x-5 bg-[#F7F2E6] rounded-lg shadow-md p-4">
              <Link
                href="/view-business"
                className="bg-white left-box  rounded-md shadow-md shadow-gray-300  mb-4 overflow-hidden pb-4 relative text-center w-full"
              >
                <div className=" relative w-full h-[100px]">
                  <img
                    src="/img/dashboard/dashbordleft2.webp"
                    alt="Rn53 Themes"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#2BA894] bg-opacity-80"></div>
                </div>

                <div className="relative -mt-20  ">
                  <img
                    src="/img/dashboard/dashbordleft.webp"
                    alt="Rn53 Themes"
                    className="w-24 h-24 rounded-full mx-auto "
                  />
                  <Link href="/view-business">
                    <h4 className="text-lg lg:text-xl font-bold  mt-2 text-[#000]">
                      Rn53 Themes net
                    </h4>
                  </Link>
                  <b className="text-xs text-gray-400">
                    Member since 26,Mar 2021
                  </b>
                </div>
              </Link>
              <div className=" right-box mt-4 text-gray-600">
                <div>
                  <span className="font-semibold text-black">Name :</span>
                  Rn53 Thems net
                </div>
                <div className="text-blue-500 text-lg">
                  <span className="text-xl font-bold  ">Page View:</span>
                  07
                </div>

                <div className="mt-4">
                  <input
                    type="text"
                    className="w-full py-1 bg-white shadow-md rounded-md"
                  />
                </div>
                <div className="mt-3">
                  <Link
                    href="/view-business"
                    className="bg-[#2372C8] text-white py-1 rounded-md px-3 text-xs"
                  >
                    View Business page
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white  ">
            <div className="flex items-center justify-between">
              <h5 className="text-xl font-semibold">Blog posts</h5>

              <Link
                href="/blog"
                onClick={() => setActiveTab("blogposts ")}
                className="bg-[#8A939C] text-white text-xs  px-4 py-2 font-semibold rounded-md hover:bg-gray-700"
              >
                Add new post
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 mt-4 gap-y-10 gap-x-5 bg-slate-100 rounded-lg shadow-md p-4">
              {blogPosts.map((elm, index) => (
                <Link href="/blogs" key={index}>
                  <div className="relative">
                    <div className="absolute bg-blue-500 rounded-full px-4  top-2 text-white text-xs">
                      {elm.createDate}
                    </div>
                    <div>
                      <img
                        src={elm.img}
                        alt=""
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="bg-white py-5 ">
                      <h3 className="uppercase font-bold text-sm ml-2">
                        {elm.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CommonDashLayout>
  );
};

export default MyDashboard;
