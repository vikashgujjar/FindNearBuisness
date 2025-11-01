"use client";
import React, { useState, useEffect, use } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import LocationModal from "./LoactionModal";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { FcAdvertising } from "react-icons/fc";
import { FaAd } from "react-icons/fa";
import { FaStore } from "react-icons/fa6";
import LanguagePop from "./LanguagePop";
import { IoIosArrowDown } from "react-icons/io";
import DashLeft from "./DashLeft";

function NavBar() {
  const [sessions, setsessions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState(null);
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState("");
  const [pin, setPin] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSwapped, setIsSwapped] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwapped((prevState) => !prevState);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const locData = localStorage.getItem("location");
    setLocation(locData ? JSON.parse(locData) : null);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pin}`
      );

      const data = await response.json();

      console.log(pin);
      if (
        data &&
        data.length > 0 &&
        data[0].PostOffice &&
        data[0].PostOffice.length > 0
      ) {
        const postOfficeData = data[0].PostOffice[0];
        setPostcode(postOfficeData.Pincode);
        setLocation(postOfficeData);
        localStorage.setItem("location", JSON.stringify(postOfficeData));
        setIsPopupOpen(false);
        setPin("");
        window.location.reload(); // Reload page after successful location update
      } else {
        setError("No city found for the given PIN code");
      }
    } catch (error) {
      setError("Failed to fetch city details. Please try again.");
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const data = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const address = data.data.address;
            localStorage.setItem("location", JSON.stringify(address));
            setLocation(address);
          } catch (error) {
            console.error("Error fetching location:", error);
          }
        },
        (error) => console.error("Error getting location:", error)
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    const username = localStorage.getItem("userName");
    setsessions(!!username);
  }, []);

  const categories = [
    { name: "Wedding halls - 03" },
    { name: "Hotel & Food - 01" },
    { name: "Pet shop - 12" },
    { name: "Digital Products - 31" },
    { name: "Spa And Facial - 10" },
    { name: "Real Estate - 23" },
    { name: "Sports - 05" },
    { name: "Education - 05" },
    { name: "Electricals - 06" },
    { name: "Automobiles - 06" },
    { name: "Transportation - 02" },
    { name: "Hospitals" },
    { name: "Hotel And Resorts..." },
  ];

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [sideBar, setSideBar] = useState(false);

  const [loc, setLoc] = useState();

  useEffect(() => {
    const loc = localStorage.getItem("location");
    console.log(JSON.parse(loc));
    setLoc(JSON.parse(loc));
    console.log(JSON.parse(loc));
  }, []);

  const getLocationHref = (cate) => {
    const location =
      loc?.county || (loc?.Name === "NA" ? loc?.State : loc?.Name);
    return `${location?.replace(/\s+/g, "") || "default-location"}/${cate
      .toLowerCase()
      .split(" ")
      .join("-")}`;
  };

  const sideBarCategory = [
    {
      name: "Automobiles",
    },
    {
      name: "Technology",
    },
    {
      name: "Electricals",
    },
    {
      name: "Education",
    },
    {
      name: "Sports",
    },
    {
      name: "Real Estate",
    },
    {
      name: "Wedding Halls",
    },
    {
      name: "Hospitals",
    },
    {
      name: "Pet Shop",
    },
    {
      name: "Restaurants",
    },
    {
      name: "Spa and Facial",
    },
    {
      name: "Transportation",
    },
  ];

  const allCategory = {
    allService: [
      {
        name: "All Service",
        img: "/img/navbar/service1.webp",
        link: "/service",
      },
      {
        name: "Events",
        img: "/img/navbar/service2.webp",
        link: "/events",
      },
      {
        name: "Products",
        img: "/img/navbar/service3.webp",
        link: "/products",
      },
      {
        name: "Coupon & Deal",
        img: "/img/navbar/service4.webp",
        link: "/Coupon-deals",
      },
      {
        name: "Blogs",
        img: "/img/navbar/service5.webp",
        link: "/blogs",
      },
      {
        name: "Community",
        img: "/img/navbar/service6.webp",
        link: "/community",
      },
    ],
    allCategory: [
      {
        category: "Wedding halls",
        count: 3,
        link: "/RajpuraTahsil/realestate",
      },
      {
        category: "Hotel & Food",
        count: 1,
        link: "/RajpuraTahsil/realestate",
      },
      {
        category: "Pet shop",
        count: 12,
        link: "/RajpuraTahsil/realestate",
      },
      {
        category: "Digital Products",
        count: 31,
        link: "/RajpuraTahsil/realestate",
      },
      {
        category: "Spa And Facial",
        count: 10,
        link: "/RajpuraTahsil/realestate",
      },
      {
        category: "Real Estate",
        count: 23,
        link: "/RajpuraTahsil/realestate",
      },
      {
        category: "Sports",
        count: 5,
        link: "/RajpuraTahsil/realestate",
      },
      {
        category: "Education",
        count: 5,
        link: "/RajpuraTahsil/realestate",
      },
      {
        category: "Electricals",
        count: 6,
        link: "/RajpuraTahsil/realestate",
      },
      {
        category: "Automobiles",
        count: 6,
        link: "/RajpuraTahsil/realestate",
      },
      {
        category: "Transportation",
        count: 2,
        link: "/RajpuraTahsil/realestate",
      },
      {
        category: "Hospitals",
        count: null,
        link: "/RajpuraTahsil/realestate",
      },
      {
        category: "Hotel And Resorts...",
        count: null,
        link: "/RajpuraTahsil/realestate",
      },
    ],
  };

  const [hoverCatgory, setHoverCategoty] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const [filterCategory, setFilterCategory] = useState([]);

  const [inpurCategory, setInputCatgory] = useState("");
  const filterCategoryData = () => {
    const filterData = allCategory.allCategory.filter((elm) => {
      return elm.category.includes(inpurCategory);
    });
    setFilterCategory(filterData);
  };
  useEffect(() => {
    filterCategoryData();
  }, [inpurCategory]);

  useEffect(() => {
    const username = localStorage.getItem("userName");

    if (username) {
      console.log("fff");
      setsessions(false);
    } else {
      setsessions(true);
    }
  }, []);

  const path = usePathname();
  const isAdvertisePage = path.includes("/advertise");
  if (isAdvertisePage) {
    return;
  }

  const [langPop, setLangPop] = useState(false);

  useEffect(() => {
    document.body.style.overflow = sideBar ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideBar]);

  return (
    <>
      <nav className="bg-white z-50  text-black shadow-md sticky top-0  py-2 lg:py-4 px-5 md:px-8 xl:px-32">
        <div className="container relative mx-auto flex justify-between items-center ">
          <Link href="/">
            <img
              src="/img/logo/logo.webp"
              alt="logo"
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          <button
            onClick={() => setSideBar(!sideBar)}
            className="text-xl lg:hidden bg-[#3b83ef] text-[#fff] rounded-full p-1"
          >
            {sideBar ? <RxCross1 /> : <IoMdMenu />}
          </button>

          <div className="hidden lg:flex items-center lg:space-x-4 xl:space-x-6">
            <div className=" group">
              <button
                onMouseEnter={() => setHoverCategoty(true)}
                className="text-black  xl:border-l border-black pl-5 font-semibold hover:text-gray-600 transition duration-200"
              >
                All Categories
              </button>

              {/* category hover  */}

              {hoverCatgory && (
                <div
                  onMouseLeave={() => setHoverCategoty(false)}
                  className="absolute top-14 xl:w-[90%] xl:left-20 inset-x-0 bg-white shadow-lg  border-t mt-2 z-50  px-8 pt-5 hidden lg:block"
                >
                  <div className="lg:grid lg:grid-cols-4 w-full">
                    {/* Categories List */}
                    <div className="col-span-1">
                      <ul className="p-4">
                        {allCategory.allService.map((elm, index) => (
                          <Link href={elm.link} key={index}>
                            <li className="flex items-center gap-x-3 py-4 px-3 hover:bg-gradient-to-r hover:from-[#EBF6FA] hover:via-[#D1E9F5] hover:to-[#a0d8e42d] hover:text-blue-500 border-b border-[#f1efec] transition-all">
                              <img src={elm.img} alt="" className="w-5 h-5" />
                              <span className="text-sm font-semibold">
                                {elm.name}
                              </span>
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </div>

                    {/* Category Details */}
                    <div className="col-span-3 border-l border-gray-400 pl-5">
                      <div>
                        <h4 className="font-semibold text-2xl mb-3">
                          All Categories
                        </h4>
                        <div className="mb-4">
                          <input
                            type="search"
                            className="bg-transparent border-0 w-full px-4 py-2 border-b border-gray-300  focus:outline-none rounded "
                            placeholder="Search Category"
                            value={inpurCategory}
                            onChange={(e) => setInputCatgory(e.target.value)}
                          />
                        </div>
                      </div>

                      <div>
                        <ul className="grid grid-cols-4 gap-4">
                          {filterCategory.map((elm, index) => (
                            <li key={index} className="">
                              <Link
                                href="/realestate"
                                className="flex text-nowrap items-center gap-x-2 text-sm font-semibold text-[#58677b] hover:text-blue-500"
                              >
                                <img
                                  src="/img/navbar/categoryArrow.webp"
                                  alt="category"
                                  className="w-2 h-2"
                                />
                                <span>{elm.category}</span>
                                <span>-</span>
                                <span>{elm.count}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Footer Section */}
                  <div className="pt-5 grid grid-cols-2 w-full">
                    <div className="px-4 font-semibold">
                      <p className="">
                        A few reasons you’ll love Online Business Directory
                      </p>
                      <h6 className="text-[#6f6347] font-semibold text-2xl">
                        Call us on: +91-70569 97000
                      </h6>
                    </div>
                    <div className="navCategroy  text-white flex items-center justify-end gap-x-2 ">
                      <Link
                        href="/user-login/sign"
                        className="px-5  rounded-md py-3 flex items-center gap-x-2 font-semibold  "
                      >
                        <FaAd />
                        Advertise with us
                      </Link>
                      <Link
                        href="/mybusiness"
                        className="px-5  rounded-md py-3 flex items-center gap-x-2 font-semibold"
                      >
                        <FaStore />
                        Add your business
                      </Link>
                    </div>
                  </div>

                  {/* Background Image Section */}
                  <div className=" bg-image"></div>
                </div>
              )}
            </div>

            <div className="relative flex items-center">
              <img
                src="/img/navbar/locationmap.webp"
                alt="map"
                className="w-5 h-5 absolute left-2"
              />
              <span
                className="text-sm font-medium cursor-pointer ml-8 hover:text-blue-500 transition duration-200"
                onClick={togglePopup}
              >
                {location?.county || location?.Name === "NA"
                  ? location?.State
                  : location?.Name}{" "}
                {location?.postcode || location?.Pincode}
                <p className="text-xs text-blue-400">Update location ⌵</p>
              </span>
            </div>

            <form className="relative hidden xl:flex items-center">
              <input
                type="text"
                placeholder={`${
                  isSwapped
                    ? "3.3 Crore+' Products & Services"
                    : "4 Crore+' Business"
                }`}
                className="py-2 pl-10 pr-4 rounded-md border border-black text-black bg-white focus:outline-none w-96 transition duration-300 ease-in-out "
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <img
                src="/img/navbar/search.webp"
                alt="search"
                className="w-5 h-5 absolute left-3 text-gray-500"
              />
            </form>
          </div>

          <div className="hidden lg:block  text-nowrap">
            <div className="flex items-center gap-x-1 xl:gap-x-3">
              <Link
                href="/advertise"
                className="flex text-[12px] items-center text-white font-semibold bg-[#0337f4] gap-x-1 py-2 px-3 rounded-md"
              >
                Advertise <FcAdvertising className="text-sm" />
              </Link>

              {/* <button
                onClick={() => setLangPop(!langPop)}
                className="flex text-[12px] items-center text-black font-semibold bg-[#bec5df] gap-x-1 py-1 px-2 rounded-md"
              >
                Language{" "}
                <IoIosArrowDown
                  className={`text-xs ${
                    langPop ? "rotate-180" : ""
                  } duration-200 transition-all`}
                />
              </button> */}

              <Link
                href="/user-login/sign/"
                className="text-black text-[12px] font-semibold hover:text-gray-400 transition duration-200"
              >
                Sign in
              </Link>

              <Link
                href="/user-login"
                className="bg-[#0337f4] text-[12px] py-2 px-3 font-semibold text-white rounded-md transition duration-200"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>

        {/* mobile sidebar  */}
        <div
          className={`${
            sideBar ? "right-0" : "-right-[1000px] "
          } fixed lg:hidden pt-16  overflow-y-scroll   bg-white inset-y-0 h-screen w-[90%] md:w-3/4 sm:w-4/5 py-4 px-4 shadow-lg transition-all duration-300`}
        >
          <div className=" md:hidden">
            <DashLeft />
          </div>
          <ul className="text-base mb-6 space-y-4 px-4 font-medium">
            <li>
              <button
                onClick={() => setLangPop(!langPop)}
                className="flex text-[12px] items-center text-black font-semibold bg-[#bec5df] gap-x-1 py-1 px-2 rounded-md"
              >
                Language{" "}
                <IoIosArrowDown
                  className={`text-xs ${
                    langPop ? "rotate-180" : ""
                  } duration-200 transition-all`}
                />
              </button>
            </li>
            <li className="border-b text-gray-700 cursor-pointer pb-3 hover:text-blue-500">
              <Link href="/advertise"> Advertise</Link>
            </li>
            <li className="border-b text-gray-700 cursor-pointer pb-3 hover:text-blue-500">
              <Link href="/user-login/sign"> Sign In</Link>
            </li>
            <li className="border-b text-gray-700 cursor-pointer pb-3 hover:text-blue-500">
              <Link href="/user-login">Create an Account</Link>
            </li>
          </ul>
          <h5 className="text-lg font-semibold mb-4 px-4 text-gray-900">
            All Categories
          </h5>
          <ul className="text-base font-medium flex flex-col space-y-3 px-4">
            {sideBarCategory.map((elm, index) => (
              <li
                key={index}
                className="border-b text-gray-700 cursor-pointer pb-3 hover:text-blue-500 transition duration-150"
              >
                <Link href={getLocationHref(elm.name)}>{elm.name}</Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setSideBar(false)}
            className="text-base md:text-xs absolute right-6 top-4 bg-red-500 text-white rounded-full p-2"
          >
            <ImCross />
          </button>
        </div>
      </nav>

      {langPop && <LanguagePop setLangPop={setLangPop} />}

      {isPopupOpen && (
        <LocationModal
          pin={pin}
          setPin={setPin}
          handleSubmit={handleSubmit}
          error={error}
          togglePopup={togglePopup}
        />
      )}
    </>
  );
}

export default NavBar;
